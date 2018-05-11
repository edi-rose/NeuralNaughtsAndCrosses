const express = require('express')
const router = express.Router()
const saveNaught = require('../db').saveNaught
var getNaught = require('../db').getNaught

//makes a request to the database for the cross network then return it to the api
router.get('/', (req, res) => {
    getNaught().then((data) => {
      res.json(data)
  })
})

//makes a post request to the db for the crossNetwork
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
