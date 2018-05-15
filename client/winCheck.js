/* checkForWin takes team checks whether the game has been won */

//REVISIT UNTESTED

function checkForWin(team, board){
  var taken = getTeam(team, board)
  if (checkRows(taken)
  ||checkCollumns(taken)
  ||checkDiagonals(taken)){
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

//board[2] == topRight
//board[4] == midMid
//board[6] == botLeft

function checkDiagonals(taken){
  var d1= taken.filter(x => x.D1 == true).length
  var d2= taken.filter(x => x.D2 == true).length
  if(countCheck(d1) || countCheck(d2)){
    return true
  }
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
