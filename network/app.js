const network = require('./network.json')
const brain = require('brain.js')
const getReccomendedSqaureName = require('./resultHandlers/getReccomendation')
const testBoard = require('./boardStuff/testBoard')

var net = new brain.NeuralNetwork()

net.fromJSON(network)

function getNetworkReccomendation(board) {
  let run = net.toFunction();
  let output = run(board)
  let moveArray = getReccomendedSqaureName(output)
  console.log(moveArray)
  return moveArray
}

getNetworkReccomendation(testBoard)

module.exports = getNetworkReccomendation
