let topLeft = {teamName:'none', row:0, col:0, D1: true}
let topMid = {teamName:'none', row:0, col:1}
let topRight = {teamName:'none', row:0, col:2, D2: true}
let midLeft = {teamName:'none', row:1, col:0}
let midMid = {teamName:'none', row:1, col:1, D1: true, D2: true}
let midRight = {teamName:'none', row:1, col:2}
let botLeft = {teamName:'none', row:2, col:0, D2: true}
let botMid = {teamName:'none', row:2, col:1}
let botRight = {teamName:'none', row:2, col:2, D1: true}

const board1 = [topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botRight]
const board2 =
[{teamName:'naught', row:0, col:0, D1: true},
{teamName:'naught', row:0, col:1},
{teamName:'none', row:0, col:2, D2: true},
{teamName:'none', row:1, col:0},
{teamName:'none', row:1, col:1, D1: true, D2: true},
{teamName:'none', row:1, col:2},
{teamName:'none', row:2, col:0, D2: true},
{teamName:'none', row:2, col:1},
{teamName:'cross', row:2, col:2, D1: true}]
const board3 =
[{teamName:'cross', row:0, col:0, D1: true},
{teamName:'none', row:0, col:1},
{teamName:'none', row:0, col:2, D2: true},
{teamName:'none', row:1, col:0},
{teamName:'naught', row:1, col:1, D1: true, D2: true},
{teamName:'none', row:1, col:2},
{teamName:'none', row:2, col:0, D2: true},
{teamName:'none', row:2, col:1},
{teamName:'none', row:2, col:2, D1: true}]
const board4 =
[{teamName:'cross', row:0, col:0, D1: true},
{teamName:'naught', row:0, col:1},
{teamName:'none', row:0, col:2, D2: true},
{teamName:'none', row:1, col:0},
{teamName:'none', row:1, col:1, D1: true, D2: true},
{teamName:'none', row:1, col:2},
{teamName:'none', row:2, col:0, D2: true},
{teamName:'none', row:2, col:1},
{teamName:'none', row:2, col:2, D1: true}]
const board5 =
[{teamName:'cross', row:0, col:0, D1: true},
{teamName:'none', row:0, col:1},
{teamName:'none', row:0, col:2, D2: true},
{teamName:'naught', row:1, col:0},
{teamName:'naught', row:1, col:1, D1: true, D2: true},
{teamName:'none', row:1, col:2},
{teamName:'cross', row:2, col:0, D2: true},
{teamName:'none', row:2, col:1},
{teamName:'none', row:2, col:2, D1: true}]
const board6 =
[{teamName:'none', row:0, col:0, D1: true},
{teamName:'none', row:0, col:1},
{teamName:'none', row:0, col:2, D2: true},
{teamName:'cross', row:1, col:0},
{teamName:'none', row:1, col:1, D1: true, D2: true},
{teamName:'naught', row:1, col:2},
{teamName:'naught', row:2, col:0, D2: true},
{teamName:'none', row:2, col:1},
{teamName:'cross', row:2, col:2, D1: true}]
const board7 =
[{teamName:'cross', row:0, col:0, D1: true},
{teamName:'naught', row:0, col:1},
{teamName:'cross', row:0, col:2, D2: true},
{teamName:'naught', row:1, col:0},
{teamName:'none', row:1, col:1, D1: true, D2: true},
{teamName:'none', row:1, col:2},
{teamName:'none', row:2, col:0, D2: true},
{teamName:'none', row:2, col:1},
{teamName:'none', row:2, col:2, D1: true}]
const board8 =
[{teamName:'none', row:0, col:0, D1: true},
{teamName:'none', row:0, col:1},
{teamName:'none', row:0, col:2, D2: true},
{teamName:'none', row:1, col:0},
{teamName:'none', row:1, col:1, D1: true, D2: true},
{teamName:'none', row:1, col:2},
{teamName:'none', row:2, col:0, D2: true},
{teamName:'naught', row:2, col:1},
{teamName:'cross', row:2, col:2, D1: true}]


let mockBoards = [board1, board2, board3, board4, board5, board6, board7, board8]


module.exports = mockBoards
