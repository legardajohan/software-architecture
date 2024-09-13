const net = require('net');

const PORT = 3000;
const HOST = '127.0.0.1';

const client = net.createConnection(PORT, HOST, () => {
    console.log('Conectado al servidor');
    client.write('Hola, servidor!');
});

client.on('data', (data) => {
    console.log(`Mensaje recibido del servidor: ${data}`);
    client.end(); 
});

client.on('error', (err) => {
    console.error(`Error del cliente: ${err}`);
});
