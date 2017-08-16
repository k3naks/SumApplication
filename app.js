const express = require('express')
const sum = require('./routes/sum.js')
const app = express()
const port = 8081

app.use('/sum', sum)

app.listen(port, function () {
  console.log('Application listening on port ' + port)
})

