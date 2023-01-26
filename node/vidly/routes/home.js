const express = require('express');
const router = express.Router();

// GET info for root page
router.get('/', (req, res) => {
    res.send('Welcome, please go to /api/genres');
});

module.exports = router;