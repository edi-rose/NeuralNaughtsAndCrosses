const express = require('express')
const router = express.Router()

var addBoard = require('../db')

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
  db.getCrossNetwork().then((data) => {
      res.json(data)
  })
})


module.exports = router
