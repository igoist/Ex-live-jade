const Sequelize = require('sequelize');

const model = {
    // 直播标题
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 直接id
    videoId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    // 开始时间
    beginAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    // 价格
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    // 直接简介
    desc: Sequelize.TEXT,
    // 背景图
    banner: Sequelize.INTEGER,
    // 主播姓名
    anchorName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 主播头像
    anchorAvatar: {
        type: Sequelize.INTEGER,
        allowNul: false
    },
    // 主播头衔
    anchorTitle: Sequelize.STRING,
    // 主播简介
    anchorDesc: Sequelize.TEXT
};

module.exports = model;
