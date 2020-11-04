const TIMESTAMP = '(\\d{4}-\\d{2}-\\d{2}T\\d{1,2}:\\d{1,2}:\\d{1,2}.\\d{3}\\+\\d{4})';
const SEVERITY = '([FEWID])';
const OPERATION = '(COMMAND)';
const CONNECTION_ID = '\\[(\\w+)\\]';
const NAMESPACE = 'command (\\w+\\.\\w+)';
const COMMAND = 'command: (delete|update|find|findAndModify)';
const NUM_YIELDS = 'numYields:(\\d+)';
const RESP_LENGTH = 'reslen:(\\d+)';
const ACTION = `(\\{.+${NUM_YIELDS}.+${RESP_LENGTH}.+\\})`;
const PROTOCOL = 'protocol:(\\w+)';
const TOOK_MILLIS = '(\\d+)ms';
const delimiter = '(?:,?\\s*)';

const matchers = [
    TIMESTAMP,
    SEVERITY,
    OPERATION,
    CONNECTION_ID,
    NAMESPACE,
    COMMAND,
    ACTION,
    PROTOCOL,
    TOOK_MILLIS
];

module.exports = {
    pattern: new RegExp(matchers.join(delimiter)),
    matchers,
    delimiter
};
