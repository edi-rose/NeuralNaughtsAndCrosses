import request from 'superagent'
var arrangeBoard = require('./arrangeBoard')

function saveBoard(board){
  console.log(board)
  let newBoard = arrangeBoard(board)
  request
  .post('/api')
    .send({newBoard})
    .end((err, res) => {
      console.log('board: ', {newBoard})
      console.log('err: ', err)
      console.log('res: ', res)
    })
}

module.exports = saveBoard
