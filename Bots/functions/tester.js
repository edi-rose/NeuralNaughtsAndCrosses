function findNeighbours(cell, board){
  let myRow = cell.row
  let myCol = cell.col

  findMyRow(board, myRow, myCol)
}

function findMyRow(board, row, col){
  let arr = []
  for (var i = 0; i < board.length; i++) {
    if(board[i].row == myRow){
      arr.push(board[i])
    }
  }
  let newArr = arr.filter(cell => cell.col == myCol +1 || cell.col == myCol -1)
  return newArr
}
