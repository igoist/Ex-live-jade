const fs = require('fs');
const crypto = require('crypto');
const R = require('ramda');
const { E } = require('paras');
const Promise = require('bluebird');
const UPYUN = require('upyun');
const config = require('config');
const PP = require('../lib/prim');
const { File } = require('../lib/db').Model;

const upyunConfig = config.upyun;
const bucket = new UPYUN.Bucket(upyunConfig.bucket, upyunConfig.username, upyunConfig.password);
const upyun = new UPYUN.Client(bucket);

const cryptoFileWith = R.curry((name, file) => {
    let hash = crypto.createHash(name);

    return new Promise((resolve, reject) => {
        fs.createReadStream(file)
            .on('data', data => hash.update(data, 'utf-8'))
            .on('end', () => resolve(hash.digest('hex')))
            .on('error', reject)
        ;
    });
});

const uploadToUpyun = R.curry((file, key) => {
    const path = `/${key}`;
    return upyun.putFile(path, file.path)
        .then(R.when(
            R.equals(false),
            _ => E.throwMsg(`UPYUN upload failed: ${file.path}`)
        ))
        .then(_ => {
            return {
                bucket: upyunConfig.bucket,
                key,
                type: file.mimetype
            };
        })
    ;
});

const fileLink = file => {
    const { bucket, key } = file;
    return `//${bucket}.b0.upaiyun.com/${key}`;
};

const assocUrl = file => {
    const url = fileLink(file);
    return R.pipe(
        R.assoc('url', url),
        R.omit(['key', 'bucket'])
    )(file);
};

const assocUrlWhen = R.unless(R.isNil, assocUrl);

const findById = id => {
    return File.findById(id)
        .then(PP.toJSON)
        .then(assocUrlWhen)
    ;
};

const findByKey = key => {
    return File.findOne({ where: { key } })
        .then(PP.toJSON)
        .then(assocUrlWhen)
    ;
};

const saveFile = R.curry((key, file) => {
    return uploadToUpyun(file, key)
        .then(result => File.create(result))
        .then(PP.toJSON)
    ;
});

const saveWhen = file => {
    return cryptoFileWith('sha1', file.path)
        .then(key => Promise.all([
            key,
            findByKey(key)
        ]))
        .spread((key, row) => {
            return R.when(
                R.isNil,
                _ => saveFile(key, file)
            )(row);
        })
    ;
};

exports.findById = findById;
exports.findBykey = findByKey;
exports.saveWhen = saveWhen;
