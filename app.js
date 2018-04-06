const brain = require('brain.js')
const crossMove = require('./Bots/botMovesReact')
const mockBoards = require('./mockBoards')
const board = require('./board')
const squares = require('./squares')
const makeInput = require('./boardToInput')

const network = new brain.NeuralNetwork()

network.train([
 {input:makeInput(mockBoards[0]), output: getSquare(crossMove(mockBoards[0]))},
 {input:makeInput(mockBoards[1]), output: getSquare(crossMove(mockBoards[1]))},
 {input:makeInput(mockBoards[2]), output: getSquare(crossMove(mockBoards[2]))},
 {input:makeInput(mockBoards[3]), output: getSquare(crossMove(mockBoards[3]))},
 {input:makeInput(mockBoards[4]), output: getSquare(crossMove(mockBoards[4]))},
 {input:makeInput(mockBoards[5]), output: getSquare(crossMove(mockBoards[5]))},
 {input:makeInput(mockBoards[6]), output: getSquare(crossMove(mockBoards[6]))}
])

const result = network.run([mockBoards[7]])

function getSquare(num){
  let theGuy = squares.filter(square => square.id == num)
  let obj ={}
  obj[theGuy[0].name] = 1
  return obj
}
