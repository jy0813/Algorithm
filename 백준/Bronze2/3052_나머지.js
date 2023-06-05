let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input.map(Number);
let result = new Set();

for(let i = 0; i < 10; i++) {
    result.add(data[i] % 42);
}

console.log(result.size)