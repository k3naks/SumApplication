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



//routes

router.get('/', function (req, res) {
    if (req.query[firstArgName] && req.query[secondArgName]) {
        if (isNumeric(req.query[firstArgName]) && isNumeric(req.query[secondArgName])) {
            res.json(sumObject(req.query))
        } else {
            res.status(400).json({error: "Bad request, please check numbers"})
        }
    } else {
        res.json({message: 'Please, specify first and second arguments for sum in the following forms: /sum/first\+second or /sum\?first={first}&second={second}'})
    }
})

router.get('/:first[\+]:second', function (req, res) {
    if (isNumeric(req.params[firstArgName])&& isNumeric(req.params[secondArgName])) {
        res.json(sumObject(req.params))
    } else {
        res.status(400).json({error: "Bad request, please check numbers"})
    }
})

module.exports = router

