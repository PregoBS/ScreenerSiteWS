const express = require('express');
const http = require('http');
const io = require('socket.io');

const app = express();
const server = http.createServer(app);
const sockets = io(server);

const axios = require('axios');

const PORT = 3001;

function setData(newData, oldData) {
    Object.assign(oldData, newData);
}

async function getData(json_url, data) {
    const response = (await axios({
        url: json_url,
        method: 'get',
        headers: {}
    })).data;
    setData(response[0], data);
}

international_url = 'https://api.jsonstorage.net/v1/json/f1264722-2038-480d-892e-a95abad12725';
b3ibov_url = 'https://api.jsonstorage.net/v1/json/638901e8-ec62-435b-a3e5-1d2d3020bfdd';
cripto_url = 'https://api.jsonstorage.net/v1/json/07fe53ab-bc96-463e-a86c-75d9fee8d502';

const internationalData  = {};
const b3ibovData  = {};
const criptoData  = {};

getData(international_url, internationalData);
getData(b3ibov_url, b3ibovData);
getData(cripto_url, criptoData);

const freq = 120000;
setInterval(() => {
    getData(international_url, internationalData);
    getData(b3ibov_url, b3ibovData);
    getData(cripto_url, criptoData);
}, freq);

setInterval(() => {
    sockets.emit('international-data', internationalData);
    sockets.emit('b3ibov-data', b3ibovData);
    sockets.emit('cripto-data', criptoData);
}, 1000);

const connections = [];

sockets.on('connection', (socket) => {
    connections.push(socket.id);
    // console.log(`[SERVER] New connection with id: ${socket.id}`);
    // console.log(`[SERVER] Connected Users: ${connections.length}`);
    sockets.emit('users', connections.length);

    socket.emit('international-data', internationalData);
    socket.emit('b3ibov-data', b3ibovData);
    socket.emit('cripto-data', criptoData);

    socket.on('disconnect', () => {
        const index = connections.indexOf(socket.id);
        if (index > -1) {
            connections.splice(index, 1);
        }
        // console.log(`[SERVER] Id: ${socket.id} disconnected!`);
        // console.log(`[SERVER] Connected Users: ${connections.length}`);
        sockets.emit('users', connections.length);
    });
});

server.listen(PORT);
