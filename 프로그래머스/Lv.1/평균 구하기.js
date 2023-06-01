function solution(arr) {
    const allPlus = arr.reduce((acc ,cur) => acc + cur, 0);
    console.log(allPlus)
    const answer = allPlus / arr.length
    console.log(answer)
    return answer;
}