const R = require('ramda');
const send = R.curry((res, v) => {
    res.json(v);
});

const sendError = R.curry((res, e) => {
    res.send(e);
});

const render = R.curry((tpl, res, v) => {
    res.render(tpl, v);
});

const renderError = R.curry((res, e) => {
    res.render('error', e);
});

exports.send = send;
exports.sendError = sendError;
exports.render = render;
exports.renderError = renderError;
