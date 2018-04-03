function randomizeBoard(board, variable){
  let cTurn = 0
  let nTurn = 0
  for (var i = 0; i < board.length; i++) {
    if(getNumber(variable) >= 10){
      if(cTurn <= nTurn){
        board[i].teamName = 'cross'
        cTurn ++
      }
      else if(nTurn < cTurn){
        board[i].teamName = 'naught'
        nTurn ++
      }
    }
  }
  return board
}

function getNumber(variable){
  return Math.floor((Math.random()*variable) + (Math.random()*variable))
}
module.exports = randomizeBoard
