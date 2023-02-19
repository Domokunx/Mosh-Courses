const mongoose = require('mongoose')
const Joi = require('joi')

// Create Schema
const movieSchema = mongoose.Schema({
    title: { 
        type: String, 
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },
    genre: {
        type: new mongoose.Schema({
            name:{
                type: String,
                lowercase: true,
                minlength: 3,
            },
        }),
        required: true,
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
})

function validateMovie(movie){
    const schema = Joi.object ({
        title: Joi.string().min(5).max(50).required(),
        genreId: Joi.string().required(),
        numberInStock: Joi.number().required().min(0),
        dailyRentalRate: Joi.number().min(0).required()
    })
    return schema.validate(movie)
}

// Model Schema
const Movie = mongoose.model('Movie', movieSchema)

module.exports.Movie = Movie
module.exports.validateMovie = validateMovie
