function solution(num) {
    let count = 0;
    for(let i = 0; i < 500; i++) {
        if(num !== 1) {
            num = num % 2 ? num * 3 + 1 : num / 2;
        } else {
            return count += i
        }
    }
    return count = -1;
}