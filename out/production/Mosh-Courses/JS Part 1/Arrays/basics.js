const numbers = [3, 4];
// const only stops reassignment, we can still modify the contents

// Adding into array
// Removing from array

// End
numbers.push(5,6)
numbers.pop()
numbers.pop()

// Start
numbers.unshift(1,2)
numbers.shift()
numbers.shift()

// Middle
numbers.splice(2, 0, 2.5)
numbers.splice(2,2)

console.log(numbers)



// Finding Elements in array (primitive)
console.log(numbers.indexOf(1)) // returns index of element, if does not exist, returns -1
console.log(numbers.includes(1)) // returns boolean if element exists

// Finding Elements in objects (reference)
const courses = [
    { id: 2, name: 'b'},
    { id: 1, name: 'a'},
];
console.log(courses.includes({ id: 1, name: 'a'})) // -> false as references are checked, not properties

const course = courses.find((course) => course.name === 'a')
console.log(course)



// Emptying an array
let arr = [1,2,3,4]

// Sol 1
arr.length = 0

// Sol 2
arr = []



// Combining and Slicing
let first = [1,2,3]
let second = [4,5,6]
let combined = first.concat(second) // -> [1,2,3,4,5,6] or [...first, ...second]

// CAVEATE!!! if the array contains an object, only the reference is copied not the object itself (primitive vs ref!!)

// sort array
numbers.sort() // primitive
courses.sort((a,b) => {  // Reference
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    if (a.name === b.name) return 0
})