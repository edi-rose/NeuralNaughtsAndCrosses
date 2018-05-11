const brain = require('brain.js')
const getNames = require('./resultHandlers/getNames')
const boardToInput = require('./helpers/boardToInput')
const trainNetwork = require('./trainer')
/* this file takes the json of any network, turns it into a network variable
and can then get the networks reccommendations given a board and a team */

function getNetworkReccomendation(json, team, board) {
  console.log('getNetworkReccomendation called')
  var net = new brain.NeuralNetwork()
  let input = boardToInput(board, team)
  net.fromJSON(json)
  let run = net.toFunction()
  let output = run(input)
  console.log('output: ', output)
  let moveArray = getNames(output)
  trainNetwork(net, team, board)
  console.log(moveArray)
  return moveArray
}

module.exports = getNetworkReccomendation
