const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('Um novo dispositivo (cliente) conectado:', socket.id);

    socket.on('mobile_action', (data) => {
        console.log(`Ação recebida: ${data.type} por ${data.employee || 'Funcionário Desconhecido'}`);

        io.emit('dashboard_update', data);
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado.');
    });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Servidor Socket.IO rodando na porta ${PORT}`);
});