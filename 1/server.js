const http = require('http');

const host = 'localhost';
const port = 8000

const requestListener = (req, res) => {
    if (req.url === '/get' && req.method === 'GET' ) { 
        
        res.writeHead(200);
        return res.end('Success!');
    }
    res.writeHead(405);
    return res.end('HTTP method not allowed');  
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Сервер запущен http://${host}:${port}`);
});
