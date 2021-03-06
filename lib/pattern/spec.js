const { pattern, matchers, delimiter } = require('.');

describe('mongo/pattern', () => {
    test('Should create a patterns comprised of all matchers', () => {
        expect(pattern.source).toEqual(matchers.join(delimiter));
    });

    const [
        timestamp,
        severity,
        operation,
        connection_id,
        namespace,
        command,
        action,
        protocol,
        took_millis
    ] = matchers.map((part) => new RegExp(part));

    describe('delimiter', () => {
        test('Should extract timestamp', () => {
            const [, ...matches] = new RegExp(new Array(4).fill('(\\w)').join(delimiter)).exec('a,b, c   d');
            expect(matches).toEqual(['a', 'b', 'c', 'd']);
        });
    });
    describe('timestamp', () => {
        test('Should extract timestamp', () => {
            const [, match] = timestamp.exec('2019-09-24T11:20:44.503+0000');
            expect(match).toEqual('2019-09-24T11:20:44.503+0000');
        });
    });
    describe('severity', () => {
        test('Should extract severity', () => {
            const [, match] = severity.exec('I');
            expect(match).toEqual('I');
        });
    });
    describe('operation', () => {
        test('Should extract operation', () => {
            const [, match] = operation.exec('COMMAND');
            expect(match).toEqual('COMMAND');
        });
    });
    describe('connection_id', () => {
        test('Should extract connection_id', () => {
            const [, match] = connection_id.exec('[conn47945]');
            expect(match).toEqual('conn47945');
        });
    });
    describe('namespace', () => {
        test('Should extract db_name', () => {
            const [, match] = namespace.exec('command db_name.collection_name');
            expect(match).toEqual('db_name.collection_name');
        });
    });
    describe('command', () => {
        test('Should extract command', () => {
            const [, match] = command.exec('command: find');
            expect(match).toEqual('find');
        });
    });
    describe('action', () => {
        test('Should extract action', () => {
            const [, match] = action.exec('{ find: "collection_name", filter: { user_id: 1199599, full_name: { $nin: [ "", null ] } }, sort: { _id: 1 }, limit: 1, singleBatch: true, $db: "db_name", $clusterTime: { clusterTime: Timestamp(1569324043, 85), signature: { hash: BinData(0, WIERD_HASH123123123AASDA), keyId: 123455677 } }, lsid: { id: UUID("1111111-222222-333333-444444-555555") } } planSummary: IXSCAN { user_id: 1 } keysExamined:125530 docsExamined:125530 hasSortStage:1 cursorExhausted:1 numYields:990 nreturned:0 reslen:225 locks:{ Global: { acquireCount: { r: 1982 } }, Database: { acquireCount: { r: 991 } }, Collection: { acquireCount: { r: 991 } } }');
            expect(match).toEqual('{ find: "collection_name", filter: { user_id: 1199599, full_name: { $nin: [ "", null ] } }, sort: { _id: 1 }, limit: 1, singleBatch: true, $db: "db_name", $clusterTime: { clusterTime: Timestamp(1569324043, 85), signature: { hash: BinData(0, WIERD_HASH123123123AASDA), keyId: 123455677 } }, lsid: { id: UUID("1111111-222222-333333-444444-555555") } } planSummary: IXSCAN { user_id: 1 } keysExamined:125530 docsExamined:125530 hasSortStage:1 cursorExhausted:1 numYields:990 nreturned:0 reslen:225 locks:{ Global: { acquireCount: { r: 1982 } }, Database: { acquireCount: { r: 991 } }, Collection: { acquireCount: { r: 991 } } }');
        });
    });
    describe('protocol', () => {
        test('Should extract protocol', () => {
            const [, match] = protocol.exec('protocol:op_msg');
            expect(match).toEqual('op_msg');
        });
    });
    describe('took_millis', () => {
        test('Should extract took_millis', () => {
            const [, match] = took_millis.exec('545ms');
            expect(match).toEqual('545');
        });
    });
});
