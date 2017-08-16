/**
 * Created by yshybeka on 8/16/2017.
 */

const express = require('express')
const router = express.Router()

const firstArgName = 'first'
const secondArgName = 'second'

function isNumeric(num){
    return !isNaN(num)
}

function sumObject(arguments) {
    return {
        first: +arguments[firstArgName],
        second: +arguments[secondArgName],
        sum: (+arguments[firstArgName]) + (+arguments[secondArgName])
    };
}

router.get('/', function (req, res, next) {
    if (!req.query[firstArgName] || !req.query[secondArgName]) {
        res.json({message: 'Please, specify first and second arguments for sum in the following forms: /sum/first\+second or /sum\?first={first}&second={second}'})
    }
    if (!isNumeric(req.query[firstArgName]) || !isNumeric(req.query[secondArgName])) {
        res.status(400).json({error: "Bad request, please check numbers"})
    }
    next()
}, function (req, res) {
    res.json(sumObject(req.query))
})


router.get('/:first[\+]:second', function (req, res, next) {
    if (!isNumeric(req.params[firstArgName]) || !isNumeric(req.params[secondArgName])) {
        res.status(400).json({error: "Bad request, please check numbers"})
    }
    next()
}, function (req, res) {
    res.json(sumObject(req.params))
})

module.exports = router

