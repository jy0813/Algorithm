function solution(participant, completion) {
	const participantPeople = new Map();

	for(const people of participant) {
		participantPeople.set(people, (participantPeople.get(people) || 0) + 1);
	}

	for(const people of completion) {
		const count = participantPeople.get(people)
		if(count === 1) {
			participantPeople.delete(people);
		} else {
			participantPeople.set(people, count - 1);
		}
	}

	return participantPeople.keys().next().value;
}


// 효율성 테스트 통과 못한 코드

function solution(participant, completion) {
	const participantPeople = participant.sort().reduce((accu,curr) => {
		accu[curr] = (accu[curr] || 0) + 1;
		return accu;
	}, {})
	const completionPeople = completion.sort().reduce((accu,curr) => {
		accu[curr] = (accu[curr] || 0) + 1;
		return accu;
	}, {})

	for (const [key, value] of Object.entries(participantPeople)) {
		if(value !== completionPeople[key]) {
			return key;
		}
	}
}