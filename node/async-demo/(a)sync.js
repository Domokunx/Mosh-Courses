// Synchronous
console.log('Before')
console.log('After')

// Asynchronous
getUser(1, (user) => {
    console.log('User', user);

    // Get the repositories
    getRepositories(user.gitHubUsername, (repositories) => {
        console.log('Repos', repositories);
    })
})

// Callbacks (2nd arg is a function that is called when the async result is ready)
function getUser(id, callback) {
    console.log('Reading user from database...')
    setTimeout(() => {
        callback({ id: id, gitHubUsername: 'Cliff' })
    }, 2000); // This waits 2s before calling this function
}

function getRepositories(username, callback) {
    console.log(`Checking ${username}'s repositories...`)
    setTimeout(() => {
        callback(['repo1', 'repo2', 'repo3'])
    },2000)
}