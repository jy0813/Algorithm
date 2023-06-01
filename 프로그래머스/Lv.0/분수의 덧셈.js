function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    //numer1 = 11;
    //denom1 = 22;
    //numer2 = 22;
    //denom2 = 22;
    let denom = denom1 * denom2;
    let numer = numer1 * denom2 + numer2 * denom1;

    // 기약분수
    // 분수, 분모가 같은 수로 나누어 떨어지지 않는 상태
    // 더하기로 만든 분수를 기약분수로 만들어야함.
    // 같은 수로 나누어야함.

    let temp = numer;
    for(let i = 2; i <= temp ; i++) {
        let test1 = numer % i === 0;
        let test2 = denom % i === 0;
        // console.log(i, numer, numer % i, denom, denom % i);
        if(test1 && test2) {
            numer = numer / i;
            denom = denom / i;
            // console.log(i, numer, 'numer', denom, 'denom');
            i = 1;
        }
    }


    // console.log(numer, denom);

    answer.push(numer, denom);


    return answer;
}