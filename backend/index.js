const { exec } = require('child_process');
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const lineReader = require('line-reader');

const txtToJSON = require("txt-file-to-json");

const execution = require('./controllers/execution');
const stringToFile = require("./controllers/string-to-file");
const linereader = require("./controllers/line-reader");

app.get('/', async (req, res) => {
  let execObj = new execution();
  console.log("Before");
  let shell = await execObj.execCmd();
  console.log("-------------------------------------------------------------------------------");
  console.log("after");
  
  let file = new stringToFile()
  let file_bool = await file.strint_to_file(shell);

  // nth line
  let line_reader = new linereader();
  console.log("Before line reader");
  let n = await line_reader.line_reader();
  console.log("After line reader");
  // let dataInJSON = txtToJSON({ data: shell });
  res.json(await shell);

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