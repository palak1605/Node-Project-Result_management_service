const Sequelize = require('sequelize');

const sequelize = new Sequelize('result', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});
module.exports = sequelize;


