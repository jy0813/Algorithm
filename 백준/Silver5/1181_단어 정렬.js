let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = []

for(let i = 1; i <= n; i++) {
    arr.push(input[i])
}

const sortedArr = arr.sort().sort((a,b) => a.length - b.length);
const result = [...new Set(sortedArr)].join('\n');
console.log(result);
