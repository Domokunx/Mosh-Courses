const mongoose = require('mongoose')
const Joi = require('joi')
const config = require('config')
const jwt = require('jsonwebtoken')

// Create Schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024
    },
    isAdmin: Boolean
})

// Generate Auth Token
userSchema.methods.generateAuthToken = function (){
    return jwt.sign({ _id: this._id, isAdmin: this.isAdmin}, config.get('jwtPrivateKey'))
}

// Model Schema
const User = mongoose.model('User', userSchema)

// Validate User
function validateUser(body) {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50),
        email: Joi.string().required().min(5).max(255).email(),
        password: Joi.string().required().min(8).max(255),
        isAdmin: Joi.boolean()
    })
    return schema.validate(body)
}


module.exports = { User, validateUser }