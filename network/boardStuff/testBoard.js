const makeInput = require('../helpers/boardToInput')

/*this is the test board I use when testing the network */

let topLeft = {teamName:'cross', row:0, col:0, D1: true}
let topMid = {teamName:'none', row:0, col:1}
let topRight = {teamName:'cross', row:0, col:2, D2: true}
let midLeft = {teamName:'none', row:1, col:0}
let midMid = {teamName:'none', row:1, col:1, D1: true, D2: true}
let midRight = {teamName:'naught', row:1, col:2}
let botLeft = {teamName:'none', row:2, col:0, D2: true}
let botMid = {teamName:'none', row:2, col:1}
let botRight = {teamName:'naught', row:2, col:2, D1: true}

const testBoard = [topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botRight]



module.exports = makeInput(testBoard)
