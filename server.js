const express = require("express");
const { sequelize } = require("./db");
const roomRoutes = require("./routes/rooms");

const app = express();
app.use(express.json()); // parse JSON body

// Sync DB
async function init() {
  try {
    await sequelize.sync({ alter: true }); // tạo/điều chỉnh bảng
    console.log("✅ Database synced!");
  } catch (err) {
    console.error("❌ DB sync error:", err);
    process.exit(1);
  }
}

// Routes
app.use("/rooms", roomRoutes);

// Start server
const PORT = 3000;
init().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
});
