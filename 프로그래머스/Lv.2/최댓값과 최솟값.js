function solution(s) {
    var answer = s.split(' ')
    const array = []
    array.push(Math.min(...answer), Math.max(...answer))
    const [test, test2] = array;
    return test + ' ' + test2
}