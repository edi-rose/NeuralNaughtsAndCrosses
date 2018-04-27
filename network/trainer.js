const brain = require('brain.js')
const data = require('./helpers/assembleData')
const getData = require('./helpers/assembleData')

/*This file trains the network which has been turned into a json and saved in network.json
to create your own network uncomment the code at the bottom and chose a team in the
train function, then copy the json that is returned in the console.log*/

const network = new brain.NeuralNetwork([9, 9, 1])

function train(team){
  network.train(getData(team), {
    iterations:2000
  })
}

// train('naughts/crosses')
// console.log(network.toJSON().layers)
// console.log(network.toJSON().layers[1])
// console.log(network.toJSON().layers[2])
