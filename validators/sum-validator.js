/**
 * Created by yshybeka on 8/17/2017.
 */
const express = require('express')
const expressValidator = require('express-validator')
const util = require('util')
const config = require('../config')

const router = express.Router()

router.use(expressValidator())

router.get('/', function (req, res, next) {
    validateSumArguments(req, res, next);
})

router.get('/:first[\+]:second', function (req, res, next) {
    validateSumArguments(req, res, next)
})

function validateSumArguments(req, res, next) {
    req.check(config.get('firstArgumentName'), 'Arguments for sum must be integer').notEmpty().withMessage('Argument must be not empty').isInt();
    req.check(config.get('secondArgumentName'), 'Arguments for sum must be integer').notEmpty().withMessage('Argument must be not empty').isInt();

    req.sanitize(config.get('firstArgumentName')).toInt();
    req.sanitize(config.get('secondArgumentName')).toInt();

    req.getValidationResult().then(function (result) {
        if (!result.isEmpty()) {
            res.status(400).json({errorMessage: 'Bad request, please check numbers ' + util.inspect(result.array())});
            return;
        }
        next()
    });
}

module.exports = router