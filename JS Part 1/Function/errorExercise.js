// Reduction method
function countOccurrencesReduction(Arr, searchElement){
    //Error
    if (!Array.isArray(Arr))
        throw new Error('First argument must be an array')

    return Arr.reduce((a,b) => {
        const occurrence = (b === searchElement) ? 1 :  0;
        return a + occurrence;
    },0)
}

try {
    countOccurrencesReduction(true, 1)
}
catch(ex){
    return console.error(ex.message)
}