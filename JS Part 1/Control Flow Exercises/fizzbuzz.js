// function that returns:
// "Fizz" if divisible by 3
// "Buzz" if divisible by 5
// "FizzBuzz" if divisible by 3 and 5
// if NaN, return 'Not a Number'

function fizzBuzz(number){
    if (number % 15 === 0) return 'FizzBuzz'
    else if (number % 5 === 0) return 'Buzz'
    else if (number % 3 === 0) return 'Fizz'
    else if (typeof number !== 'number') return NaN
    else return 'Number not divisible by 3 or 5'
}

console.log(fizzBuzz(4))