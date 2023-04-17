// Implementation Detail (not exported)
const _radius = new WeakMap();

// Public Interface (exported)
class Circle {
    constructor(radius) {
        _radius.set(this, radius)
    }

    draw() {
        console.log("draw");
    }
}
// module.exports is an object (CommonJS)
module.exports.Circle = Circle; // this if you want to export multiple objs
module.exports = Circle; // this if you only export 1 obj