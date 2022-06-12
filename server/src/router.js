const express = require('express');
const loginRoute = require('./routes/loginRoute');
const todosRouter = require('./routes/todosRoute');

const router = express.Router();

router.post('/login', loginRoute);
router.get('/todos', todosRouter)

module.exports = router;
