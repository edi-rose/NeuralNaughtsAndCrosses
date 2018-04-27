const crossNetwork = require('./crossNetwork.json')
const naughtNetwork = require('./naughtNetwork.json')
const brain = require('brain.js')
const getNames = require('./resultHandlers/getReccomendation')
const testBoard = require('./boardStuff/testBoard')
const boardToInput = require('./helpers/boardToInput')


var net = new brain.NeuralNetwork()

function getNetworkReccomendation(board, team) {
  let input = boardToInput(board, team)
  if(team == 'cross'){
    net.fromJSON(crossNetwork)
  }
  else if(team == 'naught'){
    console.log('naught network called')
    net.fromJSON(naughtNetwork)
  }
  else {
    console.log('teamName error -- on getNetworkReccomendation ')
  }
  let run = net.toFunction()
  let output = run(input)
  let moveArray = getNames(output)
  return moveArray
}

module.exports = getNetworkReccomendation
