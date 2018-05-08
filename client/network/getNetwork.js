const getCrossNet = require('../api').getCross
const getNaughtNet = require('../api').getCross

// This getNetwork function returns the networks reccomendations
function getNetwork(board, team){
let options = makeRequest(team)
console.log(options)
}

function makeRequest(team){
  if(team == 'cross'){
    return getCrossNet()
  }
  else{
    return getNaughtNet()
  }
}
