const express = require('express')
const bodyParser = require('body-parser')
const newBoard = require('./routes/api')

const server = express()

server.get('/test', function(req, res){
  res.send('hello world')
})

server.use(express.static('public'))
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

server.use('/api/newBoard', newBoard)

module.exports = server
