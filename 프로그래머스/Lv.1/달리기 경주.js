function solution(players, callings) {
    const playerLank = [...players];

    const rank = players.reduce((accu,curr,i) => {
        accu[curr] = (accu[curr] || i);
        return accu;
    },{})


    for(let i = 0; i < callings.length; i++) {
        const currentPlayer = callings[i];
        const currentIndex = rank[currentPlayer];
        const prevPlayer = playerLank[currentIndex - 1];
        const prevIndex = currentIndex - 1;
        
        [playerLank[currentIndex], playerLank[prevIndex]] = [prevPlayer, currentPlayer];
        [rank[currentPlayer], rank[prevPlayer]] = [prevIndex, currentIndex]
    }


    return playerLank;
}
