const Promise = require('bluebird');
const R = require('ramda');
const P = require('paras');
const { Live } = require('../lib/db').Model;

const fileHelper = require('./file');

const assocFile = live => {
    return fileHelper.findById(live.bannerId)
        .then(R.flip(R.assoc('banner'))(live))
    ;
};

// 获得最近的几场直播活动
const getList = options => {
    const page = parseInt(options.page) || 1;
    const limit = parseInt(options.limit) || 20;
    const offset = (page - 1) * limit;

    const options_ = {
        offset,
        limit,
        order: ['id', 'DESC']
    };

    return Live.findAndCountAll(options_)
        .then(result => {
            return Promise.all([
                result.count,
                P.mapM(assocFile, result.rows)
            ]);
        })
        .spread((count, rows) => ({ hits: rows, total: count }))
    ;
};

exports.getList = getList;
