const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
require('dotenv').config();

const app = express(); // Pindahkan inisialisasi app ke sini
const lokasiRoutes = require('./routes/lokasiRoutes');
const authRoutes = require('./routes/authRoutes');

// Middleware untuk parsing JSON
app.use(express.json());

// Swagger setup
app.use('/lokasi-api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/auth', authRoutes); // Pindahkan ke sini setelah inisialisasi app
app.use('/lokasi', lokasiRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
