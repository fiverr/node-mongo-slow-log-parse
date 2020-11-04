module.exports = [
    [
        '{"line":"2019-09-24T11:20:44.503+0000 I COMMAND  [conn47945] command db_name.db_collection command: find { find: "db_collection", filter: { user_id: 123413412, full_name: { $nin: [ "", null ] } }, sort: { _id: 1 }, limit: 1, singleBatch: true, $db: "db_name", $clusterTime: { clusterTime: Timestamp(1569324043, 85), signature: { hash: BinData(0, WIERD_HASH123123123AASDA, keyId: 123455677) } }, lsid: { id: UUID("1111111-222222-333333-444444-555555") } } planSummary: IXSCAN { user_id: 1 } keysExamined:125530 docsExamined:125530 hasSortStage:1 cursorExhausted:1 numYields:990 nreturned:0 reslen:225 locks:{ Global: { acquireCount: { r: 1982 } }, Database: { acquireCount: { r: 991 } }, Collection: { acquireCount: { r: 991 } } } protocol:op_msg 545ms","namespace":"db_name.db_collection"},',
        {
            timestamp: Date.parse('2019-09-24T11:20:44.503+0000'),
            severity: 'I',
            operation: 'COMMAND',
            connection_id: 'conn47945',
            namespace: 'db_name.db_collection',
            command: 'find',
            action: '{ find: "db_collection", filter: { user_id: 123413412, full_name: { $nin: [ "", null ] } }, sort: { _id: 1 }, limit: 1, singleBatch: true, $db: "db_name", $clusterTime: { clusterTime: Timestamp(1569324043, 85), signature: { hash: BinData(0, WIERD_HASH123123123AASDA, keyId: 123455677) } }, lsid: { id: UUID("1111111-222222-333333-444444-555555") } } planSummary: IXSCAN { user_id: 1 } keysExamined:125530 docsExamined:125530 hasSortStage:1 cursorExhausted:1 numYields:990 nreturned:0 reslen:225 locks:{ Global: { acquireCount: { r: 1982 } }, Database: { acquireCount: { r: 991 } }, Collection: { acquireCount: { r: 991 } } }',
            took_millis: 545,
            num_yields: 990,
            resp_length: 225,
            protocol: 'op_msg'
        }
    ]
];
