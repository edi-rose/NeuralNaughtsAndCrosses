const brain = require('brain.js')
const data = require('./helpers/assembleData')
const testBoard = require('./boardStuff/testBoard')
const findMaxIDX = require('./resultHandlers/getReccomendation').findMaxIDX
const getMove= require('./resultHandlers/getReccomendation').getMove
const jsonNetwork = require('./network')

//This file trains the network which has been turned into a json and saved in network.json

const network = new brain.NeuralNetwork([9, 9, 1])

function train(){
  network.train(data, {
    iterations:2000
  }
  )
}

train()
let json = network.toJSON()
let layers = json.layers
console.log(layers)
console.log(layers[0])
console.log(layers[1])
console.log(layers[2])
