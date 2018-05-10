function attackRows(team, board){
  for (var i = 0; i < board.length; i++) {
    if(board[i].teamName == team &&
       board[i].col == 0 &&
       board[i+1].teamName == team &&
       board[i+2].teamName == 'none'){
         return i+2
    }
    else if(board[i].teamName == team &&
            board[i].col == 0 &&
            board[i+2].teamName == team &&
            board[i+1].teamName == 'none'){
              return i+1
   }
 }
 return
}


function attackCollumns(team, board){
  for (var i = 0; i < board.length; i++) {
    if(board[i].teamName == team &&
       board[i].row == 0 &&
       board[i+3].teamName == team &&
       board[i+6].teamName == 'none'){
        return i+6

      }
      else if(board[i].teamName == team&&
              board[i].row == 0&&
              board[i+6].teamName == team&&
              board[i+3].teamName == 'none'){
                return i+3
              }
    else if(board[i].teamName == team &&
            board[i].row == 1 &&
            board[i+3].teamName == team &&
            board[i-3].teamName == 'none'){
          return i-3
   }
  }
  return
}

function attackDiagonal1(team, board) {
  //board[0] == topLeft
  //board[4] == midMid
  //board[8] == botRight
  if(board[0].teamName == team &&
     board[4].teamName == team &&
     board[8].teamName == 'none') {
      return 8
    }
  else if(board[0].teamName == team &&
          board[8].teamName == team &&
          board[4].teamName == 'none'){
            return 4

          }
  else if(board[4].teamName == team &&
          board[8].teamName == team &&
          board[0].teamName == 'none'){
            return 0
          }
  else {
    return
  }
}

function attackDiagonal2(team, board) {
  //board[2] == topRight
  //board[4] == midMid
  //board[6] == botLeft
    if(board[2].teamName == team &&
      board[4].teamName == team &&
      board[6].teamName == 'none') {
        return 6
      }
    else if(board[2].teamName == team &&
            board[6].teamName == team &&
            board[4].teamName == 'none'){
              return 4
            }
    else if(board[4].teamName == team &&
            board[6].teamName == team &&
            board[2].teamName == 'none'){
              return 2
            }
    else {
      return
    }
}

function attack(team, board) {
  if(attackRows(team, board)){
    return attackRows(team, board)
  }
  else if(attackCollumns(team, board)){
    return attackCollumns(team, board)
  }
  else if(attackDiagonal1(team, board)){
    return attackDiagonal1(team, board)
  }
  else if(attackDiagonal2(team, board)){
    return attackDiagonal2(team, board)
  }
  return
}

module.exports = {
  attack:attack,
  attackRows:attackRows,
  attackCollumns: attackCollumns,
  attackDiagonal1: attackDiagonal1,
  attackDiagonal2: attackDiagonal2
}
