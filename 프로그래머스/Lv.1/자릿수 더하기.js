function solution(n)
{
    let answer;
    const array = (n+'').split('');
    answer = array.map((item) => Number(item)).reduce((acc,cur) => acc + cur, 0)

    return answer;
}