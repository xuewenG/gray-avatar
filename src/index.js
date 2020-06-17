const http = require('http');
const path = require('path');
const express = require('express');

const config = require('./config')

const app = express();

app.all('*', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', config.cors_origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    if (req.method === 'OPTIONS') res.sendStatus(200);
    else next();
});

app.get('/gray-avatar/qq/avatar', (request, response) => {
    const qq = request.query.qq;
    console.log(`${new Date().toLocaleString()}---${qq}`);
    http.get(`http://q1.qlogo.cn/g?b=qq&nk=${qq}&s=640`, res => {
        let imgData = '';
        res.setEncoding('binary');
        res.on('data', chunk => imgData += chunk);
        res.on('end', () => {
            response.setHeader('Content-Type', 'image/jpeg');
            response.write(imgData, 'binary');
            response.end();
        })
    })
});

app.listen(config.port);
console.log(`Server running at http://127.0.0.1: ${config.port}`);
