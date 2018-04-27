//This is the board on which the bots can play and be randomized. 

let topLeft = {name:'topLeft', teamName:'none', row:0, col:0, D1: true}
let topMid = {name:'topMid', teamName:'none', row:0, col:1}
let topRight = {name:'topRight', teamName:'none', row:0, col:2, D2: true}
let midLeft = {name:'midLeft', teamName:'none', row:1, col:0}
let midMid = {name:'midMid', teamName:'none', row:1, col:1, D1: true, D2: true}
let midRight = {name:'midRight', teamName:'none', row:1, col:2}
let botLeft = {name:'botLeft', teamName:'none', row:2, col:0, D2: true}
let botMid = {name:'botMid', teamName:'none', row:2, col:1}
let botRight = {name:'botRight', teamName:'none', row:2, col:2, D1: true}

const board = [topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botRight]

module.exports = board
