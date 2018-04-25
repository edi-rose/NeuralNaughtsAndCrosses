const network = require('./network.json')
const brain = require('brain.js')
const getReccomendedSqaureName = require('./resultHandlers/getReccomendation')

var net = new brain.NeuralNetwork()

net.fromJSON(network)

function getNetworkReccomendation(board) {
  let run = net.toFunction();
  let output = run(board);
  let move = getReccomendedSqaureName(output)
  return move
}

module.exports = getNetworkReccomendation
