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

  light = new THREE.PointLight(0xffffff, 1)
  light.position.set(7, 7, 7)

  camera = new THREE.PerspectiveCamera(fov, width/height, near, far)
  camera.position.set(1, 2, 3)

  controls = new THREE.OrbitControls(camera, canvas)

  geometry = new THREE.BoxGeometry(1, 1, 1)
  material = new THREE.MeshBasicMaterial({color: 0x000000})
  cube = new THREE.Mesh(geometry, material)

  scene.add(light)
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
