const network = require('./network.json')
const testBoard = require('./boardStuff/testBoard')
const brain = require('brain.js')

console.log(network)
var net = new brain.NeuralNetwork()

net.fromJSON(network)

var run = net.toFunction();
var output = run(testBoard);
console.log(run.toString())
