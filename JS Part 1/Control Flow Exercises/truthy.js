// function that returns the number of truthy elements in an Arr
function isTruthy(Arr){
    let count = 0;
    for (let element of Arr){
        if (element) 
            count++;
    }
    return count;
}

console.log(isTruthy([0, null, undefined, '', 2, 3]))