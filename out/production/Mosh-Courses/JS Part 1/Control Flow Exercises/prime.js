// function that shows all prime numbers from 0 to limit
function showPrimes(limit){
    for (let number = 2; number <= limit; number++) {
        let divisibleBy = [];
        for (let i = 2; i <= number; i++) {
            if (number % i === 0)
                divisibleBy.push(i);          
        }
        if (divisibleBy.length === 1)
            console.log(number);
    }

    return;
}
showPrimes(11)