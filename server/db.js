const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function addBoard(board){
  const db = connection
  return connection('boards')
    .insert({id: 1, board: board})
}

module.exports = addBoard
