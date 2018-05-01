const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.get('/test', function(req, res){
  res.send('hello world')
})

server.post('/test', function(req, res){
  res.send('recieved post request')
}
)

module.exports = server
