const app = require('express'),
router = app.Router(),
Movie = require('../model/movie');

router
    .get('/:id', async (req, res) => {
        const movie = await Movie.findById(req.params.id);
        res.status(200).send(movie);
    })
    .post('/', async (req, res) => {
        const movie = new Movie(req.body);
        const movieSaved = await movie.save();
        res.status(200).send(movieSaved);

        // const movie = new Movie(req.body);
        // movie.save()
        //     .then((movie) => {
        //         res.status(200).send(movie);
        //     })
        //     .catch((error) => {
        //         res.status(500).send(error);
        //     })
})

module.exports = router;