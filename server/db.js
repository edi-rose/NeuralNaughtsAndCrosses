const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)
const handleBoard = require('../network/db/handleNewBoard')

function addBoard(board){
  const db = connection
  handleBoard(board)
  return connection('boards')
    .insert({board: board.newBoard})
}

module.exports = addBoard
