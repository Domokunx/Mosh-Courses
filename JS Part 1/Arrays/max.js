// function that returns Max of array
function max(numberArr){
    if (numberArr.length === 0) return undefined

    let max = 0;
    for (let number of numberArr){
        if (max < number) max = number;
    }
    return max
}
console.log(max([5,4,3,3,2,1,0]))

// Reduce method
function maxReduce(numberArr){
    return numberArr.reduce((a,b) => (a < b) ? b : a)
}
console.log(maxReduce([5,4,3,2,1,3,1,2,3,0,7]))