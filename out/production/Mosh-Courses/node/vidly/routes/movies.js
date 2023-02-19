const express = require('express');
const { Genre } = require('../models/genre');
const router = express.Router();
const { Movie, validateMovie } = require('../models/movie')

// GET current movies
router.get('/', async (req, res) => {
    try{
        const movies = await Movie.find().select('-_id -genre._id')
        return res.send(movies)
    }
    catch(err){
        console.error(err.message)
        return res.status(400).send(err.message)
    }
})

// POST new movies
router.post('/', async (req, res) => {
    try{
        const { error } = validateMovie(req.body);
        if (error) return res.status(400).send(error.details[0].message);
    
        const genre = await Genre.findById(req.body.genreId);
        if (!genre) return res.status(400).send('Invalid genre.')
    
        let movie = new Movie({
            title: req.body.title,
            genre: {
                _id: genre._id,
                name: genre.name,
            },
            numberInStock: req.body.numberInStock,
            dailyRentalRate: req.body.dailyRentalRate
        });
        movie = await movie.save();
        return res.send(movie);
    }
    catch(err){
        console.error(err.message)
        return res.status(400).send(err.message)
    }
})

module.exports = router;