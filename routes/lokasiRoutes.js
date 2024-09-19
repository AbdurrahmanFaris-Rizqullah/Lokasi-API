const express = require('express');
const router = express.Router();
const lokasiController = require('../controllers/lokasiController');
const auth = require('../middleware/authMiddleware');


// CRUD Lokasi
router.post('/lokasi', lokasiController.createLokasi);
router.get('/lokasi', lokasiController.getAllLokasi);
router.get('/lokasi/:id', lokasiController.getLokasiById);
router.get('/lokasi/kategori/:kategori', lokasiController.getLokasiByKategori);
router.put('/lokasi/:id', lokasiController.updateLokasi);
router.delete('/lokasi/:id', lokasiController.deleteLokasi);

// Auth
router.post('/lokasi', auth, lokasiController.createLokasi);

module.exports = router;
