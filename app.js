const brain = require('brain.js')
const data = require('./helpers/assembleData')
const testBoard = require('./boardStuff/testBoard')

const network = new brain.NeuralNetwork([9, 9, 1])

network.train(data, {
  iterations:2000
})

const result = network.run(testBoard)

console.log(result)
