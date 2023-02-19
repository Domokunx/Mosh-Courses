const fizzBuzz = require('../exercise1')

describe('fizzbuzz', () => {
    it ('should return FizzBuzz if number is divisible by 15', () => {
        const result = fizzBuzz(0);
        expect(result).toMatch('FizzBuzz');
    })

    it ('should return Buzz if number divisible ONLY by 5', () => {
        const result = fizzBuzz(5);
        expect(result).toMatch('Buzz');
    })

    it ('should return Fizz if number divisible ONLY by 3', () => {
        const result = fizzBuzz(3);
        expect(result).toMatch('Fizz');
    })

    it ('should return input if not divisible by 3 AND 5', () => {
        const result = fizzBuzz(1);
        expect(result).toBe(1);
    })

    it ('should throw if input is NaN', () => {
        expect(() => { fizzBuzz('Hi') }).toThrow();
    })
})