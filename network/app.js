const network = require('./network.json')
const brain = require('brain.js')
const getNames = require('./resultHandlers/getReccomendation')
const testBoard = require('./boardStuff/testBoard')
const boardToInput = require('./helpers/boardToInput')
var net = new brain.NeuralNetwork()

net.fromJSON(network)

function getNetworkReccomendation(board) {
  let input = boardToInput(board)
  let run = net.toFunction()
  let output = run(input)
  let moveArray = getNames(output)
  return moveArray
}


module.exports = getNetworkReccomendation
