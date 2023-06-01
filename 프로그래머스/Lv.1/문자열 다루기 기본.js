function solution(s) {
    const answer = (s+'').split('').map(Number);
    if(s.length !== 4 && s.length !==6) {
        return false
    }
    return answer.includes(NaN) ? false: true
}