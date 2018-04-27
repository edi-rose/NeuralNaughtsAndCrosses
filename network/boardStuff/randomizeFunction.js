const checkForWin = require('../Bots/winChecker')

/* this function essentially runs through the board and randomly decides whether
it's going to claim each square as a 0, X or not at all */

function randomizeBoard(board, variable){
  let cTurn = 0
  let nTurn = 0
  let newBoard = board
  for (var i = 0; i < newBoard.length; i++) {
    newBoard[i] = {...board[i]}
    if(getNumber(variable) >= 8){
      if(cTurn <= nTurn){
        newBoard[i].teamName = 'cross'
        if(checkForWin('cross', newBoard)){
          newBoard[i].teamName ='none'
          continue
        }
        cTurn ++
      }
      else if(nTurn < cTurn){
        newBoard[i].teamName = 'naught'
        if(checkForWin('naught', newBoard)){
          newBoard[i].teamName ='none'
          continue
        }
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
