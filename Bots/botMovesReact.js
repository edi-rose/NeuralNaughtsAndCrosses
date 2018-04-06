var defend = require('./functions/defense.js').defend
var attack = require('./functions/attack.js').attack
var smartMove = require('./functions/smartMove.js').smartMove
var defendPin = require('./functions/DefendDoublePin').defendPin
var board = require('../board')

function crossMove(board){
      if(attack('cross', board)){
        if(attack('cross', board) == false){
          console.log('attack')
        }
        return attack('cross', board)
      }
      else if(defend('cross', board)){
        if(defend('cross', board) == false){
          console.log('defense')
        }
        return defend('cross', board)
        }
        else if(smartMove('cross', board)){
          if(smartMove('cross', board) == false){
            console.log('smartMove cross')
          }
          return smartMove('cross', board)
        }
        else if(smartMove('naught', board)){
          if(smartMove('naught', board) == false){
            console.log('smartMove naught')
          }
          return smartMove('naught', board)
        }
      else {
        for (var i = 0; i < board.length; i++) {
          if(board[i].teamName == 'none'){
            return i
          }
        }
      }
}


module.exports= crossMove
