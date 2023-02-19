const express = require('express')
const router = express.Router()
const { Rental, validateRental } = require('../models/rental')
const { Customer } = require('../models/customer')
const { Movie } = require('../models/movie')
const { mongo, default: mongoose } = require('mongoose')


// GET the list of rentals
router.get('/', async (req, res) => {
    try{
        const rentals = await Rental.find().select('-_id');
        return res.send(rentals)
    }
    catch(err){
        console.error(err.message)
        return res.status(400).send(err.message)
    }
})

// Post new rentals 
router.post('/', async (req, res) => {
    try{
        const { error } = validateRental(req.body);
        if (error) return res.status(400).send(error.details[0].message)

        const customer = await Customer.findById(req.body.customerId)
        if (!customer) return res.status(400).send('Customer information not found')
        
        const movie = await Movie.findById(req.body.movieId)
        if (!movie) return res.status(400).send('Movie not found')

        if(movie.numberInStock === 0) return res.status(400).send('Movie out of stock.')

        let rental = new Rental({
            customer: {
                _id: customer._id, // Store the id just in case more customer information is needed
                name: customer.name,
                isGold: customer.isGold,
                phone: customer.phone
            },
            movie: {
                _id: movie._id,
                title: movie.title,
                dailyRentalRate: movie.dailyRentalRate
            },
        })

        // You want to rollback incase rental save doesnt work or movie update doesnt work
        try{
            rental = await rental.save()
            await movie.updateOne({ $inc: {numberInStock: -1} })
            res.send(rental)
        }
        catch(err){
            res.status(500).send(err.message)
        }
        

        

        
        
        // Transactions/ 2 Phase Commits
        // const session = await mongoose.startSession();
        // try{
        //     await session.withTransaction(async () => {
        //         await rental.save({ session })
        //         await movie.updateOne({ $inc: {numberInStock: -1} }, { session });
        //     })
        // }
        // catch(err){
        //     console.error(err.message)
        //     await session.endSession()
        //     return res.status(500).send(err.message)
        // }
        // finally{
        //     await session.endSession();
        // }
        // return res.send(rental);
    }
    catch(err){
        console.error(err.message)
        return res.status(400).send(err.message)
    }
})

module.exports = router