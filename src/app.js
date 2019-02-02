const express = require('express');
      app = express(),
      router = require('./router'),
      bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', router);
app.get('/health', (req, res) => {
    res.json({ 
        app: 'MS-API',
        status: 'Running'
    })
})

module.exports = app;