/**
 * Created by yshybeka on 8/16/2017.
 */

const express = require('express')
const config = require('../config')

const util = require('util')
const router = express.Router()

const NumberService = require('../services/number')
const sumValidatorRouter = require('../validators/sum-validator')

router.use('/', sumValidatorRouter)

router.get('/', function (req, res) {
    res.json(NumberService.sumObject(req.query[config.get('firstArgumentName')], req.query[config.get('secondArgumentName')]))
})

router.get('/:first[\+]:second', function (req, res) {
    res.json(NumberService.sumObject(req.params[config.get('firstArgumentName')], req.params[config.get('secondArgumentName')]))
})

module.exports = router

