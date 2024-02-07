const Sequelize = require('sequelize');
const database = require('../orm/database');

const Student = database.define("student", {
  Roll_No: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Date_of_Birth: {
    type: Sequelize.DATEONLY,
    allowNull: false
   
  },
  Score: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
},
  {
    timestamps : false,
});

module.exports = Student;