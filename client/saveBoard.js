var boardToInput = require('../network/helpers/boardToInput')

function saveBoard(board){
  let newBoard = arrangeBoard(board)
  let boardArray = boardToInput(newBoard)
  console.log(boardArray)

}

function arrangeBoard(board){
    let newBoard = board[0].concat(board[1], board[2])
    return newBoard
}

module.exports = saveBoard
