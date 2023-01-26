// require returns the object that contains all the methods and variables inside it
const path = require('path') // No './' node will assume is a built-in module.
let pathObj = path.parse(__filename)


// OS
const os = require('os')
let totalMemory = os.totalmem()
let freeMemory = os.freemem()
console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)


// FS
const fs = require('fs')

// Sync methods
const files = fs.readdirSync('./');
console.log(files)

// Async methods take a function as last arg
const filesAsync = fs.readdir('./', function (err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
})


// Events
const Logger = require('./logger')
const logger = new Logger;

// Order is important, set up all listeners first, before raising events
// Listener (called when an event is raised)
logger.on('messageLogged', (e) => {
    console.log('Listener Called', e)
})

// Log method already contains a function that raises an event
logger.log('message')


// HTTP requests 
const http = require('http'); // notice http is a class that extends from net.Server, which extends from EventEmitter

const server = http.createServer((req, res) => {
    // Checks the end of your url for what page you are at
    if (req.url === '/') {
        
        // res.write will print out whatever arg onto the website itself
        res.write('Hello World');
        res.end(); // Dont forget to end
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000); // Raises an event on port 3000 when someone connects
console.log('Listening on port 3000...');
