const express = require('express')
const sum = require('./routes/sum.js')
const app = express()
const config = require('./config')

app.use('/sum', sum)

app.listen(config.get('port'), function () {
  console.log('Application listening on port ' + config.get('port'))
})

