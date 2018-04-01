var defend = require('./functions/defense.js').defend
var attack = require('./functions/attack.js').attack
var smartMove = require('./functions/smartMove.js').smartMove
var defendPin = require('./functions/DefendDoublePin').defendPin

function CrossMove(board){
      if(attack('cross', board)){
        return attack('cross', board)
      }
      else if(defend('cross', board)){
        return defend('cross', board)
        }
        else if(smartMove('cross', board)){
          return smartMove('cross', board)
        }
        else if(smartMove('cross', board)){
          return smartMove('cross', board)
        }
      else {
        for (var i = 0; i < board.length; i++) {
          if(board[i].teamName == 'none'){
            return board[i]
          }
        }
      }
}

module.exports= crossMove
