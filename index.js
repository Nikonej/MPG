const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);
const characters = [];
var l = 0;
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname, + 'public/index.html');
});

app.get('/0', (req, res) => {
  res.sendFile(__dirname + '/public/0.html');
});

app.get('/1', (req, res) => {
  res.sendFile(__dirname + '/public/1.html');
});

app.get('/2', (req, res) => {
  res.sendFile(__dirname + '/public/2.html');
});


io.on('connection', (socket) => {
    io.emit('connection', {l: l, chars: characters});
    console.log(characters)
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
    console.log(msg)
  });

  socket.on('new sheet', () => {
    l = characters.length + 1;
    characters.push({name: "Boblin", lvl:1});
    console.log(characters);
    io.emit('new boblin', l)
  })

  socket.on('change', (data) => {
    io.emit("charupdate", data);
    characters[data.sheet] = data;
  })
});
server.listen(3001)
console.log("http://localhost:3000")

