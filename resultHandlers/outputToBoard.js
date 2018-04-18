const networkMove = require('../app')
const testBoard = require('../boardStuff/board')

console.log(networkMove)


function claimSquare(squareName){
  let returnValue = false
  console.log(testBoard)
  let newBoard = testBoard.map((sqr) => {
    if(sqr.name == squareName && sqr.teamName == 'none'){
      sqr.teamName = 'cross'
      returnValue = true
    }
  })
  return newBoard
}

console.log(claimSquare(networkMove))
