const app = require('express')
router = require('./router');

app.use('/', router);

module.exports = app;