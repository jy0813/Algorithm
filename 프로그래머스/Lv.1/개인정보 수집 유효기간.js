function solution(today, terms, privacies) {
    var answer = [];
    const current = new Date(today);
    const termType = {};

    for(const termsType of terms) {
        const [type, term] = termsType.split(' ');
        termType[type] = Number(term);
    }

    for(const [index, privaciesType] of privacies.entries()) {
        const [date, type] = privaciesType.split(' ');
        const prevDate = new Date(date);
        const prevMonth = prevDate.getMonth();
        const expire = new Date(prevDate.setMonth(prevMonth + termType[type]));

        if (expire <= current) {
            answer.push(index + 1);
        }
    }

    return answer;
}