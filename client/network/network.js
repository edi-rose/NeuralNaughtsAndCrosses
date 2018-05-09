const brain = require('brain.js')
const getNames = require('./resultHandlers/getReccomendation')
const boardToInput = require('./boardToInput')

/* this file takes the json of any network, turns it into a network variable
and can then get the networks reccommendations given a board and a team */

var net = new brain.NeuralNetwork()

function getNetworkReccomendation(json, team, board) {
  let input = boardToInput(board, team)
  net.fromJSON(json)
  let run = net.toFunction()
  let output = run(input)
  let moveArray = getNames(output)
  return moveArray
}

module.exports = getNetworkReccomendation
