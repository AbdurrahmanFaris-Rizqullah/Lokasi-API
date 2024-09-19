# Lokasi-API

_Versi_: 1.0.0  
_API_: Untuk mengelola lokasi

## Deskripsi

Lokasi API adalah sebuah API sederhana yang memungkinkan pengguna untuk mendapatkan daftar lokasi dan menambahkan lokasi baru. API ini didokumentasikan menggunakan _Swagger UI_ sehingga memudahkan untuk melakukan pengujian dan eksplorasi.

## Prasyarat

Pastikan kamu telah menginstal beberapa hal berikut sebelum menjalankan aplikasi ini:

1. _Node.js_ (versi terbaru yang stabil)  
   [Download Node.js](https://nodejs.org/)

2. _Nodemon_ (opsional, untuk development)  
   Instalasi nodemon dilakukan menggunakan npm:

```bash
   npm install -g nodemon
```

3. _Package Dependencies_  
   Aplikasi ini menggunakan beberapa dependensi yang harus diinstal melalui _npm_. Pastikan kamu menjalankan perintah berikut untuk menginstalnya:

```bash
   npm install
```

## Menjalankan Aplikasi

Ikuti langkah-langkah berikut untuk menjalankan aplikasi:

1. _Clone repositori_ ini atau pindahkan file ke dalam folder lokal.

2. Buka terminal atau command prompt, lalu arahkan ke direktori aplikasi:

```bash
  cd lokasi-api
```

3. Pastikan semua dependensi sudah terpasang:

```bash
  npm install
```

4. _Menjalankan Server_  
   Kamu bisa menjalankan server menggunakan Node.js atau _nodemon_ (untuk reload otomatis saat ada perubahan):

   - _Menggunakan Node.js_:

```bash
     node index.js
```

- _Menggunakan Nodemon_ (untuk pengembangan):

```bash
     nodemon index.js
```

5. _Buka Swagger UI_  
   Setelah server berhasil dijalankan, buka browser dan akses dokumentasi Swagger UI di:

```
   http://localhost:5000/api-docs
```

6. Kamu akan melihat tampilan Swagger UI di mana kamu bisa menguji endpoint yang tersedia.

## Endpoints

1. _GET /lokasi_  
   Mendapatkan semua lokasi yang ada.

2. _POST /lokasi_  
   Menambahkan lokasi baru dengan mengirimkan data dalam format JSON.

## Contoh Body Request (POST /lokasi)

Untuk menambahkan lokasi baru, gunakan format berikut dalam body request:

```json
{
  "nama": "Lokasi A",
  "latitude": -7.250445,
  "longitude": 112.768845,
  "deskripsi": "Ini adalah lokasi A",
  "kategori": "umum"
}
```

## Teknologi yang Digunakan

- _Node.js_: JavaScript runtime environment
- _Express_: Web framework for Node.js
- _Swagger UI_: Tool untuk mendokumentasikan dan menguji API
- _Nodemon_: Tool untuk development yang me-reload otomatis saat ada perubahan pada file
