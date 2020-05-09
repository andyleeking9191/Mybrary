const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index'); // Passes in the index.js file (within views folder) to be renderd by the ejs engine
});

module.exports = router;