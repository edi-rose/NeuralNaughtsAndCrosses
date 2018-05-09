const getNetworkReccomendation = require('./network')
// This getNetwork function returns the networks reccomendations
function handleNetwork(data, team, board){
  console.log(JSON.parse(data))
  console.log(team)
  console.log(board)
  console.log(getNetworkReccomendation(JSON.parse(data), team, board))
  return 1
}


module.exports = handleNetwork
