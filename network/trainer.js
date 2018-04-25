const brain = require('brain.js')
const data = require('./helpers/assembleData')
const jsonNetwork = require('./network')

//This file trains the network which has been turned into a json and saved in network.json

const network = new brain.NeuralNetwork([9, 9, 1])

function train(){
  network.train(data, {
    iterations:2000
  })
}
