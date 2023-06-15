function solution(s){
    const stack = [];
    if(s.length % 2 !== 0) return false;
    for(const item of s) {
        if(item === "(") {
            stack.push(item)
        } else {
            const lastItem = stack.pop();
            if(lastItem === undefined) {
                return false;
            }
        }
    }
    return stack.length === 0;
}