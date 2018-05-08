const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

//inserts a board to thedb 
function addBoard(board){
  const db = connection
  return connection('boards')
    .insert({board: board.newBoard})
}

//queries the db for the crossNetwork
function getCross(){
  const db = connection
  return connection('crossNetwork').where('id', 1)
}

//queries the db for the naughtNetwork
function getNaught(){
  const db = connection
  return connection('naughtNetwork').where('id', 1)
}

module.exports = addBoard
