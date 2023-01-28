// function that takes 2 Number parameters and returns an array starting from first to last parameter
function arrayFromRange(min, max){
    let rangeArr = []
    for (let n = min; n <= max; n++) {
        rangeArr.push(n)
    }
    return rangeArr
}

console.log(arrayFromRange(-1,2))