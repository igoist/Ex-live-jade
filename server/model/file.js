const Sequelize = require('sequelize');

const model = {
    key: {
        type: Sequelize.STRING(64),
        allowNull: true,
        unique: true
    },

    bucket: {
        type: Sequelize.STRING(32),
        allowNull: false
    },

    width: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    height: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    type: Sequelize.STRING(12)
};

module.exports = model;
