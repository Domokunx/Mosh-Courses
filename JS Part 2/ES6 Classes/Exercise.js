// Implement a Stack
const _stack = new WeakMap();
class Stack {
    constructor() {
        _stack.set(this, []);
        this.count = 0;
    }

    peek() {
        if (this.count == 0) throw new Error("stack is empty");
        return _stack.get(this)[_stack.get(this).length - 1];
    }

    push(item) {
        _stack.get(this).push(item);
        this.count++;
    }

    pop() {
        if (this.count == 0) throw new Error("stack is empty")
        this.count--;
        return _stack.get(this).pop();
    }
}