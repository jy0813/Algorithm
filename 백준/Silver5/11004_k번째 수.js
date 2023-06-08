let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input[0].split(' ').map(Number);
let data = input[1].split(' ').map(Number).sort((a,b) => a-b);


console.log(data[n[1] - 1]);
