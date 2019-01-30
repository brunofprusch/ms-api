const app = require('express');
router = app.Router();
movieResource = require('./resource/movie');

router.use('/movie', movieResource);

module.exports = router;