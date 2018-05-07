
function handleBoard(board){
  let boardArr = destring(board.newBoard)
  return boardArr
}


function destring(board){
  return board.newBoard.split(',').map(x => parseInt(x, 10))
}

module.exports = handleBoard
