// models/room.js: định nghĩa model Room

const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

// 2. Model Room
const Room = sequelize.define("Room", {
  room_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  room_type: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false }
}, {
  tableName: "rooms",
  timestamps: false
});

module.exports = Room;
