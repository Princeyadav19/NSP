const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');

const app = express();
//understand json data
app.use(express.json())

//dotenv data
dotenv.config({path:'./config.env'});
const PORT = process.env.PORT;
console.log(PORT)
// database connection & schema
require('./db/conn.js')

const User = require('./Models/User.js')

//router
app.use(require('./Routes/Routers.js'))


app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
});