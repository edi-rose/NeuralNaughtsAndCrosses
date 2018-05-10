const brain = require('brain.js')
const crossMove = require('./Bots/botMovesReact').crossMove
const naughtMove = require('./Bots/botMovesReact').naughtMove
const makeInput = require('./helpers/boardToInput')
const getSquare = require('./helpers/getSquare')

function trainNetwork(network, team, board){
  console.log('board: ', makeInput(board))
  console.log('team: ', team)
  let output = getOutput(team, board)
  console.log('output', output)
  network.train(([{input: makeInput(board), output: output}]))
}

function getOutput(team, board){
  if(team == 'cross'){
    return getSquare(crossMove(board))
  }
  else if(team == 'naught'){
    return  getSquare(naughtMove(board))
  }
  else {
    console.log('getData error -- team not found')
  }
}

module.exports = trainNetwork
