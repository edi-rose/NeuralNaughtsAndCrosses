const express = require('express')
const bodyParser = require('body-parser')

const apiRoutes = require('../routes/api')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use('/api', apiRoutes)


module.exports = app
