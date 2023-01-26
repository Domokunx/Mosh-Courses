// Promises
// Holds the eventual result of an async operation
// 3 states: Pending ---> Fulfilled(value obtained) OR Rejected(error)
getUser(1)
    // If success
    .then(user => getRepositories(user.gitHubUsername))
    .then(repo => getCommits(repo))
    .then(commits => console.log('Commits:', commits))

    // If fail
    .catch(err => console.log(err.message))

// Return promises
function getUser(id) {
    return new Promise((resolve, reject) => {
        console.log('Reading user from database...')

        setTimeout(() => {
            // If successful
            resolve({ id: id, gitHubUsername: 'Cliff' })

            // If failed
            reject(new Error('Unable to get user from database.'))
        }, 2000); // This waits 2s before calling this function
    })
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        // Kick off async work
        console.log(`Checking ${username}'s repositories...`)

        setTimeout(() => {
            // If success
            resolve(['repo1', 'repo2', 'repo3'])

            // If failed
            reject(new Error('Unable to get repositories from user.'))
        },2000)
    })
}

function getCommits(repos){
    return new Promise((resolve, reject) =>{
        console.log('Getting commits...')

        // Kick off async work
        setTimeout(()=>{
            // If success
            resolve(repos[0])

            // If fail
            reject(new Error('Failed to get commits.'))
        },2000)
    })
}
