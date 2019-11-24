const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('../config/cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors)
server.use(queryParser())

server.listen(port, () => {
    console.log(`BACKEND running on port ${port}.`)
})

module.exports = server