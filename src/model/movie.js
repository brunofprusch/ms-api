const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    genre: { 
        type: String,
        required: true
    },
    year: Number
});

module.exports = mongoose.model('Movie', userSchema);