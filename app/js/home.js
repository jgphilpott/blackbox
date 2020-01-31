$(document).ready(function() {

  socket = io()

  fov = 75
  near = 0.1
  far = 1000

  width = $(window).width()
  height = $(window).height()

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xffffff)

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)
  document.body.appendChild(renderer.domElement)

  camera = new THREE.PerspectiveCamera(fov, width/height, near, far)
  camera.position.x = 1
  camera.position.y = 2
  camera.position.z = 3

  geometry = new THREE.BoxGeometry(1, 1, 1)
  material = new THREE.MeshBasicMaterial({color: 0x000000})
  cube = new THREE.Mesh(geometry, material)
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
