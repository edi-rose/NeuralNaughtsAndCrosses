import request from 'superagent'
var arrangeBoard = require('./arrangeBoard').arrangeBoard
var handleNetwork = require('./network/handleNetwork')
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
    .get('/naughtNetwork')
    .then((err, data) => {
      if(err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

//makes a get request for reccomendations on cross moves
function getCross(callback, team, board) {
  request
    .get('/api')
    .then((data, err) => {
      if(err) {
        console.log(err)
        callback(err)
      } else {
        return callback(data.body[0].crossNetwork, team, board)
      }
    })
}

module.exports = {saveBoard: saveBoard, getCross:getCross, getNaught:getNaught}
