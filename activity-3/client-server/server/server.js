const WebSocket = require('ws');

// Configuración del servidor WebSocket
const wss = new WebSocket.Server({ port: 8080 });

// Manejar las conexiones entrantes
wss.on('connection', (ws) => {
    console.log('[+] Cliente conectado');

    // Recibir mensajes del cliente
    ws.on('message', (message) => {
        console.log(`[+] Mensaje recibido: ${message}`);

        // Responder al cliente
        ws.send('Mensaje recibido correctamente');
    });

    // Manejar la desconexión
    ws.on('close', () => {
        console.log('[+] Conexión cerrada');
    });
});

console.log('[*] Servidor WebSocket escuchando en ws://localhost:8080');
