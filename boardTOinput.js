//naughts == -1 crosses = 1 none == 0

function boardToInput(board){
  let inputBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (var i = 0; i < board.length; i++) {
    if(board[i].teamName == 'naught'){
      inputBoard[i] = -1
    }
    if(board[i].teamName =='cross'){
      inputBoard[i] = 1
    }
  }
  return inputBoard
}

module.exports = boardToInput
