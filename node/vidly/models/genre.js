const mongoose = require('mongoose')

// Create Schema
const genreSchema = mongoose.Schema({
    name:{
        type: String,
        lowercase: true,
        minlength: 3,
    },
    description:{
        type: String,
        required: true,
        minlength: 3,
    }
})

// Model schema
const Genre = mongoose.model('Genre', genreSchema)

module.exports.Genre = Genre
module.exports.genreSchema = genreSchema