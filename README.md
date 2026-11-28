# Burgundy Roses — Undangan Pernikahan Digital

Template undangan pernikahan bernuansa **luxury botanical stationery** (*velvet burgundy, warm ivory, sage olive, dusty blush,* dan *antique gold*) yang dibangun dengan arsitektur **3 lapis (Data · Skeleton · Theme)**, tata letak *split-screen* desktop, serta koreografi animasi pembuka dan gulir yang halus.

## Arsitektur 3 Lapis

1. **Layer 1 — Data (`data/invitation.js`)**
   Berisi seluruh data undangan pada `window.INVITATION_DATA`: profil mempelai, kutipan ayat, jadwal acara, *dress code*, kisah cinta, galeri foto, rekening amplop digital, alamat kado fisik, musik latar, penutup, dan urutan bagian (`section_order`).
2. **Layer 2 — Skeleton (`core/skeleton.css`, `core/skeleton.js`)**
   Mengatur struktur halaman 10 bagian, sampul pembuka (`#lk-cover`), hitung mundur waktu acara, kalender bulanan, tombol kalender (Google Calendar & `.ics`), *lightbox* galeri, amplop digital interaktif 3D, pemutar musik (`#lk-music-btn` dengan dukungan *synth* harp bawaan maupun MP3), formulir RSVP & buku ucapan, serta notifikasi *toast*.
3. **Layer 3 — Theme (`themes/registry.js`, `themes/burgundy-roses/theme.css`, `themes/burgundy-roses/theme.js`)**
   Menyediakan registri `window.LKThemes`, tata letak *split shell* (`.pf-shell`, `.pf-aside`, `.lk-main`), tipografi (*Bodoni Moda*, *Cormorant Garamond*, *Pinyon Script*, *Plus Jakarta Sans*), palet mawar burgundy & kertas katun gading, ornamen botani & segel lilin merah tua, serta koreografi animasi pembuka, paralaks gulir, dan kelopak mawar jatuh.

## Kustomisasi `data/invitation.js`

Buka [`data/invitation.js`](data/invitation.js) dan sesuaikan properti di dalam `window.INVITATION_DATA`:

- **`mempelai.wanita` & `mempelai.pria`**: Nama panggilan, nama lengkap, peran anak ke-, nama orang tua, akun Instagram, serta `foto` dan titik fokus `foto_pos`.
- **`inisial`, `tanggal_utama`, `tanggal_teks`, `kota`, `tempat_utama`**: Ringkasan pasangan dan tanggal utama untuk hitung mundur (format ISO-8601 `+07:00`).
- **`kutipan`**: Teks ayat/kutipan dan sumbernya.
- **`acara`**: Daftar acara (*Akad Nikah*, *Resepsi & Jamuan*) lengkap dengan tanggal ISO, waktu, tempat, alamat, tautan Google Maps, dan catatan tamu.
- **`dress_code`**: Set `aktif: false` untuk menyembunyikan bagian ini, atau ubah `judul`, `catatan`, `palet`, dan `ilustrasi`.
- **`foto_cerita`, `cerita`, & `galeri`**: Foto kisah, lini masa perjalanan pasangan, dan galeri foto lokal di folder `img/`. Tandai satu foto dengan `featured: true` untuk tampil di *Jendela Kenangan*.
- **`amplop` & `alamat_kado`**: Daftar rekening bank dan alamat pengiriman kado fisik.
- **`musik.url`**: Biarkan `"synth"` untuk alunan harp lembut bawaan, isi path file MP3 (mis. `"audio/lagu.mp3"`), atau kosongkan `""` untuk menyembunyikan tombol musik.
- **`section_order`**: Susun ulang urutan section sesuai kebutuhan:
  `["pembuka", "ayat", "mempelai", "acara", "dresscode", "cerita", "galeri", "hadiah", "rsvp", "penutup"]`.

## Parameter URL & Pengiriman Tamu

- **`?to=Nama+Tamu`**: Menampilkan nama tamu personal pada sampul dan mengisi otomatis kolom nama RSVP.
- **`?a=NamaPria`** & **`?b=NamaWanita`**: Mengganti nama panggilan mempelai secara dinamis sekaligus memperbarui monogram inisial.
- **`/kirim` (`kirim.html`) & `/wa` (`wa.html`)**: Alat bantu membuat tautan personal dan pesan WhatsApp otomatis untuk daftar tamu.

## Mode RSVP: Lokal vs Google Apps Script

- **Mode Lokal (Default)**: Saat `rsvp_endpoint` bernilai `""`, konfirmasi kehadiran dan ucapan tersimpan di `localStorage` browser tamu.
- **Mode Google Apps Script**: Pasang `apps-script.gs` sebagai Web App di Google Sheets, lalu masukkan URL `/exec` ke `rsvp_endpoint` di `data/invitation.js`.

## Pratinjau Lokal

```bash
python -m http.server 8080
```

Buka `http://localhost:8080/?to=Bapak+Budi+Santoso+%26+Keluarga` di browser. Langsung siap deploy ke Vercel, Netlify, atau GitHub Pages tanpa proses *build*.
