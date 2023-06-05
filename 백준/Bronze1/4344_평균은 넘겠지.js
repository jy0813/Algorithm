let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const testCase = Number(input[0])

for(let i = 1; i <= testCase; i++) {
    const data = input[i].split(' ').map(Number);
    const people = data[0];
    const score = data.slice(1);
    const sum = score.reduce((acc, curr) => acc + curr);
    const avg = sum / people;
    const percent = (score.filter((item) => item > avg).length / people) * 100;

    console.log(`${percent.toFixed(3)}%`);
}
