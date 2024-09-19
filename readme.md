Lokasi API
Versi: 1.0.0
API: Untuk mengelola lokasi

Deskripsi
Lokasi API adalah sebuah API sederhana yang memungkinkan pengguna untuk mendapatkan daftar lokasi dan menambahkan lokasi baru. API ini didokumentasikan menggunakan Swagger UI sehingga memudahkan untuk melakukan pengujian dan eksplorasi.

Prasyarat
Pastikan kamu telah menginstal beberapa hal berikut sebelum menjalankan aplikasi ini:

Node.js (versi terbaru yang stabil)
Download Node.js

Nodemon (opsional, untuk development)
Instalasi nodemon dilakukan menggunakan npm:

bash
Salin kode
npm install -g nodemon
Package Dependencies
Aplikasi ini menggunakan beberapa dependensi yang harus diinstal melalui npm. Pastikan kamu menjalankan perintah berikut untuk menginstalnya:

bash
Salin kode
npm install
Menjalankan Aplikasi
Ikuti langkah-langkah berikut untuk menjalankan aplikasi:

Clone repositori ini atau pindahkan file ke dalam folder lokal.

Buka terminal atau command prompt, lalu arahkan ke direktori aplikasi:

bash
Salin kode
cd lokasi-api
Pastikan semua dependensi sudah terpasang:

bash
Salin kode
npm install
Menjalankan Server
Kamu bisa menjalankan server menggunakan Node.js atau nodemon (untuk reload otomatis saat ada perubahan):

Menggunakan Node.js:

bash
Salin kode
node index.js
Menggunakan Nodemon (untuk pengembangan):

bash
Salin kode
nodemon index.js
Buka Swagger UI
Setelah server berhasil dijalankan, buka browser dan akses dokumentasi Swagger UI di:

bash
Salin kode
http://localhost:5000/api-docs
Kamu akan melihat tampilan Swagger UI di mana kamu bisa menguji endpoint yang tersedia.

Endpoints
GET /lokasi
Mendapatkan semua lokasi yang ada.

POST /lokasi
Menambahkan lokasi baru dengan mengirimkan data dalam format JSON.

Contoh Body Request (POST /lokasi)
Untuk menambahkan lokasi baru, gunakan format berikut dalam body request:

json
Salin kode
{
  "nama": "Lokasi A",
  "latitude": -7.250445,
  "longitude": 112.768845,
  "deskripsi": "Ini adalah lokasi A",
  "kategori": "umum"
}
Teknologi yang Digunakan
Node.js: JavaScript runtime environment
Express: Web framework for Node.js
Swagger UI: Tool untuk mendokumentasikan dan menguji API
Nodemon: Tool untuk development yang me-reload otomatis saat ada perubahan pada file
Lisensi
Proyek ini dilisensikan di bawah lisensi MIT - lihat file LICENSE untuk detail lebih lanjut.