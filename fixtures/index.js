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
    ],
    [
        '{"line": "2020-11-03T02:54:26.895+0000 I COMMAND  [conn755878] command db_name.db_collection command: findAndModify { findAndModify: "db_collection", query: { _id: "112223333iadoiasd01230" }, update: { $set: { updated_at: new Date(1604372065945) } }, new: true, maxTimeMS: 10000, $db: "db_name", $clusterTime: { clusterTime: Timestamp(1604372065, 6109), signature: { hash: BinData(0, 123109310924102410294), keyId: 591823498123489123 } }, txnNumber: 1238123, lsid: { id: UUID("1111111-f5a3-222222-953b-333333333") } } planSummary: IDHACK keysExamined:1 docsExamined:1 nMatched:1 nModified:1 keysInserted:1 keysDeleted:1 numYields:0 reslen:571 locks:{ Global: { acquireCount: { r: 4, w: 4 } }, Database: { acquireCount: { w: 4 } }, Collection: { acquireCount: { w: 2 } }, oplog: { acquireCount: { w: 2 } } } protocol:op_msg 944ms"},',
        {
            timestamp: 1604372066895,
            severity: 'I',
            operation: 'COMMAND',
            connection_id: 'conn755878',
            namespace: 'db_name.db_collection',
            command: 'findAndModify',
            action: '{ findAndModify: "db_collection", query: { _id: "112223333iadoiasd01230" }, update: { $set: { updated_at: new Date(1604372065945) } }, new: true, maxTimeMS: 10000, $db: "db_name", $clusterTime: { clusterTime: Timestamp(1604372065, 6109), signature: { hash: BinData(0, 123109310924102410294), keyId: 591823498123489123 } }, txnNumber: 1238123, lsid: { id: UUID("1111111-f5a3-222222-953b-333333333") } } planSummary: IDHACK keysExamined:1 docsExamined:1 nMatched:1 nModified:1 keysInserted:1 keysDeleted:1 numYields:0 reslen:571 locks:{ Global: { acquireCount: { r: 4, w: 4 } }, Database: { acquireCount: { w: 4 } }, Collection: { acquireCount: { w: 2 } }, oplog: { acquireCount: { w: 2 } } }',
            took_millis: 944,
            num_yields: 0,
            resp_length: 571,
            protocol: 'op_msg'
        }
    ]
];
