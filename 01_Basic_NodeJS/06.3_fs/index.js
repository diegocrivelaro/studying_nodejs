let fs = require('fs');

fs.writeFile('test.txt', 'Hello Word', () => {
    console.log('File created');
})

fs.readFile('test.txt', 'utf8', (error, data) => {
    if (error) {
        console.log(error);
    }

    console.log(data);
})