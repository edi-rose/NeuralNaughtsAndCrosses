//handleBoard recives a board from the front end and turns it back into an array


function handleBoard(board){
  let boardArr = destring(board.newBoard)
  return boardArr
}


function destring(board){
  return board.newBoard.split(',').map(x => parseInt(x, 10))
}

module.exports = handleBoard
