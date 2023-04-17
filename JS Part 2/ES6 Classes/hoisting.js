// 2 Ways to declare functions
sayHello();

// Function Declaration (no semi-colon as it is not an expression, no need to terminate)
function sayHello() {
    console.log("Hello");
}

// Function Expression (semi-colon at the end)
const sayGoodbye = function() {
    console.log("Goodbye");
};

// Main Difference
// Fn Declarations are hoisted(raised to the top of the code)
// This means you can call it even before you define it in the code

//-----------------------------------------------------------------

// Meanwhile for Classes (both are not hoisted)

// Class Declaration
class Circle {}

// Class Expression (would not recommend)
const Circle = class {};