const numerify = require('.');

describe('ES/numerify', () => {
    let target;
    beforeEach(() => {
        target = {
            a: '1',
            b: 'hello',
            c: '34.56',
            d: '123.123'
        };
    });

    test('Should convert (only) selected fields', () => {
        expect(numerify(target, ['a', 'c'])).toEqual({
            a: 1,
            b: 'hello',
            c: 34.56,
            d: '123.123'
        });
    });

    test('Should mutate the original object', () => {
        expect(numerify(target) === target).toBeTruthy;
    });
});
