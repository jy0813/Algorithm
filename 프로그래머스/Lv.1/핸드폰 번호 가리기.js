function solution(phone_number) {
    const first = phone_number.slice(0, -4);
    return phone_number.replace(first, '*'.repeat(first.length))
}