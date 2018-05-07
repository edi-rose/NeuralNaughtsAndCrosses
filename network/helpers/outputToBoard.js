const board = require('../boardStuff/board')


//untested!!

function arrayToBoard(output){
  for (var i = 0; i < output.length; i++) {
    if(output[i] == 1) {
      board[i].teamName = 'cross'
    }
    else if(output[i] == -1){
      board[i].teamName = 'naught'
    }
  }
  return board
}
