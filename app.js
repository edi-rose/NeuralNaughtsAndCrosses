const brain = require('brain.js')
const data = require('./helpers/assembleData')
const testBoard = require('./boardStuff/testBoard')

const network = new brain.NeuralNetwork([9, 9, 1])

network.train(data, {
  iterations:2000
})

const result = network.run(testBoard)

let resultArray = Object.values(result)

function findMaxIDX(){
  let currentMax = 0
  let idxMax = 0
  resultArray.map((x, idx) => {
    //console.log(idx)
    if(x > currentMax){
      currentMax = resultArray[idx]
      idxMax = idx
    }
  })
  return idxMax
}

function getMove(idx){
  return Object.keys(result)[idx]
}
