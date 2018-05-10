const express = require('express')
const router = express.Router()
const saveNaught = require('../db').saveNaught
var getNaught = require('../db').getNaught

router.get('/', (req, res) => {
    getNaught().then((data) => {
      res.json(data)
  })
})


module.exports = router
