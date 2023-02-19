// Trade off Query Performance VS Consistency

// Using References (Normalization) -> CONSISTENCY
let author = {
    name: 'Cliff' // If name change, all other courses are automatically updated
}

let course = {
    author: 'id' // Requires 2 queries to run as you need to get both author doc, and course doc
}

// Using embedded documents (Denormalization) -> QUERY PERFORMANCE
let courses = {
    author: {
        name: 'Cliff' // If name change, might need to change many other courses
    }
}

//Hybrid (When u only need to display certain properties)
let authors = {
    name: 'Cliff'
    // 50 other properties
}

let course3 = {
    author: {
        id: 'ref',
        name: 'Cliff'
    }
}