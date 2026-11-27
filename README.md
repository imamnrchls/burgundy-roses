# Burgundy Roses — Undangan Pernikahan Online

Halaman undangan pernikahan satu file (`index.html`) bergaya **botanical luxury stationery** bertema *velvet burgundy, warm ivory, sage olive,* dan *antique gold* di atas latar mawar burgundy & sutra sampanye.

## Fitur & Susunan Halaman
1. **Interactive Editorial Booklet Cover**: Sampul buku undangan burgundy dengan tipografi 4-sudut, slip nama tamu personal (`?to=Nama+Tamu`), dan tombol segel lilin emas (*wax seal*).
2. **Floral Envelope & Scalloped Die-Cut Suite**: Amplop beludru burgundy penuh bunga mawar & peony yang membingkai kartu undangan *scalloped die-cut*, lengkap dengan **Vinyl Audio Player** (mendukung MP3 kustom atau *soft harp prelude* bawaan) serta **Tilted Polaroid Duo** menuju kisah cinta.
3. **Save The Date Wax Seal, Ayat & Hitung Mundur**: Kartu tanggal berbingkai hijau *olive* dengan segel lilin 3D, kutipan ayat QS. Ar-Rum: 21, dan hitung mundur *thin-serif*.
4. **Profil Mempelai (Oval Cameo)**: Potret cameo oval berbingkai burgundy & emas dengan tipografi tumpuk *bold Didone + calligraphy script*.
5. **Our Love Story**: *Editorial scrapbook* dengan polaroid pembuka dan lini masa bab perjalanan cinta.
6. **Rangkaian Acara (Ornate Double-Framed Card)**: Kartu jadwal berbingkai ganda dengan sudut *filigree*, buket *calla lily & rose*, tombol **Petunjuk Arah** (Google Maps), **Simpan Tanggal** (Google Calendar & Apple/Outlook `.ics`), medali rumbai (*tassel shield*), serta dukungan opsional *Live Streaming*.
7. **Dress Code Palette Card**: Panduan busana dengan 5 *color swatches* interaktif.
8. **Keepsake Gallery**: Galeri foto berbingkai kertas *matte* lengkap dengan *Lightbox* (swipe sentuh & tombol panah keyboard).
9. **Wedding Gift (Quatrefoil Seal Suite)**: Medali *quatrefoil* burgundy dengan tombol pil *Amplop Digital* (salin nomor rekening sekali klik) & *Kirim Kado Fisik*.
10. **Open-Envelope RSVP & Buku Tamu**: Amplop terbuka bertuliskan *Kindly RSVP*, formulir konfirmasi kehadiran dengan pilihan jumlah tamu (`1–4+`), ucapan & doa, statistik kehadiran otomatis, dan penyimpanan bersama via Google Sheets (`apps-script.gs`).
11. **Keepsake Closing Card**: Penutup burgundy *letterpress* dengan cincin kawin dan *filmstrip* foto.

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
