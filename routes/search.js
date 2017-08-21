/**
 * Created by yshybeka on 8/18/2017.
 */

const express = require('express')
const config = require('../config')
const request = require('request')
const url = require('url')
const SearchDto = require('../mappings/search')

const router = express.Router()

router.get('/', function (req, res) {
    let retrievedData = '';
    request
        .get({
            url: config.get('apiUrl'),
            qs: url.parse(req.url).query
        })
        .on('data', function (data) {
            retrievedData += data
        })
        .on('end', function () {
            res.json(new SearchDto(JSON.parse(retrievedData)))
        })
        .on('error', function (err) {
            res.status(500).json({errorMessage: 'Error while getting resource: ' + err})
        })

})

module.exports = router

