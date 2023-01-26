// function that returns the sum of multiples of 3 and 5 from 0 to the limit specified
function sum(limit){
    let sum = 0;
    for (let i = 0; i <= limit; i++) {
        sum += (i % 3 === 0 || i % 5 === 0) ? i : 0;
    }
    
    return sum;
}

console.log(sum(10))