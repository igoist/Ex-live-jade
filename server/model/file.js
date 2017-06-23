const Sequelize = require('sequelize');

const model = {
    // 文件sha1值
    key: {
        type: Sequelize.STRING(64),
        allowNull: true,
        unique: true
    },

    // upyun bucket
    bucket: {
        type: Sequelize.STRING(32),
        allowNull: false
    },

    // 文件宽度
    width: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    // 文件高度
    height: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    // 文件类型
    type: Sequelize.STRING(12)
};

module.exports = model;
