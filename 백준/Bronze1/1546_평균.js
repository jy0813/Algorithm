let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const score = input[1].split(' ').map(Number);
const maxScore = Math.max(...score);
const result = score.map((item) => item / maxScore * 100);
const avg = result.reduce((accu,curr) => accu + curr) / n;
console.log(avg)