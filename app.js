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

class Square {
  constructor(id, name){
    this.prob = 0
    this.id = id
    this.name = name
  }
}

let tl = new Square(0, 'tl')
let tm = new Square(1, 'tm')
let tr = new Square(2, 'tr')
let ml = new Square(3, 'ml')
let mm = new Square(4, 'mm')
let mr = new Square(5, 'mr')
let bl = new Square(6, 'bl')
let bm = new Square(7, 'bm')
let br = new Square(8, 'br')

let squares = [tl, tm, tr, ml, mm, mr, bl, bm, br]

function getSquare(num){
  let theGuy = squares.filter(square => square.id == num)
  return theGuy[0].name + ':'+ '1'
}
//console.log(squares[1].name)
console.log(getSquare(2))
// console.log('square: ', squares)


function check(){
  for (var i = 0; i < 7; i++) {
    if(crossMove(boards[i]) == false){
      console.log('false!: ', boards[i])
    }
  }
}

// check()
