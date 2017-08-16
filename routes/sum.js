/**
 * Created by yshybeka on 8/16/2017.
 */

const express = require('express')
const router = express.Router()

const NumberService = require('../services/number')

const firstArgName = 'first'
const secondArgName = 'second'


router.get('/', function (req, res, next) {
    if (!req.query[firstArgName] || !req.query[secondArgName]) {
        res.json({message: 'Please, specify first and second arguments for sum in the following forms: /sum/first\+second or /sum\?first={first}&second={second}'})
    }
    if (NumberService.isNotNumeric(req.query[firstArgName]) || NumberService.isNotNumeric(req.query[secondArgName])) {
        res.status(400).json({errorMessage: "Bad request, please check numbers"})
    }
    next()
}, function (req, res) {
    res.json(NumberService.sumObject(req.query[firstArgName], req.query[secondArgName]))
})


router.get('/:first[\+]:second', function (req, res, next) {
    if (NumberService.isNotNumeric(req.params[firstArgName]) || NumberService.isNotNumeric(req.params[secondArgName])) {
        res.status(400).json({error: "Bad request, please check numbers"})
    }
    next()
}, function (req, res) {
    res.json(NumberService.sumObject(req.params[firstArgName], req.params[secondArgName]))
})

module.exports = router

