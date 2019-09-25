/**
 * Mutate a giver object - convert specified fields to floating point numbers
 * @param  {Object}    obj
 * @param  {[Strings]} [fields]
 * @return {Object}
 */
module.exports = (obj, fields = []) => fields.reduce(
    (obj, field) => Object.assign(
        obj,
        { [field]: parseFloat(obj[field]) }
    ),
    obj
);
