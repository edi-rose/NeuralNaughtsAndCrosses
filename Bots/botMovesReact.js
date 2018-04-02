var defend = require('./functions/defense.js').defend
var attack = require('./functions/attack.js').attack
var smartMove = require('./functions/smartMove.js').smartMove
var defendPin = require('./functions/DefendDoublePin').defendPin

function crossMove(board){
      if(attack('cross', board)){
        board[attack('cross', board)].teamName ='cross'
        return board
      }
      else if(defend('cross', board)){
        board[defend('cross', board)].teamName ='cross'
        return board
        }
        else if(smartMove('cross', board)){
          board[smartMove('cross', board)].teamName ='cross'
          return board
        }
        else if(smartMove('naught', board)){
          board[smartMove('cross', board)].teamName ='cross'
          return board
        }
      else {
        for (var i = 0; i < board.length; i++) {
          if(board[i].teamName == 'none'){
            board[i].teamName = 'cross'
            return board
          }
        }
      }
}

module.exports= crossMove
