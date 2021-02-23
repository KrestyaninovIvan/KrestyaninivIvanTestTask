const express = require('express')
const controller = require('../controllers/card')
const router = express.Router()


router.get('/', controller.summaryData)

router.get('/get/:id', controller.fullData)

router.get('/maxpage',controller.cardMaxPage)

router.get('/search:id', controller.search)

module.exports = router



