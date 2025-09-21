// routes/rooms.js: define routes

const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomController");

// CRUD routes
router.get("/", roomController.getAllRooms);
router.get("/:id", roomController.getRoomById);
router.post("/", roomController.createRoom);
router.put("/:id", roomController.updateRoom);
router.delete("/:id", roomController.deleteRoom);

module.exports = router;
