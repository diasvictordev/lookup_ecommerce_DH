const express = require('express')

const indexRouter = express.Router()

const mainRouter = require('./mainRouter')

const menuRouter = require('./menuRouter')

indexRouter.use('/', mainRouter)

indexRouter.use('/', menuRouter)

module.exports = indexRouter