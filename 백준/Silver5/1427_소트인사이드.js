let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0].split('').map(Number);

console.log(data.sort((a,b) => b - a).join(''));