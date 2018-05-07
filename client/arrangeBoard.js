/* arrangeBoard takes the board from it's format in Board.jsx and turns it into
the proper format for the api/database */

var boardToInput = require('./network/helpers/boardToInput')

function arrangeBoard(board){
  let newBoard = concatBoard(board)
  let boardArray = (boardToInput(newBoard))
  return String(boardArray)
}

function concatBoard(board){
    let newBoard = board[0].concat(board[1], board[2])
    return newBoard
}

module.exports = arrangeBoard
