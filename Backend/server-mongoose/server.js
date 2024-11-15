const express = require('express')
const app = express()
const port = 3001
const db = require('./config/db')

app.listen(port, (() => console.log(`Listening on ${port}`)))