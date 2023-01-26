// function takes a limit that displays whether number is odd or even starting from 0 to that limit

function showNumbers(limit) {
    let counter  = 0;
    while (counter <= limit){
        if (counter % 2 === 0) console.log(counter, 'EVEN');
        else console.log(counter,'ODD');
        counter++;
    }
    return;
}
showNumbers(10)