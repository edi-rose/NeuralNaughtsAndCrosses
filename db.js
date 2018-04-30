const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function addBoard(newBoard, testConn){
  const conn = testConn || connection

  return conn('boards').insert([{board: newBoard}])
}

function getBoards (testConn) {
  const conn = testConn || connection
  return conn('donors').select()
}

function getBoard (id, testConn) {
  const conn = testConn || connection
  return conn('donors').where('id', id)
}

module.exports = {
  getBoards: getBoards,
  getBoard: getBoard,
  addBoard: addBoard
}
