var topLeft = {teamName:'none', row:0, col:0, D1: true}
var topMid = {teamName:'none', row:0, col:1}
var topRight = {teamName:'none', row:0, col:2, D2: true}
var midLeft = {teamName:'none', row:1, col:0}
var midMid = {teamName:'none', row:1, col:1, D1: true, D2: true}
var midRight = {teamName:'none', row:1, col:2}
var botLeft = {teamName:'none', row:2, col:0, D2: true}
var botMid = {teamName:'none', row:2, col:1}
var botRight = {teamName:'none', row:2, col:2, D1: true}

var board = [topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botRight]

function randomizeBoard(board){
  let cTurn = 0
  let nTurn = 0
  for (var i = 0; i < board.length; i++) {
    if(getNumber() == 1){
      if(cTurn <= nTurn){
        board[i].teamName = 'cross'
        cTurn ++
      }
      else if(nTurn < cTurn){
        board[i].teamName = 'naught'
        nTurn ++
      }
    }
  }
  return board
}

function getNumber(){
  return Math.floor(Math.random()*2)
}

module.exports = {board: board, randomizeBoard: randomizeBoard}
