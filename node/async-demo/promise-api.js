// Simultaneous promises
const p1 = new Promise((resolve, reject) => {
    console.log('Async operation 1...')
    setTimeout(() => {
        resolve(1);
        reject(new Error('Operation 1 failed'));
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    console.log('Async operation 2...')
    setTimeout(() => {
        resolve(2);
        reject(new Error('Operation 2 failed'))
    }, 2000)
})

// .all only resolves when all promises in array are resolved
Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log('Error:', err.message))

// .race resolves as soon as 1 promise is fulfilled
Promise.race([p1,p2])
    .then(result => console.log(result))
    .catch(err => console.log('Error:', err.message))