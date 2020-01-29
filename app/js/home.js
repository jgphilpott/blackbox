<<<<<<< HEAD
$(document).ready(function() {})
=======
$(document).ready(function() {

  var fov = 75

  var width = $(window).width()
  var height = $(window).height()

  var near = 0.1
  var far = 1000

  var scene = new THREE.Scene()
  var camera = new THREE.PerspectiveCamera(fov, width/height, near, far)
  var renderer = new THREE.WebGLRenderer()

  var geometry = new THREE.BoxGeometry(1, 1, 1)
  var material = new THREE.MeshBasicMaterial({color: 0x000000})
  var cube = new THREE.Mesh(geometry, material)

  scene.add(cube)
  scene.background = new THREE.Color(0xffffff)

  camera.position.z = 7

  renderer.setSize(width, height)

  document.body.appendChild(renderer.domElement)

  function animate() {

  	requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    cube.rotation.z += 0.01

  	renderer.render(scene, camera)

  }

  animate()

})
>>>>>>> 31eb492b37bac7982112b33a656075c66dbf964d
