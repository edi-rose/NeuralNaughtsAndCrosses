import request from 'superagent'
var arrangeBoard = require('./arrangeBoard')

function saveBoard(board){
  let newBoard = arrangeBoard(board)
  request
  .post('/api')
    .send({newBoard})
    .end((err, res) => {

    })
}

module.exports = saveBoard
