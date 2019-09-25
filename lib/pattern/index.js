const TIMESTAMP = '(\\d{4}-\\d{2}-\\d{2}T\\d{1,2}:\\d{1,2}:\\d{1,2}.\\d{3}\\+\\d{4})';
const SEVERITY = '([FEWID])';
const OPERATION = '(\\w+)';
const CONNECTION_ID = '\\[(\\w+)\\]';
const COLLECTION_NAME = '(\\w+)';
const DB_NAME = `command\\s*(\\w+)\\.${COLLECTION_NAME}`;
const GENERAL_COMMAND = 'command: (\\w+)';
const KEYS_EXAMINED = 'keysExamined:(\\d+)';
const DOCS_EXAMINED = 'docsExamined:(\\d+)';
const NUM_YIELDS = 'numYields:(\\d+)';
const NUM_RETURNED = 'nreturned:(\\d+)';
const RESULT_LENGTH = 'reslen:(\\d+)';
const MONGO_COMMAND = `(\\{.+${KEYS_EXAMINED}.+${DOCS_EXAMINED}.+${NUM_YIELDS}.+${NUM_RETURNED}.+${RESULT_LENGTH}.+\\})`;
const PROTOCOL = 'protocol:(\\w+)';
const TOOK_MILLIS = '(\\d+)ms';
const delimiter = '(?:,?\\s*)';

const matchers = [
    TIMESTAMP,
    SEVERITY,
    OPERATION,
    CONNECTION_ID,
    DB_NAME,
    GENERAL_COMMAND,
    MONGO_COMMAND,
    PROTOCOL,
    TOOK_MILLIS,
];

module.exports = {
    pattern: new RegExp(matchers.join(delimiter)),
    matchers,
    delimiter
};
