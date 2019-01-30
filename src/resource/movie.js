const app = require('express'),
router = app.Router();

router.get('/hello', (req, res) => {
    res.json({ frase: 'Hello Word'})
});

module.exports = router;