const express = require('express');
const router = express.Router();
const {users_controller} = require('./../controllers');

router.post('/register', users_controller.register);
router.post('/login', users_controller.login);

module.exports = router;