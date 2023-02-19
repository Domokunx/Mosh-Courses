const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){
       return 'draw'
    }
}

console.log(circle.draw())

// Clone object
const another = Object.assign({}, circle)
const another1 = { ...circle }

// Get keys of Object using for...in...
for (let key in circle){ // For ... of ... doesnt work as objects are not iterable
    console.log(key)
}

// Get keys of Object using for...of...
for (let key of Object.keys(circle)){
    console.log(key)
}

// Get key-value pair of object in array format
for (let entry of Object.entries(circle)){
    console.log(entry)
}