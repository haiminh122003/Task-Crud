// controllers/roomController.js: logic CRUD
const Room = require("../models/room");

// GET all rooms
const getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.findAll();
        res.json(rooms);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET room by ID
const getRoomById = async (req, res) => {
    try {
        const room = await Room.findByPk(req.params.id); // find by primary key
        if (!room) return res.status(404).json({ error: "Room not found" });
        res.json(room);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// POST create room
const createRoom = async (req, res) => {
    try {
        const { room_type, price } = req.body;

        // 1. Lấy room_id lớn nhất hiện tại
        const lastRoom = await Room.findOne({ order: [["room_id", "DESC"]] });
        const newId = lastRoom ? lastRoom.room_id + 1 : 1;

        // 2. Tạo room mới với room_id
        const newRoom = await Room.create({
            room_id: newId,
            room_type,
            price
        });

        res.status(201).json(newRoom);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// PUT update room
const updateRoom = async (req, res) => {
    try {
        const room = await Room.findByPk(req.params.id);
        if (!room) return res.status(404).json({ error: "Room not found" });

        const { room_type, price } = req.body;
        room.room_type = room_type ?? room.room_type; // nếu có gửi room_type thì update
        room.price = price ?? room.price;

        await room.save();
        res.json(room);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE room
const deleteRoom = async (req, res) => {
    try {
        const room = await Room.findByPk(req.params.id);
        if (!room) return res.status(404).json({ error: "Room not found" });

        await room.destroy();
        res.json({ message: "Room deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllRooms,
    getRoomById,
    createRoom,
    updateRoom,
    deleteRoom
};
