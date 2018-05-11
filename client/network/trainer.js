const brain = require('brain.js')
const crossMove = require('./Bots/botMovesReact').crossMove
const naughtMove = require('./Bots/botMovesReact').naughtMove
const makeInput = require('./helpers/boardToInput')
const getSquare = require('./helpers/getSquare')
const saveNetwork = require('../api.js').saveNetwork

function trainNetwork(network, team, board){
  let output = getOutput(team, board)
  network.train(([{input: makeInput(board), output: output}]))
  let json = network.toJSON()
  saveNetwork(json, team)
}

function getOutput(team, board){
  if(team == 'cross'){
    console.log(crossMove(board))
    return getSquare(crossMove(board))
  }
  else if(team == 'naught'){
    console.log('board at trainer: ', board)
    console.log(naughtMove(board))
    return  getSquare(naughtMove(board))
  }
  else {
    console.log('getData error -- team not found')
  }
}

module.exports = trainNetwork
