const makeInput = require('./boardToInput')
const getSquare = require('./getSquare')
const mockBoards = require('../boardStuff/mockBoards')
const crossMove = require('../Bots/botMovesReact')

function getData() {
  let data =[]
  for (var i = 0; i < mockBoards.length; i++) {
    let obj = {}
    obj['input'] = makeInput(mockBoards[i])
    obj['output'] = getSquare(crossMove(mockBoards[i]))
    data.push(obj)
  }
  return data
}

let data =  getData()

module.exports = data
