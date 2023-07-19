function solution(n, m, section) {
    let answer = 0;
    let paint = 0;
    for(let currentSection of section) {
        if(paint < currentSection) {
            answer++;
            paint = currentSection + m - 1;
        }
    }
    return answer;
}