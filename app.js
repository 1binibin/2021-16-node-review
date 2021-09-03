const path = require('path')
const express = require('express')
const app = express()

require('dotenv').config()
require('./modules/server-init')(app, process.env.PORT)

app.get('/', (req, res, next) => {
	
})