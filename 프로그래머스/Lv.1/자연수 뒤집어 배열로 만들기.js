function solution(n) {
    const array = (n + '').split('');
    return array.map(Number).reverse();
}