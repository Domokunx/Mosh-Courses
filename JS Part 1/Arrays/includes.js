// write the .includes method as a function manually
function includes(Arr, searchElement){
   for (let element of Arr){
    if (element === searchElement)
        return true
   }
    return false;
}
console.log(includes([1,2,3,4,5,6], 7))