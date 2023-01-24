const http = require('http');
const fs = require('fs')

const host = 'localhost';
const port = 8000

const requestListener = (req, res) => {
    if (req.url === '/get' && req.method === 'GET' ) { 
        return res.end("К сожалению, ни на занятии, ни в методичке нет достаточной информации для выполнения этого задания в полной мере");   
    } else if ( req.url === '/delete' && req.method === 'DELETE') {
        res.writeHead(200);
        return res.end('Success');
    } else if ( req.url === '/post' && req.method === 'POST') {
        res.writeHead(200);
        return res.end('Success');
    } else if ( req.url === '/redirect' && req.method === 'GET') {
        return res.end(`Сайт переехал. Совсем. Навсегда. http://${host}:${port}/redirected  `)
    }
    res.writeHead(405);
    return res.end('HTTP method not allowed');  
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Сервер запущен http://${host}:${port}`);
});
