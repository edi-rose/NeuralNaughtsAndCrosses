const express = require('express')
const router = express.Router()

addBoard = require('../db')

router.post('/', (req, res) => {
  addBoard(req)
  .then(diceId => {
    res.json({diceId})
    })
  .catch(err => {
    res.status(500).send('DATABASE_ERROR: ' + err.message)
  })
})

module.exports = router
