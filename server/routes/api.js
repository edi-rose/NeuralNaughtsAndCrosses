const express = require('express')
const router = express.Router()

var addBoard = require('../db')

router.post('/', (req, res) => {
  console.log('reached the server')
  addBoard(req.body)
  .then(boardId => {
    res.json({boardId})
    })
  .catch(err => {
    res.status(500).send('DATABASE_ERROR: ' + err.message)
  })
})

router.get('/hi', (req, res) => res.send('Hello World!'))

module.exports = router
