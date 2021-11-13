const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
  
  // var exec = require('child_process').exec;
  // var coffeeProcess = exec('ab -c 50 -n 3000 api.canvasboard.live/');

  // coffeeProcess.stdout.on('data', function(data) {
  //     console.log(data); 
  // });

  res.send("Welcome Akshay1111")
})


io.on('connection', socket => {
//   socket.on('join-room', (roomId, userId) => {
//     socket.join(roomId)
//     socket.to(roomId).broadcast.emit('user-connected', userId)

//     socket.on('disconnect', () => {
//       socket.to(roomId).broadcast.emit('user-disconnected', userId)
//     })
//   })

socket.on('message', ({name, message}) => {
  io.emit('message', {name, message})
})
})

http.listen(4000, ()=>{
    console.log("Server started at 4000");
});