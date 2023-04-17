// Implementation Detail (not exported)
const _radius = new WeakMap();

// Public Interface (exported)
export class Circle {
    constructor(radius) {
        _radius.set(this, radius)
    }

    draw() {
        console.log("draw");
    }
}
