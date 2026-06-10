window.JSLabData = (() => {
  const lessons = [
    {
      id: "apa-itu-javascript",
      icon: "bi-filetype-js",
      title: "Apa itu JavaScript?",
      duration: "10 menit",
      prerequisite: "Kamu sudah mengenal HTML sebagai struktur halaman dan CSS sebagai pengatur tampilan.",
      overview: "Kamu memahami peran JavaScript sebagai bahasa yang membuat halaman web bisa bereaksi.",
      goal: "Membedakan tugas HTML, CSS, dan JavaScript sebelum menulis kode pertama.",
      problem: "Pemula sering bingung kenapa tombol HTML tidak melakukan apa-apa. Tombol memang terlihat dari HTML dan CSS, tetapi perilakunya dibuat dengan JavaScript.",
      analogy: "HTML seperti tombol lampu, CSS membuat tombolnya terlihat rapi, JavaScript adalah kabel yang membuat lampu menyala saat tombol ditekan.",
      explanation: "JavaScript berjalan di browser. Ia bisa membaca elemen HTML, menunggu aksi pengguna, lalu mengubah isi, class, style, atau data halaman.",
      steps: [
        "Ingat kembali peran HTML dan CSS.",
        "Lihat JavaScript sebagai lapisan perilaku.",
        "Mulai dari perubahan teks sederhana.",
        "Uji perubahan di browser setelah setiap langkah kecil."
      ],
      terms: [
        { term: "JavaScript", meaning: "Bahasa pemrograman yang membuat halaman web interaktif." },
        { term: "Browser", meaning: "Aplikasi yang menjalankan HTML, CSS, dan JavaScript." },
        { term: "Interaktif", meaning: "Halaman merespons klik, input, pilihan, atau data pengguna." }
      ],
      html: `<h1>Belajar JavaScript</h1>
<p id="pesan">Klik tombol untuk melihat perubahan.</p>
<button id="tombol">Coba klik</button>`,
      css: `body {
  font-family: Arial, sans-serif;
}

button {
  background: #f59e0b;
  border: 0;
  border-radius: 8px;
  color: #111827;
  font-weight: bold;
  padding: 10px 14px;
}`,
      js: `const tombol = document.querySelector("#tombol");
const pesan = document.querySelector("#pesan");

tombol.addEventListener("click", function () {
  pesan.textContent = "JavaScript membuat halaman bereaksi.";
});`,
      lineNotes: [
        "HTML menyiapkan teks dan tombol.",
        "CSS membuat tombol lebih jelas dilihat.",
        "JavaScript memilih tombol dan paragraf.",
        "Saat tombol diklik, isi paragraf diganti."
      ],
      exercise: "Ganti isi pesan menjadi kalimatmu sendiri, lalu klik tombol lagi.",
      commonMistakes: [
        "Mengira JavaScript menggantikan HTML dan CSS.",
        "Menulis kode JavaScript tetapi belum menghubungkannya ke HTML.",
        "Mengubah banyak bagian sekaligus sehingga sulit tahu bagian mana yang bekerja."
      ],
      checkpoint: "Kamu bisa menjelaskan bahwa HTML adalah struktur, CSS adalah tampilan, dan JavaScript adalah perilaku.",
      recall: "Jelaskan peran JavaScript dengan analogi benda sehari-hari.",
      debug: {
        question: "Tombol terlihat, tetapi teks tidak berubah saat diklik. Apa yang paling mungkin belum ada?",
        hint: "Tombol HTML butuh kode perilaku.",
        solution: "Tambahkan JavaScript yang memilih tombol, lalu pasang event click untuk mengubah teks."
      },
      quiz: {
        question: "Peran utama JavaScript di halaman web adalah...",
        options: ["Membuat halaman interaktif", "Mengatur warna utama saja", "Menulis struktur heading", "Menghapus browser"],
        answer: 0,
        explanation: "JavaScript membuat halaman merespons aksi pengguna dan data."
      }
    },
    {
      id: "menghubungkan-script",
      icon: "bi-link-45deg",
      title: "Menghubungkan File JavaScript",
      duration: "12 menit",
      prerequisite: "Kamu bisa membuat file index.html dan file baru di folder yang sama.",
      overview: "Kamu belajar menaruh script di file terpisah dan menghubungkannya ke HTML.",
      goal: "Menghubungkan script.js ke index.html dengan tag script yang memakai atribut defer.",
      problem: "Kode JavaScript sering tidak jalan karena file script salah alamat atau dijalankan sebelum elemen HTML terbaca.",
      analogy: "File JavaScript seperti buku instruksi. HTML perlu tahu lokasi buku itu, dan browser perlu membaca HTML dulu sebelum menjalankan instruksi.",
      explanation: "Gunakan tag script dengan src untuk alamat file. Atribut defer membuat JavaScript berjalan setelah HTML selesai dibaca.",
      steps: [
        "Buat index.html.",
        "Buat script.js di folder yang sama.",
        "Tulis script src di dalam head dengan defer.",
        "Tes dengan console.log agar tahu file sudah terbaca."
      ],
      terms: [
        { term: "script", meaning: "Tag HTML untuk menjalankan JavaScript." },
        { term: "src", meaning: "Alamat file JavaScript." },
        { term: "defer", meaning: "Atribut agar script dijalankan setelah HTML siap." }
      ],
      html: `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <title>Belajar JS</title>
    <script src="script.js" defer></script>
  </head>
  <body>
    <h1 id="judul">Halo</h1>
  </body>
</html>`,
      css: `body {
  font-family: Arial, sans-serif;
}`,
      js: `const judul = document.querySelector("#judul");
judul.textContent = "JavaScript sudah terhubung";`,
      lineNotes: [
        "script src mengarah ke file script.js.",
        "defer membantu script menunggu HTML siap.",
        "querySelector memilih elemen dengan id judul.",
        "textContent mengganti teks h1."
      ],
      exercise: "Buat file script.js dan tampilkan teks baru pada h1.",
      commonMistakes: [
        "Menulis scr, bukan src.",
        "Nama file di HTML berbeda dari nama file sebenarnya.",
        "Tidak memakai defer saat script ditaruh di head."
      ],
      checkpoint: "Kamu bisa menghubungkan file script.js dan melihat efeknya di halaman.",
      recall: "Apa fungsi src dan defer pada tag script?",
      debug: {
        question: "Muncul error bahwa elemen bernilai null. Apa kemungkinan penyebabnya?",
        hint: "Script bisa berjalan sebelum HTML selesai dibaca.",
        solution: "Tambahkan defer pada tag script atau letakkan script sebelum penutup body."
      },
      quiz: {
        question: "Atribut yang menunjuk alamat file JavaScript adalah...",
        options: ["href", "rel", "src", "alt"],
        answer: 2,
        explanation: "Tag script memakai src untuk alamat file JavaScript."
      }
    },
    {
      id: "console-dan-komentar",
      icon: "bi-terminal",
      title: "Console dan Komentar",
      duration: "11 menit",
      prerequisite: "File JavaScript sudah terhubung ke HTML.",
      overview: "Kamu memakai console untuk mengecek kode dan komentar untuk memberi catatan.",
      goal: "Memakai console.log sebagai alat cek paling awal saat belajar JavaScript.",
      problem: "Pemula sering merasa kode diam saja. Console membantu melihat apakah file terbaca dan nilai kode sesuai harapan.",
      analogy: "Console seperti buku catatan teknisi. Pengguna halaman tidak melihatnya, tetapi pembuat web bisa membaca petunjuk di sana.",
      explanation: "console.log menulis pesan ke DevTools. Komentar dengan // atau /* */ dipakai untuk catatan yang tidak dijalankan browser.",
      steps: [
        "Buka DevTools di browser.",
        "Tulis console.log di script.js.",
        "Refresh halaman dan baca tab Console.",
        "Tambahkan komentar singkat untuk menjelaskan maksud kode."
      ],
      terms: [
        { term: "Console", meaning: "Panel DevTools untuk melihat pesan dan error JavaScript." },
        { term: "console.log", meaning: "Perintah untuk menampilkan nilai di console." },
        { term: "Komentar", meaning: "Catatan dalam kode yang tidak dijalankan." }
      ],
      html: `<h1>Latihan Console</h1>
<p id="hasil">Lihat console browser.</p>`,
      css: `#hasil {
  background: #fffbeb;
  border: 1px solid #fde68a;
  padding: 12px;
}`,
      js: `// Ini pesan untuk pengecekan awal
console.log("File JavaScript terbaca");

const hasil = document.querySelector("#hasil");
console.log(hasil);`,
      lineNotes: [
        "Komentar baris diawali dua garis miring.",
        "console.log pertama mengecek script terbaca.",
        "querySelector memilih paragraf.",
        "console.log kedua mengecek elemen yang dipilih."
      ],
      exercise: "Tampilkan namamu di console, lalu tampilkan elemen h1.",
      commonMistakes: [
        "Mengira console.log muncul di halaman.",
        "Tidak membuka DevTools sehingga pesan tidak terlihat.",
        "Membiarkan terlalu banyak console.log di project akhir."
      ],
      checkpoint: "Kamu bisa memakai console untuk mengecek nilai dan membaca error dasar.",
      recall: "Kenapa console.log berguna saat belajar JavaScript?",
      debug: {
        question: "Kamu menulis console.log tetapi tidak melihat apa pun di halaman. Apakah itu error?",
        hint: "Console bukan bagian visual halaman.",
        solution: "Buka DevTools tab Console. Jika ingin menampilkan ke halaman, gunakan textContent pada elemen HTML."
      },
      quiz: {
        question: "Tempat melihat output console.log adalah...",
        options: ["Panel Console di DevTools", "File CSS", "Alamat URL", "Tag meta"],
        answer: 0,
        explanation: "console.log dibaca di Console, bukan langsung di halaman."
      }
    },
    {
      id: "variabel-let-const",
      icon: "bi-box",
      title: "Variabel let dan const",
      duration: "14 menit",
      prerequisite: "Kamu sudah bisa menjalankan script dan melihat console.",
      overview: "Kamu menyimpan nilai dalam nama yang mudah dibaca.",
      goal: "Memakai const untuk nilai yang tidak diganti dan let untuk nilai yang bisa berubah.",
      problem: "Tanpa variabel, kode cepat berulang dan sulit dibaca.",
      analogy: "Variabel seperti kotak berlabel. Kamu menyimpan nilai di kotak agar mudah dipakai lagi.",
      explanation: "const dipakai saat isi kotak tidak perlu diganti. let dipakai saat isi akan berubah, misalnya angka counter.",
      steps: [
        "Buat const untuk nama elemen.",
        "Buat let untuk angka yang berubah.",
        "Gunakan nilai variabel di halaman.",
        "Ubah nilai let saat tombol diklik."
      ],
      terms: [
        { term: "Variabel", meaning: "Nama untuk menyimpan nilai." },
        { term: "const", meaning: "Variabel yang tidak bisa diisi ulang." },
        { term: "let", meaning: "Variabel yang bisa berubah nilainya." }
      ],
      html: `<h1>Counter sederhana</h1>
<p>Jumlah klik: <strong id="angka">0</strong></p>
<button id="tambah">Tambah</button>`,
      css: `strong {
  color: #b45309;
  font-size: 28px;
}

button {
  background: #facc15;
  border: 0;
  border-radius: 8px;
  padding: 10px 14px;
}`,
      js: `const angka = document.querySelector("#angka");
const tombol = document.querySelector("#tambah");
let jumlahKlik = 0;

tombol.addEventListener("click", function () {
  jumlahKlik = jumlahKlik + 1;
  angka.textContent = jumlahKlik;
});`,
      lineNotes: [
        "angka dan tombol disimpan dengan const karena elemennya tidak diganti.",
        "jumlahKlik memakai let karena nilainya berubah.",
        "Klik tombol menambah angka.",
        "textContent menampilkan nilai terbaru."
      ],
      exercise: "Tambahkan tombol reset yang mengembalikan jumlahKlik menjadi 0.",
      commonMistakes: [
        "Menggunakan const untuk nilai yang ingin diubah.",
        "Menulis nama variabel berbeda antara deklarasi dan pemakaian.",
        "Memilih nama variabel terlalu pendek sehingga sulit dibaca."
      ],
      checkpoint: "Kamu bisa memilih kapan memakai let dan kapan memakai const.",
      recall: "Apa bedanya let dan const dalam bahasa sederhana?",
      debug: {
        question: "Kenapa muncul error Assignment to constant variable?",
        hint: "Ada const yang coba diberi nilai baru.",
        solution: "Gunakan let untuk nilai yang akan berubah, seperti angka counter."
      },
      quiz: {
        question: "Variabel yang nilainya akan berubah sebaiknya dibuat dengan...",
        options: ["let", "const", "meta", "href"],
        answer: 0,
        explanation: "let dipakai untuk nilai yang bisa berubah."
      }
    },
    {
      id: "tipe-data-dasar",
      icon: "bi-braces",
      title: "Tipe Data Dasar",
      duration: "13 menit",
      prerequisite: "Kamu sudah memahami variabel.",
      overview: "Kamu mengenal string, number, boolean, null, dan undefined.",
      goal: "Membedakan jenis nilai agar tidak salah saat menggabungkan teks dan angka.",
      problem: "Banyak bug muncul karena angka dianggap teks, atau nilai kosong dianggap sudah ada.",
      analogy: "Tipe data seperti jenis barang di kotak. Buku, koin, dan saklar punya cara pakai yang berbeda.",
      explanation: "String adalah teks, number adalah angka, boolean adalah benar/salah, null berarti sengaja kosong, undefined berarti belum punya nilai.",
      steps: [
        "Buat nilai string untuk nama.",
        "Buat number untuk umur atau jumlah.",
        "Buat boolean untuk status.",
        "Tampilkan semuanya di halaman."
      ],
      terms: [
        { term: "String", meaning: "Teks yang ditulis di antara kutip." },
        { term: "Number", meaning: "Nilai angka untuk perhitungan." },
        { term: "Boolean", meaning: "Nilai true atau false." }
      ],
      html: `<h1>Profil Belajar</h1>
<p id="profil"></p>`,
      css: `#profil {
  background: #f0fdfa;
  border: 1px solid #99f6e4;
  border-radius: 10px;
  padding: 14px;
}`,
      js: `const nama = "Alya";
const jumlahMateri = 5;
const sudahMulai = true;

const profil = document.querySelector("#profil");
profil.textContent = nama + " sudah belajar " + jumlahMateri + " materi. Status mulai: " + sudahMulai;`,
      lineNotes: [
        "nama berisi string.",
        "jumlahMateri berisi number.",
        "sudahMulai berisi boolean.",
        "Semua nilai digabung menjadi kalimat."
      ],
      exercise: "Ganti nama, jumlah materi, dan status boolean sesuai progresmu.",
      commonMistakes: [
        "Lupa kutip pada string.",
        "Mengira angka dalam kutip tetap number.",
        "Menggunakan nilai kosong tanpa mengeceknya."
      ],
      checkpoint: "Kamu bisa menyebutkan contoh string, number, dan boolean.",
      recall: "Apa perbedaan string \"10\" dan number 10?",
      debug: {
        question: "Kenapa 2 + \"3\" menghasilkan 23, bukan 5?",
        hint: "Salah satu nilainya adalah string.",
        solution: "Jika angka ditulis dalam kutip, JavaScript bisa menggabungkannya sebagai teks. Ubah menjadi number sebelum dihitung."
      },
      quiz: {
        question: "Nilai true dan false disebut tipe data...",
        options: ["string", "number", "boolean", "array"],
        answer: 2,
        explanation: "Boolean hanya punya dua nilai utama: true atau false."
      }
    },
    {
      id: "operator-ekspresi",
      icon: "bi-calculator",
      title: "Operator dan Ekspresi",
      duration: "13 menit",
      prerequisite: "Kamu mengenal number dan string.",
      overview: "Kamu memakai operator untuk menghitung dan membandingkan nilai.",
      goal: "Menulis ekspresi sederhana untuk membuat hasil dinamis.",
      problem: "Halaman interaktif sering butuh hitungan: total harga, jumlah klik, atau status lulus.",
      analogy: "Operator seperti alat hitung. Ada alat tambah, banding, dan penggabung teks.",
      explanation: "Operator aritmatika menghitung angka. Operator perbandingan menghasilkan boolean. Operator + juga bisa menggabungkan string.",
      steps: [
        "Buat dua angka.",
        "Hitung total dengan operator +.",
        "Bandingkan total dengan batas tertentu.",
        "Tampilkan hasilnya di halaman."
      ],
      terms: [
        { term: "Operator", meaning: "Simbol untuk melakukan operasi seperti +, -, >, atau ===." },
        { term: "Ekspresi", meaning: "Kode yang menghasilkan nilai." },
        { term: "Perbandingan", meaning: "Operasi yang menghasilkan true atau false." }
      ],
      html: `<h1>Hitung Poin</h1>
<p id="hasil"></p>`,
      css: `#hasil {
  border-left: 4px solid #f59e0b;
  padding-left: 12px;
}`,
      js: `const latihan = 4;
const quiz = 3;
const total = latihan + quiz;
const cukup = total >= 6;

document.querySelector("#hasil").textContent = "Total poin: " + total + ". Cukup lanjut? " + cukup;`,
      lineNotes: [
        "latihan dan quiz adalah angka.",
        "total menghitung penjumlahan.",
        "cukup berisi hasil perbandingan.",
        "Hasil ditampilkan sebagai kalimat."
      ],
      exercise: "Ubah batas cukup dari 6 menjadi 8, lalu lihat hasil boolean berubah.",
      commonMistakes: [
        "Memakai = untuk membandingkan nilai.",
        "Membandingkan string angka tanpa sadar.",
        "Lupa bahwa operator + bisa berarti tambah atau gabung teks."
      ],
      checkpoint: "Kamu bisa membuat hitungan dan perbandingan sederhana.",
      recall: "Apa hasil dari ekspresi total >= 6?",
      debug: {
        question: "Kenapa kondisi selalu aneh saat memakai satu tanda sama dengan?",
        hint: "Satu = untuk mengisi nilai, bukan membandingkan.",
        solution: "Gunakan === untuk membandingkan kesamaan atau >=, <=, >, < untuk perbandingan angka."
      },
      quiz: {
        question: "Operator untuk membandingkan dua nilai benar-benar sama adalah...",
        options: ["=", "===", "=>", "=<"],
        answer: 1,
        explanation: "=== membandingkan nilai dan tipe secara ketat."
      }
    },
    {
      id: "kondisi-if-else",
      icon: "bi-signpost-split",
      title: "Kondisi if else",
      duration: "15 menit",
      prerequisite: "Kamu sudah mengenal boolean dan operator perbandingan.",
      overview: "Kamu membuat program mengambil keputusan.",
      goal: "Memakai if else untuk menampilkan pesan berbeda berdasarkan nilai.",
      problem: "Halaman perlu merespons kondisi: input kosong, skor cukup, atau pilihan sudah aktif.",
      analogy: "if else seperti persimpangan jalan. Jika syarat benar, ambil jalur A. Jika tidak, ambil jalur B.",
      explanation: "Blok if berjalan saat kondisi bernilai true. Blok else berjalan saat kondisi false.",
      steps: [
        "Buat nilai skor.",
        "Bandingkan skor dengan batas lulus.",
        "Tulis pesan untuk kondisi true.",
        "Tulis pesan lain untuk kondisi false."
      ],
      terms: [
        { term: "if", meaning: "Menjalankan kode jika kondisi benar." },
        { term: "else", meaning: "Menjalankan kode saat kondisi if tidak benar." },
        { term: "Kondisi", meaning: "Ekspresi yang menghasilkan true atau false." }
      ],
      html: `<h1>Status Quiz</h1>
<p id="status"></p>`,
      css: `.lulus {
  color: #15803d;
  font-weight: bold;
}

.ulang {
  color: #b91c1c;
  font-weight: bold;
}`,
      js: `const skor = 78;
const status = document.querySelector("#status");

if (skor >= 70) {
  status.textContent = "Lulus. Lanjutkan materi berikutnya.";
  status.className = "lulus";
} else {
  status.textContent = "Belum lulus. Ulangi quiz dulu.";
  status.className = "ulang";
}`,
      lineNotes: [
        "skor menjadi nilai yang dicek.",
        "if mengecek apakah skor minimal 70.",
        "Pesan dan class berubah jika lulus.",
        "else memberi pesan saat belum lulus."
      ],
      exercise: "Ubah skor menjadi 55 lalu lihat class dan pesan berubah.",
      commonMistakes: [
        "Lupa tanda kurung pada kondisi if.",
        "Menulis else tanpa menutup kurung kurawal if.",
        "Membuat kondisi yang selalu true."
      ],
      checkpoint: "Kamu bisa membuat dua hasil berbeda berdasarkan satu kondisi.",
      recall: "Kapan blok else dijalankan?",
      debug: {
        question: "Kenapa pesan lulus tetap muncul padahal skor kecil?",
        hint: "Cek operator perbandingan di kondisi.",
        solution: "Pastikan kondisi memakai skor >= 70, bukan skor = 70 atau kondisi yang selalu true."
      },
      quiz: {
        question: "Blok else berjalan ketika...",
        options: ["kondisi if bernilai false", "file CSS kosong", "tombol belum diberi warna", "HTML punya h1"],
        answer: 0,
        explanation: "else adalah jalur cadangan saat if tidak terpenuhi."
      }
    },
    {
      id: "fungsi-dasar",
      icon: "bi-diagram-3",
      title: "Fungsi Dasar",
      duration: "15 menit",
      prerequisite: "Kamu sudah menulis beberapa baris JavaScript berurutan.",
      overview: "Kamu mengelompokkan kode agar bisa dipakai ulang.",
      goal: "Membuat fungsi sederhana dan memanggilnya saat event terjadi.",
      problem: "Kode yang sama sering dibutuhkan berkali-kali. Jika disalin terus, project jadi sulit dirawat.",
      analogy: "Fungsi seperti resep. Setelah resep ditulis, kamu bisa memanggilnya kapan pun butuh hasil yang sama.",
      explanation: "Function menyimpan langkah-langkah. Parameter membuat fungsi menerima data yang berbeda.",
      steps: [
        "Buat fungsi untuk membuat pesan.",
        "Panggil fungsi dengan nilai berbeda.",
        "Gunakan hasilnya pada halaman.",
        "Panggil fungsi dari event click."
      ],
      terms: [
        { term: "Function", meaning: "Blok kode bernama yang bisa dipanggil." },
        { term: "Parameter", meaning: "Nama nilai yang diterima fungsi." },
        { term: "Return", meaning: "Nilai yang dikembalikan dari fungsi." }
      ],
      html: `<h1>Sapaan</h1>
<p id="sapaan"></p>
<button id="ubah">Sapa Rani</button>`,
      css: `#sapaan {
  background: #fffbeb;
  border-radius: 10px;
  padding: 12px;
}`,
      js: `function buatSapaan(nama) {
  return "Halo, " + nama + ". Semangat belajar JavaScript!";
}

const sapaan = document.querySelector("#sapaan");
document.querySelector("#ubah").addEventListener("click", function () {
  sapaan.textContent = buatSapaan("Rani");
});`,
      lineNotes: [
        "buatSapaan menerima parameter nama.",
        "return menghasilkan kalimat.",
        "Event click memanggil fungsi.",
        "Hasil fungsi masuk ke textContent."
      ],
      exercise: "Buat fungsi hitungTotal yang menerima dua angka lalu mengembalikan jumlahnya.",
      commonMistakes: [
        "Membuat fungsi tetapi lupa memanggilnya.",
        "Lupa return saat ingin memakai hasil fungsi.",
        "Nama parameter dan variabel luar dibuat membingungkan."
      ],
      checkpoint: "Kamu bisa membuat fungsi dan memanggilnya dari event.",
      recall: "Apa keuntungan memakai fungsi dibanding menyalin kode berulang?",
      debug: {
        question: "Kenapa hasil fungsi undefined?",
        hint: "Cek apakah fungsi mengembalikan nilai.",
        solution: "Jika hasil fungsi ingin dipakai, tambahkan return nilai di dalam fungsi."
      },
      quiz: {
        question: "Kata kunci untuk mengembalikan nilai dari fungsi adalah...",
        options: ["send", "return", "output", "break"],
        answer: 1,
        explanation: "return mengembalikan nilai dari fungsi."
      }
    },
    {
      id: "array-loop",
      icon: "bi-list-ol",
      title: "Array dan Loop",
      duration: "16 menit",
      prerequisite: "Kamu sudah mengenal variabel dan fungsi.",
      overview: "Kamu menyimpan banyak data dalam satu variabel dan menampilkannya berulang.",
      goal: "Memakai array dan forEach untuk membuat daftar dinamis.",
      problem: "Daftar materi, hobi, atau todo tidak praktis jika semua ditulis satu per satu di HTML.",
      analogy: "Array seperti rak berisi banyak kotak. Loop membantu mengecek setiap kotak satu per satu.",
      explanation: "Array menyimpan kumpulan nilai. forEach menjalankan fungsi untuk setiap item di dalam array.",
      steps: [
        "Buat array berisi beberapa materi.",
        "Pilih elemen ul dari HTML.",
        "Loop setiap item dengan forEach.",
        "Tambahkan li untuk setiap item."
      ],
      terms: [
        { term: "Array", meaning: "Kumpulan nilai dalam satu variabel." },
        { term: "Index", meaning: "Nomor posisi item dalam array, dimulai dari 0." },
        { term: "Loop", meaning: "Perulangan untuk menjalankan kode berkali-kali." }
      ],
      html: `<h1>Materi Saya</h1>
<ul id="daftar"></ul>`,
      css: `li {
  margin-bottom: 8px;
}`,
      js: `const materi = ["Variabel", "Kondisi", "Fungsi", "DOM"];
const daftar = document.querySelector("#daftar");

materi.forEach(function (item) {
  daftar.innerHTML += "<li>" + item + "</li>";
});`,
      lineNotes: [
        "materi adalah array.",
        "daftar memilih ul kosong.",
        "forEach mengambil tiap item.",
        "innerHTML menambahkan li ke daftar."
      ],
      exercise: "Tambahkan dua materi baru ke array, lalu lihat daftar ikut bertambah.",
      commonMistakes: [
        "Mengira index array dimulai dari 1.",
        "Lupa tanda koma antar item array.",
        "Mengubah innerHTML dari data pengguna tanpa hati-hati."
      ],
      checkpoint: "Kamu bisa membuat daftar HTML dari array sederhana.",
      recall: "Apa fungsi forEach pada array?",
      debug: {
        question: "Kenapa daftar hanya menampilkan item terakhir?",
        hint: "Cek apakah kamu menimpa isi, bukan menambahkan.",
        solution: "Gunakan += untuk menambahkan, atau buat elemen li baru dengan append."
      },
      quiz: {
        question: "Struktur untuk menyimpan banyak nilai berurutan adalah...",
        options: ["array", "button", "selector", "padding"],
        answer: 0,
        explanation: "Array menyimpan kumpulan nilai."
      }
    },
    {
      id: "object-dasar",
      icon: "bi-card-list",
      title: "Object Dasar",
      duration: "15 menit",
      prerequisite: "Kamu sudah tahu array dan variabel.",
      overview: "Kamu menyimpan data yang punya nama properti.",
      goal: "Membuat object sederhana untuk data profil atau produk.",
      problem: "Data nyata biasanya punya banyak bagian: nama, level, status, dan progress.",
      analogy: "Object seperti kartu biodata. Setiap baris punya label dan isi.",
      explanation: "Object menyimpan pasangan key dan value. Nilainya diambil dengan titik, misalnya user.nama.",
      steps: [
        "Buat object profil.",
        "Isi beberapa properti.",
        "Ambil properti dengan tanda titik.",
        "Tampilkan ke halaman."
      ],
      terms: [
        { term: "Object", meaning: "Kumpulan data dengan key dan value." },
        { term: "Property", meaning: "Nama data di dalam object." },
        { term: "Value", meaning: "Isi dari property." }
      ],
      html: `<article class="kartu">
  <h1 id="nama"></h1>
  <p id="info"></p>
</article>`,
      css: `.kartu {
  border: 1px solid #fde68a;
  border-radius: 12px;
  padding: 18px;
}`,
      js: `const user = {
  nama: "Dimas",
  level: "Pemula",
  materiSelesai: 3
};

document.querySelector("#nama").textContent = user.nama;
document.querySelector("#info").textContent = user.level + " - " + user.materiSelesai + " materi selesai";`,
      lineNotes: [
        "user adalah object.",
        "nama, level, dan materiSelesai adalah property.",
        "user.nama mengambil nilai nama.",
        "Nilai object ditampilkan ke HTML."
      ],
      exercise: "Tambahkan property kota lalu tampilkan di paragraf.",
      commonMistakes: [
        "Lupa koma antar property.",
        "Mengambil property dengan nama yang salah.",
        "Mengira object sama persis dengan array."
      ],
      checkpoint: "Kamu bisa membuat object dan mengambil property dengan tanda titik.",
      recall: "Apa perbedaan array dan object?",
      debug: {
        question: "Kenapa user.namaa menghasilkan undefined?",
        hint: "Cek ejaan nama property.",
        solution: "Property harus dipanggil dengan nama yang sama persis, misalnya user.nama."
      },
      quiz: {
        question: "Data di dalam object biasanya ditulis sebagai...",
        options: ["key dan value", "margin dan padding", "tag dan head", "row dan column"],
        answer: 0,
        explanation: "Object berisi pasangan key dan value."
      }
    },
    {
      id: "memilih-elemen-dom",
      icon: "bi-cursor",
      title: "Memilih Elemen DOM",
      duration: "15 menit",
      prerequisite: "Kamu sudah memahami selector CSS dasar.",
      overview: "Kamu memilih elemen HTML dari JavaScript.",
      goal: "Memakai querySelector dan querySelectorAll untuk mengambil elemen.",
      problem: "JavaScript harus tahu elemen mana yang ingin dibaca atau diubah.",
      analogy: "DOM seperti peta halaman. Selector adalah alamat untuk menemukan elemen di peta itu.",
      explanation: "document.querySelector memilih elemen pertama yang cocok. querySelectorAll memilih semua elemen yang cocok.",
      steps: [
        "Beri class atau id pada HTML.",
        "Pilih elemen dengan querySelector.",
        "Cek hasilnya di console.",
        "Ubah teks untuk memastikan pilihan benar."
      ],
      terms: [
        { term: "DOM", meaning: "Representasi HTML yang bisa dibaca dan diubah JavaScript." },
        { term: "querySelector", meaning: "Memilih satu elemen memakai selector CSS." },
        { term: "querySelectorAll", meaning: "Memilih banyak elemen yang cocok." }
      ],
      html: `<h1 class="judul">DOM</h1>
<p class="catatan">Belajar memilih elemen.</p>
<p class="catatan">Lalu mengubahnya.</p>`,
      css: `.aktif {
  background: #fef3c7;
  padding: 8px;
}`,
      js: `const judul = document.querySelector(".judul");
const semuaCatatan = document.querySelectorAll(".catatan");

judul.textContent = "DOM siap diubah";
semuaCatatan.forEach(function (item) {
  item.classList.add("aktif");
});`,
      lineNotes: [
        "Selector .judul sama seperti selector CSS.",
        "querySelectorAll mengambil semua paragraf catatan.",
        "forEach berjalan untuk tiap paragraf.",
        "class aktif ditambahkan ke setiap paragraf."
      ],
      exercise: "Pilih semua tombol di halaman lalu tambahkan class yang sama.",
      commonMistakes: [
        "Lupa titik untuk class atau pagar untuk id.",
        "Memakai querySelector saat butuh semua elemen.",
        "Mengakses elemen sebelum HTML siap."
      ],
      checkpoint: "Kamu bisa memilih satu elemen dan banyak elemen dari JavaScript.",
      recall: "Apa bedanya querySelector dan querySelectorAll?",
      debug: {
        question: "Kenapa querySelector menghasilkan null?",
        hint: "Selector tidak menemukan elemen yang cocok.",
        solution: "Cek ejaan class/id di HTML dan selector di JavaScript. Pastikan script berjalan setelah HTML siap."
      },
      quiz: {
        question: "Untuk memilih elemen pertama yang cocok, gunakan...",
        options: ["querySelector", "padding", "forEach", "alertAll"],
        answer: 0,
        explanation: "querySelector memilih satu elemen pertama yang cocok."
      }
    },
    {
      id: "mengubah-teks-class",
      icon: "bi-type",
      title: "Mengubah Teks dan Class",
      duration: "15 menit",
      prerequisite: "Kamu sudah bisa memilih elemen DOM.",
      overview: "Kamu mengubah isi teks dan tampilan lewat class.",
      goal: "Memakai textContent dan classList untuk update halaman.",
      problem: "Interaksi web sering hanya perlu mengganti teks dan status visual.",
      analogy: "textContent seperti mengganti tulisan di papan. classList seperti mengganti label status pada kartu.",
      explanation: "textContent aman untuk mengganti teks. classList.add, remove, dan toggle mengatur class tanpa merusak class lain.",
      steps: [
        "Pilih elemen pesan.",
        "Ganti textContent.",
        "Tambahkan class status.",
        "Coba toggle class saat tombol diklik."
      ],
      terms: [
        { term: "textContent", meaning: "Property untuk membaca atau mengganti teks elemen." },
        { term: "classList", meaning: "API untuk mengatur class elemen." },
        { term: "toggle", meaning: "Menambah class jika belum ada, menghapus jika sudah ada." }
      ],
      html: `<p id="pesan">Mode normal.</p>
<button id="toggle">Toggle highlight</button>`,
      css: `.highlight {
  background: #facc15;
  border-radius: 8px;
  color: #111827;
  padding: 10px;
}`,
      js: `const pesan = document.querySelector("#pesan");
const tombol = document.querySelector("#toggle");

tombol.addEventListener("click", function () {
  pesan.textContent = "Class highlight sedang di-toggle.";
  pesan.classList.toggle("highlight");
});`,
      lineNotes: [
        "pesan dan tombol dipilih dari DOM.",
        "Event click menunggu aksi pengguna.",
        "textContent mengganti kalimat.",
        "classList.toggle mengubah status class."
      ],
      exercise: "Buat tombol lain untuk menghapus class highlight.",
      commonMistakes: [
        "Mengganti className sehingga class lama hilang tanpa sadar.",
        "Menulis nama class dengan titik di classList.add.",
        "Memakai innerHTML padahal hanya butuh teks."
      ],
      checkpoint: "Kamu bisa mengubah teks dan class secara terpisah.",
      recall: "Kenapa classList lebih aman daripada mengganti className sembarangan?",
      debug: {
        question: "Kenapa class tidak bekerja saat menulis classList.add('.aktif')?",
        hint: "classList menerima nama class, bukan selector.",
        solution: "Tulis classList.add('aktif') tanpa titik."
      },
      quiz: {
        question: "API untuk menambah, menghapus, atau toggle class adalah...",
        options: ["classList", "textOnly", "styleSheet", "queryAll"],
        answer: 0,
        explanation: "classList mengatur class pada elemen DOM."
      }
    },
    {
      id: "event-click-input",
      icon: "bi-hand-index-thumb",
      title: "Event Click dan Input",
      duration: "16 menit",
      prerequisite: "Kamu sudah memahami DOM dan fungsi dasar.",
      overview: "Kamu membuat halaman merespons klik dan ketikan.",
      goal: "Memakai addEventListener untuk event click dan input.",
      problem: "Tanpa event, JavaScript hanya berjalan sekali saat halaman dibuka.",
      analogy: "Event seperti bel pintu. Kode baru berjalan saat ada orang menekan bel.",
      explanation: "addEventListener memasang pendengar event pada elemen. Event click terjadi saat diklik, input terjadi saat isi field berubah.",
      steps: [
        "Pilih input dan output.",
        "Pasang event input pada input.",
        "Ambil value dari input.",
        "Tampilkan value ke halaman."
      ],
      terms: [
        { term: "Event", meaning: "Kejadian di halaman, seperti klik atau ketikan." },
        { term: "addEventListener", meaning: "Cara memasang fungsi yang berjalan saat event terjadi." },
        { term: "value", meaning: "Isi dari input form." }
      ],
      html: `<label for="nama">Nama</label>
<input id="nama" type="text" placeholder="Ketik nama">
<p id="preview">Halo, ...</p>`,
      css: `input {
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 10px;
}

#preview {
  font-weight: bold;
}`,
      js: `const inputNama = document.querySelector("#nama");
const preview = document.querySelector("#preview");

inputNama.addEventListener("input", function () {
  preview.textContent = "Halo, " + inputNama.value;
});`,
      lineNotes: [
        "Input dipilih dengan id nama.",
        "Event input berjalan setiap ketikan berubah.",
        "value membaca isi input.",
        "Preview langsung diperbarui."
      ],
      exercise: "Jika input kosong, tampilkan kembali teks 'Halo, ...'.",
      commonMistakes: [
        "Mengambil value sebelum event sehingga nilainya belum berubah.",
        "Memakai click pada input teks padahal butuh input.",
        "Lupa memberi id pada input."
      ],
      checkpoint: "Kamu bisa membaca ketikan pengguna dan menampilkannya langsung.",
      recall: "Kapan memakai event input dibanding click?",
      debug: {
        question: "Kenapa teks tidak berubah saat mengetik?",
        hint: "Cek event yang dipasang.",
        solution: "Gunakan event input untuk merespons perubahan isi input teks."
      },
      quiz: {
        question: "Event yang cocok untuk merespons ketikan di input adalah...",
        options: ["input", "hover", "loadcss", "spacing"],
        answer: 0,
        explanation: "Event input aktif saat nilai input berubah."
      }
    },
    {
      id: "form-validation",
      icon: "bi-ui-checks",
      title: "Validasi Form Dasar",
      duration: "17 menit",
      prerequisite: "Kamu sudah bisa membaca value input.",
      overview: "Kamu mengecek input sebelum form diproses.",
      goal: "Mencegah submit saat input kosong dan menampilkan pesan bantuan.",
      problem: "Form yang menerima data kosong membuat pengalaman pengguna buruk.",
      analogy: "Validasi seperti petugas loket yang mengecek formulir sebelum diterima.",
      explanation: "Event submit terjadi saat form dikirim. preventDefault mencegah reload agar kita bisa mengecek data lebih dulu.",
      steps: [
        "Pilih form, input, dan pesan error.",
        "Pasang event submit.",
        "Panggil preventDefault.",
        "Cek apakah input kosong."
      ],
      terms: [
        { term: "submit", meaning: "Event saat form dikirim." },
        { term: "preventDefault", meaning: "Mencegah perilaku bawaan browser." },
        { term: "trim", meaning: "Menghapus spasi di awal dan akhir string." }
      ],
      html: `<form id="formKontak">
  <label for="email">Email</label>
  <input id="email" type="email" placeholder="nama@email.com">
  <button>Kirim</button>
  <p id="pesan"></p>
</form>`,
      css: `form {
  display: grid;
  gap: 10px;
  max-width: 360px;
}

.error {
  color: #b91c1c;
}`,
      js: `const form = document.querySelector("#formKontak");
const email = document.querySelector("#email");
const pesan = document.querySelector("#pesan");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (email.value.trim() === "") {
    pesan.textContent = "Email wajib diisi.";
    pesan.className = "error";
  } else {
    pesan.textContent = "Form siap dikirim.";
    pesan.className = "";
  }
});`,
      lineNotes: [
        "Form mendengarkan event submit.",
        "preventDefault mencegah halaman reload.",
        "trim membantu mengecek input kosong yang hanya berisi spasi.",
        "Pesan berubah sesuai kondisi."
      ],
      exercise: "Tambahkan validasi agar email harus berisi karakter @.",
      commonMistakes: [
        "Lupa event.preventDefault sehingga halaman reload.",
        "Mengecek input tanpa trim.",
        "Memasang event pada button, bukan form, saat butuh validasi submit."
      ],
      checkpoint: "Kamu bisa mencegah form kosong dan menampilkan feedback.",
      recall: "Apa fungsi preventDefault pada form?",
      debug: {
        question: "Kenapa pesan error hanya muncul sebentar lalu hilang?",
        hint: "Form mungkin tetap submit dan reload.",
        solution: "Panggil event.preventDefault() di awal event submit."
      },
      quiz: {
        question: "Method untuk mencegah reload bawaan form adalah...",
        options: ["preventDefault", "stopCSS", "querySelectorAll", "addClass"],
        answer: 0,
        explanation: "preventDefault mencegah aksi bawaan seperti reload form."
      }
    },
    {
      id: "template-literal",
      icon: "bi-chat-square-quote",
      title: "Template Literal",
      duration: "13 menit",
      prerequisite: "Kamu sudah bisa menggabungkan string dengan operator +.",
      overview: "Kamu membuat string lebih mudah dibaca dengan backtick.",
      goal: "Memakai template literal untuk menyisipkan variabel ke teks.",
      problem: "Menggabungkan banyak string dengan + cepat menjadi panjang dan sulit dibaca.",
      analogy: "Template literal seperti formulir kalimat. Kamu menaruh nilai di bagian kosong dengan ${...}.",
      explanation: "Template literal memakai backtick. Ekspresi ditulis dalam ${} agar masuk ke string.",
      steps: [
        "Buat beberapa variabel.",
        "Tulis string dengan backtick.",
        "Sisipkan variabel memakai ${}.",
        "Tampilkan hasilnya ke halaman."
      ],
      terms: [
        { term: "Backtick", meaning: "Tanda ` yang dipakai untuk template literal." },
        { term: "Interpolasi", meaning: "Menyisipkan nilai ke dalam string." },
        { term: "Ekspresi", meaning: "Kode yang menghasilkan nilai dan bisa masuk ke ${}." }
      ],
      html: `<section id="kartu"></section>`,
      css: `#kartu {
  background: #fffbeb;
  border-radius: 12px;
  padding: 16px;
}`,
      js: `const nama = "Nia";
const poin = 82;

document.querySelector("#kartu").innerHTML = \`
  <h1>Halo, \${nama}</h1>
  <p>Poin belajarmu hari ini: \${poin}</p>
\`;`,
      lineNotes: [
        "String dibuka dengan backtick.",
        "${nama} menyisipkan isi variabel nama.",
        "HTML kecil dibuat sebagai string.",
        "innerHTML memasukkan markup ke section."
      ],
      exercise: "Tambahkan variabel level lalu tampilkan di dalam kartu.",
      commonMistakes: [
        "Memakai kutip biasa tetapi menulis ${}.",
        "Lupa menutup backtick.",
        "Memasukkan data pengguna ke innerHTML tanpa validasi."
      ],
      checkpoint: "Kamu bisa membuat teks dinamis dengan template literal.",
      recall: "Apa beda template literal dan string dengan kutip biasa?",
      debug: {
        question: "Kenapa ${nama} tampil sebagai teks biasa?",
        hint: "Cek tanda pembuka string.",
        solution: "Gunakan backtick, bukan kutip satu atau kutip dua, agar ${} diproses."
      },
      quiz: {
        question: "Template literal ditulis menggunakan...",
        options: ["backtick (`)", "tag link", "kurung siku CSS", "tanda pagar"],
        answer: 0,
        explanation: "Template literal memakai backtick."
      }
    },
    {
      id: "localstorage",
      icon: "bi-save",
      title: "localStorage Dasar",
      duration: "17 menit",
      prerequisite: "Kamu sudah bisa membaca input dan mengubah teks.",
      overview: "Kamu menyimpan data sederhana di browser.",
      goal: "Menyimpan nama pengguna agar tetap ada setelah refresh.",
      problem: "Tanpa penyimpanan, data kecil seperti nama atau tema akan hilang saat halaman di-refresh.",
      analogy: "localStorage seperti laci kecil di browser. Data tetap ada sampai kamu menghapusnya.",
      explanation: "localStorage menyimpan key dan value dalam bentuk string. Gunakan setItem untuk menyimpan dan getItem untuk membaca.",
      steps: [
        "Baca data tersimpan saat halaman dibuka.",
        "Ambil value dari input.",
        "Simpan dengan setItem.",
        "Tampilkan data tersimpan."
      ],
      terms: [
        { term: "localStorage", meaning: "Penyimpanan sederhana di browser." },
        { term: "setItem", meaning: "Menyimpan nilai berdasarkan key." },
        { term: "getItem", meaning: "Membaca nilai berdasarkan key." }
      ],
      html: `<input id="nama" placeholder="Nama kamu">
<button id="simpan">Simpan</button>
<p id="hasil"></p>`,
      css: `button {
  background: #0ea5b7;
  border: 0;
  border-radius: 8px;
  color: white;
  padding: 10px 14px;
}`,
      js: `const input = document.querySelector("#nama");
const hasil = document.querySelector("#hasil");
const tombol = document.querySelector("#simpan");

hasil.textContent = "Nama tersimpan: " + (localStorage.getItem("nama") || "-");

tombol.addEventListener("click", function () {
  localStorage.setItem("nama", input.value);
  hasil.textContent = "Nama tersimpan: " + input.value;
});`,
      lineNotes: [
        "getItem membaca data lama.",
        "|| memberi nilai cadangan jika belum ada data.",
        "setItem menyimpan input.",
        "Hasil di halaman ikut diperbarui."
      ],
      exercise: "Tambahkan tombol hapus yang memanggil localStorage.removeItem('nama').",
      commonMistakes: [
        "Mengira localStorage bisa menyimpan object langsung tanpa JSON.",
        "Lupa bahwa data localStorage berbentuk string.",
        "Memakai key yang berbeda saat menyimpan dan membaca."
      ],
      checkpoint: "Kamu bisa menyimpan dan membaca data string sederhana di browser.",
      recall: "Apa beda setItem dan getItem?",
      debug: {
        question: "Kenapa data tidak terbaca setelah refresh?",
        hint: "Cek nama key saat menyimpan dan membaca.",
        solution: "Pastikan setItem('nama', ...) dan getItem('nama') memakai key yang sama."
      },
      quiz: {
        question: "Method untuk menyimpan data ke localStorage adalah...",
        options: ["setItem", "pushPage", "saveCSS", "queryData"],
        answer: 0,
        explanation: "localStorage.setItem menyimpan value berdasarkan key."
      }
    },
    {
      id: "fetch-json",
      icon: "bi-cloud-arrow-down",
      title: "Fetch dan JSON Dasar",
      duration: "18 menit",
      prerequisite: "Kamu sudah memahami fungsi dan object dasar.",
      overview: "Kamu mengenal cara mengambil data dari file JSON atau API.",
      goal: "Memahami bentuk dasar fetch, promise, dan data JSON tanpa masuk terlalu dalam.",
      problem: "Website modern sering menampilkan data dari luar halaman, misalnya daftar produk atau artikel.",
      analogy: "fetch seperti kurir data. JavaScript meminta data, menunggu balasan, lalu menampilkannya.",
      explanation: "fetch mengembalikan promise. await menunggu hasil. response.json membaca data JSON menjadi object JavaScript.",
      steps: [
        "Buat fungsi async.",
        "Panggil fetch ke URL data.",
        "Ubah response menjadi JSON.",
        "Tampilkan data ke halaman."
      ],
      terms: [
        { term: "fetch", meaning: "API browser untuk mengambil data lewat HTTP." },
        { term: "JSON", meaning: "Format data teks yang mirip object JavaScript." },
        { term: "async/await", meaning: "Cara menulis proses menunggu data agar lebih mudah dibaca." }
      ],
      html: `<h1>Data Quote</h1>
<button id="muat">Muat contoh data</button>
<pre id="hasil"></pre>`,
      css: `pre {
  background: #111827;
  border-radius: 10px;
  color: #fef3c7;
  padding: 14px;
  white-space: pre-wrap;
}`,
      js: `const hasil = document.querySelector("#hasil");

document.querySelector("#muat").addEventListener("click", async function () {
  const data = {
    judul: "Belajar fetch",
    status: "Contoh ini memakai data lokal agar aman dicoba."
  };

  hasil.textContent = JSON.stringify(data, null, 2);
});`,
      lineNotes: [
        "Contoh memakai object lokal agar preview tetap jalan offline.",
        "async disiapkan untuk pola fetch sungguhan.",
        "JSON.stringify mengubah object menjadi teks rapi.",
        "pre menampilkan format dengan spasi."
      ],
      exercise: "Ganti object data dengan array berisi dua artikel, lalu tampilkan sebagai JSON.",
      commonMistakes: [
        "Lupa await saat membaca data async.",
        "Mengira semua URL bisa dipanggil dari browser tanpa aturan CORS.",
        "Tidak menangani kondisi error jaringan."
      ],
      checkpoint: "Kamu memahami gambaran fetch dan JSON sebagai dasar sebelum memakai API sungguhan.",
      recall: "Apa fungsi response.json pada fetch sungguhan?",
      debug: {
        question: "Kenapa fetch ke sebuah API diblokir browser?",
        hint: "Cek aturan CORS dari server tujuan.",
        solution: "Browser hanya mengizinkan fetch lintas domain jika server mengizinkan CORS. Pakai API yang mendukung CORS atau backend sendiri."
      },
      quiz: {
        question: "Format data teks yang sering dipakai API web adalah...",
        options: ["JSON", "PNG", "CSS Grid", "HTML doctype"],
        answer: 0,
        explanation: "JSON umum dipakai untuk bertukar data antara server dan JavaScript."
      }
    },
    {
      id: "debugging-javascript",
      icon: "bi-bug",
      title: "Debugging JavaScript",
      duration: "17 menit",
      prerequisite: "Kamu sudah memakai console dan event.",
      overview: "Kamu belajar membaca error umum dan memperbaiki langkah kecil.",
      goal: "Mengenali null, typo, kurung hilang, dan urutan script.",
      problem: "JavaScript berhenti saat error. Satu typo bisa membuat fitur terlihat mati total.",
      analogy: "Debugging seperti membaca jejak. Console memberi tahu lokasi dan jenis masalah.",
      explanation: "Baca pesan error dari atas, cek file dan nomor baris, lalu perbaiki dari masalah paling pertama.",
      steps: [
        "Buka DevTools Console.",
        "Baca pesan error pertama.",
        "Klik lokasi file dan baris.",
        "Perbaiki satu hal lalu refresh."
      ],
      terms: [
        { term: "Error", meaning: "Masalah yang membuat kode gagal berjalan." },
        { term: "ReferenceError", meaning: "Nama variabel tidak dikenal." },
        { term: "TypeError", meaning: "Nilai dipakai dengan cara yang tidak sesuai." }
      ],
      html: `<button id="aksi">Jalankan</button>
<p id="hasil">Belum jalan.</p>`,
      css: `.berhasil {
  color: #15803d;
  font-weight: bold;
}`,
      js: `const tombol = document.querySelector("#aksi");
const hasil = document.querySelector("#hasil");

tombol.addEventListener("click", function () {
  hasil.textContent = "Berhasil dibaca dari JavaScript.";
  hasil.classList.add("berhasil");
});`,
      lineNotes: [
        "Selector cocok dengan id di HTML.",
        "Event dipasang ke tombol yang valid.",
        "textContent dan classList berjalan setelah klik.",
        "Jika selector salah, console akan membantu menemukan error."
      ],
      exercise: "Sengaja ubah #aksi menjadi #aksii, lihat error, lalu perbaiki.",
      commonMistakes: [
        "Mengabaikan error pertama dan memperbaiki bagian lain.",
        "Tidak membaca nomor baris.",
        "Menebak-nebak tanpa console.log atau DevTools."
      ],
      checkpoint: "Kamu bisa membaca pesan error awal dan memperbaiki selector typo.",
      recall: "Apa urutan cek saat fitur JavaScript tidak jalan?",
      debug: {
        question: "Muncul Cannot read properties of null. Apa artinya?",
        hint: "Ada selector yang tidak menemukan elemen.",
        solution: "Cek selector, id/class HTML, dan pastikan script berjalan setelah elemen ada."
      },
      quiz: {
        question: "Tempat utama membaca error JavaScript adalah...",
        options: ["Console DevTools", "Folder images", "CSS selector", "Tag title"],
        answer: 0,
        explanation: "Console menampilkan error, lokasi file, dan nomor baris."
      }
    },
    {
      id: "struktur-project-js",
      icon: "bi-folder2-open",
      title: "Struktur Project JavaScript",
      duration: "14 menit",
      prerequisite: "Kamu sudah membuat beberapa contoh HTML, CSS, dan JS.",
      overview: "Kamu merapikan file agar project mudah dibaca.",
      goal: "Membuat struktur folder sederhana untuk project pemula.",
      problem: "File yang campur aduk membuat path salah dan project sulit dilanjutkan.",
      analogy: "Struktur folder seperti rak belajar. Buku HTML, CSS, JS, dan gambar punya tempat masing-masing.",
      explanation: "Project pemula bisa memakai index.html, assets/css/style.css, assets/js/app.js, dan assets/images untuk gambar.",
      steps: [
        "Buat folder assets.",
        "Pisahkan css dan js.",
        "Hubungkan path dengan benar dari index.html.",
        "Gunakan nama file kecil dan jelas."
      ],
      terms: [
        { term: "Path", meaning: "Alamat file relatif dari file yang sedang membaca." },
        { term: "assets", meaning: "Folder umum untuk CSS, JS, gambar, dan file pendukung." },
        { term: "Entry file", meaning: "File utama yang dibuka, biasanya index.html." }
      ],
      html: `<h1>Project rapi</h1>
<p id="status">Menunggu script.</p>`,
      css: `body {
  font-family: Arial, sans-serif;
}`,
      js: `document.querySelector("#status").textContent = "assets/js/app.js berhasil dibaca";`,
      lineNotes: [
        "index.html menjadi pintu masuk project.",
        "CSS dan JS dipisah agar mudah dicari.",
        "Path harus sesuai lokasi file.",
        "Pesan status membantu mengecek koneksi file."
      ],
      exercise: "Buat folder assets/css dan assets/js, lalu pindahkan style.css dan app.js ke sana.",
      commonMistakes: [
        "Lupa memperbarui path setelah memindahkan file.",
        "Nama folder berbeda huruf besar kecil.",
        "Menaruh semua kode dalam satu file besar terlalu awal."
      ],
      checkpoint: "Kamu bisa merapikan file project JavaScript sederhana.",
      recall: "Kenapa struktur folder penting saat project mulai bertambah?",
      debug: {
        question: "Setelah file app.js dipindah, script tidak jalan. Apa yang dicek?",
        hint: "Path src mungkin masih lama.",
        solution: "Ubah src menjadi lokasi baru, misalnya assets/js/app.js."
      },
      quiz: {
        question: "Jika app.js ada di assets/js, path dari index.html biasanya...",
        options: ["assets/js/app.js", "app.js/assets", "style/app.js", "images/js"],
        answer: 0,
        explanation: "Path relatif mengikuti lokasi folder dari index.html."
      }
    },
    {
      id: "publish-project-js",
      icon: "bi-rocket-takeoff",
      title: "Publish Project JavaScript",
      duration: "14 menit",
      prerequisite: "Project statis HTML, CSS, dan JavaScript sudah berjalan lokal.",
      overview: "Kamu menyiapkan project agar bisa dibuka lewat GitHub Pages.",
      goal: "Memastikan file statis aman dipublish dan path relatif bekerja.",
      problem: "Project yang berjalan lokal bisa rusak saat online karena path file, huruf besar kecil, atau file utama tidak bernama index.html.",
      analogy: "Publish seperti memindahkan etalase dari meja belajar ke toko. Semua barang harus tetap ada di rak yang benar.",
      explanation: "GitHub Pages menjalankan file statis. Pastikan index.html ada di root, path CSS/JS relatif benar, dan tidak bergantung pada file lokal komputer.",
      steps: [
        "Cek index.html di root project.",
        "Cek path CSS, JS, dan gambar.",
        "Buka project lewat server lokal atau GitHub Pages.",
        "Tes fitur klik, form, dan localStorage."
      ],
      terms: [
        { term: "Static site", meaning: "Website yang bisa berjalan dari HTML, CSS, dan JavaScript tanpa backend." },
        { term: "Deploy", meaning: "Mengunggah project agar bisa diakses online." },
        { term: "Relative path", meaning: "Alamat file berdasarkan lokasi file saat ini." }
      ],
      html: `<h1>Siap Publish</h1>
<button id="tes">Tes fitur</button>
<p id="hasil">Belum dites.</p>`,
      css: `button {
  background: #f59e0b;
  border: 0;
  border-radius: 8px;
  padding: 10px 14px;
}`,
      js: `document.querySelector("#tes").addEventListener("click", function () {
  document.querySelector("#hasil").textContent = "Fitur JavaScript jalan setelah publish.";
});`,
      lineNotes: [
        "index.html menjadi file utama.",
        "Tombol dipakai untuk tes interaksi.",
        "Jika teks berubah, JavaScript berjalan.",
        "Tes ulang setelah halaman online."
      ],
      exercise: "Buat checklist publish dan centang setiap fitur yang sudah dites.",
      commonMistakes: [
        "File utama tidak bernama index.html.",
        "Path memakai lokasi lokal komputer.",
        "Tidak mengetes lagi setelah deploy."
      ],
      checkpoint: "Kamu tahu apa saja yang dicek sebelum project JavaScript statis dipublish.",
      recall: "Sebutkan tiga hal yang harus dicek sebelum publish ke GitHub Pages.",
      debug: {
        question: "Website online tampil polos dan tombol tidak jalan. Apa yang dicek?",
        hint: "CSS dan JS mungkin gagal dimuat.",
        solution: "Buka DevTools Network/Console, cek path file CSS dan JS, lalu perbaiki huruf besar kecil atau foldernya."
      },
      quiz: {
        question: "File utama yang biasanya dibaca GitHub Pages adalah...",
        options: ["index.html", "home.docx", "style.js", "readme.css"],
        answer: 0,
        explanation: "GitHub Pages mencari index.html sebagai halaman utama."
      }
    }
  ];

  return {
    lessons,
    quizQuestions: lessons.slice(0, 14).map((lesson) => lesson.quiz),
    recallChallenges: [
      {
        id: "recall-html-css-js",
        icon: "bi-layers",
        title: "HTML, CSS, JS",
        question: "Jelaskan perbedaan peran HTML, CSS, dan JavaScript.",
        answer: "HTML menyusun struktur, CSS mengatur tampilan, dan JavaScript membuat halaman merespons aksi atau data."
      },
      {
        id: "recall-let-const",
        icon: "bi-box",
        title: "let dan const",
        question: "Kapan memakai let dan kapan memakai const?",
        answer: "Gunakan const untuk nilai yang tidak diisi ulang, dan let untuk nilai yang akan berubah seperti counter."
      },
      {
        id: "recall-dom",
        icon: "bi-cursor",
        title: "DOM",
        question: "Apa itu DOM dan kenapa JavaScript perlu DOM?",
        answer: "DOM adalah representasi halaman HTML yang bisa dibaca dan diubah JavaScript."
      },
      {
        id: "recall-event",
        icon: "bi-hand-index-thumb",
        title: "Event",
        question: "Apa fungsi addEventListener?",
        answer: "addEventListener memasang fungsi agar berjalan saat event tertentu terjadi, misalnya click atau input."
      },
      {
        id: "recall-function",
        icon: "bi-diagram-3",
        title: "Fungsi",
        question: "Kenapa fungsi membantu saat kode mulai panjang?",
        answer: "Fungsi mengelompokkan langkah dan membuat kode bisa dipakai ulang tanpa disalin berkali-kali."
      },
      {
        id: "recall-array-object",
        icon: "bi-braces",
        title: "Array dan Object",
        question: "Apa perbedaan array dan object?",
        answer: "Array menyimpan banyak nilai berurutan, sedangkan object menyimpan data dengan key dan value."
      },
      {
        id: "recall-form",
        icon: "bi-ui-checks",
        title: "Form",
        question: "Kenapa submit form sering memakai preventDefault saat latihan?",
        answer: "Agar halaman tidak reload sebelum JavaScript sempat mengecek input dan menampilkan pesan."
      },
      {
        id: "recall-debug",
        icon: "bi-bug",
        title: "Debugging",
        question: "Sebutkan urutan cek saat fitur JavaScript tidak jalan.",
        answer: "Buka Console, baca error pertama, cek file dan baris, cek selector, cek urutan script, lalu perbaiki satu hal."
      }
    ],
    debugChallenges: [
      {
        id: "debug-src",
        title: "File Script Tidak Terbaca",
        level: "Dasar",
        error: "Tidak ada efek JavaScript sama sekali.",
        brokenCode: `<script scr="script.js" defer></script>`,
        fixedCode: `<script src="script.js" defer></script>`,
        hint: "Atribut alamat file pada script adalah src.",
        explanation: "Browser tidak mengenali scr. Gunakan src agar file JavaScript dimuat."
      },
      {
        id: "debug-selector",
        title: "Selector Salah",
        level: "Dasar",
        error: "Muncul Cannot read properties of null.",
        brokenCode: `const tombol = document.querySelector("#tmbl");
tombol.addEventListener("click", function () {
  console.log("klik");
});`,
        fixedCode: `const tombol = document.querySelector("#tombol");
tombol.addEventListener("click", function () {
  console.log("klik");
});`,
        hint: "Cek id di HTML dan selector di JavaScript.",
        explanation: "querySelector menghasilkan null saat selector tidak menemukan elemen."
      },
      {
        id: "debug-const",
        title: "const Diubah",
        level: "Dasar",
        error: "Assignment to constant variable.",
        brokenCode: `const jumlah = 0;
jumlah = jumlah + 1;`,
        fixedCode: `let jumlah = 0;
jumlah = jumlah + 1;`,
        hint: "Nilai yang berubah memakai let.",
        explanation: "const tidak bisa diisi ulang. Counter perlu let."
      },
      {
        id: "debug-classlist-dot",
        title: "classList Pakai Titik",
        level: "Dasar",
        error: "Class CSS tidak berefek.",
        brokenCode: `pesan.classList.add(".aktif");`,
        fixedCode: `pesan.classList.add("aktif");`,
        hint: "classList menerima nama class, bukan selector CSS.",
        explanation: "Titik hanya dipakai saat memilih class dengan selector, bukan saat menambah class."
      },
      {
        id: "debug-submit",
        title: "Form Reload Sendiri",
        level: "Menengah",
        error: "Pesan validasi muncul sebentar lalu hilang.",
        brokenCode: `form.addEventListener("submit", function () {
  pesan.textContent = "Email wajib diisi";
});`,
        fixedCode: `form.addEventListener("submit", function (event) {
  event.preventDefault();
  pesan.textContent = "Email wajib diisi";
});`,
        hint: "Perilaku bawaan submit perlu dihentikan saat validasi latihan.",
        explanation: "preventDefault mencegah reload sehingga pesan validasi tetap terlihat."
      },
      {
        id: "debug-string-number",
        title: "Angka Menjadi Teks",
        level: "Menengah",
        error: "2 + 3 dari input menjadi 23.",
        brokenCode: `const total = inputA.value + inputB.value;`,
        fixedCode: `const total = Number(inputA.value) + Number(inputB.value);`,
        hint: "value input selalu string.",
        explanation: "Ubah value menjadi number sebelum dihitung."
      },
      {
        id: "debug-template",
        title: "Template Literal Tidak Jalan",
        level: "Menengah",
        error: "${nama} tampil apa adanya.",
        brokenCode: `pesan.textContent = "Halo, \${nama}";`,
        fixedCode: "pesan.textContent = `Halo, ${nama}`;",
        hint: "Interpolasi butuh backtick.",
        explanation: "Gunakan backtick untuk memproses ${}."
      },
      {
        id: "debug-localstorage-key",
        title: "Key localStorage Berbeda",
        level: "Menengah",
        error: "Data tersimpan tetapi tidak terbaca lagi.",
        brokenCode: `localStorage.setItem("namaUser", nama);
const namaTersimpan = localStorage.getItem("nama");`,
        fixedCode: `localStorage.setItem("nama", nama);
const namaTersimpan = localStorage.getItem("nama");`,
        hint: "Key saat menyimpan dan membaca harus sama.",
        explanation: "localStorage membaca data berdasarkan key yang sama persis."
      }
    ],
    editorTemplates: [
      {
        id: "tombol-pesan",
        icon: "bi-cursor",
        title: "Tombol Pesan",
        html: `<main class="card">
  <h1>Halo JavaScript</h1>
  <p id="pesan">Klik tombol di bawah.</p>
  <button id="tombol">Klik saya</button>
</main>`,
        css: `body {
  background: #fffbeb;
  font-family: Arial, sans-serif;
  padding: 32px;
}

.card {
  background: white;
  border: 1px solid #fde68a;
  border-radius: 16px;
  max-width: 520px;
  padding: 24px;
}

button {
  background: #f59e0b;
  border: 0;
  border-radius: 8px;
  padding: 10px 14px;
}`,
        js: `const tombol = document.querySelector("#tombol");
const pesan = document.querySelector("#pesan");

tombol.addEventListener("click", function () {
  pesan.textContent = "Kamu baru menjalankan event click.";
});`
      },
      {
        id: "counter",
        icon: "bi-plus-square",
        title: "Counter",
        html: `<h1>Counter</h1>
<p>Nilai: <strong id="nilai">0</strong></p>
<button id="kurang">-</button>
<button id="tambah">+</button>`,
        css: `body {
  font-family: Arial, sans-serif;
  padding: 32px;
}

strong {
  color: #b45309;
  font-size: 36px;
}

button {
  margin-right: 8px;
  min-width: 44px;
}`,
        js: `const nilai = document.querySelector("#nilai");
let angka = 0;

document.querySelector("#tambah").addEventListener("click", function () {
  angka = angka + 1;
  nilai.textContent = angka;
});

document.querySelector("#kurang").addEventListener("click", function () {
  angka = angka - 1;
  nilai.textContent = angka;
});`
      },
      {
        id: "input-preview",
        icon: "bi-input-cursor-text",
        title: "Input Preview",
        html: `<label for="nama">Nama</label>
<input id="nama" placeholder="Ketik nama">
<p id="preview">Halo, ...</p>`,
        css: `body {
  font-family: Arial, sans-serif;
  padding: 32px;
}

input {
  border: 1px solid #d1d5db;
  border-radius: 8px;
  display: block;
  margin: 8px 0 16px;
  padding: 10px;
}`,
        js: `const input = document.querySelector("#nama");
const preview = document.querySelector("#preview");

input.addEventListener("input", function () {
  preview.textContent = "Halo, " + (input.value || "...");
});`
      },
      {
        id: "todo-mini",
        icon: "bi-list-check",
        title: "Todo Mini",
        html: `<h1>Todo Mini</h1>
<input id="todoInput" placeholder="Tulis tugas">
<button id="tambah">Tambah</button>
<ul id="daftar"></ul>`,
        css: `body {
  font-family: Arial, sans-serif;
  padding: 32px;
}

li {
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 8px;
  margin: 8px 0;
  padding: 8px;
}`,
        js: `const input = document.querySelector("#todoInput");
const daftar = document.querySelector("#daftar");

document.querySelector("#tambah").addEventListener("click", function () {
  if (input.value.trim() === "") return;
  daftar.innerHTML += "<li>" + input.value + "</li>";
  input.value = "";
});`
      },
      {
        id: "tema-toggle",
        icon: "bi-moon-stars",
        title: "Toggle Tema",
        html: `<main id="app">
  <h1>Mode terang</h1>
  <button id="toggle">Ganti tema</button>
</main>`,
        css: `body {
  font-family: Arial, sans-serif;
  padding: 32px;
}

.gelap {
  background: #111827;
  color: #fef3c7;
}`,
        js: `const app = document.querySelector("#app");
const judul = document.querySelector("h1");

document.querySelector("#toggle").addEventListener("click", function () {
  app.classList.toggle("gelap");
  judul.textContent = app.classList.contains("gelap") ? "Mode gelap" : "Mode terang";
});`
      }
    ],
    projects: [
      {
        title: "Tombol Interaktif di Halaman Profil",
        level: "Pemula",
        goal: "Mengambil halaman profil HTML/CSS lalu menambahkan tombol yang mengubah pesan.",
        features: ["DOM selector", "Event click", "textContent", "classList"],
        steps: ["Buat profil card dari HTML dan CSS.", "Pilih tombol dan pesan dengan querySelector.", "Pasang event click.", "Ubah teks dan class saat tombol diklik."],
        hint: "Mulai dari satu tombol saja sebelum menambah interaksi lain.",
        extra: "Simpan jumlah klik ke localStorage.",
        example: { type: "profile", name: "Rina", role: "JS learner", description: "Saya melanjutkan HTML dan CSS dengan interaksi JavaScript.", hobbies: ["DOM", "Event", "Form"], link: "Klik sapa" }
      },
      {
        title: "Landing Page dengan CTA Dinamis",
        level: "Pemula",
        goal: "Membuat tombol CTA yang mengganti teks hero ketika diklik.",
        features: ["Hero", "CTA", "Event click", "Status message"],
        steps: ["Buat navbar dan hero.", "Tambahkan tombol CTA.", "Pilih elemen status.", "Ganti teks status dengan JavaScript."],
        hint: "Pastikan tombol punya id yang mudah dipilih.",
        extra: "Tambahkan counter jumlah klik.",
        example: { type: "landing", brand: "JSLab", headline: "Belajar JavaScript dari nol", description: "Latih DOM, event, dan form setelah HTML/CSS.", cta: "Mulai JS" }
      },
      {
        title: "Quiz Mini 3 Pertanyaan",
        level: "Pemula",
        goal: "Membuat quiz kecil dengan array pertanyaan dan skor.",
        features: ["Array", "Object", "Kondisi", "Skor"],
        steps: ["Buat array pertanyaan.", "Tampilkan pertanyaan pertama.", "Cek jawaban dengan if.", "Hitung skor dan tampilkan hasil."],
        hint: "Jangan langsung membuat banyak fitur. Selesaikan satu pertanyaan dulu.",
        extra: "Simpan skor terbaik ke localStorage.",
        example: { type: "dashboard", subtitle: "Quiz JS", title: "Skor latihan", progress: 66, stats: [{ value: "3", label: "soal" }, { value: "2", label: "benar" }, { value: "1", label: "ulang" }], tasks: ["Tampilkan soal", "Cek jawaban", "Simpan skor"] }
      },
      {
        title: "Form Kontak dengan Validasi",
        level: "Pemula",
        goal: "Mencegah form kosong dan memberi pesan error yang jelas.",
        features: ["Submit event", "preventDefault", "trim", "feedback"],
        steps: ["Buat form semantic.", "Pasang event submit.", "Cek input kosong.", "Tampilkan pesan sukses atau error."],
        hint: "Validasi dilakukan di form, bukan hanya di tombol.",
        extra: "Tambahkan validasi email berisi @.",
        example: { type: "form", title: "Kontak JSLab", fields: ["Nama", "Email", "Pesan"], button: "Kirim" }
      },
      {
        title: "Todo List Sederhana",
        level: "Menengah",
        goal: "Menambahkan item todo dari input ke daftar.",
        features: ["Input value", "Array", "Render list", "LocalStorage"],
        steps: ["Buat input dan tombol.", "Simpan todo ke array.", "Render array menjadi li.", "Simpan array dengan JSON.stringify."],
        hint: "Pisahkan fungsi tambahTodo dan renderTodo.",
        extra: "Tambahkan tombol hapus per item.",
        example: { type: "checklist", title: "Todo Belajar", description: "Daftar latihan JavaScript minggu ini.", items: ["Latihan DOM", "Buat counter", "Validasi form"], cta: "Tambah tugas" }
      },
      {
        title: "Dashboard Progress Belajar",
        level: "Menengah",
        goal: "Membuat card statistik yang datanya berubah dari JavaScript.",
        features: ["Object", "Template literal", "Progress bar", "LocalStorage"],
        steps: ["Buat object progress.", "Tampilkan statistik dengan template literal.", "Hitung persentase.", "Simpan data ke localStorage."],
        hint: "Mulai dari data statis, baru tambahkan penyimpanan.",
        extra: "Tambahkan tombol reset progress.",
        example: { type: "dashboard", subtitle: "Progress JS", title: "Belajar minggu ini", progress: 48, stats: [{ value: "6", label: "materi" }, { value: "4", label: "latihan" }, { value: "2", label: "project" }], tasks: ["Event click", "Form", "Debugging"] }
      }
    ],
    badges: [
      { id: "mulai", title: "Mulai JS", icon: "bi-flag" },
      { id: "lima-materi", title: "5 Materi JS", icon: "bi-journal-check" },
      { id: "semua-materi", title: "JS Finisher", icon: "bi-trophy" },
      { id: "quiz-70", title: "Quiz 70+", icon: "bi-patch-check" },
      { id: "recall-3", title: "Recall Aktif", icon: "bi-arrow-repeat" },
      { id: "debug-3", title: "Bug JS Reader", icon: "bi-bug" },
      { id: "konsisten", title: "Konsisten", icon: "bi-lightning-charge" }
    ]
  };
})();
