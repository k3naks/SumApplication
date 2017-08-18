const express = require('express')
const sum = require('./routes/sum')
const search = require('./routes/search')
const app = express()
const config = require('./config')

app.use('/sum', sum)
app.use('/search', search)

app.listen(config.get('port'), function () {
  console.log('Application listening on port ' + config.get('port'))
})

