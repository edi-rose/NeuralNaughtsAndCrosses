/*This file checks to see if the game is won, this is important because when
creating the randomized boards for our training data we don't want to have any
in which the game is already won.*/

function checkForWin(team, board){
  var taken = getTeam(team, board)
  if (checkRows(taken)
  ||checkCollumns(taken)
  ||checkDiagonals(taken, board)){
    return true
  }
  return false
}

function checkCollumns(taken){
  if(checkCol(0, taken)
   ||checkCol(1, taken)
   ||checkCol(2, taken)){
    return true
  }
  return false
}

function checkCol(col, taken){
  var count = 0
  taken.filter(x => x.col == col).forEach(x => count ++)
  return countCheck(count)
}

function checkRows(taken){
  if(checkRow(0, taken)
   ||checkRow(1, taken)
   ||checkRow(2, taken)){
    return true
  }
  return false
}

function checkRow(row, taken) {
  var count = 0
  taken.filter(x => x.row == row).forEach(x => count ++)
  return countCheck(count)
}

function checkDiagonals(taken, board){
  if(checkDiagonal1(taken, board)||checkDiagonal2(taken, board)){
    return true
  }
    return false
}

//board[2] == topRight
//board[4] == midMid
//board[6] == botLeft
function checkDiagonal1(taken, board){
  var count = 0
   taken.filter(x => x == board[2] || x == board[4] || x == board[6]).forEach(x => count ++)
  return countCheck(count)
}
//board[0]
//board[4]
//board[8]
function checkDiagonal2(taken, board){
  var count = 0
  taken.filter(x => x == board[0] || x == board[4] || x == board[8]).forEach(x => count ++)
 return countCheck(count)
}

//working
function getTeam(team, board) {
  return board.filter(x => x.teamName == team)
}

function countCheck(count) {
  if(count == 3){
    return true
  }
  else if(count < 3){
    return false
  }
  else {
    console.log('WIN CHECK ERROR')
  }
  }

module.exports = checkForWin
