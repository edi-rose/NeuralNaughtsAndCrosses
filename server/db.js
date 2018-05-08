const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function addBoard(board){
  const db = connection
  return connection('boards')
    .insert({board: board.newBoard})
}

function getCross(){
  const db = connection
  return connection('crossNetwork').where('id', 1)
}

function getNaught(){
  const db = connection
  return connection('naughtNetwork').where('id', 1)
}

module.exports = addBoard
