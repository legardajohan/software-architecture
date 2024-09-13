# Client-Server
## How to run this example

1. Install Node.js (if you don't have it already):

    + Go to the official Node.js page: https://nodejs.org

    + Download and install the recommended version for your operating system.

    + Once installed, open the terminal (or command console on Windows) and verify that Node.js is correctly installed with the following command: `node -v`

2. Run the Server:

    + Open a terminal or command console in the folder where you saved the files `server.js` and `client.js`.
    + Run the __server.js__ file using the following command: `node server.js` 
    + You will see the message `Servidor escuchando en 127.0.0.1:3000` when the server is ready to receive connections.

2. Run the Client:

    + Open another terminal and navigate to the same directory.
    + Run the client with the following command: `node client.js`
    + The client will send a message to the server and the server should respond with `Mensaje recibido`.