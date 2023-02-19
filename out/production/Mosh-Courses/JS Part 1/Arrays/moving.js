// Move elements in an array
function move(Arr, index, offset){
    if (index + offset >= Arr.length || index + offset < 0) return console.error('Invalid offset')

    let elementMoved = Arr.splice(index, 1)
    Arr.splice(index + offset, 0 , ...elementMoved)
    return Arr;
}

console.log(move([1,2,3,4,5],0,5))