const json = require('../app')
const testBoard = require('../boardStuff/board')

console.log(json)

function claimSquare(squareName){
  let returnValue = false
  console.log(testBoard)
  let newBoard = [...testBoard].map((sqr) => {
    if(sqr.name == squareName && sqr.teamName == 'none'){
      sqr.teamName = 'cross'
      returnValue = true
    }
  })
  console.log('newboard', newBoard)
  return newBoard
}
