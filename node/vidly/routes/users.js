const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const { User, validateUser } = require('../models/user')
const auth = require('../middleware/auth')

// GET current user (only for authed users)
router.get('/me', auth, async (req, res) => {
    const user = await User.findById({ _id: req.user._id}).select('-password')
    res.send(user)
})

// POST a new User
router.post('/', async (req, res) => {
    try{
        // Validate req.body
        const { error } = validateUser(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        // Check User not already registered
        let user = await User.findOne({ email: req.body.email })
        if (user) return res.status(400).send('User already registered')

        // If Valid User Info, save into database
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password, 
        })
        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt)
        await user.save()
        
        const token = user.generateAuthToken()
        res.header('x-auth-token', token).send({
            user:user.name,
            email:user.email
         });
    }
    catch(err){
        console.error(err.message)
        res.status(500).send(err.message)
    }
})

module.exports = router;