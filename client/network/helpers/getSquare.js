const squares = require('./squares')

//This function takes square idx that the bot wants to claim and turns it into
//an appropriate object e.g {topLeft: 1} for the output data
function getSquare(num){
  let sqaure = squares.filter(square => square.id == num)
  let obj ={}
  obj[sqaure[0].name] = 1
  return obj
}

module.exports = getSquare
