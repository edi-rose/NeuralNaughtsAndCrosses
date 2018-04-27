const makeInput = require('./boardToInput')
const getSquare = require('./getSquare')
const makeBoards = require('../boardStuff/makeBoards')
const crossMove = require('../Bots/botMovesReact').crossMove
const naughtMove = require('../Bots/botMovesReact').naughtMove

let boards = makeBoards(2000)

//This file assembles all the input and output data for the network to be trained on.

function getData(team) {
  let data =[]
  for (var i = 0; i < boards.length; i++) {
    let obj = {}
    obj['input'] = makeInput(boards[i])
    if(team == 'cross'){
      obj['output'] = getSquare(crossMove(boards[i]))
    }
    else if(team == 'naught'){
      obj['output'] = getSquare(naughtMove(boards[i]))
    }
    else {
      console.log('getData error -- team not found')
    }
    data.push(obj)
  }
  return data
}

module.exports = getData
