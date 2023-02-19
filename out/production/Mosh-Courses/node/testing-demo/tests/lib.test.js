const lib = require('../lib')

describe('absolute', () => {
    it('should return number if input is positive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    })
     
    it('should return positive number if input is number', () => {
         const result = lib.absolute(-1);
         expect(result).toBe(1);
    })
     
     it('should return 0 if input is 0', () => {
         const result = lib.absolute(0);
         expect(result).toBe(0);
    })
})

describe ('greet', () => {
    it ("should return Welcome (name)", () => {
        const result = lib.greet('Cliff');
        expect(result).toContain('Cliff');
        expect(result).toMatch(/Cliff/);
    })
})

describe('getCurrencies', () => {
    it ('should return supported currencies', () => {
        const result = lib.getCurrencies();
        expect(result).toEqual(expect.arrayContaining(['USD', 'AUD', 'EUR']))
    })
})

describe('getProduct', () => {
    it ('should return product with the given id', () => {
        const result = lib.getProduct(1);
        expect(result).toMatchObject({ id: 1, price: 10 }); // Will pass as long as it is a subset (don't need all the properties)
        expect(result).toHaveProperty('id', 1); // Checks 1 property
        expect(result).toEqual({ id: 1, price: 10 }); // Strictly equal
    })
})

// Test exceptions
describe('registerUser', () => {
    it ('should throw Error if username is falsy', () => {
        expect(() => { lib.registerUser(null)}).toThrow();
    })
    
    it ('should return a user object is valid username is passed', () => {
        const result = lib.registerUser('Cliff')
        expect(result).toMatchObject({ username: 'Cliff'})
    })
})