//This file is used to match input data to the output format. Giving it a name,
//and ID for the getData function in assembleData.js

class Square {
  constructor(id, name){
    this.prob = 0
    this.id = id
    this.name = name
  }
}

let tl = new Square(0, 'topLeft')
let tm = new Square(1, 'topMid')
let tr = new Square(2, 'topRight')
let ml = new Square(3, 'midLeft')
let mm = new Square(4, 'midMid')
let mr = new Square(5, 'midRight')
let bl = new Square(6, 'botLeft')
let bm = new Square(7, 'botMid')
let br = new Square(8, 'botRight')

let squares = [tl, tm, tr, ml, mm, mr, bl, bm, br]

module.exports = squares
