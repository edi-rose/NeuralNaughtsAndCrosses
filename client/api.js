import request from 'superagent'
var arrangeBoard = require('./arrangeBoard')

function addBoard(board){
  let newBoard = arrangeBoard(board)
  request
    .send('/api/newBoard')
    .then()
}
