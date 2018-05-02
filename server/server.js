const express = require('express')
const bodyParser = require('body-parser')
const newBoard = require('./routes/api')

const server = express()

server.use(express.static('public'))
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

server.use('/api', newBoard)

module.exports = server
