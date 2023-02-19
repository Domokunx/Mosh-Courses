{
    let message = 'hi'
}

// console.log(message)

// Const/let are only accessible within the {code block}
// var defines variables limited to the entire function (not limited to the code block)
// var attches variables into the window object (might clash with 3rd-party libraries)

// .this represents the object excuting that function
// methods -> obj
// function -> global object (window, global in node)

const video = {
    title: 'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag) { // this is referencing the global obj as it is a normal function (not a method of an object)
            console.log(this, tag)
        }.bind(this)) // Another solution (best practice is to use arrow function (inherits 'this' from containing block))
    },
    play(){
        console.log(this)
    }
}

function playVideo(){
    console.log(this)
}

video.showTags()

// Changing this (function.bind(obj) permanently sets this as the obj no matter how it is called)