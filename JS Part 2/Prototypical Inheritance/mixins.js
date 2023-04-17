// Composition (combining objects)
function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log("eating");
    }
}

const canWalk = {
    walk: function() {
        console.log("walking");
    }
}

const canSwim = {
    swim: function() {
        console.log("swimming")
    }
}

function Person() {
    this.hunger = 1;
}

function Fish(){
}

// Assigns all properties and methods into the thisArg
const person = Object.assign({}, canEat, canWalk);
// OR 
Object.assign(Person.prototype, canEat, canWalk);
const person2 = new Person();

mixin(Fish.prototype, canEat, canSwim);
const goldFish = new Fish();