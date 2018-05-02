import request from 'superagent'
var arrangeBoard = require('./arrangeBoard')

function saveBoard(board, callback){
  let newBoard = arrangeBoard(board)
  request.post('/api/newBoard')
    .send({board})
    .then(callback)
}

module.exports = saveBoard
