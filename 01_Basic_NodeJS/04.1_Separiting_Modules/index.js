let operation = require('./operation');

console.log(`Soma: ${operation.sum(process.argv[2], process.argv[3])}`);
console.log(`Multiplicação: ${operation.mult(process.argv[2], process.argv[3])}`);


