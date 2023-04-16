// Creating Objects (3 Methods)

// 1.Factory Functions
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log("draw");
        }
    };
}

// 2.Constructor Functions (sort of like classes in other OOP languages)
function Circle(radius) {
    this.radius = radius,
    this.draw = function(){
        console.log("draw");
    }
}

// 3.Classes (ES6)
class CircleClass {
    constructor(radius) {
        this.radius = radius,
        this.draw = function() {
            console.log("Draw");
        }
    }
}

const circle = createCircle(1);
const anotherCircle = new Circle(1);
const ES6Circle = new CircleClass(1);

//---------------------------------------------------------------------------
// Primitives are copied by their values
// Objects are copied by their references

let x = 1;
let y = x;

x = 2; // y is still === 1;

let obj = { value: 1 };
let obj2 = obj;

obj = { value : 2 }; // obj2 -> { value : 2 } (it changes too as the reference is the same)

// Primitives:             References:
// Number                  Object 
// String(only in JS)      Function
// Boolean                 Array 
// Symbol
// undefined
// null

//-----------------------------------------------------------------------------------------------
// Adding object properties
circle.location = { x: 1 };

const propertyName = 'location';
circle[propertyName] = { x : 2 }

// Deleting object properties
delete circle.location;

//-----------------------------------------------------------------------------------------------
// Enumerating Objects
for (let key in circle) {
    console.log(key, circle[key]);
}

// Return in array form
const keys = Object.keys(circle);
console.log(keys);

// Accessing with 'in'
if ('radius' in circle)
    console.log('Circle has a radius');

//--------------------------------------------------------------------------
// Abstraction

// Utilising private methods and properties (using the concept of Closure)
function CircleAbstractionExample(radius) {
    // Set it as a variable, users can't access it using dot notation (cleaner interface)
    let centreLocation = { x: 1, y: 1 }; // Inaccessible outside of scope (the constructor function)

    this.radius = radius,
    this.draw = function () {
      console.log("draw");
      console.log(centreLocation)
    };
}
const example = new CircleAbstractionExample(1); // Try typing example. and see what methods/properties are shown

// Utilising Getters and Setters
// Getters essentially allow us to access properties without the risk of changing them
// Setters allow us to change properties without using the function syntax (looks nicer)
// I.E: Read and Write respectively
class Example {
    constructor() {
        let egg = 'egg'
        this.value = 1;
        this.location = { x: 1, y: 1 };
    }

    get value() {
        return this.value;
    }

    set value(value) {
        this.value = value;
    }
}

const eg = new Example();

//OR
function Eggxample() {
    // Public
    this.value = 3;
    // Private
    let hiddenProperty = 'hidden'

    Object.defineProperty(this, 'hiddenProperty', {
        get: function() {
            return hiddenProperty;
        },
        set: function(value) {
            hiddenProperty = value;
        }
    })
}
let eggx = new Eggxample();
console.log(eggx.hiddenProperty)
eggx.hiddenProperty = 1;