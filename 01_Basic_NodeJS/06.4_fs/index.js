let fs = require('fs');

const args = process.argv.slice(2);
const fileName = args[0];

fs.appendFile(`${fileName}.txt`, `${args[0]}`, () => {
    console.log('File changed');
})