function solution(a, b) {
    return a.reduce((accu, curr, i) => accu + (curr * b[i]), 0);
}