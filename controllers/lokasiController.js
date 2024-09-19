const Lokasi = require('../models/lokasi');

// Tambahkan Lokasi Baru
exports.createLokasi = async (req, res) => {
  try {
    const lokasi = new Lokasi(req.body);
    await lokasi.save();
    res.status(201).json(lokasi);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Ambil Semua Lokasi
exports.getAllLokasi = async (req, res) => {
  try {
    const lokasi = await Lokasi.find();
    res.status(200).json(lokasi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ambil Lokasi Berdasarkan ID
exports.getLokasiById = async (req, res) => {
  try {
    const lokasi = await Lokasi.findById(req.params.id);
    if (!lokasi) {
      return res.status(404).json({ message: 'Lokasi tidak ditemukan' });
    }
    res.status(200).json(lokasi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cari Lokasi Berdasarkan Kategori
exports.getLokasiByKategori = async (req, res) => {
  try {
    const lokasi = await Lokasi.find({ kategori: req.params.kategori });
    res.status(200).json(lokasi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Perbarui Lokasi
exports.updateLokasi = async (req, res) => {
  try {
    const lokasi = await Lokasi.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!lokasi) {
      return res.status(404).json({ message: 'Lokasi tidak ditemukan' });
    }
    res.status(200).json(lokasi);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Hapus Lokasi
exports.deleteLokasi = async (req, res) => {
  try {
    const lokasi = await Lokasi.findByIdAndDelete(req.params.id);
    if (!lokasi) {
      return res.status(404).json({ message: 'Lokasi tidak ditemukan' });
    }
    res.status(200).json({ message: 'Lokasi berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
