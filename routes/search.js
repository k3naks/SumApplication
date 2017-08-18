/**
 * Created by yshybeka on 8/18/2017.
 */
/**
 * Created by yshybeka on 8/16/2017.
 */

const express = require('express')
const config = require('../config')
const request = require('request')

const router = express.Router()


router.get('/', function (req, res) {
    request
        .get(config.get('apiUrl'))
        .on('error', function(err) {
            res.json({errorMessage : 'Error while getting resource: ' + err})
        })
        .pipe(res)
})

module.exports = router

