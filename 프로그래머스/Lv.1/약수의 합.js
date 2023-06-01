function solution(n) {
    let answer = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            answer.push(i);
        }
    }
    answer = answer.reduce((acc, cur) => acc + parseInt(cur), 0);
    return answer;
}