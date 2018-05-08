import request from 'superagent'
var arrangeBoard = require('./arrangeBoard')

//makes api post request with each board iteration
function saveBoard(board){
  let newBoard = arrangeBoard(board)
  request
  .post('/api')
    .send({newBoard})
    .end((err, res) => {

    })
}

//makes a get request for reccomendations on naught moves
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

//makes a get request for reccomendations on cross moves
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
