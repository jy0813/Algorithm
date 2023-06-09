let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let p = input[1].split(' ').map(Number);

p.sort((a,b) => a-b);

let time = 0;
let sum = 0;

for(let i = 0; i < n; i++) {
    sum += p[i];
    time += sum;
}

console.log(time);