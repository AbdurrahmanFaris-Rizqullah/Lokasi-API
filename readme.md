## **README.md**

# Lokasi API
![Dashboard Swagger UI]("..\backend\img\bg-1.jpg")

Lokasi API adalah sebuah RESTful API yang memungkinkan pengelolaan data lokasi geografis. API ini mendukung operasi CRUD (Create, Read, Update, Delete) untuk data lokasi yang mencakup informasi seperti nama lokasi, koordinat (latitude & longitude), deskripsi, dan kategori.

### **Fitur:**

- Menambahkan lokasi baru.
- Mengambil semua lokasi.
- Mengambil lokasi berdasarkan ID.
- Mencari lokasi berdasarkan kategori.
- Memperbarui informasi lokasi.
- Menghapus lokasi.
- Autentikasi pengguna menggunakan JWT untuk mengamankan endpoint CRUD.

---

### **Teknologi yang Digunakan:**

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- Swagger untuk dokumentasi API

---

### **Persyaratan:**

- Node.js versi 14.x atau lebih tinggi
- MongoDB (Lokal atau MongoDB Atlas)
- NPM (Node Package Manager)

---

### **Cara Menjalankan Aplikasi:**

#### 1. Clone repository

```bash
https://github.com/AbdurrahmanFaris-Rizqullah/Lokasi-API.git
```

#### 2. Install dependencies

Pindah ke direktori proyek dan jalankan perintah berikut untuk menginstal semua dependencies yang diperlukan:

```bash
cd lokasi-api
npm install
```

#### 3. Buat file `.env`

Buat file `.env` di root folder proyek dengan isi berikut:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
SECRET_KEY=your_jwt_secret_key
```

Gantilah `your_mongodb_uri` dengan URL MongoDB Anda dan `your_jwt_secret_key` dengan secret key untuk JWT.

#### 4. Menjalankan Aplikasi

Setelah konfigurasi selesai, Anda bisa menjalankan aplikasi menggunakan perintah berikut:

```bash
npm start
```

Server akan berjalan di `http://localhost:5000`.

#### 5. Akses Dokumentasi API

Anda dapat mengakses dokumentasi API menggunakan Swagger UI di:

```bash
http://localhost:5000/api-docs
```

---

### **Endpoint API**

#### 1. **Autentikasi**

- **POST** `/auth/register`  
  Daftarkan pengguna baru.  
  Body:  
  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```

- **POST** `/auth/login`  
  Login pengguna yang sudah terdaftar.  
  Body:  
  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```
  Response: JWT token yang digunakan untuk mengakses endpoint yang memerlukan autentikasi.

#### 2. **Lokasi**

- **GET** `/lokasi`  
  Mengambil semua lokasi yang ada.

- **GET** `/lokasi/:id`  
  Mengambil lokasi berdasarkan ID.

- **GET** `/lokasi/kategori/:kategori`  
  Mencari lokasi berdasarkan kategori.

- **POST** `/lokasi`  
  Menambahkan lokasi baru.  
  Body:  
  ```json
  {
    "nama": "Lokasi A",
    "latitude": -7.250445,
    "longitude": 112.768845,
    "deskripsi": "Deskripsi lokasi A",
    "kategori": "kategori1"
  }
  ```

- **PUT** `/lokasi/:id`  
  Memperbarui informasi lokasi berdasarkan ID.  
  Body:  
  ```json
  {
    "nama": "Lokasi B",
    "latitude": -7.250445,
    "longitude": 112.768845,
    "deskripsi": "Deskripsi lokasi B",
    "kategori": "kategori2"
  }
  ```

- **DELETE** `/lokasi/:id`  
  Menghapus lokasi berdasarkan ID.

---

### **Validasi Data:**

- **Nama Lokasi**: Wajib diisi, tipe data `String`.
- **Koordinat**: 
  - Latitude antara -90 hingga 90.
  - Longitude antara -180 hingga 180.
- **Kategori**: Wajib diisi, tipe data `String`.
  
Jika data yang dimasukkan tidak valid, API akan memberikan pesan kesalahan yang sesuai.

---

### **Dokumentasi API**

Dokumentasi lengkap API dapat diakses melalui Swagger di endpoint `/api-docs`:

```
http://localhost:5000/api-docs
```

Swagger UI akan menampilkan seluruh endpoint yang tersedia beserta detail permintaan dan responnya.

---

### **Struktur Folder**

```
/lokasi-api
│
├── /controllers
│   ├── authController.js     # Kontroller untuk autentikasi pengguna
│   └── lokasiController.js   # Kontroller untuk pengelolaan data lokasi
│
├── /middleware
│   └── authMiddleware.js     # Middleware untuk autentikasi JWT
│
├── /models
│   ├── lokasi.js             # Model schema MongoDB untuk lokasi
│   └── user.js               # Model schema MongoDB untuk pengguna
│
├── /routes
│   ├── authRoutes.js         # Route untuk autentikasi pengguna
│   └── lokasiRoutes.js       # Route untuk pengelolaan data lokasi
│
├── /swagger
│   └── swagger.json          # Dokumentasi API Swagger
│
├── .env                      # File konfigurasi environment variables
├── index.js                  # File utama aplikasi
└── README.md                 # Dokumentasi proyek
```
