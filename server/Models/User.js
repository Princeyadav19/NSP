const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
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

const User = mongoose.model('USER',userSchema)

module.exports = User;