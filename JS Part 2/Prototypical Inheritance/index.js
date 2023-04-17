// The constructrs prototype is the child's parent/ prototype
function Shape(colour) {
    this.colour = colour;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
}

// Intermediate function inheritance
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child; // Reset constructor (if u wan to dynamically duplicate)
}

function Circle(radius, colour) {
    Shape.call(this, colour); // How to call super constructor (since it is a function)
    this.radius = radius;


}
extend(Circle, Shape);
Circle.prototype.draw = function () { // Need to define function here as prototype just changed
  console.log("draw");
};
Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate(); // You can still call the parent method
    // OR
    Shape.prototype.duplicate.call(this);
    console.log("Duplicate Circle"); // Method Overriding 
}

function Square(size) {
    this.size = size;
}
extend(Square, Shape);
Square.prototype.duplicate = function() {
    console.log("Duplicate Square");
}

const c = new Circle(1, "red");
c.draw(); // Inherited from circleBase prototype
c.duplicate(); // Inherited from ShapeBase prototype

const s = new Square(10);

// Polymorphism (different implementation for the same function can be called in a single loop)
const shapes = [c, s]
for (let shape of shapes) {
    shape.duplicate();
}
