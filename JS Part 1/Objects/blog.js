// make Blog Post Object with object literal syntax
let post ={
    title: 'My Blog',
    body: `Sup
    welcome to my blog`,
    author: 'Cliff',
    views: 2,
    comments: [{ author: 'commentor', body: `Yoooo`}],
    isLive: false
}

console.log(post)

// make with constructor function
function Post(title, body, author) {
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = 0,
    this.comments = [],
    this.isLive = false
}

const post1 = new Post('Hi', 'Yooo', 'Cliff')
console.log(post1)