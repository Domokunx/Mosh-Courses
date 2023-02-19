const express = require('express');
const router = express.Router();

// '/' is the root of the website
router.get('/', (req, res) => {
    res.render('index', {title: 'Hello', message: 'World'})
});

module.exports = router;