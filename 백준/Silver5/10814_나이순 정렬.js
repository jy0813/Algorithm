let fs = require('fs');
input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];

for(let i = 1; i <= n; i++) {
    const data = input[i].split(' ');
    const num = Number(data[0]);
    const name = data[1];
    arr.push([num,name])
}


console.log(arr.sort((a,b) => a[0]- b[0]).map((item) => item.join(' ')).join('\n'));


