const mongoose = require('mongoose');

const lokasiSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  deskripsi: { type: String },
  kategori: { type: String, required: true }
});

module.exports = mongoose.model('Lokasi', lokasiSchema);
