// Crear la conexión WebSocket
const socket = new WebSocket('ws://localhost:8080');

// Conectar al servidor
socket.onopen = function() {
    console.log('[+] Conexión establecida con el servidor');
};

// Enviar un mensaje cuando se haga clic en el botón
document.getElementById('sendMessage').addEventListener('click', function() {
    const message = "Hola desde el cliente web";
    console.log(`[+] Enviando: ${message}`);
    socket.send(message);
});

// Recibir una respuesta del servidor
socket.onmessage = function(event) {
    console.log(`[+] Respuesta del servidor: ${event.data}`);
    document.getElementById('response').innerText = event.data;
};

// Manejar la desconexión
socket.onclose = function() {
    console.log('[+] Conexión cerrada por el servidor');
};