 const express = require('express');

 const app = express();
// TODO: configyre the app
app.get('/todos', (req, res)=> {
    res.send('hello world');
});
app.listen(8080);
