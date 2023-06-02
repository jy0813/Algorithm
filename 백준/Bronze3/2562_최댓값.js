let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input.map((item) => Number(item));
let max = Math.max(...n);

console.log(max, n.indexOf(max) + 1)



