const { Sequelize, DataTypes } = require("sequelize");

// 1. Kết nối DB
const sequelize = new Sequelize("booking_db", "root", "12345", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = { sequelize };