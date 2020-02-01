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
  light.position.set(100, 100, 100)

  camera = new THREE.PerspectiveCamera(fov, width/height, near, far)
  camera.position.set(42, 42, 42)

  controls = new THREE.OrbitControls(camera, canvas)

  line_material = new THREE.LineBasicMaterial({color: 0x000000, linewidth: 1})

  x_vector = new THREE.Geometry()
  y_vector = new THREE.Geometry()
  z_vector = new THREE.Geometry()

  x_vector.vertices.push(new THREE.Vector3(100, 0, 0))
  x_vector.vertices.push(new THREE.Vector3(-100, 0, 0))
  y_vector.vertices.push(new THREE.Vector3(0, 100, 0))
  y_vector.vertices.push(new THREE.Vector3(0, -100, 0))
  z_vector.vertices.push(new THREE.Vector3(0, 0, 100))
  z_vector.vertices.push(new THREE.Vector3(0, 0, -100))

  x_axis = new THREE.Line(x_vector, line_material)
  y_axis = new THREE.Line(y_vector, line_material)
  z_axis = new THREE.Line(z_vector, line_material)

  geometry = new THREE.BoxGeometry(10, 10, 10)
  material = new THREE.MeshStandardMaterial({color: 0x000000})
  cube = new THREE.Mesh(geometry, material)

  scene.add(light)
  scene.add(x_axis)
  scene.add(y_axis)
  scene.add(z_axis)
  scene.add(cube)

  function request_readings() {

    socket.emit("request_reading")

  }

  socket.on("connect", function() {

    setInterval(request_readings, 1000)

  })

  socket.on("new_reading", function(reading) {

    console.log(reading)

  })

  function animate() {

  	requestAnimationFrame(animate)
  	renderer.render(scene, camera)

  }

  animate()

})
