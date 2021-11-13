const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4000;

const app = express();

const server = http.createServer(app);

const io = socketIo(server);

io.on("connection", (socket) => {});

server.listen(port, () => console.log(`Listening on port ${port}`));
