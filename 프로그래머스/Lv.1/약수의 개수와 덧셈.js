function solution(left, right) {
    let arr = {};
    for(let i = left; i <= right; i++) {
        let nums = []
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) {
                nums.push(j)
            }
        }
        arr[i] = nums.length % 2 === 0 ? i * 1 : i * -1;
    }
    return Object.values(arr).reduce((accu,curr) => accu + curr);
}