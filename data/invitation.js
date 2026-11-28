/**
 * LAYER 1 — DATA UNDANGAN (Theme-agnostic)
 * Ubah isi window.INVITATION_DATA di bawah ini untuk menyesuaikan detail mempelai,
 * acara, dress code, kisah cinta, galeri, tanda kasih, musik, dan endpoint RSVP.
 */
window.INVITATION_DATA = {
  slug: "alya-rafa",
  tema: "burgundy-roses",

  mempelai: {
    wanita: {
      nama_panggilan: "Alya",
      nama_lengkap: "Alya Kirana Putri",
      peran: "Putri pertama dari",
      orang_tua: "Bapak Hendra Wijaya & Ibu Ratna Kusuma",
      instagram: "@alyakirana",
      foto: "img/bride-veil.jpg",
      foto_pos: "50% 24%"
    },
    pria: {
      nama_panggilan: "Rafa",
      nama_lengkap: "Rafael Aditya Pratama",
      peran: "Putra kedua dari",
      orang_tua: "Bapak Agus Pratama & Ibu Sari Dewi",
      instagram: "@rafaeladitya",
      foto: "img/groom.jpg",
      foto_pos: "50% 26%"
    }
  },

  inisial: "A & R",
  tanggal_utama: "2026-12-27T09:00:00+07:00",
  tanggal_teks: "Minggu, 27 Desember 2026",
  kota: "Puncak, Bogor",
  tempat_utama: "Villa Roseraie · Glasshouse & Garden",
  villa_ilustrasi: "img/reception-table.jpg",
  villa_caption: "Villa Roseraie · Glasshouse & Garden",

  kutipan: {
    teks: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.",
    sumber: "QS. Ar-Rum : 21"
  },

  acara: [
    {
      jenis: "akad",
      judul: "Akad Nikah",
      tanggal_iso: "2026-12-27T09:00:00+07:00",
      selesai_iso: "2026-12-27T11:00:00+07:00",
      hari: "Minggu",
      tanggal_angka: "27",
      bulan_tahun: "Desember 2026",
      waktu: "09.00 – 11.00 WIB",
      tempat: "The Glasshouse Pavilion, Villa Roseraie",
      alamat: "Jl. Taman Melati Raya No. 18, Cisarua, Kabupaten Bogor, Jawa Barat 16750",
      maps_url: "https://www.google.com/maps/search/?api=1&query=Cisarua+Bogor+Jawa+Barat",
      catatan: "Mohon hadir 15 menit lebih awal untuk kekhidmatan prosesi akad nikah."
    },
    {
      jenis: "resepsi",
      judul: "Resepsi & Jamuan",
      tanggal_iso: "2026-12-27T12:00:00+07:00",
      selesai_iso: "2026-12-27T16:00:00+07:00",
      hari: "Minggu",
      tanggal_angka: "27",
      bulan_tahun: "Desember 2026",
      waktu: "12.00 – 16.00 WIB",
      tempat: "Rose Garden Terrace, Villa Roseraie",
      alamat: "Jl. Taman Melati Raya No. 18, Cisarua, Kabupaten Bogor, Jawa Barat 16750",
      maps_url: "https://www.google.com/maps/search/?api=1&query=Cisarua+Bogor+Jawa+Barat",
      catatan: "Jamuan taman bernuansa mawar & cahaya lilin; alas kaki yang nyaman sangat disarankan."
    }
  ],

  dress_code: {
    aktif: true,
    judul: "Formal Garden · Earthy Burgundy",
    catatan: "Kami mengundang Bapak/Ibu/Saudara/i mengenakan busana formal dalam palet warna burgundy, dusty rose, sage olive, hangat krem, atau gading.",
    palet: [
      { nama: "Velvet Burgundy", hex: "#580E1D" },
      { nama: "Antique Rose", hex: "#8B4554" },
      { nama: "Dusty Blush", hex: "#C79AA3" },
      { nama: "Sage Olive", hex: "#5C694E" },
      { nama: "Warm Champagne", hex: "#E5D7C6" }
    ],
    ilustrasi: ""
  },

  foto_cerita: {
    src: "img/rings.jpg",
    alt: "Cincin pernikahan Alya dan Rafa",
    caption: "Two hearts, one timeless story",
    pos: "50% 50%"
  },

  cerita: [
    {
      bab: "Chapter I",
      tanggal: "Oktober 2022",
      kota: "Bogor",
      judul: "Pertemuan Pertama",
      deskripsi: "Berawal dari sebuah pameran botani dan secangkir kopi hangat di sore yang hujan. Obrolan singkat tentang buku dan bunga mawar menjadi awal cerita yang tidak pernah kami duga."
    },
    {
      bab: "Chapter II",
      tanggal: "April 2026",
      kota: "Bogor",
      judul: "Lamaran",
      deskripsi: "Setelah melalui berbagai musim dan cerita bersama, kami melangkah lebih pasti di hadapan kedua keluarga besar untuk mengikat janji dalam prosesi lamaran yang hangat."
    },
    {
      bab: "Chapter III",
      tanggal: "Desember 2026",
      kota: "Puncak, Bogor",
      judul: "Hari Pernikahan",
      deskripsi: "Kini tiba saatnya kami membuka babak baru sebagai pasangan hidup. Doa dan kehadiran keluarga serta sahabat tercinta menjadi pelengkap terindah di hari bahagia kami."
    }
  ],

  galeri: [
    {
      src: "img/hero.jpg",
      pos: "50% 22%",
      alt: "Potret hangat Alya dan Rafa di bawah cahaya senja",
      caption: "Golden Hour Embrace",
      featured: true
    },
    {
      src: "img/bride-veil.jpg",
      pos: "50% 22%",
      alt: "Potret mempelai wanita Alya dengan veil putih",
      caption: "The Bride"
    },
    {
      src: "img/groom.jpg",
      pos: "50% 26%",
      alt: "Potret mempelai pria Rafa mengenakan setelan burgundy",
      caption: "The Groom"
    },
    {
      src: "img/reception-table.jpg",
      pos: "50% 50%",
      alt: "Dekorasi meja jamuan dengan lilin dan rangkaian mawar",
      caption: "Candlelight & Roses"
    },
    {
      src: "img/couple-walk.jpg",
      pos: "50% 28%",
      alt: "Alya dan Rafa melangkah bersama di taman",
      caption: "Walking Together"
    },
    {
      src: "img/ceremony-floral.jpg",
      pos: "50% 50%",
      alt: "Rangkaian bunga ranunculus gading untuk prosesi akad",
      caption: "Ivory Ranunculus"
    },
    {
      src: "img/rings.jpg",
      pos: "50% 50%",
      alt: "Sepasang cincin janji suci Alya dan Rafa",
      caption: "The Promise"
    }
  ],

  amplop: [
    {
      bank: "Bank BCA",
      no_rekening: "6380 2312 88",
      atas_nama: "Alya Kirana Putri"
    },
    {
      bank: "Bank Mandiri",
      no_rekening: "135 00 1842 990",
      atas_nama: "Rafael Aditya Pratama"
    }
  ],

  alamat_kado: {
    penerima: "Alya & Rafa (0812-3456-7890)",
    alamat: "Jl. Taman Melati Raya No. 18, Cisarua, Kabupaten Bogor, Jawa Barat 16750",
    catatan: "Konfirmasi pengiriman dapat disampaikan melalui WhatsApp keluarga."
  },

  // Musik:
  // - Isi "synth" untuk alunan harp lembut bawaan (Canon in D, tanpa butuh file eksternal).
  // - Isi path MP3 (mis. "audio/lagu.mp3") untuk memutar file audio Anda sendiri.
  // - Isi "" untuk menyembunyikan tombol musik.
  musik: {
    url: "synth",
    judul: "Canon in D — Soft Harp Prelude"
  },

  penutup: {
    judul: "Terima Kasih",
    pesan: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.",
    salam: "Kami yang berbahagia,"
  },

  // Opsional: URL Web App Google Apps Script (lihat apps-script.gs).
  // Kosong "" = tersimpan di localStorage browser tamu.
  rsvp_endpoint: "",

  section_order: [
    "pembuka",
    "ayat",
    "mempelai",
    "acara",
    "dresscode",
    "cerita",
    "galeri",
    "hadiah",
    "rsvp",
    "penutup"
  ]
};

