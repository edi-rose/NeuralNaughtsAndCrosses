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

function getNaught (callback) {
  request
    .get('/naught')
    .then((err, data) => {
      if(err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function getCross (callback) {
  request
    .get('/cross')
    .then((err, data) => {
      if(err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

module.exports = {saveBoard: saveBoard, getCross:getCross, getNaught:getNaught}
