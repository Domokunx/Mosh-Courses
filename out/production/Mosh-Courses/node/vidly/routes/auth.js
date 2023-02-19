const express = require('express')
const router = express.Router()
const Joi = require('joi')
const { User } = require('../models/user')
const bcrypt = require('bcrypt')

// Login
router.post('/', async (req, res) => {
    // Validate Login Information
    const { error } = validateLogin(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // Check if user does exist
    let user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send('Invalid email or password') // Not 404 cuz we dont wanna tell the user specifically whats wrong (malicious)
 
    // Validate Password
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).send('Invalid email or password') // Not 404 cuz we dont wanna tell the user specifically whats wrong (malicious)

    // Generate JsonWebToken
    const token = user.generateAuthToken()
    res.send(token);
})

function validateLogin(req){
    const schema = Joi.object({
        email: Joi.string().required().min(5).max(255).email(),
        password: Joi.string().required().min(8).max(255)
    })
    return schema.validate(req)
}
module.exports = router