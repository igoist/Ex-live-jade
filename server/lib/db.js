const fs = require('fs');
const Path = require('path');
const Sequelize = require('sequelize');
const R = require('ramda');
const P = require('paras');

let Model = {};

const readFiles = P.curryCallback(fs.readdir);

const readModels = path => {
    return readFiles(path)
        .then(R.filter(R.test(/\.js$/)))
    ;
};

const loadModel = R.curry((sequelize, file) => {
    const filename = Path.basename(file, '.js');
    const modelname = R.pipe(
        R.head,
        R.toUpper,
        R.flip(R.update(0))(filename),
        R.join('')
    )(filename);

    const model = require(`../model/${file}`);
    const extraOptions = {
        timestamps: false,
        underscored: true,
    };

    Model[modelname] = sequelize.define(filename, model, extraOptions);
    Model[modelname].sync({ force: true });
});

const loadModels = sequelize => {
    const modelPath = Path.join(__dirname, '../model');
    return readModels(modelPath)
        .then(R.forEach(loadModel(sequelize)))
        .then(_ => Model)
    ;
};

const init = config => {
    const sequelize = new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        dialect: 'mysql'
    });

    return loadModels(sequelize);
};

exports.init = init;
exports.Model = Model;
