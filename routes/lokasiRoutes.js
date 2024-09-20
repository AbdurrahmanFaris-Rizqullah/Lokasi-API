const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const lokasiController = require('../controllers/lokasiController');

// Endpoint CRUD Lokasi
router.post('/', auth, lokasiController.createLokasi);  // Membutuhkan token JWT
router.get('/', auth, lokasiController.getAllLokasi);    // Membutuhkan token JWT
router.get('/:id', auth, lokasiController.getLokasiById);  // Membutuhkan token JWT
router.put('/:id', auth, lokasiController.updateLokasi);   // Membutuhkan token JWT
router.delete('/:id', auth, lokasiController.deleteLokasi);  // Membutuhkan token JWT

module.exports = router;
