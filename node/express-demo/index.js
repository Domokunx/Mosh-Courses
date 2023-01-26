const express = require('express');
const app = express();
const helmet = require('helmet')
const morgan = require('morgan')
const config = require('config')
const startupDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')
const courses = require('./routes/courses')
const home = require('./routes/home')

// View / Templating Engine
app.set('view engine', 'pug')
app.set('views', './views') // Optional setting to reset path of templates to ./views


app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(helmet());

// Routers
app.use('/api/courses', courses)
app.use('/', home)

// Configuration
console.log(`Application Name: ${config.get('name')}`)
console.log(`Mail Server: ${config.get('mail.host')}`)
console.log(`Mail Password: ${config.get('mail.password')}`)

if (app.get('env') === 'development') {
    app.use(morgan('tiny'))
    startupDebugger('Morgan enabled...')
}

// db Debugging....
dbDebugger('console.log dbDebugger online...')

// PORT (environment variable, value is set outside the application)
const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Listening on port ${port}`)
});