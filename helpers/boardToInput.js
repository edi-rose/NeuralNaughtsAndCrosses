//This function takes a board array and turns it into an array of -1's, 0's and 1's
//for the network's data input.
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
