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

//makes a get request for reccomendations from the networks
function getNetwork(callback, team, board) {
  if(team == 'cross'){
    console.log('cross')
    request
      .get('/cross')
      .then((data, err) => {
        if(err) {
          console.log(err)
          callback(err)
        } else {
          return callback(data.body[0].crossNetwork, team, board)
        }
      })
  }
  else {
    console.log('naught')
    request
      .get('/naught')
      .then((data, err) => {
        console.log('data: ', data)
        console.log('err: ', err)
        if(err) {
          console.log(err)
          callback(err)
        } else {
          return callback(data.body[0].naughtNetwork, team, board)
        }
      })
  }
}

module.exports = {saveBoard: saveBoard, getNetwork: getNetwork}
