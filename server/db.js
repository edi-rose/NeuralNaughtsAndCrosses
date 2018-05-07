const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function addBoard(board){
  const db = connection
  return connection('boards')
    .insert({board: board.newBoard})
}

module.exports = addBoard
