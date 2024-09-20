const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
require("dotenv").config();

const app = express();
app.use(cors());
const lokasiRoutes = require("./routes/lokasiRoutes");
const authRoutes = require("./routes/authRoutes");

// Middleware untuk parsing JSON
app.use(express.json());

// Swagger setup (Dokumentasi API)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Root route untuk test server
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/auth", authRoutes); // Untuk autentikasi
app.use("/api/lokasi", lokasiRoutes); // Untuk operasi lokasi

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
