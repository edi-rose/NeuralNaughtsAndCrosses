const brain = require('brain.js')
const data = require('./helpers/assembleData')
const mockBoards = require('./boardStuff/mockBoards')

const network = new brain.NeuralNetwork([9, 9, 1])

network.train(data, {
  iterations:2000
})

const result = network.run([mockBoards[7]])

console.log(result)
