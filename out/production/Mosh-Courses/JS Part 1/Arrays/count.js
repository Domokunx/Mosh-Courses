// Count the number of times the element appears in the array
function countOccurrences(Arr, searchElement){
    let count = 0;
    for (let element of Arr){
        if (element === searchElement)
            count++;
    }
    return count;
}

console.log(countOccurrences([1,2,3,4,1,2,3,3,3,3,3,3], 3))

// Reduction method
function countOccurrencesReduction(Arr, searchElement){
    return Arr.reduce((a,b) => {
        const occurrence = (b === searchElement) ? 1 :  0;
        return a + occurrence;
    },0)
}

console.log(countOccurrencesReduction([1,2,3,4,1,2,3,3,3,3,3,3], 3))