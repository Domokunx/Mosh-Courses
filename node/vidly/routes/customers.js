const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Customer = require('../models/customer')

// GET customer
router.get('/', async (req, res) => {
    try{
        const customer = await Customer.find().sort('name')
        return res.send(customer)
    }
    catch(err){
        return res.status(404).send('Customer not found',err.message)
    }
})

// GET customer by ID
router.get('/:id', async (req, res) => {
    try{
        const customer = await Customer.findById(req.params.id, { new : true })
        return res.send(customer)
    }
    catch(err){
        return res.status(404).send('Customer not found',err.message)
    }
})

// POST a new customer
router.post('/', async (req, res) => {
    try{
        // Validate body
        const schema = Joi.object({
            name: Joi.string().required(),
            phone: Joi.string().required(),
            isGold: Joi.boolean()
        })
        const { error } = schema.validate(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        // If valid, add customer
        let customer = new Customer ({
            name: req.body.name,
            isGold: req.body.isGold,
            phone: req.body.phone
        })
        customer = await customer.save()
        res.send(customer)
    }
    catch(err){
        return res.status(404).send(err.message)
    }
})

// PUT update on customer
router.put('/:id', async (req, res) => {
    try{
        // Validate body
        const schema = Joi.object({
            name: Joi.string().required(),
            phone: Joi.string().required(),
            isGold: Joi.boolean()
        })
        const { error } = schema.validate(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        // Check if customer id valid and update
        const customer = await Customer.findByIdAndUpdate(req.params.id, { 
            name: req.body.name,
            phone: req.body.phone,
            isGold: req.body.isGold 
        }, { new: true })
        res.send(customer)
    }
    catch(err){
        return res.status(404).send(err.message)
    }
})

// DELETE customer
router.delete('/:id', async (req, res) => {
    try{
        const customer = await Customer.findByIdAndDelete(req.params.id, { new : true })
        return res.send(customer)
    }
    catch(err){
        return res.status(404).send(err.message)
    }
})
module.exports = router