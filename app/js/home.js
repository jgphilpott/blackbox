$(document).ready(function() {

  fov = 75
  near = 0.1
  far = 1000

  socket = io()

  width = $(window).width()
  height = $(window).height()

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xffffff)

  canvas = document.body.appendChild(renderer.domElement)

  light = new THREE.PointLight(0xffffff, 42)
  light.position.set(100, 200, 300)

  camera = new THREE.PerspectiveCamera(fov, width/height, near, far)
  camera.position.set(300, 150, 300)

  controls = new THREE.OrbitControls(camera, canvas)

  line_material = new THREE.LineBasicMaterial({color: 0x000000, linewidth: 1})

  x_vector = new THREE.Geometry()
  x_vector.vertices.push(new THREE.Vector3(500, 0, 0))
  x_vector.vertices.push(new THREE.Vector3(-500, 0, 0))
  x_axis = new THREE.Line(x_vector, line_material)

  y_vector = new THREE.Geometry()
  y_vector.vertices.push(new THREE.Vector3(0, 500, 0))
  y_vector.vertices.push(new THREE.Vector3(0, -500, 0))
  y_axis = new THREE.Line(y_vector, line_material)

  z_vector = new THREE.Geometry()
  z_vector.vertices.push(new THREE.Vector3(0, 0, 500))
  z_vector.vertices.push(new THREE.Vector3(0, 0, -500))
  z_axis = new THREE.Line(z_vector, line_material)

  fuselage_geometry = new THREE.CylinderGeometry(32, 32, 300)
  fuselage_material = new THREE.MeshStandardMaterial({color: 0x000000})
  fuselage = new THREE.Mesh(fuselage_geometry, fuselage_material)
  fuselage.rotation.z = 90 * Math.PI / 180

  wings_geometry = new THREE.BoxGeometry(50, 10, 300)
  wings_material = new THREE.MeshStandardMaterial({color: 0x000000})
  wings = new THREE.Mesh(wings_geometry, wings_material)

  scene.add(light)
  scene.add(x_axis)
  scene.add(y_axis)
  scene.add(z_axis)
  scene.add(fuselage)
  scene.add(wings)

  function request_readings() {

    socket.emit("request_reading")

  }

  socket.on("connect", function() {

    setInterval(request_readings, 100)

  })

  function scale_value(value, from_range, to_range) {

    return ((value - from_range[0]) / (from_range[1] - from_range[0])) * (to_range[1] - to_range[0]) + to_range[0]

  }

  socket.on("new_reading", function(reading) {

    x_rotation = scale_value(reading.acceleration.x, [-1, 1], [-90, 90])
    y_rotation = scale_value(reading.acceleration.y, [-1, 1], [-90, 90])

    fuselage.rotation.z = -((x_rotation + 90) * Math.PI / 180)
    fuselage.rotation.x = y_rotation * Math.PI / 180

    wings.rotation.z = -(x_rotation * Math.PI / 180)
    wings.rotation.x = y_rotation * Math.PI / 180

    $("#compass").text(reading.compass.toFixed(2) + " °N")
    $("#humidity").text(reading.humidity.toFixed(2) + " %")
    $("#pressure").text(reading.pressure.toFixed(2) + " millibars")
    $("#temperature").text(reading.temperature.toFixed(2) + " °C")

  })

  function animate() {

  	requestAnimationFrame(animate)
  	renderer.render(scene, camera)

  }

  animate()

})
