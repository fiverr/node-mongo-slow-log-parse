const {pattern, matchers, delimiter} = require('.');

describe('mongo/pattern', () => {
    test('Should create a patterns comprised of all matchers', () => {
        expect(pattern.source).toEqual(matchers.join(delimiter));
    });

    const [
        timestamp,
        severity,
        operation,
        connection_id,
        db_name,
        general_command,
        mongo_command,
        protocol,
        took_millis,
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
    describe('db_name', () => {
        test('Should extract db_name', () => {
            const [, match] = db_name.exec('command collaboration.collaborators');
            expect(match).toEqual('collaboration');
        });
    });
    describe('general_command', () => {
        test('Should extract general_command', () => {
            const [, match] = general_command.exec('command: find');
            expect(match).toEqual('find');
        });
    });
    describe('mongo_command', () => {
        test('Should extract mongo_command', () => {
            const [, match] = mongo_command.exec('{ find: \"collaborators\", filter: { user_id: 1199599, full_name: { $nin: [ \"\", null ] } }, sort: { _id: 1 }, limit: 1, singleBatch: true, $db: \"collaboration\", $clusterTime: { clusterTime: Timestamp(1569324043, 85), signature: { hash: BinData(0, DAE19EABA4D6D74EB899089434301DA7A99B1068), keyId: 6705578730955210753 } }, lsid: { id: UUID(\"9987abd3-984d-44ae-a871-7cd79e92b015\") } } planSummary: IXSCAN { user_id: 1 } keysExamined:125530 docsExamined:125530 hasSortStage:1 cursorExhausted:1 numYields:990 nreturned:0 reslen:225 locks:{ Global: { acquireCount: { r: 1982 } }, Database: { acquireCount: { r: 991 } }, Collection: { acquireCount: { r: 991 } } }');
            expect(match).toEqual('{ find: \"collaborators\", filter: { user_id: 1199599, full_name: { $nin: [ \"\", null ] } }, sort: { _id: 1 }, limit: 1, singleBatch: true, $db: \"collaboration\", $clusterTime: { clusterTime: Timestamp(1569324043, 85), signature: { hash: BinData(0, DAE19EABA4D6D74EB899089434301DA7A99B1068), keyId: 6705578730955210753 } }, lsid: { id: UUID(\"9987abd3-984d-44ae-a871-7cd79e92b015\") } } planSummary: IXSCAN { user_id: 1 } keysExamined:125530 docsExamined:125530 hasSortStage:1 cursorExhausted:1 numYields:990 nreturned:0 reslen:225 locks:{ Global: { acquireCount: { r: 1982 } }, Database: { acquireCount: { r: 991 } }, Collection: { acquireCount: { r: 991 } } }');
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
