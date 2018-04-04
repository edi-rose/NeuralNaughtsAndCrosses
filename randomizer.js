const board = require('./board')
const randomizeBoard = require('./randomizeFunction')

function getNumber() {
  return Math.floor(Math.random()*10 + 5)
}


function makeBoards(amount){
  let arr = []
  for (var i = 0; i < amount; i++) {
    arr.push(randomizeBoard([...board], getNumber()))
  }
  return arr
}
