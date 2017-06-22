/** 后台总路由 */
const express = require('express');
const listRouter = require('./list');
let Router = express.Router();

Router.use('/', listRouter);

module.exports = Router;
