function solution(n) {
    var answer = [];
    for(let i = 1; i < n; i++) {
        if(n % i === 1) {
            answer.push(i)
        }
    }
    answer = Math.min(...answer)
    return answer;
}