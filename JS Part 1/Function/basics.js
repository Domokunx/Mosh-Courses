// Function Declaration
walk();
function walk(){
    console.log('walk');
}

// Function Expression
let run = function() {
    console.log('run')
};
let move = run;
move()
run()

// Difference is that function expression cannot be called before it is defined (Hoisting)

// Arguments Object
function sum(args){
    console.log(arguments) // Shows all arguments in form of array
    let total = 0;
    for (let value of arguments){
        total += value
    }
    return total
}

console.log(sum(1,2,3,4,5))

// Rest Operator
function sum2(...args){ // ... operator returns everything into an array
    console.log(args)
    return args.reduce((a, b) => a + b)
}
console.log(sum2(1,2,3,4,5,10))

// Default parameters
function interest(principal, rate = 3.5, years = 5){ // Can also set default here
    rate = rate || 3.5 // If truthy return, else check 2nd condition
    years = years || 5

    return principal * (rate / 100) * years;
}
console.log(interest(10000))

// Getters and Setters
// Getters => Get properties for an Object
// Setters => Mutate that property
// Good for accessing like a property instead of calling a method
const person = {
    firstName: 'Cliff',
    lastName: 'Koes',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ')
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
};
person.fullName = 'Rai Pang' // Setter called like a normal property, not a function
console.log(person)

