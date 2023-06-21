import { Server, Socket } from "socket.io";
import { createServer, Server as HTTPServer } from "http";
import express from "express";

export default (io: Server) => {

io.on("connection", (socket: Socket) => {
  // Website to Robot Communication
  socket.on("message", (msg: string) => {
    console.log(msg);
    io.sockets.emit("robotMessage", { message: msg });
  });
  socket.on("tts", (msg: string) => {
    console.log(msg);
    io.sockets.emit("ttsMessage", { ttsMessage: msg });
  });
  socket.on("temiTts", (msg: string) => {
    console.log(msg);
    io.sockets.emit("temiTtsMessage", { temiTtsMessage: msg });
  });
  socket.on("temiMovement", (msg: string) => {
    console.log(msg);
    io.sockets.emit("temiMovementMessage", { movementMessage: msg });
  });
  socket.on("reboot", (msg: string) => {
    io.sockets.emit("rebootMessage", { rebootMessage: msg });
  });
  socket.on("mute", (msg: string) => {
    io.sockets.emit("muteMessage", { muteMessage: msg });
  });
  socket.on("shutdown", (msg: string) => {
    io.sockets.emit("shutdownMessage", { shutdownMessage: msg });
  });
});


}