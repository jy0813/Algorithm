/**
 * 
 * 자연수가 들어있는 배열 arr가 매개변수로 주어집니다. 
 * 배열 arr안의 숫자들 중에서 앞에 있는 숫자들부터 뒤에 중복되어 나타나는 숫자들 중복 횟수를 계산해서 배열로 return 하도록 solution 함수를 완성해주세요.
 * 만약 중복되는 숫자가 없다면 배열에 -1을 채워서 return 하세요.
 */


let arr = [];

function solution(arr) {
	arr = [1,2,3,4];
	
	const countMap = arr.reduce((accu, curr) => {
		const count = accu.get(curr) || 0;
		accu.set(curr, count + 1);
		return accu;
	}, new Map());
	
	const result = Array.from(countMap.values()).filter((count) => count > 1);
	return result.length > 0 ? result : [-1];
}

console.log(solution(arr));

function solution2(arr) {
	arr = [1,2,3,3,3,3,4,4];
	
	const countArr = arr.reduce((accu, curr) => {
		accu[curr] = (accu[curr] || 0) + 1;
		return accu;
	}, {})
	

	const result = Object.values(countArr).filter((count) => count > 1);
	return result.length > 0 ? result : [-1];
}

console.log(solution2(arr))


