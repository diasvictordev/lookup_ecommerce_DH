const express = require('express')

const indexRouter = express.Router()

const mainRouter = require('./mainRouter')

const menuRouter = require('./menuRouter')

const productRouter = require('./productRouter')

const menuTwoRouter = require("./menuTwoRouter")

indexRouter.use('/', mainRouter)

indexRouter.use('/', menuRouter)

indexRouter.use('/', productRouter)

indexRouter.use('/', menuTwoRouter)

module.exports = indexRouter