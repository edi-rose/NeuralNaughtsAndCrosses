var defend = require('./functions/defense.js').defend
var attack = require('./functions/attack.js').attack
var smartMove = require('./functions/smartMove.js').smartMove
var defendPin = require('./functions/DefendDoublePin').defendPin
var board = require('../board')

function crossMove(board){
      if(attack('cross', board)){
        board[attack('cross', board)].teamName ='cross'
        if(attack('cross', board) == false){
          console.log('attack')
        }
        return attack('cross', board)
      }
      else if(defend('cross', board)){
        board[defend('cross', board)].teamName ='cross'
        if(defend('cross', board) == false){
          console.log('defense')
        }
        return defend('cross', board)
        }
        else if(smartMove('cross', board)){
          board[smartMove('cross', board)].teamName ='cross'
          if(smartMove('cross', board) == false){
            console.log('smartMove cross')
          }
          return smartMove('cross', board)
        }
        else if(smartMove('naught', board)){
          board[smartMove('naught', board)].teamName ='cross'
          if(smartMove('naught', board) == false){
            console.log('smartMove naught')
          }
          return smartMove('naught', board)
        }
      else {
        for (var i = 0; i < board.length; i++) {
          if(board[i].teamName == 'none'){
            board[i].teamName = 'cross'
            return i
          }
        }
      }
}


module.exports= crossMove
