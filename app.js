const brain = require('brain.js')
const board = require('./board').board
const randomizeBoard = require('./board').randomizeBoard
const crossMove = require('./Bots/botMovesReact')

const network = new brain.NeuralNetwork()
let rdmBoard1 = randomizeBoard(board)
let rdmBoard2 = randomizeBoard(board)
let rdmBoard3 = randomizeBoard(board)
let rdmBoard4 = randomizeBoard(board)
let rdmBoard5 = randomizeBoard(board)
let rdmBoard6 = randomizeBoard(board)
let rdmBoard7 = randomizeBoard(board)
let rdmBoard8 = randomizeBoard(board)


network.train([
{input:rdmBoard1, output: crossMove(rdmBoard1)},
{input:rdmBoard2, output: crossMove(rdmBoard2)},
{input:rdmBoard3, output: crossMove(rdmBoard3)},
{input:rdmBoard4, output: crossMove(rdmBoard4)},
{input:rdmBoard5, output: crossMove(rdmBoard5)},
{input:rdmBoard6, output: crossMove(rdmBoard6)},
{input:rdmBoard7, output: crossMove(rdmBoard7)},
{input:rdmBoard8, output: crossMove(rdmBoard8)},
])

const result = network.run([])



console.log(result)
