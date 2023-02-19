// function shows properties of an object only if the value is a string
const movie = {
    title: 'a',
    rating: 2,
    releaseYear: 2018,
    director: 'b'
}

function showProperties(object){
    for (let key in object){
        if (typeof object[key] === 'string')
            console.log(key, object[key])
    }
    return
}
showProperties(movie)