// Object with [street, city, zipCode] and fn showAddress(address{obj})

class Address {
    constructor(street, city, zipCode){
        this.street = street,
        this.city = city,
        this.zipCode = zipCode
    }
}

function showAddress(address){
    for (let key in address)
    {
        console.log(key, address[key])
    }
    return
}

let address1 = new Address('Singapore', 'Singapore', '600113')
showAddress(address1)