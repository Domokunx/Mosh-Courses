const express = require('express');
const app = express();


require('./startup/routes')(app);
require('./startup/mongo')();
require('./startup/log')();
require('./startup/config')

// Body parsers
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// listen to a port
const port = process.env.PORT || 3000
app.listen(port, console.log(`Listening to port ${port}`));
