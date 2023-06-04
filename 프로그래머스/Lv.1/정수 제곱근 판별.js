function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++) {
        if(i**2 === n) {
            return answer = (i+1)**2
        } else {
            answer = -1
        }
    }
    return answer;
}