const express = require('express')
const bodyParser = require('body-parser')
const newBoard = require('./routes/api')

const server = express()

server.get('/test', function(req, res){
  res.send('hello world')
})

server.post('/api/newBoard', newBoard)

module.exports = server
