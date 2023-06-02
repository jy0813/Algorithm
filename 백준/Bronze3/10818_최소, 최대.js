let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let minValue = 1000001; // 큰수 초기화
let maxValue = -1000001; // 작은수로 초기화

for(let i = 0; i < n; i++) {
    if(minValue > arr[i]) minValue = arr[i];
    if(maxValue < arr[i]) maxValue = arr[i];
}

console.log(minValue, maxValue);