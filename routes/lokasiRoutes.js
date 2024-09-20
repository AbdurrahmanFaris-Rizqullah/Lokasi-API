const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const lokasiController = require('../controllers/lokasiController');

// Endpoint CRUD Lokasi
router.post('/lokasi', auth, lokasiController.createLokasi);  // Membutuhkan token JWT
router.get('/lokasi', auth, lokasiController.getAllLokasi);    // Membutuhkan token JWT
router.get('/lokasi/:id', auth, lokasiController.getLokasiById);  // Membutuhkan token JWT
router.put('/lokasi/:id', auth, lokasiController.updateLokasi);   // Membutuhkan token JWT
router.delete('/lokasi/:id', auth, lokasiController.deleteLokasi);  // Membutuhkan token JWT

module.exports = router;
