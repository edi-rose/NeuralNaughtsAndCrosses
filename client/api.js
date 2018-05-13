import request from 'superagent'
var arrangeBoard = require('./arrangeBoard').arrangeBoard
//makes api post request with each board iteration
function saveBoard(board){
  let newBoard = arrangeBoard(board)
  request
  .post('/api')
    .send({newBoard})
    .end((err, res) => {
    })
}

function saveNetwork(json, team){
  if(team == 'cross'){
    request
    .post('/cross')
    .send({json})
    .end((err, res) => {
      if(err){
        console.log('api error at saveBoard: ', err)
      }
    })
  }
  else if(team =='naught'){
    request
    .post('/naught')
    .send({json})
    .end((err, res) => {
      if(err){
        console.log('api error at saveBoard: ', err)
      }
    })
  }
  else{
    console.log('team error in save network')
  }
}

//makes a get request for reccomendations from the networks
function getNetwork(callback, team, board) {
  if(team == 'cross'){
    request
      .get('/cross')
      .then((data, err) => {
        if(err) {
          console.log(err)
        } else {
          return callback(data.body.crossNetwork, team, board)
        }
      })
  }
  else {
    request
      .get('/naught')
      .then((data, err) => {
        if(err) {
          console.log(err)
        } else {
          return callback(data.body.naughtNetwork, team, board)
        }
      })
  }
}

module.exports = {saveBoard: saveBoard, getNetwork: getNetwork, saveNetwork: saveNetwork}
