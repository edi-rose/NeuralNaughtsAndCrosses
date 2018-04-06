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

module.exports = squares
