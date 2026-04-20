# LiveCoding

Aplikasi pencarian dan eksplorasi destinasi wisata berbasis React Native. Repositori ini dibuat untuk menampilkan halaman-halaman antarmuka pengguna seperti Beranda dan Login yang dibuat menggunakan Expo dan React Native.

## 📁 Struktur Direktori & Dokumentasi File

Berikut adalah penjelasan mengenai file dan direktori yang ada di dalam proyek ini:

### 1. `components/`
Direktori ini berisi komponen-komponen utama antarmuka pengguna (UI) dari aplikasi.
- **`Home.js`**: Halaman utama aplikasi yang menampilkan daftar destinasi wisata unggulan. Menggunakan `FlatList` untuk me-render daftar destinasi secara grid, mengimpor gambar dari direktori `assets`, dan menggunakan `FontAwesome5` untuk ikon-ikon pencarian dan menu dasar.
- **`Login.js`**: Halaman antarmuka login yang berisi formulir untuk memasukkan email dan kata sandi. Halaman ini juga memiliki sistem antarmuka untuk fitur lupa kata sandi dengan desain yang responsif secara vertikal.

### 2. `assets/`
Direktori ini digunakan untuk menyimpan seluruh file statis yang digunakan aplikasi.
- Berisi ikon aplikasi bawaan Expo (`icon.png`, `splash.png`, `favicon.png`).
- **`image/`**: Subdirektori yang menyimpan gambar aset untuk background dan item destinasi wisata (seperti `pemandangan.jpg` dan logo).

### 3. `scripts/`
Direktori untuk menyimpan skrip kode di luar ekosistem React Native.
- **`test.py`**: Berisi skrip Python independen yang mengimplementasikan *Metode Biseksi* (Bisection Method) untuk mencari akar dari sebuah fungsi matematika.

### 4. File Konfigurasi di Root
- **`App.js`**: Entry point utama aplikasi React Native. Mengimpor dan merender komponen aplikasinya (secara default me-render `<Home />`).
- **`package.json`**: Berisi konfigurasi proyek, dependensi npm seperti `react`, `react-native`, `expo`, dan `@expo/vector-icons`, serta skrip (scripts) untuk menjalankan server pengembangan.
- **`app.json`**: File spesifik dari Expo yang menyimpan pengaturan build dan metadata aplikasi, seperti nama aplikasi, slug, dan path ikon.
- **`babel.config.js`**: Konfigurasi Babel untuk memicu transpiler kode JavaScript modern agar bisa dibaca di lingkungan React Native.

## 🚀 Cara Menjalankan Aplikasi

1. Pastikan Anda telah menginstal `node` dan `npm`.
2. Lakukan instalasi dependensi dengan perintah:
   ```bash
   npm install
   ```
3. Jalankan server pengembangan Expo menggunakan:
   ```bash
   npm start
   ```
   Atau
   ```bash
   npx expo start
   ```
4. Buka aplikasi di perangkat fisik menggunakan aplikasi Expo Go, atau gunakan emulator Android/iOS.

## ✨ Fitur-Fitur Utama (Berdasarkan Mockup UI)
- **Eksplorasi Destinasi**: Penjelajahan tempat wisata dengan desain UI modern (*grid view*).
- **Komponen Login UI**: Formulir autentikasi pengguna.
- **Desain Modern**: Antarmuka bersih, elemen *rounded*, menggunakan *icons*, serta responsif menggunakan teknik Flexbox bawaan React Native.
