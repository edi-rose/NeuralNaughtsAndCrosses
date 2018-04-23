const makeInput = require('./boardToInput')
const getSquare = require('./getSquare')
const makeBoards = require('../boardStuff/makeBoards')
const crossMove = require('../Bots/botMovesReact')

let boards = makeBoards(10000)

function getData() {
  let data =[]
  for (var i = 0; i < boards.length; i++) {
    let obj = {}
    obj['input'] = makeInput(boards[i])
    obj['output'] = getSquare(crossMove(boards[i]))
    data.push(obj)
  }
  return data
}

let data =  getData()

module.exports = data
