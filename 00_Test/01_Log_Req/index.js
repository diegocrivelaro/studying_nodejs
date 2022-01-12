let http = require('http');
let fs = require('fs');

let server = http.createServer((req, res) => {
    if (req.url) {
        fs.appendFile('log.txt', `\n${req.url}`, () => {
            console.log('Log saved');
        })
    }
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end('Hello World');
})

server.listen(1313, '127.0.0.1', () => {
    console.log('Server running');
})

