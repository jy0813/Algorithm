let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a,b] = input[0].split(' ').map(Number);
let c = Number(input[1]);


let totalM = a * 60 + b + c;
totalM %= 1440;
let h = parseInt(totalM / 60);
let m = parseInt(totalM % 60);

console.log(h+' '+m);