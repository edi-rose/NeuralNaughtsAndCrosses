const getCrossNet = require('../api').getCross
const getNaughtNet = require('../api').getCross

function getNetwork(board, team){
let options = makeRequest(team)

}

function makeRequest(team){
  if(team == 'cross'){
    return getCrossNet()
  }
  else{
    return getNaughtNet()
  }
}
