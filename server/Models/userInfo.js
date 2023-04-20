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
    password:{
        type:String,
        required:true
    },
    subStart: {
        type: Date,
    },
    subEnd: {
        type: Date,
    }
});

const userInfo = mongoose.model('userInfo', userInfoSchema)

module.exports = userInfo;