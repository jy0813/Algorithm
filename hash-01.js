function solution(nums) {
	const maxNums = nums.length / 2;
	const minNums = new Set(nums).size;
	console.log(maxNums, minNums)
	const answer = []
	answer.push(maxNums, minNums)
	return Math.min(...answer);
}

