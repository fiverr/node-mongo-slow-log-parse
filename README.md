# mongo-slow-log-parse [![](https://circleci.com/gh/fiverr/node-mongo-slow-log-parse.svg?style=svg)](https://circleci.com/gh/fiverr/node-mongo-log-parse) <a href="https://www.npmjs.com/package/mongo-slow-log-parse"><img src="https://img.shields.io/npm/v/mongo-slow-log-parse.svg"></a>

## 📃 Mongodb Slow Log line parser

```js
const parse = require('mongo-slow-log-parse');

const payload = new Buffer(event.data, 'base64');
const logs = JSON.parse(zlib.gunzipSync(payload).toString('ascii'));

const events = logs.map(parse); // <= ✨ Money time
```

### Example

Record
```
{"line":"2019-09-24T11:20:44.503+0000 I COMMAND  [conn47945] command db_name.db_collection command: find { find: \"db_collection\", filter: { user_id: 1199599, full_name: { $nin: [ \"\", null ] } }, sort: { _id: 1 }, limit: 1, singleBatch: true, $db: \"db_name\", $clusterTime: { clusterTime: Timestamp(1569324043, 85), signature: { hash: BinData(0, WIERD_HASH123123123AASDA, keyId: 123455677 } }, lsid: { id: UUID(\"1111111-222222-333333-444444-555555\") } } planSummary: IXSCAN { user_id: 1 } keysExamined:125530 docsExamined:125530 hasSortStage:1 cursorExhausted:1 numYields:990 nreturned:0 reslen:225 locks:{ Global: { acquireCount: { r: 1982 } }, Database: { acquireCount: { r: 991 } }, Collection: { acquireCount: { r: 991 } } } protocol:op_msg 545ms","namespace":"db_name.db_collection"},
```

Result
```js
{
    timestamp: Date.parse('2019-09-24T11:20:44.503+0000'),
    severity: 'I',
    operation: 'COMMAND',
    connection_id: 'conn47945',
    db_name: 'db_name',
    collection_name: 'db_collection',
    general_command: 'find',
    mongo_command: '{ find: \"db_collection\", filter: { user_id: 1199599, full_name: { $nin: [ \"\", null ] } }, sort: { _id: 1 }, limit: 1, singleBatch: true, $db: \"db_name\", $clusterTime: { clusterTime: Timestamp(1569324043, 85), signature: { hash: BinData(0, WIERD_HASH123123123AASDA), keyId: 123455677 } }, lsid: { id: UUID(\"1111111-222222-333333-444444-555555\") } } planSummary: IXSCAN { user_id: 1 } keysExamined:125530 docsExamined:125530 hasSortStage:1 cursorExhausted:1 numYields:990 nreturned:0 reslen:225 locks:{ Global: { acquireCount: { r: 1982 } }, Database: { acquireCount: { r: 991 } }, Collection: { acquireCount: { r: 991 } } }',
    took_millis: 545,
    num_returned: 0,
    num_yields: 990,
    result_length: 225,
    keys_examined: 125530,
    docs_examined: 125530,
    protocol: 'op_msg'
}
```

### Related projects:
- [RDS Slow Log line parser](https://github.com/fiverr/node-rds-slow-log-parse)
- [ElasticSearch Slow Log line parser](https://github.com/fiverr/node-es-slow-log-parse)
