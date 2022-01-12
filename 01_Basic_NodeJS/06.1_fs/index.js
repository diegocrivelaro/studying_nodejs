let fs = require('fs');

fs.appendFile('test.txt', '- Olá, Mundo!', () => {
    console.log('File changed');
}) /* File name, file text and callback */