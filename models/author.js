const mongoose = require('mongoose');

const authorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Author', authorsSchema); // sets a new table name to Author with the paramaters of authorsSchema