(function () {
  "use strict";

  var data = window.INVITATION_DATA;
  if (!data || !data.mempelai) return;

  var defaults = {
    pria: data.mempelai.pria.nama_panggilan,
    wanita: data.mempelai.wanita.nama_panggilan
  };

  function cleanName(value, fallback) {
    var trimmed = String(value == null ? "" : value).trim().slice(0, 24);
    return trimmed || fallback;
  }

  function firstLetter(name, fallback) {
    var chars = Array.from(cleanName(name, fallback));
    return (chars[0] || "").toUpperCase();
  }

  function applyNames(a, b) {
    var priaName = cleanName(a, defaults.pria);
    var wanitaName = cleanName(b, defaults.wanita);

    data.mempelai.pria.nama_panggilan = priaName;
    data.mempelai.wanita.nama_panggilan = wanitaName;
    data.inisial = firstLetter(wanitaName, defaults.wanita) + " & " + firstLetter(priaName, defaults.pria);

    return {
      pria: priaName,
      wanita: wanitaName,
      inisial: data.inisial
    };
  }

  var params = new URLSearchParams(window.location.search);
  if (params.has("a") || params.has("b")) {
    applyNames(
      params.has("a") ? params.get("a") : defaults.pria,
      params.has("b") ? params.get("b") : defaults.wanita
    );
  }

  window.lkSampleNames = function (a, b) {
    var result = applyNames(a, b);
    document.dispatchEvent(
      new CustomEvent("lk:names-updated", {
        bubbles: true,
        detail: result
      })
    );
    return result;
  };
})();
