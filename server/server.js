const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      routes = require('./routes/index'),
      app = express(),
      {PORT} = require('./config/default');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json())

app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Run in port ${PORT}`)
})

module.exports = app;