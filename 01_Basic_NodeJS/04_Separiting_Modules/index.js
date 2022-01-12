let sum = require('./sum');
let multiplication = require('./multiplication');

let result = process.argv.slice(2);

console.log(`Soma: ${sum(result[0], result[1])}`);
console.log(`Multiplicação: ${multiplication(result[0], result[1])}`);


