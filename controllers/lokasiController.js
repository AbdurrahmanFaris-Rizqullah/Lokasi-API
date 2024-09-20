const Lokasi = require("../models/lokasi");

// Tambah Lokasi Baru
exports.createLokasi = async (req, res) => {
  const { nama, latitude, longitude, deskripsi, kategori } = req.body;

  if (!nama || !latitude || !longitude || !kategori) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
    return res.status(400).json({ message: "Invalid coordinates" });
  }

  try {
    const lokasi = new Lokasi({ nama, latitude, longitude, deskripsi, kategori });
    await lokasi.save();
    res.status(201).json({
      status: true,
      data: lokasi,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ambil Semua Lokasi
exports.getAllLokasi = async (req, res) => {
  try {
    const lokasi = await Lokasi.find();
    res.status(200).json({ status: true, data: lokasi });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ambil Lokasi Berdasarkan ID
exports.getLokasiById = async (req, res) => {
  try {
    const lokasi = await Lokasi.findById(req.params.id);
    if (!lokasi) {
      return res.status(404).json({ message: "Lokasi tidak ditemukan" });
    }
    res.status(200).json({ status: true, data: lokasi });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Lokasi
exports.updateLokasi = async (req, res) => {
  const { latitude, longitude } = req.body;

  if ((latitude && (latitude < -90 || latitude > 90)) || (longitude && (longitude < -180 || longitude > 180))) {
    return res.status(400).json({ message: "Invalid coordinates" });
  }

  try {
    const lokasi = await Lokasi.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!lokasi) {
      return res.status(404).json({ message: "Lokasi tidak ditemukan" });
    }
    res.status(200).json({ status: true, data: lokasi });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Hapus Lokasi
exports.deleteLokasi = async (req, res) => {
  try {
    const lokasi = await Lokasi.findByIdAndDelete(req.params.id);
    if (!lokasi) {
      return res.status(404).json({ message: "Lokasi tidak ditemukan" });
    }
    res.status(200).json({ status: true, message: "Lokasi berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.searchKategori = async (req, res) => {
  try {
    const lokasi = await Lokasi.find({ kategori: req.params.kategori });
    if (lokasi.length === 0) {
      return res.status(404).json({ message: "Kategori tidak ditemukan" });
    }
    res.status(200).json({ status: true, data: lokasi });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
