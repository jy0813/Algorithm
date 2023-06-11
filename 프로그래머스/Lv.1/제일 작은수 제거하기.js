function solution(arr) {
    return arr.length === 1 || arr.length === 0 ? [-1] : arr.filter((item) => item !== Math.min(...arr))
}