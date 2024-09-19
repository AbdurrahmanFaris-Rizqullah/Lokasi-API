const mongoose = require('mongoose');

const LokasiSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
    min: -90,
    max: 90,
  },
  longitude: {
    type: Number,
    required: true,
    min: -180,
    max: 180,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  kategori: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Lokasi', LokasiSchema);
