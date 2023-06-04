function solution(s) {
    var answer = s.split(" ");
    const test = answer.map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
    return test.join(" ")
}