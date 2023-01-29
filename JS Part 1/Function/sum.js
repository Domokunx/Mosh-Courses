// Function sum that takes any number of arguments or in array and returns their sums 
function sum(...args){
    if (args.length === 1 && Array.isArray(args[0]))
        return args[0].reduce((a, b) => a + b)
    return args.reduce((a, b) => a + b)
}

console.log(sum(1,2,3,4))