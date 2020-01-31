$(document).ready(function() {

  socket = io()

  function request_readings() {

    socket.emit("request_reading")

  }

  socket.on("connect", function() {

    setInterval(request_readings, 1000)

  })

  socket.on("new_reading", function(reading) {

    console.log(reading)

  })

})
