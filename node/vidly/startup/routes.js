const movies = require('../routes/movies')
const genres = require('../routes/genres')
const rentals = require('../routes/rentals')
const auth = require('../routes/auth')
const home = require('../routes/home')
const users = require('../routes/users')
const customers = require('../routes/customers')
const error = require('../middleware/error')
const express = require('express')

module.exports = function (app){
    // Routers
app.use('/api/genres', genres)
app.use('/', home)
app.use('/api/customers', customers)
app.use('/api/movies', movies)
app.use('/api/rentals', rentals)
app.use('/api/users', users)
app.use('/api/auth', auth)

// Error middleware
app.use(error)
}