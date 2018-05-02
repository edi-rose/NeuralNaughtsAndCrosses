const crossNetwork = require('./crossNetwork.json')
const naughtNetwork = require('./naughtNetwork.json')
const brain = require('brain.js')
const getNames = require('./resultHandlers/getReccomendation')
const testBoard = require('./boardStuff/testBoard')
const boardToInput = require('./helpers/boardToInput')

/* this file takes the json of any network, turns it into a network variable
and can then get the networks reccommendations given a board and a team */

var net = new brain.NeuralNetwork()

function getNetworkReccomendation(board, team) {
  let input = boardToInput(board, team)
  if(team == 'cross'){
    net.fromJSON(crossNetwork)
  }
  else if(team == 'naught'){
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
