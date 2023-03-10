const express = require('express');
const router = express.Router();
const {admin_controller} = require('./../controllers');

router.post('/login', admin_controller.login);

module.exports = router;