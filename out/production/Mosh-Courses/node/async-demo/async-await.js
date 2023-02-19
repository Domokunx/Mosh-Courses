// Async/await (Lets you write like synchronous code)
// Need to wrap all await functions in an async function block
// To get errors, you need to wrap await in try, and catch for errors
async function displayCommits(){
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos);
        console.log(commits);
    }
    catch (err){
        console.error('Error:', err.message)
    }
}
displayCommits()

// Functions
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
