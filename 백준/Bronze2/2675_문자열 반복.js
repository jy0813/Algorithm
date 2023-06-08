let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const testCase = Number(input[0]);

for(let i = 1; i <= testCase; i++) {
    const array = input[i].split('').slice(1).filter((item) => item !== ' ');
    const r = input[i].split(' ').map(Number)[0];

    console.log(array.map((item) => item.repeat(r)).join(''))
}
