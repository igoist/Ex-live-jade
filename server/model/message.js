const Sequelize = require('sequelize');

const model = {
    // 消息内容
    text: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    // 开始时间
    beginAt: {
        type: Sequelize.DATE,
        allowNull: false
    },

    // 结束时间
    endAt: {
        type: Sequelize.DATE,
        allowNull: false
    },

    // 隐藏或删除
    hide: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
};

module.exports = model;
