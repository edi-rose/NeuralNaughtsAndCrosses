const express = require('express')
const router = express.Router()

var addBoard = require('../db')

router.post('/', (req, res) => {
  console.log('server: ', res.body)
  console.log('server: ', req.body)
  addBoard(req.body)
  .then(boardId => {
    res.json({boardId})
    })
  .catch(err => {
    res.status(500).send('DATABASE_ERROR: ' + err.message)
  })
})

module.exports = router
