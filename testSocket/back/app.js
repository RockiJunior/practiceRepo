const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Configura el middleware cors en Express
const corsOptions = {
  origin: '*', // Esto permitirá todas las solicitudes, pero es mejor especificar los orígenes permitidos
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));

app.listen(3001, () => {
  console.log('Express Server listening on port 3001');
});

// Configura el servidor de sockets
const io = socketIo(server, {
  cors: {
    origin: '*', // Esto permitirá todas las solicitudes, pero es mejor especificar los orígenes permitidos
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (msg) => {
    console.log('message: ' + msg);
    socket.emit('chat_message', 'Hola desde el servidor!!!!!!!!!!!!!!!!!!!!');
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(9001, () => {
  console.log('Socket server listening on port 9001');
});
