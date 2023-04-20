const express = require('express');
const router = express.Router();
const { Usercontroller } = require('../Controller/Usercontroller');

router.post('/api/register', Usercontroller.register)
router.post('/api/login', Usercontroller.login)
router.post('/api/user', Usercontroller.userInfo)

module.exports = router