const express = require('express');
let Router = express.Router();

const liveHelper = require('../helper/live');
const io = require('../helper/io');

Router.get('/', (req, res) => {
    const { page, limit } = req.query;
    return liveHelper.getList({ page, limit })
        .then(io.send(res))
        .catch(io.sendError(res))
    ;
});

module.exports = Router;
