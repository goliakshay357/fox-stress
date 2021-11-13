const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  // var exec = require("child_process").exec;
  // var coffeeProcess = exec("ab -c 50 -n 3000 api.canvasboard.live/");
  // coffeeProcess.stdout.on("data", function (data) {
  //   console.log(data);
  // });
  res.send("Welcome Akshay1111");
});

const app = express();

const server = http.createServer(app);

const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("cool");
});

server.listen(port, () => console.log(`Listening on port ${port}`));
