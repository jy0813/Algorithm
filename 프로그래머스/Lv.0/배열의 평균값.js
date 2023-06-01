function solution(numbers) {
    var answer = numbers.reduce((arr, cur) => arr + cur / numbers.length, 0);
    return answer;
}