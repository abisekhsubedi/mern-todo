const express = require('express');
const dotenv = require('dotenv');
const morgon = require('morgan');
const cors = require('cors');

const router = require('./router');

dotenv.config();

const app = express();

app.use(express.json())
app.use(cors());
app.use(morgon('tiny'));
app.use(router)

app.listen(8080);
