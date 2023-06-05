function solution(a, b) {
    const sort = a > b ? [a,b] = [b,a] : [a,b];
    for(let i = a + 1; i < b; i++) {
        sort.push(i);
    }
    return a === b ? a : sort.reduce((accu,curr) => accu + curr, 0);
}