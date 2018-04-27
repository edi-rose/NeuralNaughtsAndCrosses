var defend = require('./functions/defense.js').defend
var attack = require('./functions/attack.js').attack
var smartMove = require('./functions/smartMove.js').smartMove
var defendPin = require('./functions/DefendDoublePin').defendPin


/* This crossMove and naughtMove each take a board and return the correct square
to take. They call upon defend, attack, smartmove and defendpin functions. I'm
using these bots to create the expected output for the training data.*/


function crossMove(board){
      if(attack('cross', board)){
        return attack('cross', board)
      }
      else if(defend('cross', board)){
        return defend('cross', board)
        }
        else if(smartMove('cross', board)){
          return smartMove('cross', board)
        }
        else if(smartMove('naught', board)){
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

function naughtMove(board){
      if(attack('naught', board)){
        return attack('naught', board)
      }
      else if(defend('naught', board)){
        return defend('naught', board)
        }
        else if(smartMove('naught', board)){
          return smartMove('naught', board)
        }
        else if(smartMove('cross', board)){
          return smartMove('cross', board)
        }
      else {
        for (var i = 0; i < board.length; i++) {
          if(board[i].teamName == 'none'){
            return i
          }
        }
      }
}


module.exports= {crossMove: crossMove, naughtMove: naughtMove}
