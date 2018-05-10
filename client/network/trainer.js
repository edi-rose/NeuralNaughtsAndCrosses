const brain = require('brain.js')
const crossMove = require('../Bots/botMovesReact').crossMove
const naughtMove = require('../Bots/botMovesReact').naughtMove

function trainNetwork(network, board){
  let output = getOutput(team, board)
  network.train(([{input: board, output: output]))
}

function getOutput(team, board){
  if(team == 'cross'){
    obj['output'] = getSquare(crossMove(boards[i]))
  }
  else if(team == 'naught'){
    obj['output'] = getSquare(naughtMove(boards[i]))
  }
  else {
    console.log('getData error -- team not found')
  }
}

module.exports = trainNetwork
