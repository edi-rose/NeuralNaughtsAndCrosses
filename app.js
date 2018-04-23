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
  }
  )
  return network.toJSON().layers[1]
}

let layers = train()

function logWeights(){
  console.log('0', layers['0'].weights)
  console.log('1', layers['1'].weights)
  console.log('2', layers['2'].weights)
  console.log('3', layers['3'].weights)
}
console.log(layers)
//logWeights()


const result = network.run(testBoard)
let networkMove = getMove(findMaxIDX(result), result)
