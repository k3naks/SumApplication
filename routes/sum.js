/**
 * Created by yshybeka on 8/16/2017.
 */

const express = require('express')
const expressValidator = require('express-validator')
const util = require('util')
const router = express.Router()

const NumberService = require('../services/number')

const firstArgName = 'first'
const secondArgName = 'second'

router.use(expressValidator())


router.get('/', function (req, res, next) {
    validateSumArguments(req, res, next);
}, function (req, res) {
    res.json(NumberService.sumObject(req.query[firstArgName], req.query[secondArgName]))
})


router.get('/:first[\+]:second', function (req, res, next) {
    validateSumArguments(req, res, next)
}, function (req, res) {
    res.json(NumberService.sumObject(req.params[firstArgName], req.params[secondArgName]))
})

function validateSumArguments(req, res, next) {
    req.check(firstArgName, 'Arguments for sum must be integer').notEmpty().withMessage('Argument must be not empty').isInt();
    req.check(secondArgName, 'Arguments for sum must be integer').notEmpty().withMessage('Argument must be not empty').isInt();

    req.sanitize(firstArgName).toInt();
    req.sanitize(secondArgName).toInt();

    req.getValidationResult().then(function (result) {
        if (!result.isEmpty()) {
            res.status(400).json({errorMessage: 'Bad request, please check numbers ' + util.inspect(result.array())});
            return;
        }
        next()
    });
}

module.exports = router

