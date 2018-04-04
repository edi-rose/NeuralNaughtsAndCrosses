const brain = require('brain.js')
const crossMove = require('./Bots/botMovesReact')
const makeBoards = require('./randomizer')
const board = require('./board')

let boards = makeBoards(9, board)

const network = new brain.NeuralNetwork()

network.train([
 {input:[boards[0]], output: [crossMove(boards[0])]},
 {input:[boards[1]], output: [crossMove(boards[1])]},
 {input:[boards[2]], output: [crossMove(boards[2])]},
 {input:[boards[3]], output: [crossMove(boards[3])]},
 {input:[boards[4]], output: [crossMove(boards[4])]},
 {input:[boards[5]], output: [crossMove(boards[5])]},
 {input:[boards[6]], output: [crossMove(boards[6])]},
 {input:[boards[7]], output: [crossMove(boards[7])]}
])

const result = network.run([boards[8]])

console.log(crossMove(boards[2]))

function check(){
  for (var i = 0; i < 8; i++) {
    if(crossMove(boards[i]) == false){
      console.log('false!: ', boards[i])
    }
  }
}

check()
console.log(result)
