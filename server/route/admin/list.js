/** 列表页 */
const express = require('express');
let Router = express.Router();

Router.get('/', (_, res) => {
    res.send('hello world');
});

module.exports = Router;
