function randomizeBoard(board, variable){
  let cTurn = 0
  let nTurn = 0
  let newBoard = board
  for (var i = 0; i < newBoard.length - 1 ; i++) {
    newBoard[i] = {...board[i]}
    if(getNumber(variable) >= 10){
      if(cTurn <= nTurn){
        newBoard[i].teamName = 'cross'
        cTurn ++
      }
      else if(nTurn < cTurn){
        newBoard[i].teamName = 'naught'
        nTurn ++
      }
    }
  }
  return newBoard
}

function getNumber(variable){
  return Math.floor((Math.random()*variable) + (Math.random()*variable))
}
module.exports = randomizeBoard
