const express = require('express')
const router = express.Router()

var getCross = require('../db').getCross
var addBoard = require('../db').addBoard

router.post('/', (req, res) => {
  addBoard(req.body)
  .then(boardId => {
    res.json({boardId})
    })
  .catch(err => {
    res.status(500).send('DATABASE_ERROR: ' + err.message)
  })
})

router.get('/', (req, res) => {
    getCross().then((data) => {
      res.json(data)
  })
})


module.exports = router
