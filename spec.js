const fixtures = require('./fixtures');
const mongo = require('.');

describe('mongo', () => {
    fixtures.forEach(
        ([entry, result], index) => {
            test(`Should parse entry ${index} correctly`, () => {
                const parsed = mongo(entry);

                expect(parsed).toEqual(result);
                expect(typeof parsed.timestamp).toEqual('number');
                expect(`${parsed.timestamp}`).toHaveLength(13);
            });
        }
    );
});
