const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

wss.on('connection', (ws) => {
    console.log('New user logged in');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);

        const messageString = typeof message === 'string' ? message : message.toString();
        
        // Send the new message only to connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(messageString); // Send only the new message
            }
        });
    });

    ws.on('close', () => {
        console.log('User logged out');
    });
});

server.listen(3500, () => {
    console.log('Server running on ws://localhost:3500');
});
