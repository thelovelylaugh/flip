const games = {}

function createGame(){
    const newGame = {id: Math.random().toString(32), choice:null, res:null}
    games[newGame.id] = newGame;
    return newGame;
}

function findGame(gameID){
    return games[gameID]
}