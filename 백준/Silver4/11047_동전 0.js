let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, k] = input[0].split(' ').map(Number);
let money = []


for(let i = 1; i <= n; i++) {
    money.push(Number(input[i]));
}

let cnt = 0;

for(let i = n - 1; i >= 0; i--) {
    cnt += parseInt(k / money[i]);
    k %= money[i]
}

console.log(cnt)