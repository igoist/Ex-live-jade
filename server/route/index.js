const express = require("express");

const liveRouter = require("./live");

let Router = express.Router();

Router.use("/", liveRouter);

module.exports = Router;
