const express = require('express');

const authMW = require('../middleware/auth');

const liveRouter = require('./live');
const adminRouter = require('./admin');

let Router = express.Router();

Router.use('/wodehoutai/', /* authMW.authLayer, authMW.adminLayer, */ adminRouter);
Router.use('/', liveRouter);

module.exports = Router;
