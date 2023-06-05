function solution(x) {
    const sum = String(x).split('').map(Number).reduce((accu, curr) => accu + curr,0);
    return x % sum === 0 ? true : false;
}