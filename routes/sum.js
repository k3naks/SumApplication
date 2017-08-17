/**
 * Created by yshybeka on 8/16/2017.
 */

const express = require('express')
const config = require('../config')
const expressValidator = require('express-validator')

const util = require('util')
const router = express.Router()

const NumberService = require('../services/number')
const sumValidator = require('../validators/sum-validator')

router.use(expressValidator())

router.get('/', sumValidator, function (req, res) {
    res.json(NumberService.sumObject(req.query[config.get('firstArgumentName')], req.query[config.get('secondArgumentName')]))
})

router.get('/:first[\+]:second', sumValidator, function (req, res) {
    res.json(NumberService.sumObject(req.params[config.get('firstArgumentName')], req.params[config.get('secondArgumentName')]))
})

module.exports = router

