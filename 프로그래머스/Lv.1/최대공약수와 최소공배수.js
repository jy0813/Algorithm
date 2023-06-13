function solution(n, m) {
    let answer = [];
    const gdc = (a,b) => {
        if(b === 0) return a;
        return gdc(b, a % b);
    }
    const lcm = (a,b) => {
        return (a * b) / gdc(a,b);
    }
    answer.push(gdc(n,m), lcm(n,m));
    return answer;
}