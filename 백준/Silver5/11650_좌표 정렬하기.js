let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


let n = Number(input[0]);
let arr = []

for(let i = 1; i <= n; i++) {
    const [x,y] = input[i].split(' ').map(Number);
    arr.push([x,y])
}

const sortedArr = arr.sort((a,b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
const answer = sortedArr.map((item) => item.join(' ')).join('\n');

console.log(answer);