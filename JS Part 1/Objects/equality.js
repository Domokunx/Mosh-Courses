const obj1 = { value: 1, string: "lol"}
const obj2 = obj1
const obj3 = { string: "lol", value: 1}

// Fn areEqual that compares 2 objects and checks if properties are equal
function areEqual (obj1, obj2){
    // Check same number of keys 
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
        
    for (let key in obj1){
        if (obj1[key] !== obj2[key])
            return false;
    }
    return true
}

// Fn areSame that checks if 2 objects share the same reference
function areSame(obj1, obj2){
    return obj1 === obj2 ? true : false;
}

console.log(areEqual(obj1,obj3))
console.log(areSame(obj1,obj2))