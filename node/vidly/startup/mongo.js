const mongoose = require('mongoose')

module.exports = function (){
    // Connect to MongoDB
    mongoose.set('strictQuery', false)
    mongoose.connect('mongodb://localhost/vidly')
        .then(console.log('Connected to MongoDB'))
}