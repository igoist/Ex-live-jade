const { File } = require('../lib/db').Model;

const fileLink = file => {
    const { bucket, key } = file;
    return `//${bucket}.b0.upaiyun.com/${key}`;
};

const findById = id => {
    return File.findById(id)
        .then(fileLink)
    ;
};

const findByKey = key => {
    return File.findOne({ where: { key } })
        .then(fileLink)
    ;
};

exports.findById = findById;
exports.findBykey = findByKey;
