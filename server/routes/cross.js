const express = require('express')
const router = express.Router()

var getCross = require('../db').getCross

router.get('/', (req, res) => {
    getCross().then((data) => {
      res.json(data)
  })
})


module.exports = router
