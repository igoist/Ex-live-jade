const R = require('ramda');

const toJSON = R.unless(
    R.isNil,
    model => model.toJSON()
);

exports.toJSON = toJSON;
