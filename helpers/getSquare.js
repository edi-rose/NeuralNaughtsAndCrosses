const squares = require('../boardStuff/squares')

function getSquare(num){
  let theGuy = squares.filter(square => square.id == num)
  let obj ={}
  obj[theGuy[0].name] = 1
  return obj
}

module.exports = getSquare
