let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0].split(' ').map(Number).sort((a,b) => a-b).join(' ');

console.log(data)