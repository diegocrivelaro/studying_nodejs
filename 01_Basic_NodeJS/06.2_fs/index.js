let fs = require('fs');

fs.unlink('test.txt', () => {
    console.log('File deleted');
}) /* File name and callback */