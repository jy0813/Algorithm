function solution(s) {
    let answer = s.split('');
    let left = 0;
    let right = s.length - 1;
    let middle = Math.floor((left + right) / 2);
    return s.length % 2 === 1 ? answer[middle] : answer[middle] + answer[middle+1];
}