const mongoose = require('mongoose')

// Create Schema
const customerSchema = mongoose.Schema({
    isGold: { type: Boolean, default: false},
    name: { type: String, required: true, minlength: 3, maxlength: 50},
    phone: { type: String, required: true}
})

// Model Schema
const Customer = mongoose.model('customer', customerSchema)

module.exports = { customerSchema, Customer }