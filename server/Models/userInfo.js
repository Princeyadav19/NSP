const mongoose = require('mongoose')

const userInfoSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    subStart: {
        type: Date,
        required: true
    },
    subEnd: {
        type: Date,
        required: true
    }
});

const userInfo = mongoose.model('userInfo', userInfoSchema)

module.exports = userInfo;