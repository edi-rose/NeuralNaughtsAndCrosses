const express = require('express')
const router = express.Router()

var getNaught = require('../db').getNaught

router.get('/', (req, res) => {
  console.log('route called')
    getNaught().then((data) => {
      res.json(data)
  })
})


module.exports = router
