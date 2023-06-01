function solution(array, commands) {
	let slice = [];

	for(const [i,j,k] of commands) {
		slice.push(array.slice(i -1, j).sort((a,b) => a - b)[k-1]);
	}

	console.log(slice)
	return slice;
}