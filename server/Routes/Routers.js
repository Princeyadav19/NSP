const express = require('express');
const router = express.Router();
const {Usercontroller} = require('../Controller/Usercontroller');

router.post('/api/register',Usercontroller.register)
router.post('/api/login',Usercontroller.login)

router.get('/api/',Usercontroller.Home)

module.exports = router