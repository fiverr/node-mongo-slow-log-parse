const numerify = require('./lib/numerify');
const { pattern } = require('./lib/pattern');

const NUMERIC_FIELDS = [
    'took_millis',
    'num_yields',
    'resp_length'
];

module.exports = (string) => {
    const match = pattern.exec(string);

    if (!match) {
        return {};
    }

    const [, timestamp, severity, operation, connection_id, namespace, command, action, num_yields, resp_length, protocol, took_millis] = match;

    return process({
        timestamp,
        severity,
        operation,
        connection_id,
        namespace,
        command,
        action,
        num_yields,
        resp_length,
        protocol,
        took_millis
    });
};

function process(entry) {
    // convert elasticsearch timestamp to unix timestamp
    entry.timestamp = Date.parse(entry.timestamp.replace(',', '.'));

    numerify(entry, NUMERIC_FIELDS);

    return entry;
}
