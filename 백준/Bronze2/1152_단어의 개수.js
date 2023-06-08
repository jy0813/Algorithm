let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = fs.readFileSync('./input.txt').toString().split('\n');

let data = input[0].trim().split(' ');

console.log(data == '' ? 0 : data.length);
