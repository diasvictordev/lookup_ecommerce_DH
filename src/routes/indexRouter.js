const express = require('express')

const indexRouter = express.Router()

const mainRouter = require('./mainRouter')

const menuRouter = require('./menuRouter')

const productRouter = require('./productRouter')

indexRouter.use('/', mainRouter)

indexRouter.use('/', menuRouter)

indexRouter.use('/', productRouter)

module.exports = indexRouter