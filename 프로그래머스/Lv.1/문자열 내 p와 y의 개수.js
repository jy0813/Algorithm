function solution(s){
    var answer = true;
    const array = s.split('').map((item) => item.toUpperCase());
    const p = array.filter(item => item === 'P').length;
    const y = array.reduce((accu,curr) => accu + ('Y' === curr), 0);

    answer = p === y ? true : false

    return answer;
}
