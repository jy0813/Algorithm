function solution(price, money, count) {
    let arr = []
    for(let i = 1; i <= count; i++) {
        arr.push(price * i)
    }
    const answer = money - arr.reduce((accu,curr) => accu + curr);
    return answer < 0 ? Math.abs(answer) : 0;
}