let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [data1, data2] = input[0].split(' ');
const input1 = Number(data1.split('').reverse().join(''));
const input2 = Number(data2.split('').reverse().join(''));

console.log(input1 > input2 ? input1 : input2);
