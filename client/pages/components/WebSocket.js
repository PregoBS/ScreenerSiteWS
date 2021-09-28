import React from 'react';
import Script from 'next/script';

function WebSocket () {   
    <Script src="/socket.io/socket.io.js"></Script>
    socket.on('connect', () => {
        const userId = socket.id;
        console.log(`> User connected on Server with id: ${userId}`);
    });
    socket.on('init', (data) => {
        console.log(`> Receiving data from SERVER: ${data}`);
    })
}

export default WebSocket;