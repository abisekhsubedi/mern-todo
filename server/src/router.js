const express = require('express');
const loginRoute = require('./routes/loginRoute');

const router = express.Router();

router.post('/login', loginRoute)

module.exports = router;
