const brain = require('brain.js')
const data = require('./helpers/assembleData')
const testBoard = require('./boardStuff/testBoard')
const findMaxIDX = require('./resultHandlers/getReccomendation').findMaxIDX
const getMove= require('./resultHandlers/getReccomendation').getMove
const network = new brain.NeuralNetwork([9, 9, 1])

network.train(data, {
  iterations:2000
})

const result = network.run(testBoard)

let Move = getMove(findMaxIDX(result), result)

console.log(Move)
