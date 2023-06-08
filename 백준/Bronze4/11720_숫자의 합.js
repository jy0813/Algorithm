let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];
const data = input[1].split('').map(Number);
const sum = data.reduce((accu,curr) => accu + curr);

console.log(sum)