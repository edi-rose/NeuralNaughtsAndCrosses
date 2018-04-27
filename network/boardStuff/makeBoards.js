const randomizeBoard = require('./randomizeFunction')
const board = require('./board')


function getNumber() {
  return Math.floor(Math.random()*10 + 5)
}

/*This function takes an amount and creates that many randomized boards, which
are used for training data*/
function makeBoards(amount){
  let arr = []
  for (var i = 0; i < amount; i++) {
    arr.push(randomizeBoard([...board], getNumber()))
  }
  return arr
}

module.exports = makeBoards
