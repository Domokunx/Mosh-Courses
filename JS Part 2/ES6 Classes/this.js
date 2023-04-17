"use strict"; // Enable StrictMode

// By default, classes are executed in StrictMode
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  draw() {
    console.log(this);
  }
}
const c = new Circle(1);
// Method Call (this refers to c(the object the method is tied to))
c.draw();

const draw = c.draw;
// Function Call (this refers to the global object, as there is no object the function is tied to)
draw(); // -> undefined (strictMode prevents us from accessing global object)
