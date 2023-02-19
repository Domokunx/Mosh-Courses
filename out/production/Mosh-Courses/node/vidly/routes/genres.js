const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { Genre } = require('../models/genre')
const auth = require('../middleware/auth')
const error = require('../middleware/error')
const admin = require('../middleware/admin')


// GET info for main genre page
router.get('/', async (req, res) => {
    try{
        const genres = await Genre
    .find()
    .sort('name')
    .select('id name description')
    const sortBy = req.query.sortBy;
    
    // If sortBy nameAscending, sort genresArr in alphabetically order
    if (sortBy === 'nameAscending'){
        genres.sort((a,b) => {
            if (a.name.charCodeAt(0) < b.name.charCodeAt(0)){
                return -1;
            }
            if (a.name.charCodeAt(0) > b.name.charCodeAt(0)){
                return 1;
            }
            return 0;
        })
    }

    // If sortBy nameDescending, sort in opposite
    if (sortBy === 'nameDescending'){
        genres.sort((a,b) => {
            if (a.name.charCodeAt(0) > b.name.charCodeAt(0)){
                return -1;
            }
            if (a.name.charCodeAt(0) < b.name.charCodeAt(0)){
                return 1;
            }
            return 0;
        })
    }
    res.send(genres);
    }
    catch(err)
    {
        return res.status(404).send('Genre not found')
    }
});


// GET info for specific genre page
router.get('/:id', async (req, res) => {
    try{
        const genre = await Genre.findById(req.params.id)
        // If exists, return the genre page
        res.send(genre);
    }
    catch(err){
        // If genre doesnt exist
        return res.status(404).send('Genre not found');
    }
});


// POST new genre
router.post('/', auth, async (req, res) => {
    try{
        const genres = await Genre.find()
        const existingGenres = genres.map(g => g = g.name);
        // Validate New Genre (No dupes, No other invalids)
        // Cannot have multiple of the same genre
        const schema = Joi.object({
            name: Joi.string().min(3).required().lowercase().not(...existingGenres),
            description: Joi.string().required().min(3)
        })
        const { error } = schema.validate(req.body)

        // If invalid, return 400 Bad Request
        if (error) return res.status(400).send(error.details[0].message)

        let genre = new Genre({
            name: req.body.name,
            description: req.body.description
        })
        genre = await genre.save() // Updates the server
        res.send(genre)
    }
    catch(err){
        res.status(404).send('Genre not found')
    } 
})

// Update descriptions of existing genre page
router.put('/:id', error, async (err, req, res, next) => {
    try{
        // Validate new description
        const schema = Joi.object({
            name: Joi.string().required().min(3),
            description: Joi.string().required().min(3)
        })
        const result = schema.validate(req.body)

        // If req.body invalid, return 400 badrequest
        if (result.error) return res.status(400).send(result.error.details[0].message)

        // Update if valid
        const genre = await Genre.findByIdAndUpdate(req.params.id, {name: req.body.name, description: req.body.description}, {new: true})
        res.send(genre)
    }
    catch(ex){
        next(ex);
    }
})


// DELETE existing genre page
router.delete('/:id', [auth, admin], async (req, res) => {
    try{
        const genre = await Genre.findByIdAndDelete(req.params.id, {new: true})
        res.send(genre)
    }
    catch(err){
        // If no such genre exists, return 404 not found
        return res.status(404).send('Genre not found');
    }
});

module.exports = router;