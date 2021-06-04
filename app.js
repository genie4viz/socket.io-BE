const port = 3011;
const express = require("express");
const app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", function (client) {
  console.log("Client connected...");
  setInterval(() => {
    client.emit("broad", "Database updated!");
  }, 5000);
  
});

server.listen(port);
