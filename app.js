const brain = require('brain.js')
const data = require('./helpers/assembleData')
const testBoard = require('./boardStuff/testBoard')
const findMaxIDX = require('./resultHandlers/getReccomendation').findMaxIDX
const getMove= require('./resultHandlers/getReccomendation').getMove

//This file holds, trains and runs the network
const network = new brain.NeuralNetwork([9, 9, 1])

function train(){
  network.train(data, {
    iterations:2000
  })
  return network.toJSON().layers[0]
}

let layers = train()[1]

for (var i = 0; i < layers.length; i++) {
  console.log(layers[i].weights)
}

const result = network.run(testBoard)
let networkMove = getMove(findMaxIDX(result), result)
