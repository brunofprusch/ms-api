const express = require('express'),
app = express();
movieResource = require('./resource/movie');

app.use('/', movieResource)

app.listen(3000);

module.exports = app;