let http = require('http');
let fs = require('fs');

const hostname = '127.0.0.1';
const port = 1313;

let server = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile('./index.html', (err, html) => {
            res.write(html);
            return res.end();
        })
    } else if (req.url == '/index2') {
        fs.readFile('./index2.html', (err, html) => {
            res.write(html);
            return res.end();
        })
    }
})

server.listen(port, hostname, () => {
    console.log('Ligando o servidor na porta: ' + port);
})