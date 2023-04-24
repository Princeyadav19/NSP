const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    subStart: {
        type: String,
    },
    subEnd: {
        type: String,
    }
});

const User = mongoose.model('USER', userSchema)

module.exports = User;