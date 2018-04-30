const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function addBoard(newBoard, testConn){
  const conn = testConn || connection

  return conn('boards').insert([{board: newBoard}])
}
