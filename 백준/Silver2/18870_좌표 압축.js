let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

const newArr = [...new Set(arr)];
const sortedArr = newArr.sort((a,b) => a - b);
const map = new Map();
for(let i = 0; i < sortedArr.length; i++){
    map.set(sortedArr[i], i)
}

let answer = '';

for(let num of arr) {
    answer += map.get(num) + ' ';
}

console.log(answer)



