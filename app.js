const network = require('./network.json')
const testBoard = require('./boardStuff/testBoard')
const brain = require('brain.js')
const getMove = require('./resultHandlers/getReccomendation')

var net = new brain.NeuralNetwork()

net.fromJSON(network)

let run = net.toFunction();
let output = run(testBoard);
let move = getMove(output)
console.log(move)
