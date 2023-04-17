// Before ES6
// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function() {
//         console.log("draw");
//     }
// }

// After ES6 (syntactic sugar)
// Symbol returns a unique ID
const _radius = Symbol(); // Symbols can be used to make properties private(kinda)
const _draw = Symbol(); 

// Weakmaps (if the key is not referenced, it is garbage collected)
const _radius2 = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        this[_radius] = radius // _radius wont show up in the interface
        _radius2.set(this, radius); // Set key: Object/ Reference, value: radius
        _move.set(this, () => { console.log(this) });
    }

    // Instance Method 
    // ES6 computed property names ([expression]) 
    [_draw]() {
      console.log("draw");
    }

    // Getters and Setters
    get radius() {
        return _radius2.get(this);
    }

    set radius(value) {
        if (value > 1)
        _radius2.set(this, value);
    }

    // Static Method (for utility functions not tied directly to the object)
    static parse(str) {
        return new Circle(JSON.parse(str).radius);
    }
}

const c = new Circle(1);
const circle = Circle.parse('{ "radius": "1" }'); // Work with the Circle Class directly

// You can still access Symbol() values (but it is difficult)
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]) // -> 1