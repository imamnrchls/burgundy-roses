# Burgundy Roses — Undangan Pernikahan Online

Halaman undangan pernikahan satu file (`index.html`) bergaya **botanical luxury stationery** bertema *velvet burgundy, warm ivory, sage olive,* dan *antique gold* di atas latar mawar burgundy & sutra sampanye.

## Fitur & Susunan Halaman
1. **Sampul & Pembuka**. Foto pasangan, sapaan tamu personal (`?to=Nama+Tamu`), tombol segel lilin, ilustrasi amplop botani, dan pemutar musik.
2. **Tanggal & Mempelai**. Kartu tanggal bersegel, hitung mundur, kutipan QS. Ar-Rum: 21, dan potret cameo kedua mempelai.
3. **Panduan Tamu**. Jadwal acara, peta, kalender Google dan `.ics`, opsi siaran langsung, palet busana, serta RSVP dan buku tamu yang bisa dihubungkan ke Google Sheets (`apps-script.gs`).
4. **Kisah & Galeri**. Lini masa perjalanan pasangan dan galeri dengan lightbox yang mendukung gestur sentuh dan navigasi keyboard.
5. **Hadiah & Penutup**. Informasi amplop digital dan pengiriman kado, diikuti kartu ucapan terima kasih dengan rangkaian foto.

## Cara Mengubah Isi
Buka `index.html`, cari objek `CONFIG` di dalam `<script>`, lalu sesuaikan:
- **Mempelai & Tanggal**: `bride`, `groom`, `brideFirst`, `date`, `dateWordsLeft`, `dateWordsRight`, `venueShort`.
- **Acara, Dress Code & Kisah**: `events`, `stream`, `dressCode`, `story`, `gifts`.
- **Foto**: simpan foto di folder `img/`, lalu isi path-nya pada `bride.photo`, `groom.photo`, `photos`, dan `gallery`.
- **Musik**: ubah `music` menjadi path file MP3 (mis. `"audio/lagu.mp3"`), biarkan `"synth"` untuk alunan harp lembut bawaan, atau kosongkan `""` untuk menyembunyikan pemutar musik.
- **Kirim ke Tamu (`/kirim`)**: buka `kirim.html` untuk membuat tautan `/?to=Nama+Tamu` dan mengirim pesan WhatsApp otomatis.
- **RSVP Bersama (Google Sheets)**: pasang `apps-script.gs` sebagai Web App di Google Sheets, lalu masukkan URL `/exec` ke `CONFIG.rsvpEndpoint`.

## Hosting
Langsung deploy ke Vercel, Netlify, atau GitHub Pages tanpa proses *build*.
