let fs = require('fs');

fs.writeFile('test.txt', 'Hello Word', () => {
    console.log('File created');
}) /* File name, file text and callback */