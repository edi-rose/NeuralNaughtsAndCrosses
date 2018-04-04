const brain = require('brain.js')
const crossMove = require('./Bots/botMovesReact')
const boards = requre('./randomizer')

const network = new brain.NeuralNetwork()

// network.train([
// {input:rdmBoard1, output: crossMove(rdmBoard1)},
// {input:rdmBoard2, output: crossMove(rdmBoard2)},
// {input:rdmBoard3, output: crossMove(rdmBoard3)},
// {input:rdmBoard4, output: crossMove(rdmBoard4)},
// {input:rdmBoard5, output: crossMove(rdmBoard5)},
// {input:rdmBoard6, output: crossMove(rdmBoard6)},
// {input:rdmBoard7, output: crossMove(rdmBoard7)},
// {input:rdmBoard8, output: crossMove(rdmBoard8)},
// ])

const result = network.run([])



//console.log(result)
