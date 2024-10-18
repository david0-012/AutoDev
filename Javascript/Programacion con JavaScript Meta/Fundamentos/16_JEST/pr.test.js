const {default: TestRunner} = require('jest-runner');
const suma10 = require('./pr');

test('Returna el resultado de la suma de dos números más 10', () => {
    expect (suma10(5, 10)).toBe(25);
});