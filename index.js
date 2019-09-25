const numerify = require('./lib/numerify');
const {pattern} = require('./lib/pattern');

const NUMERIC_FIELDS = [
    'took_millis',
    'num_returned',
    'num_yields',
    'result_length',
    'keys_examined',
    'docs_examined'
];

module.exports = (string) => {
    const match = pattern.exec(string);

    if (!match) {
        return {};
    }

    const [, timestamp, severity, operation, connection_id, db_name, collection_name, general_command, mongo_command, keys_examined, docs_examined, num_yields, num_returned, result_length, protocol, took_millis] = match;

    return process({
        timestamp,
        severity,
        operation,
        connection_id,
        db_name,
        collection_name,
        general_command,
        mongo_command,
        keys_examined,
        docs_examined,
        num_yields,
        num_returned,
        result_length,
        protocol,
        took_millis,
    });
};

function process(entry) {
    // convert elasticsearch timestamp to unix timestamp
    entry.timestamp = Date.parse(entry.timestamp.replace(',', '.'));

    numerify(entry, NUMERIC_FIELDS);

    return entry;
}
