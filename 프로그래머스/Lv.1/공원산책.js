function solution(park, routes) {
    const width = park[0].length;
    const height = park.length;
    let start = [0,0];
    const dirs = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0]
    };

    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            if(park[i][j] === "S") {
                start = [i,j];
            }
        }
    }

    for(const pos of routes) {
        let isError = false;
        const [map, move] = pos.split(' ');
        const newStart = [...start];

        for(let i = 0; i < move; i++) {
            newStart[0] += dirs[map][0];
            newStart[1] += dirs[map][1];

            if(newStart[0] >= height || newStart[0] < 0 || newStart[1] >= width || newStart[1] < 0){
                isError = true;
                break;
            }

            if(park[newStart[0]][newStart[1]] === 'X') {
                isError = true;
                break;
            }
        }
        console.log(newStart)

        if(!isError) start = newStart;
    }
    return start;
}