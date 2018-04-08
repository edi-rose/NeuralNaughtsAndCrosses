const brain = require('brain.js')
const data = require('./helpers/assembleData')
const mockBoards = require('./boardStuff/mockBoards')

const network = new brain.NeuralNetwork()

network.train(data)

const result = network.run([mockBoards[7]])

console.log(result)
