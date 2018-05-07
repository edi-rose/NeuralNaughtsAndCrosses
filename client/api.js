import request from 'superagent'
var arrangeBoard = require('./arrangeBoard')

function saveBoard(board){
  console.log(board)
  let newBoard = arrangeBoard(board)
  request
  .post('/api')
    .send({newBoard})
    .end((err, res) => {

    })
}

module.exports = saveBoard
