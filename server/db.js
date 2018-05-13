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
  return connection('crossNetwork').orderBy('id', 'desc').first()
}

//queries the db for the naughtNetwork
function getNaught(){
  const db = connection
  return connection('naughtNetwork').orderBy('id', 'desc').first()
}

//saves the db for the crossNetwork
function saveCross(json){
  const db = connection
  return connection('crossNetwork')
    .insert({'crossNetwork': JSON.stringify(json.json)}).where('id', 1)
}

//saves the db for the naughtNetwork
function saveNaught(json){
  const db = connection
  return connection('naughtNetwork')
    .insert({'naughtNetwork': JSON.stringify(json.json)}).where('id', 1)
}

module.exports = {
  addBoard: addBoard,
  getCross: getCross,
  getNaught: getNaught,
  saveNaught: saveNaught,
  saveCross: saveCross
}
