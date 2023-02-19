const movies = [
    { title: 'a', year: '2018', rating: 4.5},
    { title: 'b', year: '2018', rating: 4.7},
    { title: 'c', year: '2018', rating: 3},
    { title: 'd', year: '2017', rating: 4.5}
]

// All movies in 2018, rating > 4   
// Sort by rating
// Descending Order
// Pick their title
const movie = movies
    .filter(movie => {
        if (movie.rating > 4 && movie.year === '2018') return movie
    })
    .sort((a,b) => {
        if (a.rating < b.rating) return 1;
        if (a.rating > b.rating) return -1;
        if (a.rating === b.rating) return 0;
    })
    .map(movie => movie.title)

console.log(movie)