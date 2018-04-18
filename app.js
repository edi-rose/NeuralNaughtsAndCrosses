const brain = require('brain.js')
const data = require('./helpers/assembleData')
const testBoard = require('./boardStuff/testBoard')
const findMaxIDX = require('./resultHandlers/getReccomendation').findMaxIDX
const getMove= require('./resultHandlers/getReccomendation').getMove

//This file holds, trains and runs the network
const network = new brain.NeuralNetwork([9, 9, 1])

network.train(data, {
  iterations:2000
})

const result = network.run(testBoard)
let networkMove = getMove(findMaxIDX(result), result)


module.exports = networkMove
