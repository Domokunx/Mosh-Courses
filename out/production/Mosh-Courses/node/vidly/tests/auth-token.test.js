const {User} = require('../models/user');
const config = require('config');
const jwt = require('jsonwebtoken');

describe ('generateAuthToken', () => {
    it ('should return a unique jwt based on id', () => {
        const user = new User({ _id: 1, isAdmin: true })
        const token = user.generateAuthToken()
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        expect(decoded).toMatchObject({ isAdmin: true })

    })
})