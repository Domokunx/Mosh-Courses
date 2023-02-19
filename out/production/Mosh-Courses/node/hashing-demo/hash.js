const bcrypt = require('bcrypt')

// First you need to generate a salt
// Salts are random strings added into the password so that every hash is different

async function run(){
    const hashed = await bcrypt.hash('1234', 10)
    console.log(hashed)
}
run()