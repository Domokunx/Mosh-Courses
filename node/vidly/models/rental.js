const mongoose = require('mongoose')
const Joi = require('joi')

// Create schema
const rentalSchema = mongoose.Schema({
    customer: { 
        type: new mongoose.Schema({ // Don't use the customer schema as irl custsomers may have many unneeded properties
            isGold: { type: Boolean, default: false},
            name: { type: String, required: true, minlength: 3, maxlength: 50},
            phone: { type: String, required: true, minlength: 5, maxlength: 50},
        }),
        required: true
    },
    movie: {
        type: new mongoose.Schema({
            title: { 
                type: String, 
                required: true,
                trim: true,
                minlength: 5,
                maxlength: 255
            },
            dailyRentalRate: {
                type: Number,
                required: true,
                min: 0,
                max: 255
            },
        }),
        required: true
    },
    dateOut: {
        type: Date,
        required: true,
        default: Date.now
    },
    dateReturned: {
        type: Date,
    },
    rentalFee: {
        type: Number,
        min: 0
    }
})

function validateRental(rental){
    const schema = Joi.object({
        customerId: Joi.string().required(),
        movieId: Joi.string().required()
    })

    return schema.validate(rental)
}

// Model schema
const Rental = mongoose.model('Rental', rentalSchema)


module.exports = { validateRental, Rental }