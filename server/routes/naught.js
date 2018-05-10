const express = require('express')
const router = express.Router()
const saveNaught = require('../db').saveNaught
var getNaught = require('../db').getNaught

router.get('/', (req, res) => {
    getNaught().then((data) => {
      res.json(data)
  })
})

router.post('/', (req, res) => {
  saveNaught(req.body)
  .then(networkId => {
    res.json({networkId})
    })
  .catch(err => {
    res.status(500).send('DATABASE_ERROR: ' + err.message)
  })
})

module.exports = router
