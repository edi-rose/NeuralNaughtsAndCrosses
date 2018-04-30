const express = require('express')
const app = express()
var server = require('../server/server')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
  db.getBoards().then((data) => {
      res.json(data)
  })
})

router.get('/:id', (req, res) => {
  db.getBoard(req.params.id).then((data) => {
    res.json(data)
  })
})

router.post('/', (req, res) => {
  const newBoard = req.body
  db.addBoard(newBoard)
  .then(board => {
    res.json({board: board})
  })
})

module.exports = router
