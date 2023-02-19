// function that takes 2 arrays as argument, returns the first array excluding all elements in the 2nd argument array
function except(array1, array2){
    for (let element of array2){
        if (array1.includes(element)){
            array1.splice(array1.indexOf(element),1)
        }
    }
    return array1;
}

console.log(except([1,2,3,4,5,6,7,8], [1,9,3]))