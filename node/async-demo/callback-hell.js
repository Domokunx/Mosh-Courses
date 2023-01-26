// To reduce the amount of nests and avoid callback hell, replace anon fns with named fns

// Asynchronous
getUser(1, displayRepos);

// Named functions
function displayRepos(user){
    console.log('User', user);

    // Get the repositories
    getRepositories(user.gitHubUsername, getCommits)
}

function getCommits(repositories){
    console.log('Repos', repositories);

    // Get commits in repo
    getCommits(repositories, displayCommits) // Note that the function is not called, just referenced
}

function displayCommits(commits) {
    console.log(commits);
}


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