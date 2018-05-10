const express = require('express')
const bodyParser = require('body-parser')
const newBoard = require('./routes/api')
const cross = require('./routes/cross')
const naught = require('./routes/naught')

const server = express()

server.use(express.static('public'))
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

server.use('/api', newBoard)

server.use('/cross', cross)
server.use('/naught', naught)

module.exports = server
