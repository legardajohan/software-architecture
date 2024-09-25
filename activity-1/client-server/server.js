const net = require('net');

const PORT = 3000;
const HOST = '127.0.0.1';

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        console.log(`Mensaje recibido del cliente: ${data}`);
        socket.write('Mensaje recibido');
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

server.on('error', (err) => {
    console.error(`Error del servidor: ${err}`);
});

server.listen(PORT, HOST, () => {
    console.log(`Servidor escuchando en ${HOST}:${PORT}`);
});
