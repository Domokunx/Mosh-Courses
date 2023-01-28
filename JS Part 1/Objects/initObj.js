// Factory fn
function makeAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    }
}
const address1 = makeAddress('Singapore', 'Singapore', 600113)

console.log(address1)

// Constructor fn
class Address {
    constructor(street, city, zipCode){
        this.street = street,
        this.city = city,
        this.zipCode = zipCode
    }
}
const address2 = new Address('Singapore', 'Singapore', 600113)
console.log(address2)