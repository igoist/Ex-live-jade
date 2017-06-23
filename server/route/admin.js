const express = require('express');
let Router = express.Router();

const fileMW = require('../middleware/file');

const liveHelper = require('../helper/live');
const fileHelper = require('../helper/file');
const io = require('../helper/io');

// 后台首页
Router.get('/', (req, res) => {
    // const { page, limit } = req.query;

    res.render('admin/index');
    /*
    return liveHelper.getList({ page, limit })
        .then(io.send(res))
        .catch(io.sendError(res))
    ;
    */
});

// 文件上传
Router.post('/api/upload', fileMW.formLayer, (req, res) => {
    const { file } = req;
    return fileHelper.saveWhen(file)
        .then(io.send(res))
        .catch(io.sendError(res))
    ;
});

// 新建直播
Router.post('/api/live', (req, res) => {
    const body = req.body;

    return liveHelper.create(body)
        .then(io.send(res))
        .catch(io.sendError(res))
    ;
});

module.exports = Router;
