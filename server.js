const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');

app.use(express.static('public'));

const io = new Server(server);

io.on('connection', (socket) => {
    socket.on('chatData', (data) => {
        io.sockets.emit('chatData', data);
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/');
});

server.listen(process.env.PORT || 3000);