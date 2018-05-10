const express = require('express')
const router = express.Router()
const saveCross = require('../db').saveCross
var getCross = require('../db').getCross

router.get('/', (req, res) => {
    getCross().then((data) => {
      res.json(data)
  })
})

router.post('/', (req, res) => {
  saveNetwork(req.body)
  .then(networkId => {
    res.json({networkId})
    })
  .catch(err => {
    res.status(500).send('DATABASE_ERROR: ' + err.message)
  })
})

module.exports = router
