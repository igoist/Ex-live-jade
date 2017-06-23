const express = require('express');
let Router = express.Router();

const fileMW = require('../middleware/file');

const liveHelper = require('../helper/live');
const fileHelper = require('../helper/file');
const io = require('../helper/io');

// 后台首页
Router.get('/', (req, res) => {
    const { page, limit } = req.query;
    return liveHelper.getList({ page, limit })
        .then(io.send(res))
        .catch(io.sendError(res))
    ;
});

// 文件上传
Router.post('/upload', fileMW.formLayer, (req, res) => {
    const { file } = req;
    return fileHelper.saveWhen(file)
        .then(io.send(res))
        .catch(io.sendError(res))
    ;
});

module.exports = Router;
