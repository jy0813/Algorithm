function solution(numbers) {
    let arr = []
    for(let i = 0; i < 10; i++) {
        arr.push(i)
    }
    const notNum = arr.filter((item) => !numbers.includes(item));
    return notNum.reduce((accu,curr) => accu + curr);
}