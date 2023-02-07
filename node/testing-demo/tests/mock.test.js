const jest = require('jest-mock')

const myMock = jest.fn().mockReturnValue(1);
const result = myMock.mock.results[0];

console.log(result)