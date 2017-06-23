const client = require('petaline').petalineM;
const R = require('ramda');
const config = require('config');

const send = R.curry(client(config.petaline));

exports.send = send;
