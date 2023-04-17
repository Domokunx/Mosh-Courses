class Shape {
    constructor(colour) {
        this.colour = colour;
    }
    move() {
        console.log("moving")
    }
}

// Inheritance ES6, no need to do Child.prototype = Object.create(constructor.prototype);
class Circle extends Shape {
    // If parent has constructor, must call parent constructor first
    constructor(colour, radius) {
        super(colour); // Calls the Parent constructor (otherwise, compiler unable to identify "this")
        this.radius = radius
    }

    draw() {
        console.log("draw")
    }
    
    // Method Overriding
    move() {
        super.move(); // Calls parent function
        console.log("move circle")
    }

}

const c = new Circle("red", 10);