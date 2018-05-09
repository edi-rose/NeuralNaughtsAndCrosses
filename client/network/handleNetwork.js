const getNetworkReccomendation = require('./network')
// This getNetwork function returns the networks reccomendations
function handleNetwork(data, team, board){
  console.log(getNetworkReccomendation(JSON.parse(data), team, board))
  return getNetworkReccomendation(JSON.parse(data), team, board)
}


module.exports = handleNetwork
