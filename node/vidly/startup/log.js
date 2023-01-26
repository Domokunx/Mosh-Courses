module.exports = function(){
    // Uncaught Ex
    process.on('uncaughtException', (err) => {
        console.error(err.message)
        process.exit(1)
    })

    process.on('unhandledRejection', (err) => {
        console.error(err.message)
        process.exit(1)
    })
}