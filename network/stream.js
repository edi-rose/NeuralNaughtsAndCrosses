let crossNetworkJson = require('./crossNetwork')
let naughtNetworkJson = require('./naughtNetwork')
const naughtMove = require('./Bots/botMovesReact').naughtMove
const crossMove = require('./Bots/botMovesReact').crossMove

var naught = new brain.NeuralNetwork()

function trainNaught(board) {
  let net = naught.fromJSON(naughtNetworkJson)
  net.train({input: board, output:})
}
