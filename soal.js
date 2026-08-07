// File: soal.js
const examData = {
"pu": {
        name: "Penalaran Umum",
        duration: 20 * 60, // 20 Menit
        questions: [

// ==========================================
// SOAL 1
// ==========================================
            { 
    text: "Tanaman yang terkena hama ulat akan mengalami kerusakan pada daunnya. Untuk mengurangi serangan ulat tersebut dapat dilakukan penyemprotan pestisida. Jika serangan ulat pada tanaman berkurang maka kerusakan daun dapat dicegah.\nBerdasarkan informasi tersebut, manakah pernyataan berikut yang PASTI BENAR?", 
    options: [
        "Penyemprotan pestisida merupakan cara paling ampuh untuk mencegah kerusakan daun pada tanaman.", 
        "Tanaman yang daunnya rusak tidak pernah disemprot pestisida.", 
        "Risiko kerusakan daun pada tanaman berkurang jika dilakukan penyemprotan pestisida.", 
        "Penyemprotan pestisida membuat tanaman bebas sepenuhnya dari kerusakan daun.", 
        "Tanaman yang terkena ulat tidak pernah diberi pestisida."
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 2, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 2
// ==========================================
{ 
    text: "Banyak berbagai macam kerajinan tangan unik dengan kualitas tinggi yang dihasilkan oleh pengrajin di desa sehingga menarik perhatian wisatawan untuk membeli. Salah satunya adalah vas bunga yang dihasilkan oleh seorang pengrajin dengan bentuk menyerupai hewan, yang menunjukkan ide kreatif pengrajin tersebut.\nBerdasarkan informasi di atas, pernyataan berikut yang PASTI BENAR adalah ….", 
    options: [
        "Vas bunga adalah satu-satunya kerajinan yang menarik wisatawan untuk membeli.", 
        "Kerajinan tangan selain vas bunga tidak menarik minat wisatawan untuk membeli.", 
        "Kerajinan tangan tidak menarik ketika kurang memperlihatkan ide kreatif pengrajin.", 
        "Makin banyak wisatawan yang membeli kerajinan jika semakin banyak pengrajin menghasilkan kerajinan unik dan berkualitas tinggi.", 
        "Pengrajin selain pengrajin vas bunga tidak membuat wisatawan membeli kerajinan hasil karyanya."
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 3, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 3
// ==========================================
{ 
    text: "Minuman energi semakin diminati karena praktis dan mudah dikonsumsi. Namun, harganya relatif lebih mahal dan dapat menyebabkan gangguan tidur pada sebagian orang. Minuman energi mengandung kafein yang bisa membuat seseorang sulit tidur jika dikonsumsi berlebihan. Oleh karena itu, orang dewasa disarankan untuk berhati-hati dalam memilih jenis minuman energi agar tubuh tetap sehat dan bugar.\nBerdasarkan informasi tersebut, pernyataan berikut ini yang PASTI SALAH adalah ….", 
    options: [
        "Kafein pada minuman energi dapat mengakibatkan sulit tidur jika dikonsumsi berlebihan.", 
        "Minuman energi mudah dikonsumsi dan harganya murah.", 
        "Minuman energi setelah diminum tidak bisa digunakan kembali.", 
        "Orang dewasa bisa mengalami gangguan tidur jika mengonsumsi minuman energi yang tidak tepat.", 
        "Orang dewasa disarankan untuk memilih minuman energi dengan bijak."
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 1, 
    score: 35, 
    difficulty: "Easy" 
},
                
// ==========================================
// SOAL 4
// ==========================================
{ 
    text: "Semua peserta lomba menulis yang mengumpulkan naskah sebelum tanggal 10 Agustus diterima panitia. Semua peserta lomba menulis yang jumlah katanya lebih dari 1.000 juga diterima panitia. Rina mengumpulkan naskah pada tanggal 12 Agustus dengan jumlah kata 1.200.\nKesimpulan yang BENAR dari pernyataan di atas adalah ….", 
    options: [
        "Rina tidak diterima panitia lomba menulis.", 
        "Ada peserta lomba menulis yang mengumpulkan naskah setelah tanggal 10 Agustus tetap diterima panitia.", 
        "Semua peserta lomba menulis tidak diterima panitia.", 
        "Semua peserta lomba menulis diterima panitia.", 
        "Rina mungkin diterima panitia."
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 1, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 5
// ==========================================
{ 
    text: "Menggunakan layar gawai lebih dari delapan jam sehari terbukti dapat meningkatkan risiko gangguan mata seperti mata lelah, kering, hingga penurunan ketajaman penglihatan. Namun beberapa orang seperti desainer grafis dan programmer, tetap menggunakan layar gawai dalam waktu lama dan tidak mengalami gangguan mata karena menerapkan pola kerja yang sehat dan menjaga kesehatan mata.\nBerdasarkan informasi tersebut, manakah pernyataan berikut yang PASTI SALAH?", 
    options: [
        "Desainer grafis dan programmer dapat memiliki mata yang sehat.", 
        "Orang yang menggunakan gawai lebih dari delapan jam sehari mungkin tetap memiliki mata yang sehat.", 
        "Beberapa orang yang menggunakan gawai lebih dari delapan jam sehari mengalami gangguan mata.", 
        "Menggunakan layar gawai lebih dari delapan jam sehari meningkatkan risiko gangguan mata.", 
        "Orang yang sering menggunakan gawai dalam waktu lama tidak perlu khawatir tentang gangguan mata."
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 4, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 6
// ==========================================
            { 
    text: "Susu mengandung kalsium yang tinggi dan bermanfaat untuk pertumbuhan tulang. Semakin banyak anak mengonsumsi kalsium, semakin baik perkembangan tulangnya.\nBerdasarkan informasi di atas, pernyataan sebab–akibat berikut yang PALING MUNGKIN BENAR adalah ….", 
    options: [
        "Anak–anak yang tidak minum susu tidak dapat tumbuh tinggi.", 
        "Susu menjadi satu–satunya makanan yang wajib dikonsumsi anak–anak agar tulangnya kuat.", 
        "Susu tidak dibutuhkan anak–anak untuk membantu pertumbuhan tulangnya.", 
        "Anak–anak yang sering mengonsumsi susu cenderung memiliki pertumbuhan tulang yang baik.", 
        "Makanan lain yang tidak mengandung kalsium tidak bermanfaat bagi anak–anak."
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 3, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 7
// ==========================================
{ 
    text: "Jika sebuah restoran dinobatkan sebagai restoran favorit pelanggan, maka restoran tersebut memiliki pelayanan yang ramah, harga yang sesuai, dan menu makanan yang enak.\nJika sebuah restoran pelayanannya kurang ramah, harga terlalu mahal, dan rasa makanan tidak enak, manakah simpulan yang BENAR?", 
    options: [
        "Restoran tersebut belum terkenal.", 
        "Restoran tersebut tidak menjadi restoran favorit pelanggan.", 
        "Restoran tersebut hanya menyediakan menu yang sedikit.", 
        "Restoran tersebut memiliki banyak pesaing.", 
        "Restoran tersebut sedang dalam masa promosi."
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 1, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 8
// ==========================================
{ 
    text: "Keberhasilan sebuah restoran dipengaruhi oleh kualitas masakan dan kenyamanan tempat makan. Kualitas masakan restoran dapat dilihat dari cita rasa dan penyajian yang menarik pelanggan. Kenyamanan tempat makan juga berkontribusi terhadap kepuasan pelanggan, yang tercermin dalam pelanggan betah berlama-lama di restoran dan memberikan ulasan positif setelah makan.\nJika pelanggan betah berlama-lama di restoran, manakah di bawah ini simpulan yang PALING MUNGKIN BENAR?", 
    options: [
        "Koki restoran memiliki keahlian memasak yang baik.", 
        "Menu restoran sangat beragam.", 
        "Restoran tersebut sukses menarik banyak pelanggan.", 
        "Restoran memiliki tempat makan yang nyaman.", 
        "Kualitas masakan restoran sangat tinggi."
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 3, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 9
// ==========================================
{ 
    text: "(1) Jumlah pengguna transportasi online semakin meningkat setiap tahun.\n(2) Perusahaan transportasi online menambah jumlah armada kendaraan yang beroperasi.\nManakah di bawah ini yang menggambarkan hubungan di antara kedua pernyataan?", 
    options: [
        "Pernyataan 1 adalah penyebab dan pernyataan 2 adalah akibat.", 
        "Pernyataan 2 adalah penyebab dan pernyataan 1 adalah akibat.", 
        "Pernyataan 1 dan 2 adalah penyebab, namun tidak saling berhubungan.", 
        "Pernyataan 1 dan 2 adalah akibat dari dua penyebab yang tidak saling berhubungan.", 
        "Pernyataan 1 dan 2 adalah akibat dari suatu penyebab yang sama."
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 0, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 10
// ==========================================
{ 
    text: "Vaksin merupakan zat yang digunakan untuk merangsang pembentukan kekebalan tubuh dan biasanya diberikan untuk mencegah penyakit tertentu. Setiap orang dapat memiliki reaksi yang berbeda terhadap vaksin. Sebagian orang tidak mendapatkan vaksin karena kondisi kesehatan tertentu.\nSimpulan berdasarkan informasi dalam teks tersebut adalah: setiap orang yang sehat pasti mendapatkan vaksin.\nManakah pernyataan berikut yang menggambarkan kualitas simpulan tersebut?", 
    options: [
        "Simpulan pasti benar.", 
        "Simpulan mungkin benar.", 
        "Simpulan pasti salah.", 
        "Simpulan mungkin salah.", 
        "Simpulan tidak dapat dinilai karena informasi tidak cukup."
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 1, 
    score: 70, 
    difficulty: "Hard" 
},

// ==========================================
// SOAL 11
// ==========================================
            { 
    text: "Suatu lomba bola volly dalam memepringati HUT RI ke-80 dilaksanakan selama seminggu. Penonton sangat antusias dengan lomba tersebut. Jumlah penonton dari hari ketiga sampai ke tujuh adalah 164, 160, 169, 165, 174. Jika jumlah penonton dalam lomba tersebut bersifat konstan sejak hari pertama, jumlah penonton turnamen di hari perdana lomba adalah …. orang.", 
    options: [
        "159", 
        "160", 
        "161", 
        "162", 
        "163"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 0, 
    score: 70, 
    difficulty: "Hard" 
},

// ==========================================
// SOAL 12
// ==========================================
{ 
    text: "Di sebuah stasiun luar angkasa tahun 2150, energi listrik, bahan bakar, dan pendingin disuplai dengan rasio 6 : 3 : 2 untuk menjaga sistem tetap berjalan. Jika kebutuhan energi listrik dalam satu hari adalah 120 kWh, pendingin yang dibutuhkan dalam sehari adalah …. liter.", 
    options: [
        "40", 
        "50", 
        "60", 
        "70", 
        "80"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 0, 
    score: 70, 
    difficulty: "Hard" 
},

// ==========================================
// SOAL 13
// ==========================================
{ 
    text: "Diagram garis di bawah menunjukkan data peserta ujian pada Lembaga Kursus tahun 2019–2023. Berdasarkan data tersebut, selisih terbesar peserta yang lulus dengan semua peserta ada di tahun…", 
    img: "13.png",
    options: [
        "2019", 
        "2020", 
        "2021", 
        "2022", 
        "2023"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 2, 
    score: 70, 
    difficulty: "Hard" 
},

// ==========================================
// SOAL 14
// ==========================================
{ 
    text: "Jumlah penjualan buku fiksi tahun lalu 15% lebih sedikit dibandingkan jumlah penjualan buku fiksi tahun ini. Jika jumlah penjualan buku fiksi tahun ini adalah 320 eksemplar. Berapa jumlah penjualan buku fiksi tahun lalu?", 
    options: [
        "262 eksemplar", 
        "268 eksemplar", 
        "272 eksemplar", 
        "278 eksemplar", 
        "280 eksemplar"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 2, 
    score: 70, 
    difficulty: "Hard" 
},

// ==========================================
// SOAL 15
// ==========================================
{ 
    text: "Keuntungan penjualan kue basah adalah ¼ dari keuntungan kue kering. Berikut data penjualan dari lima toko pada bulan ini.\nToko manakah yang memiliki keuntungan TERBESAR?", 
    img: "15.png",
    options: [
        "Toko P", 
        "Toko Q", 
        "Toko R", 
        "Toko S", 
        "Toko T"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 1, 
    score: 75, 
    difficulty: "Hard" 
},
            
        ]
    },

    ppu: {
    name: "Pengetahuan & Pemahaman Umum",
    duration: 15 * 60, // 15 Menit 
    questions: [
// ==========================================
// SOAL 16
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Perkembangan industri kopi di Indonesia ditandai dengan munculnya kedai kopi modern. (2) Kedai kopi ini menawarkan kopi berkualitas tinggi serta suasana nyaman dan desain interior yang menarik. (3) Kedai kopi modern menjadi tempat berkumpul, bekerja, dan bersosialisasi bagi kaum urban.\n(4) Saat ini industri kopi di Indonesia telah berkembang pesat. (5) Indonesia menjadi salah satu produsen kopi terbesar di dunia, bersama dengan Brasil, Vietnam, dan Kolombia. (6) Kopi Indonesia telah menjadi komoditas ekspor yang penting karena menyumbang devisa bagi negara. (7) Di balik kesuksesan industri kopi Indonesia, terdapat peran penting para petani kopi. (8) Perjalanan industri kopi di Indonesia adalah sebuah kisah panjang yang penuh lika-liku. (9) Ada jerih payah para petani kopi sekaligus sejarah panjang kopi di bumi pertiwi saat kita menikmati secangkir kopi.\n\nKelompok kata dalam bacaan tersebut yang memiliki pola makna sama dengan bengkel mobil adalah ….", 
    options: [
        "kedai kopi (kalimat 1)", 
        "desain interior (kalimat 2)", 
        "kaum urban (kalimat 3)", 
        "peran penting (kalimat 7)", 
        "sejarah panjang (kalimat 9)"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 0, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 17
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Perkembangan industri kopi di Indonesia ditandai dengan munculnya kedai kopi modern. (2) Kedai kopi ini menawarkan kopi berkualitas tinggi serta suasana nyaman dan desain interior yang menarik. (3) Kedai kopi modern menjadi tempat berkumpul, bekerja, dan bersosialisasi bagi kaum urban.\n(4) Saat ini industri kopi di Indonesia telah berkembang pesat. (5) Indonesia menjadi salah satu produsen kopi terbesar di dunia, bersama dengan Brasil, Vietnam, dan Kolombia. (6) Kopi Indonesia telah menjadi komoditas ekspor yang penting karena menyumbang devisa bagi negara. (7) Di balik kesuksesan industri kopi Indonesia, terdapat peran penting para petani kopi. (8) Perjalanan industri kopi di Indonesia adalah sebuah kisah panjang yang penuh lika-liku. (9) Ada jerih payah para petani kopi sekaligus sejarah panjang kopi di bumi pertiwi saat kita menikmati secangkir kopi.\n\nFungsi kata penghubung serta dalam kalimat (2) adalah ….", 
    options: [
        "menjelaskan hubungan sebab-akibat", 
        "menunjukkan alasan", 
        "memberikan informasi tambahan", 
        "memerinci pernyataan", 
        "menandai hubungan logis"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 2, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 18
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Perkembangan industri kopi di Indonesia ditandai dengan munculnya kedai kopi modern. (2) Kedai kopi ini menawarkan kopi berkualitas tinggi serta suasana nyaman dan desain interior yang menarik. (3) Kedai kopi modern menjadi tempat berkumpul, bekerja, dan bersosialisasi bagi kaum urban.\n(4) Saat ini industri kopi di Indonesia telah berkembang pesat. (5) Indonesia menjadi salah satu produsen kopi terbesar di dunia, bersama dengan Brasil, Vietnam, dan Kolombia. (6) Kopi Indonesia telah menjadi komoditas ekspor yang penting karena menyumbang devisa bagi negara. (7) Di balik kesuksesan industri kopi Indonesia, terdapat peran penting para petani kopi. (8) Perjalanan industri kopi di Indonesia adalah sebuah kisah panjang yang penuh lika-liku. (9) Ada jerih payah para petani kopi sekaligus sejarah panjang kopi di bumi pertiwi saat kita menikmati secangkir kopi.\n\nHubungan kata kopi dan kata petani sama dengan hubungan kata emas dan kata ….", 
    options: [
        "perajin", 
        "pedagang", 
        "pengoleksi", 
        "penambang", 
        "pembeli"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 3, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 19
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Perkembangan industri kopi di Indonesia ditandai dengan munculnya kedai kopi modern. (2) Kedai kopi ini menawarkan kopi berkualitas tinggi serta suasana nyaman dan desain interior yang menarik. (3) Kedai kopi modern menjadi tempat berkumpul, bekerja, dan bersosialisasi bagi kaum urban.\n(4) Saat ini industri kopi di Indonesia telah berkembang pesat. (5) Indonesia menjadi salah satu produsen kopi terbesar di dunia, bersama dengan Brasil, Vietnam, dan Kolombia. (6) Kopi Indonesia telah menjadi komoditas ekspor yang penting karena menyumbang devisa bagi negara. (7) Di balik kesuksesan industri kopi Indonesia, terdapat peran penting para petani kopi. (8) Perjalanan industri kopi di Indonesia adalah sebuah kisah panjang yang penuh lika-liku. (9) Ada jerih payah para petani kopi sekaligus sejarah panjang kopi di bumi pertiwi saat kita menikmati secangkir kopi.\n\nKelompok kata menyumbang devisa dalam kalimat (6) memiliki makna paling dekat dengan kelompok kata ….", 
    options: [
        "memberikan keuntungan", 
        "mendatangkan kebaikan", 
        "membagikan laba", 
        "mendukung pembangunan", 
        "menyediakan kontribusi"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 0, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 20
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Mengelola kadar kolesterol dan gula darah penting untuk menjaga kesehatan tubuh. (2) Kadar kolesterol dalam darah wajib dikelola dengan baik agar tidak memicu munculnya berbagai penyakit. (3) Kadar kolesterol yang tinggi dapat meningkatkan risiko penyakit jantung koroner, strok, dan penyakit pembuluh darah. (4) Selain itu, kondisi tersebut juga dapat menyebabkan hipertensi.\n(5) Kadar kolesterol yang tinggi disebabkan oleh berbagai faktor, misalnya gaya hidup yang tidak sehat dan pola makan yang tidak baik. (6) Dalam hal gaya hidup, merokok dan kurang berolahraga dapat memicu peningkatan kadar kolesterol dalam darah. (7) Sementara itu, dalam hal pola makan, mengkonsumsi makanan yang tinggi kolesterol dan lemak jenuh dapat menyebabkan kadar kolesterol naik.\n(8) Ada berbagai cara yang dapat dilakukan untuk menurunkan kadar kolesterol. (9) Pertama, terapkanlah gaya hidup sehat secara konsisten. (10) Kedua, batasilah asupan makanan yang mengandung lemak jenuh, seperti daging berlemak, daging asap, sosis, es krim, makanan bersantan, biskuit, dan kue kering. (11) Selain itu, konsumsilah suplemen yang mengandung kitosan untuk menurunkan dan mencegah kadar kolesterol tinggi.\n\nKalimat yang tidak diperlukan dalam teks tersebut adalah ….", 
    options: [
        "kalimat (1)", 
        "kalimat (3)", 
        "kalimat (5)", 
        "kalimat (6)", 
        "kalimat (8)"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 0, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 21
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Mengelola kadar kolesterol dan gula darah penting untuk menjaga kesehatan tubuh. (2) Kadar kolesterol dalam darah wajib dikelola dengan baik agar tidak memicu munculnya berbagai penyakit. (3) Kadar kolesterol yang tinggi dapat meningkatkan risiko penyakit jantung koroner, strok, dan penyakit pembuluh darah. (4) Selain itu, kondisi tersebut juga dapat menyebabkan hipertensi.\n(5) Kadar kolesterol yang tinggi disebabkan oleh berbagai faktor, misalnya gaya hidup yang tidak sehat dan pola makan yang tidak baik. (6) Dalam hal gaya hidup, merokok dan kurang berolahraga dapat memicu peningkatan kadar kolesterol dalam darah. (7) Sementara itu, dalam hal pola makan, mengkonsumsi makanan yang tinggi kolesterol dan lemak jenuh dapat menyebabkan kadar kolesterol naik.\n(8) Ada berbagai cara yang dapat dilakukan untuk menurunkan kadar kolesterol. (9) Pertama, terapkanlah gaya hidup sehat secara konsisten. (10) Kedua, batasilah asupan makanan yang mengandung lemak jenuh, seperti daging berlemak, daging asap, sosis, es krim, makanan bersantan, biskuit, dan kue kering. (11) Selain itu, konsumsilah suplemen yang mengandung kitosan untuk menurunkan dan mencegah kadar kolesterol tinggi.\n\nHubungan antarparagraf dalam bacaan tersebut adalah ….", 
    options: [
        "paragraf pertama adalah penyebab paragraf kedua", 
        "paragraf kedua adalah pertentangan paragraf pertama", 
        "paragraf kedua adalah akibat dari paragraf ketiga", 
        "paragraf ketiga adalah dampak dari paragraf pertama", 
        "paragraf ketiga adalah solusi untuk paragraf pertama"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 4, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 22
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Mengelola kadar kolesterol dan gula darah penting untuk menjaga kesehatan tubuh. (2) Kadar kolesterol dalam darah wajib dikelola dengan baik agar tidak memicu munculnya berbagai penyakit. (3) Kadar kolesterol yang tinggi dapat meningkatkan risiko penyakit jantung koroner, strok, dan penyakit pembuluh darah. (4) Selain itu, kondisi tersebut juga dapat menyebabkan hipertensi.\n(5) Kadar kolesterol yang tinggi disebabkan oleh berbagai faktor, misalnya gaya hidup yang tidak sehat dan pola makan yang tidak baik. (6) Dalam hal gaya hidup, merokok dan kurang berolahraga dapat memicu peningkatan kadar kolesterol dalam darah. (7) Sementara itu, dalam hal pola makan, mengkonsumsi makanan yang tinggi kolesterol dan lemak jenuh dapat menyebabkan kadar kolesterol naik.\n(8) Ada berbagai cara yang dapat dilakukan untuk menurunkan kadar kolesterol. (9) Pertama, terapkanlah gaya hidup sehat secara konsisten. (10) Kedua, batasilah asupan makanan yang mengandung lemak jenuh, seperti daging berlemak, daging asap, sosis, es krim, makanan bersantan, biskuit, dan kue kering. (11) Selain itu, konsumsilah suplemen yang mengandung kitosan untuk menurunkan dan mencegah kadar kolesterol tinggi.\n\nApa yang dimaksud dengan frasa kondisi tersebut dalam kalimat (4)?", 
    options: [
        "berbagai penyakit", 
        "strok", 
        "hipertensi", 
        "penyakit jantung", 
        "kadar kolesterol yang tinggi"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 4, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 23
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Mengelola kadar kolesterol dan gula darah penting untuk menjaga kesehatan tubuh. (2) Kadar kolesterol dalam darah wajib dikelola dengan baik agar tidak memicu munculnya berbagai penyakit. (3) Kadar kolesterol yang tinggi dapat meningkatkan risiko penyakit jantung koroner, strok, dan penyakit pembuluh darah. (4) Selain itu, kondisi tersebut juga dapat menyebabkan hipertensi.\n(5) Kadar kolesterol yang tinggi disebabkan oleh berbagai faktor, misalnya gaya hidup yang tidak sehat dan pola makan yang tidak baik. (6) Dalam hal gaya hidup, merokok dan kurang berolahraga dapat memicu peningkatan kadar kolesterol dalam darah. (7) Sementara itu, dalam hal pola makan, mengkonsumsi makanan yang tinggi kolesterol dan lemak jenuh dapat menyebabkan kadar kolesterol naik.\n(8) Ada berbagai cara yang dapat dilakukan untuk menurunkan kadar kolesterol. (9) Pertama, terapkanlah gaya hidup sehat secara konsisten. (10) Kedua, batasilah asupan makanan yang mengandung lemak jenuh, seperti daging berlemak, daging asap, sosis, es krim, makanan bersantan, biskuit, dan kue kering. (11) Selain itu, konsumsilah suplemen yang mengandung kitosan untuk menurunkan dan mencegah kadar kolesterol tinggi.\n\nPembentukan kata yang salah terdapat dalam ….", 
    options: [
        "kalimat (3)", 
        "kalimat (6)", 
        "kalimat (7)", 
        "kalimat (9)", 
        "kalimat (11)"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 2, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 24
// ==========================================
{ 
    text: "Bacalah teks berikut.\n“Krisis Air Bersih dan Tantangan Kota Metropolitan”\n(1) Krisis air bersih menjadi persoalan serius yang dihadapi kota-kota besar di Indonesia, seperti Jakarta, Surabaya, dan Medan, terutama pada musim kemarau panjang. (2) Jumlah penduduk yang terus meningkat, pencemaran air tanah, serta eksploitasi air bawah tanah yang tidak terkendali memperparah kondisi tersebut. (3) Di sejumlah kawasan, warga terpaksa membeli air dari truk tangki swasta dengan harga mahal meskipun kualitasnya belum tentu layak konsumsi.\n(4) Pemerintah kota pun mulai menggencarkan program edukasi penghematan air dan pembangunan instalasi penjernihan air permukaan sebagai solusi jangka menengah. (5) (...) pasokan air bersih masih belum merata, dan sebagian besar masyarakat berpenghasilan rendah tetap kesulitan mendapatkan akses air layak. (6) Oleh karena itu, upaya bersama antara pemerintah, swasta, dan masyarakat menjadi kunci utama dalam mewujudkan ketahanan air di kota-kota besar Indonesia.\n\nIstilah khusus yang tepat untuk mengisi bagian rumpang pada kalimat (3) adalah ….", 
    options: [
        "ekskavasi", 
        "distribusi", 
        "komersialisasi", 
        "evaporasi", 
        "konservasi"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 2, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 25
// ==========================================
{ 
    text: "Bacalah teks berikut.\n“Krisis Air Bersih dan Tantangan Kota Metropolitan”\n(1) Krisis air bersih menjadi persoalan serius yang dihadapi kota-kota besar di Indonesia, seperti Jakarta, Surabaya, dan Medan, terutama pada musim kemarau panjang. (2) Jumlah penduduk yang terus meningkat, pencemaran air tanah, serta eksploitasi air bawah tanah yang tidak terkendali memperparah kondisi tersebut. (3) Di sejumlah kawasan, warga terpaksa membeli air dari truk tangki swasta dengan harga mahal meskipun kualitasnya belum tentu layak konsumsi.\n(4) Pemerintah kota pun mulai menggencarkan program edukasi penghematan air dan pembangunan instalasi penjernihan air permukaan sebagai solusi jangka menengah. (5) (...) pasokan air bersih masih belum merata, dan sebagian besar masyarakat berpenghasilan rendah tetap kesulitan mendapatkan akses air layak. (6) Oleh karena itu, upaya bersama antara pemerintah, swasta, dan masyarakat menjadi kunci utama dalam mewujudkan ketahanan air di kota-kota besar Indonesia.\n\nKonjungsi yang paling tepat untuk mengisi bagian rumpang pada kalimat (5) adalah ….", 
    options: [
        "Akibatnya", 
        "Sebaliknya", 
        "Padahal", 
        "Karena itu", 
        "Meskipun begitu"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 4, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 26
// ==========================================
{ 
    text: "Bacalah teks berikut.\n“Krisis Air Bersih dan Tantangan Kota Metropolitan”\n(1) Krisis air bersih menjadi persoalan serius yang dihadapi kota-kota besar di Indonesia, seperti Jakarta, Surabaya, dan Medan, terutama pada musim kemarau panjang. (2) Jumlah penduduk yang terus meningkat, pencemaran air tanah, serta eksploitasi air bawah tanah yang tidak terkendali memperparah kondisi tersebut. (3) Di sejumlah kawasan, warga terpaksa membeli air dari truk tangki swasta dengan harga mahal meskipun kualitasnya belum tentu layak konsumsi.\n(4) Pemerintah kota pun mulai menggencarkan program edukasi penghematan air dan pembangunan instalasi penjernihan air permukaan sebagai solusi jangka menengah. (5) (...) pasokan air bersih masih belum merata, dan sebagian besar masyarakat berpenghasilan rendah tetap kesulitan mendapatkan akses air layak. (6) Oleh karena itu, upaya bersama antara pemerintah, swasta, dan masyarakat menjadi kunci utama dalam mewujudkan ketahanan air di kota-kota besar Indonesia.\n\nKalimat (2) akan memiliki kesejajaran jika disusun sebagai ….", 
    options: [
        "Jumlah penduduk meningkat, pencemaran air tanah terjadi, dan eksploitasi air bawah tanah.", 
        "Peningkatan jumlah penduduk, pencemaran air tanah, dan eksploitasi air bawah tanah semakin memburuk.", 
        "Bertambahnya jumlah penduduk, tercemarnya air tanah, dan eksploitasi air bawah tanah yang tidak terkendali memperparah kondisi tersebut.", 
        "Menambah jumlah penduduk, mencemari air tanah, serta eksploitasi air bawah tanah.", 
        "Meningkatnya penduduk, pencemaran air tanah, dan air bawah tanah dieksploitasi."
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 1, 
    score: 50, 
    difficulty: "Medium" 
},
        // ==========================================
// SOAL 27
// ==========================================
{ 
    text: "Bacalah teks berikut.\n¹Suku Poombawo merupakan salah satu etnik yang mendiami bagian barat pulau Yapen diwilayah adat Saireri. ²Untuk menopang eksistensi hidupnya, interaksi simbolik dengan alam mereka bangun. ³Salah satu bentuk kegiatan ekowisata adalah pengamatan burung Cendrawasih di hutan sekitar kampung mereka. ⁴Berdasarkan survey, wilayah suku Poombawo yang mencakup Distrik Poom, secara ekologis, menjadi habitat alami burung Cendrawasih. ⁵Keberadaan burung Cendrawasih mendorong aktivitas pemanfaatanya melalui perburuan sekitar tahun 1995 sampai dengan 2000-an. ⁶Tahun 2000-an kegiatan perburuan tersebut berhenti. ⁷Selanjutnya, munculah sebuah kesadaran kembali pada beberapa marga pemilik hak atas tanah suku. ⁸Marga pemilik hak atas tanah suku ini diantaranya adalah Paririe dan Heipon. ⁹Marga suku ini mulai menjaga dan dilindungi hutan dan burung Cendrawasih. ¹⁰Kesadaran ini diduga terjadi sebagai wujud nilai dan kepercayaan pada suku Poombawo yang telah hilang beberapa generasi.\n\nApabila gagasan pada bacaan tersebut dipisahkan menjadi dua paragraf yang padu dan utuh, pengelompokan kalimatnya adalah ….", 
    options: [
        "(1-2-3) dan (4-5-6-7-8-9-10)", 
        "(1-2-3-4) dan (5-6-7-8-9-10)", 
        "(1-2-3-4-5) dan (6-7-8-9-10)", 
        "(1-2-3-4-5-6) dan (7-8-9-10)", 
        "(1-2-3-4-5-6-7) dan (8-9-10)"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 1, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 28
// ==========================================
{ 
    text: "Bacalah teks berikut.\n¹Suku Poombawo merupakan salah satu etnik yang mendiami bagian barat pulau Yapen diwilayah adat Saireri. ²Untuk menopang eksistensi hidupnya, interaksi simbolik dengan alam mereka bangun. ³Salah satu bentuk kegiatan ekowisata adalah pengamatan burung Cendrawasih di hutan sekitar kampung mereka. ⁴Berdasarkan survey, wilayah suku Poombawo yang mencakup Distrik Poom, secara ekologis, menjadi habitat alami burung Cendrawasih. ⁵Keberadaan burung Cendrawasih mendorong aktivitas pemanfaatanya melalui perburuan sekitar tahun 1995 sampai dengan 2000-an. ⁶Tahun 2000-an kegiatan perburuan tersebut berhenti. ⁷Selanjutnya, munculah sebuah kesadaran kembali pada beberapa marga pemilik hak atas tanah suku. ⁸Marga pemilik hak atas tanah suku ini diantaranya adalah Paririe dan Heipon. ⁹Marga suku ini mulai menjaga dan dilindungi hutan dan burung Cendrawasih. ¹⁰Kesadaran ini diduga terjadi sebagai wujud nilai dan kepercayaan pada suku Poombawo yang telah hilang beberapa generasi.\n\nBentuk ke-an pada kata kesadaran dalam kalimat (7) mempunyai kesamaan makna dengan bentuk ke-an pada ….", 
    options: [
        "Dia tidak berhasil menonton klub kesayanganya bertanding karena ketiduran.", 
        "Pejabat itu mudah sekali ditemu di kediamannya.", 
        "Kepergian mahasiswa itu ke Amerika adalah untuk melanjutkan studi.", 
        "Dengan banyak aktivitas, dia bisa mengusir kesepian yang pernah dialaminya.", 
        "Mereka membeli banyak pakaian karena kebanyakan pakaian yang lama kekecilan."
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 3, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 29
// ==========================================
{ 
    text: "Bacalah teks berikut.\n¹Suku Poombawo merupakan salah satu etnik yang mendiami bagian barat pulau Yapen diwilayah adat Saireri. ²Untuk menopang eksistensi hidupnya, interaksi simbolik dengan alam mereka bangun. ³Salah satu bentuk kegiatan ekowisata adalah pengamatan burung Cendrawasih di hutan sekitar kampung mereka. ⁴Berdasarkan survey, wilayah suku Poombawo yang mencakup Distrik Poom, secara ekologis, menjadi habitat alami burung Cendrawasih. ⁵Keberadaan burung Cendrawasih mendorong aktivitas pemanfaatanya melalui perburuan sekitar tahun 1995 sampai dengan 2000-an. ⁶Tahun 2000-an kegiatan perburuan tersebut berhenti. ⁷Selanjutnya, munculah sebuah kesadaran kembali pada beberapa marga pemilik hak atas tanah suku. ⁸Marga pemilik hak atas tanah suku ini diantaranya adalah Paririe dan Heipon. ⁹Marga suku ini mulai menjaga dan dilindungi hutan dan burung Cendrawasih. ¹⁰Kesadaran ini diduga terjadi sebagai wujud nilai dan kepercayaan pada suku Poombawo yang telah hilang beberapa generasi.\n\nUngkapan interaksi simbolik dengan alam mereka bangun pada kalimat (2) dapat disempurnakan menjadi ….", 
    options: [
        "interaksi dengan alam mereka bangun secara simbolik", 
        "alam mereka bangun dengan interaksi yang simbolik", 
        "interaksi mereka dengan alam dibangun secara simbolik", 
        "mereka membangun interaksi simbolik dengan alam", 
        "secara simbolik interaksi dengan alam dibangun mereka"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 3, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 30
// ==========================================
{ 
    text: "Bacalah teks berikut.\n¹Suku Poombawo merupakan salah satu etnik yang mendiami bagian barat pulau Yapen diwilayah adat Saireri. ²Untuk menopang eksistensi hidupnya, interaksi simbolik dengan alam mereka bangun. ³Salah satu bentuk kegiatan ekowisata adalah pengamatan burung Cendrawasih di hutan sekitar kampung mereka. ⁴Berdasarkan survey, wilayah suku Poombawo yang mencakup Distrik Poom, secara ekologis, menjadi habitat alami burung Cendrawasih. ⁵Keberadaan burung Cendrawasih mendorong aktivitas pemanfaatanya melalui perburuan sekitar tahun 1995 sampai dengan 2000-an. ⁶Tahun 2000-an kegiatan perburuan tersebut berhenti. ⁷Selanjutnya, munculah sebuah kesadaran kembali pada beberapa marga pemilik hak atas tanah suku. ⁸Marga pemilik hak atas tanah suku ini diantaranya adalah Paririe dan Heipon. ⁹Marga suku ini mulai menjaga dan dilindungi hutan dan burung Cendrawasih. ¹⁰Kesadaran ini diduga terjadi sebagai wujud nilai dan kepercayaan pada suku Poombawo yang telah hilang beberapa generasi.\n\nKelompok kata menjaga dan dilindunginya hutan dan burung cendrawasih pada kalimat (9) dapat diperbaiki menjadi ….", 
    options: [
        "penjagaan dan dilindunginya hutan dan burung cendrawasih", 
        "menjaga dan dilindunginya hutan dan burung cendrawasih", 
        "penjagaan dan melindungi hutan dan burung cendrawasih", 
        "menjaga dan melindungi hutan dan burung cendrawasih", 
        "terjaganya dan perlindungan hutan dan burung cendrawasih"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 3, 
    score: 35, 
    difficulty: "Easy" 
        }
],
},
        
    pbm: {
    name: "Pemahaman Bacaan & Menulis",
    duration: 20 * 60, // 20 Menit 
    questions: [
    // ==========================================
// SOAL 31
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Gerhana Matahari Hibrida adalah fenomena yang unik, karena bisa terlihat sebagai Gerhana Matahari Total maupun sebagai Gerhana Matahari Cincin tergantung dari lokasi pengamat. (2) Jarak antara Bumi dan Bulan yang berubah-ubah saat bayangan Bulan sampai ke permukaan Bumi membuat ada wilayah yang mengalami Gerhana Matahari Total dan wilayah lainnya mengalami Gerhana Matahari Cincin. (3) Sejak 2000 SM hingga 3000 M, terdapat 569 kali Gerhana Matahari Hibrida.\n(4) Lalu, seberapa sering Gerhana Matahari Hibrida melintasi Indonesia? (5) Gerhana jenis ini terakhir kali melintas Indonesia lima kali dalam satu abad dalam periode 1408–1507, yaitu pada 26 April 1408, 8 Juli 1423, 23 Januari 1441, 25 Februari 1495, dan 10 Juli 1507. (6) Di abad ke-21, Gerhana Matahari Hibrida akan melintasi Indonesia sebanyak dua kali, yaitu 20 April 2023 dan 25 November 2049. (7) Gerhana Matahari Hibrida berikutnya akan terjadi setelah 300 dan 478 tahun kemudian, yaitu 13 Oktober 2349 dan 17 Februari 2827.\n\nApa inti isi teks tersebut?", 
    options: [
        "Gerhana Matahari Hibrida adalah fenomena yang unik.", 
        "Jarak antara Bumi dan Bulan yang berubah-ubah.", 
        "Gerhana Matahari Hibrida sering terjadi dalam 5000 tahun terakhir.", 
        "Gerhana Matahari Hibrida sering melintasi Indonesia.", 
        "Tanggal-tanggal terjadinya Gerhana Matahari Hibrida berikutnya."
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 0, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 32
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Gerhana Matahari Hibrida adalah fenomena yang unik, karena bisa terlihat sebagai Gerhana Matahari Total maupun sebagai Gerhana Matahari Cincin tergantung dari lokasi pengamat. (2) Jarak antara Bumi dan Bulan yang berubah-ubah saat bayangan Bulan sampai ke permukaan Bumi membuat ada wilayah yang mengalami Gerhana Matahari Total dan wilayah lainnya mengalami Gerhana Matahari Cincin. (3) Sejak 2000 SM hingga 3000 M, terdapat 569 kali Gerhana Matahari Hibrida.\n(4) Lalu, seberapa sering Gerhana Matahari Hibrida melintasi Indonesia? (5) Gerhana jenis ini terakhir kali melintas Indonesia lima kali dalam satu abad dalam periode 1408–1507, yaitu pada 26 April 1408, 8 Juli 1423, 23 Januari 1441, 25 Februari 1495, dan 10 Juli 1507. (6) Di abad ke-21, Gerhana Matahari Hibrida akan melintasi Indonesia sebanyak dua kali, yaitu 20 April 2023 dan 25 November 2049. (7) Gerhana Matahari Hibrida berikutnya akan terjadi setelah 300 dan 478 tahun kemudian, yaitu 13 Oktober 2349 dan 17 Februari 2827.\n\nKata yang paling tepat menggantikan kata sampai dalam kalimat (2) adalah ….", 
    options: [
        "datang", 
        "jatuh", 
        "berhenti", 
        "menjadi", 
        "turun"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 1, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 33
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Gerhana Matahari Hibrida adalah fenomena yang unik, karena bisa terlihat sebagai Gerhana Matahari Total maupun sebagai Gerhana Matahari Cincin tergantung dari lokasi pengamat. (2) Jarak antara Bumi dan Bulan yang berubah-ubah saat bayangan Bulan sampai ke permukaan Bumi membuat ada wilayah yang mengalami Gerhana Matahari Total dan wilayah lainnya mengalami Gerhana Matahari Cincin. (3) Sejak 2000 SM hingga 3000 M, terdapat 569 kali Gerhana Matahari Hibrida.\n(4) Lalu, seberapa sering Gerhana Matahari Hibrida melintasi Indonesia? (5) Gerhana jenis ini terakhir kali melintas Indonesia lima kali dalam satu abad dalam periode 1408–1507, yaitu pada 26 April 1408, 8 Juli 1423, 23 Januari 1441, 25 Februari 1495, dan 10 Juli 1507. (6) Di abad ke-21, Gerhana Matahari Hibrida akan melintasi Indonesia sebanyak dua kali, yaitu 20 April 2023 dan 25 November 2049. (7) Gerhana Matahari Hibrida berikutnya akan terjadi setelah 300 dan 478 tahun kemudian, yaitu 13 Oktober 2349 dan 17 Februari 2827.\n\nKalimat berikut perlu ditambahkan dalam bacaan tersebut.\n“Sepanjang abad ke-21 ini, Gerhana Matahari Hibrida akan terjadi tujuh kali saja.”\n\nKalimat tersebut paling tepat ditempatkan setelah kalimat ….", 
    options: [
        "(2)", 
        "(3)", 
        "(4)", 
        "(5)", 
        "(6)"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 1, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 34
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Gerhana Matahari Hibrida adalah fenomena yang unik, karena bisa terlihat sebagai Gerhana Matahari Total maupun sebagai Gerhana Matahari Cincin tergantung dari lokasi pengamat. (2) Jarak antara Bumi dan Bulan yang berubah-ubah saat bayangan Bulan sampai ke permukaan Bumi membuat ada wilayah yang mengalami Gerhana Matahari Total dan wilayah lainnya mengalami Gerhana Matahari Cincin. (3) Sejak 2000 SM hingga 3000 M, terdapat 569 kali Gerhana Matahari Hibrida.\n(4) Lalu, seberapa sering Gerhana Matahari Hibrida melintasi Indonesia? (5) Gerhana jenis ini terakhir kali melintas Indonesia lima kali dalam satu abad dalam periode 1408–1507, yaitu pada 26 April 1408, 8 Juli 1423, 23 Januari 1441, 25 Februari 1495, dan 10 Juli 1507. (6) Di abad ke-21, Gerhana Matahari Hibrida akan melintasi Indonesia sebanyak dua kali, yaitu 20 April 2023 dan 25 November 2049. (7) Gerhana Matahari Hibrida berikutnya akan terjadi setelah 300 dan 478 tahun kemudian, yaitu 13 Oktober 2349 dan 17 Februari 2827.\n\nPenggunaan tanda koma yang salah terdapat pada kalimat ….", 
    options: [
        "(1)", 
        "(3)", 
        "(4)", 
        "(5)", 
        "(7)"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 0, 
    score: 35, 
    difficulty: "Easy" 
},
    // ==========================================
// SOAL 35
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Diabetes sesungguhnya sudah menjadi epidemi global. (2) Di seluruh dunia, jumlah penderita diabetes diproyeksikan meningkat menjadi 643 juta pada 2030 dan 783 juta pada 2045. (3) Dari sisi pendanaan, tahun lalu saja, diabetes menyedot anggaran kesehatan US$ 966 miliar atau 9% total pengeluaran kesehatan untuk orang dewasa di seluruh dunia.\n(4) Ada dua jenis diabetes: diabetes melitus (DM) tipe 1 dan DM tipe 2. (5) DM tipe 1 terjadi karena rusaknya sel beta pankreas sehingga tidak bisa memproduksi hormon insulin yang bertanggung jawab mencerna kadar gula dalam darah. (6) DM tipe 2 lebih disebabkan oleh kenaikan kadar gula karena menurunnya sekresi insulin yang rendah oleh kelenjar pankreas. (7) DM tipe 1 umumnya tidak bisa dicegah. (8) (...), DM tipe 2 terjadi akibat perilaku dan gaya hidup yang tidak sehat. (9) Berbagai studi menyarankan kombinasi aktifitas fisik dan diet sehat dapat menunda atau mencegah timbulnya diabetes tipe 2.\n\nHubungan antara kalimat (4) dengan kalimat (5) adalah ….", 
    options: [
        "perurutan", 
        "pertentangan", 
        "konsekuensi", 
        "pemerian", 
        "pembenaran"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 3, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 36
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Diabetes sesungguhnya sudah menjadi epidemi global. (2) Di seluruh dunia, jumlah penderita diabetes diproyeksikan meningkat menjadi 643 juta pada 2030 dan 783 juta pada 2045. (3) Dari sisi pendanaan, tahun lalu saja, diabetes menyedot anggaran kesehatan US$ 966 miliar atau 9% total pengeluaran kesehatan untuk orang dewasa di seluruh dunia.\n(4) Ada dua jenis diabetes: diabetes melitus (DM) tipe 1 dan DM tipe 2. (5) DM tipe 1 terjadi karena rusaknya sel beta pankreas sehingga tidak bisa memproduksi hormon insulin yang bertanggung jawab mencerna kadar gula dalam darah. (6) DM tipe 2 lebih disebabkan oleh kenaikan kadar gula karena menurunnya sekresi insulin yang rendah oleh kelenjar pankreas. (7) DM tipe 1 umumnya tidak bisa dicegah. (8) (...), DM tipe 2 terjadi akibat perilaku dan gaya hidup yang tidak sehat. (9) Berbagai studi menyarankan kombinasi aktifitas fisik dan diet sehat dapat menunda atau mencegah timbulnya diabetes tipe 2.\n\nKata sambung yang paling tepat melengkapi kalimat (8) adalah ….", 
    options: [
        "sementara itu", 
        "sesungguhnya", 
        "oleh sebab itu", 
        "namun", 
        "selain itu"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 0, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 37
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Diabetes sesungguhnya sudah menjadi epidemi global. (2) Di seluruh dunia, jumlah penderita diabetes diproyeksikan meningkat menjadi 643 juta pada 2030 dan 783 juta pada 2045. (3) Dari sisi pendanaan, tahun lalu saja, diabetes menyedot anggaran kesehatan US$ 966 miliar atau 9% total pengeluaran kesehatan untuk orang dewasa di seluruh dunia.\n(4) Ada dua jenis diabetes: diabetes melitus (DM) tipe 1 dan DM tipe 2. (5) DM tipe 1 terjadi karena rusaknya sel beta pankreas sehingga tidak bisa memproduksi hormon insulin yang bertanggung jawab mencerna kadar gula dalam darah. (6) DM tipe 2 lebih disebabkan oleh kenaikan kadar gula karena menurunnya sekresi insulin yang rendah oleh kelenjar pankreas. (7) DM tipe 1 umumnya tidak bisa dicegah. (8) (...), DM tipe 2 terjadi akibat perilaku dan gaya hidup yang tidak sehat. (9) Berbagai studi menyarankan kombinasi aktifitas fisik dan diet sehat dapat menunda atau mencegah timbulnya diabetes tipe 2.\n\nPenulisan kata yang salah pada teks tersebut terdapat pada kalimat ….", 
    options: [
        "(1)", 
        "(3)", 
        "(5)", 
        "(6)", 
        "(9)"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 4, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 38
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Diabetes sesungguhnya sudah menjadi epidemi global. (2) Di seluruh dunia, jumlah penderita diabetes diproyeksikan meningkat menjadi 643 juta pada 2030 dan 783 juta pada 2045. (3) Dari sisi pendanaan, tahun lalu saja, diabetes menyedot anggaran kesehatan US$ 966 miliar atau 9% total pengeluaran kesehatan untuk orang dewasa di seluruh dunia.\n(4) Ada dua jenis diabetes: diabetes melitus (DM) tipe 1 dan DM tipe 2. (5) DM tipe 1 terjadi karena rusaknya sel beta pankreas sehingga tidak bisa memproduksi hormon insulin yang bertanggung jawab mencerna kadar gula dalam darah. (6) DM tipe 2 lebih disebabkan oleh kenaikan kadar gula karena menurunnya sekresi insulin yang rendah oleh kelenjar pankreas. (7) DM tipe 1 umumnya tidak bisa dicegah. (8) (...), DM tipe 2 terjadi akibat perilaku dan gaya hidup yang tidak sehat. (9) Berbagai studi menyarankan kombinasi aktifitas fisik dan diet sehat dapat menunda atau mencegah timbulnya diabetes tipe 2.\n\nPernyataan yang benar berdasarkan teks di atas adalah ….", 
    options: [
        "Penderita diabetes melitus di Indonesia akan mencapai 643 juta pada 2030.", 
        "Diabetes melitus disebabkan oleh kenaikan kadar gula darah.", 
        "Diabetes melitus tidak bisa dicegah dan seringnya terlambat diketahui.", 
        "Diabetes melitus terjadi karena perilaku dan gaya hidup yang tidak sehat.", 
        "Diabetes melitus bisa dicegah dengan perubahan gaya hidup."
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 4, 
    score: 50, 
    difficulty: "Medium" 
},
// ==========================================
// SOAL 39
// ==========================================
{ 
    text: "Langkah-langkah yang dapat diambil untuk meningkatkan keamanan data pribadi saat bekerja dari rumah:\n• Gunakan jaringan internet yang aman dan hindari membagikan akses WIFI kepada orang yang tidak dikenal.\n• Aktifkan fitur firewall pada komputer dan pastikan sistem operasi serta perangkat lunak selalu diperbarui.\n• Jangan membuka tautan atau lampiran mencurigakan pada email, terutama jika berasal dari pengirim yang tidak dikenal.\n• Hindari menyimpan data penting di perangkat yang digunakan bersama keluarga, terutama jika tidak memiliki pengaman.\n• Gunakan aplikasi penyimpanan cloud yang telah terenkripsi dan hanya bisa diakses dengan autentikasi ganda.\n\nBerdasarkan isi bacaan, data pribadi bisa rentan bocor saat bekerja dari rumah jika seseorang ….", 
    options: [
        "Menggunakan jaringan internet pribadi", 
        "Memperbarui sistem operasi secara rutin", 
        "Menyimpan data penting di perangkat bersama tanpa pengaman", 
        "Menggunakan aplikasi cloud yang terenkripsi", 
        "Mengaktifkan firewall pada perangkatnya"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 2, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 40
// ==========================================
{ 
    text: "Langkah-langkah yang dapat diambil untuk meningkatkan keamanan data pribadi saat bekerja dari rumah:\n• Gunakan jaringan internet yang aman dan hindari membagikan akses WIFI kepada orang yang tidak dikenal.\n• Aktifkan fitur firewall pada komputer dan pastikan sistem operasi serta perangkat lunak selalu diperbarui.\n• Jangan membuka tautan atau lampiran mencurigakan pada email, terutama jika berasal dari pengirim yang tidak dikenal.\n• Hindari menyimpan data penting di perangkat yang digunakan bersama keluarga, terutama jika tidak memiliki pengaman.\n• Gunakan aplikasi penyimpanan cloud yang telah terenkripsi dan hanya bisa diakses dengan autentikasi ganda.\n\nPernyataan “Gunakan aplikasi penyimpanan cloud yang telah terenkripsi dan hanya bisa diakses dengan autentikasi ganda.” memiliki maksud bahwa ….", 
    options: [
        "Cloud adalah satu-satunya cara menyimpan data yang aman.", 
        "Pengguna harus membuat dua akun berbeda untuk mengakses data.", 
        "Aplikasi penyimpanan cloud bisa dibuka siapa saja asalkan memiliki akses internet.", 
        "Penyimpanan data di cloud harus dilengkapi sistem keamanan berlapis.", 
        "Aplikasi cloud dapat melindungi data dari semua bentuk peretasan."
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 3, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 41
// ==========================================
{ 
    text: "Langkah-langkah yang dapat diambil untuk meningkatkan keamanan data pribadi saat bekerja dari rumah:\n• Gunakan jaringan internet yang aman dan hindari membagikan akses WIFI kepada orang yang tidak dikenal.\n• Aktifkan fitur firewall pada komputer dan pastikan sistem operasi serta perangkat lunak selalu diperbarui.\n• Jangan membuka tautan atau lampiran mencurigakan pada email, terutama jika berasal dari pengirim yang tidak dikenal.\n• Hindari menyimpan data penting di perangkat yang digunakan bersama keluarga, terutama jika tidak memiliki pengaman.\n• Gunakan aplikasi penyimpanan cloud yang telah terenkripsi dan hanya bisa diakses dengan autentikasi ganda.\n\nPenulisan kata WIFI pada bacaan bisa diperbaiki menjadi ….", 
    options: [
        "Wifi", 
        "wi-fi", 
        "‘Wi-Fi’", 
        "“Wi-Fi”", 
        "Wi-Fi"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 4, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 42
// ==========================================
{ 
    text: "Langkah-langkah yang dapat diambil untuk meningkatkan keamanan data pribadi saat bekerja dari rumah:\n• Gunakan jaringan internet yang aman dan hindari membagikan akses WIFI kepada orang yang tidak dikenal.\n• Aktifkan fitur firewall pada komputer dan pastikan sistem operasi serta perangkat lunak selalu diperbarui.\n• Jangan membuka tautan atau lampiran mencurigakan pada email, terutama jika berasal dari pengirim yang tidak dikenal.\n• Hindari menyimpan data penting di perangkat yang digunakan bersama keluarga, terutama jika tidak memiliki pengaman.\n• Gunakan aplikasi penyimpanan cloud yang telah terenkripsi dan hanya bisa diakses dengan autentikasi ganda.\n\nKata yang ejaannya tidak tepat pada bacaan tersebut adalah ….", 
    options: [
        "autentikasi", 
        "firewall", 
        "perangkat", 
        "terenkripsi", 
        "memperbaharui"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 4, 
    score: 35, 
    difficulty: "Easy" 
},
// ==========================================
// SOAL 43
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Tujuan pendidikan adalah mengembangkan dan mengoptimalkan daya anak didik agar siap menyongsong masa depan sesuai dengan zamannya. (2) Saat ini teknologi yang berkembang dengan pesat memicu pada perubahan yang cepat pula, bahkan tidak terduga. (3) Laporan Dell Technology menyebutkan bahwa 85 persen pekerjaan pada 2030 yang akan dimasuki Generasi Z dan Alpha belum ditemukan. (4) Sementara itu, konsep otomasi di era 4.0 juga akan mengubah struktur dan lapangan pekerjaan. (5) Padahal, institusi dari pendidikan formal saat ini dinilai belum optimal membekali siswa dengan keterampilan praktis yang menjadi modal siswa untuk mengembangkan diri secara mandiri atau masuk dunia kerja. (6) Paradigma pendidikan sudah bergeser mengikuti perkembangan zaman, tetapi sistem pendidikan belum....\n\nKata yang harus dihilangkan pada kalimat (5) adalah ….", 
    options: [
        "Dari", 
        "Dinilai", 
        "Dengan", 
        "Untuk", 
        "Secara"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 0, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 44
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Tujuan pendidikan adalah mengembangkan dan mengoptimalkan daya anak didik agar siap menyongsong masa depan sesuai dengan zamannya. (2) Saat ini teknologi yang berkembang dengan pesat memicu pada perubahan yang cepat pula, bahkan tidak terduga. (3) Laporan Dell Technology menyebutkan bahwa 85 persen pekerjaan pada 2030 yang akan dimasuki Generasi Z dan Alpha belum ditemukan. (4) Sementara itu, konsep otomasi di era 4.0 juga akan mengubah struktur dan lapangan pekerjaan. (5) Padahal, institusi dari pendidikan formal saat ini dinilai belum optimal membekali siswa dengan keterampilan praktis yang menjadi modal siswa untuk mengembangkan diri secara mandiri atau masuk dunia kerja. (6) Paradigma pendidikan sudah bergeser mengikuti perkembangan zaman, tetapi sistem pendidikan belum....\n\nKalimat (2) perlu disempurnakan dengan cara ….", 
    options: [
        "menambahkan kata pada sebelum saat", 
        "menghilangkan kata yang", 
        "mengganti kata dengan dengan secara", 
        "menghilangkan kata pada", 
        "menshortcut/menyingkat kata tidak menjadi tak"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 3, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 45
// ==========================================
{ 
    text: "Bacalah teks berikut.\n(1) Tujuan pendidikan adalah mengembangkan dan mengoptimalkan daya anak didik agar siap menyongsong masa depan sesuai dengan zamannya. (2) Saat ini teknologi yang berkembang dengan pesat memicu pada perubahan yang cepat pula, bahkan tidak terduga. (3) Laporan Dell Technology menyebutkan bahwa 85 persen pekerjaan pada 2030 yang akan dimasuki Generasi Z dan Alpha belum ditemukan. (4) Sementara itu, konsep otomasi di era 4.0 juga akan mengubah struktur dan lapangan pekerjaan. (5) Padahal, institusi dari pendidikan formal saat ini dinilai belum optimal membekali siswa dengan keterampilan praktis yang menjadi modal siswa untuk mengembangkan diri secara mandiri atau masuk dunia kerja. (6) Paradigma pendidikan sudah bergeser mengikuti perkembangan zaman, tetapi sistem pendidikan belum....\n\nAgar sesuai dengan konteks bacaan, pernyataan yang paling tepat untuk melengkapi kalimat (6) adalah ….", 
    options: [
        "memungkinkan mengubah kurikulum", 
        "cukup responsif terhadap tuntutan zaman", 
        "adaptif sesuai dengan zaman sekarang", 
        "siap menghadapi tuntutan era 4.0", 
        "memasukkan kurikulum pendidikan keterampilan"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 1, 
    score: 50, 
    difficulty: "Medium" 
}
],
},


pk: {
    name: "Pengetahuan Kuantitatif",
    duration: 20 * 60, // 20 Menit
    questions: [
        // ==========================================
// SOAL 46
// ==========================================
{ 
    text: "Jika $\\sqrt[3]{b^2} = 10 \\times \\frac{2}{5}$, nilai $b > 0$ bernilai ….", 
    options: [
        "16", 
        "8", 
        "4", 
        "2", 
        "1"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 1, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 47
// ==========================================
{ 
    text: "Titik $P(-1,5)$ terletak pada grafik fungsi $f(x) = ax^2 + x + 3$. Titik berikut yang TIDAK TERLETAK pada grafik fungsi tersebut adalah ….", 
    options: [
        "$K(1,7)$", 
        "$M(-2,13)$", 
        "$N(3,33)$", 
        "$Q(2,-17)$", 
        "$M(-3,27)$"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 3, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 48
// ==========================================
{ 
    text: "<img src=\"48.png\" style=\"max-width:100%; height:auto; margin-bottom: 10px;\" /><br>\nBanyaknya segitiga pada gambar berikut adalah ….", 
    options: [
        "10", 
        "11", 
        "12", 
        "13", 
        "14"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 0, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 49
// ==========================================
{ 
    text: "Sembilan bilangan $2, 3, 4, 2, 5, 8, 4, 9, 8$ diurutkan dari bilangan terkecil hingga terbesar. Jika $p$, $q$, dan $r$ menyatakan bilangan secara berurutan yaitu bilangan ke-3, bilangan ke-6, dan bilangan ke-7, maka nilai $p \\times r - (r + q)$ adalah ….", 
    options: [
        "24", 
        "22", 
        "13", 
        "11", 
        "9"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 3, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 50
// ==========================================
{ 
    text: "Untuk setiap bilangan bulat $p$ didefinisikan:\n$$[p] = \\begin{cases} \\frac{p^2}{4} - 2, & \\text{jika } p \\text{ genap lebih dari } 1 \\\\ 4 - \\frac{p^2}{2}, & \\text{jika } p \\text{ genap kurang dari } 1 \\\\ \\frac{1-p^2}{4}, & \\text{jika } p \\text{ ganjil} \\end{cases}$$\n\nNilai $[1 - [-4]]$ sama dengan ….", 
    options: [
        "-6", 
        "-2", 
        "0", 
        "2", 
        "6"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 0, 
    score: 50, 
    difficulty: "Medium" 
},
            
// ==========================================
// SOAL 51
// ==========================================
{ 
    text: "Bacalah keterangan berikut!\nGrafik fungsi $g(x) = x^2 - 20$ dan garis $ax - 2y + 30 = 0$ berpotongan di dua titik berbeda yaitu $P(a, b)$ dan $D(-5, r)$.\n\nNilai $a$ sama dengan ….", 
    options: [
        "-5", 
        "-4", 
        "4", 
        "5", 
        "7"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 2, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 52
// ==========================================
{ 
    text: "Bacalah keterangan berikut!\nGrafik fungsi $g(x) = x^2 - 20$ dan garis $ax - 2y + 30 = 0$ berpotongan di dua titik berbeda yaitu $P(a, b)$ dan $D(-5, r)$.\n\nGradien garis tersebut adalah ….", 
    options: [
        "-2", 
        "-1", 
        "0", 
        "1", 
        "2"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 4, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 53
// ==========================================
{ 
    text: "Bacalah keterangan berikut!\nGrafik fungsi $g(x) = x^2 - 20$ dan garis $ax - 2y + 30 = 0$ berpotongan di dua titik berbeda yaitu $P(a, b)$ dan $D(-5, r)$.\n\nPersamaan garis yang sejajar dengan garis tersebut dan melalui titik $(-1, 2)$ adalah ….", 
    options: [
        "$y = -2x + 4$", 
        "$y = -2x - 4$", 
        "$y = 2x + 4$", 
        "$y = 2x - 4$", 
        "$y = 2x + 2$"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 2, 
    score: 50, 
    difficulty: "Medium" 
},
            
// ==========================================
// SOAL 54
// ==========================================
{ 
    text: "<img src=\"54-57.png\" style=\"max-width:100%; height:auto; margin-bottom: 10px;\" /><br>\nSuatu prisma dengan volume 300 satuan volume memiliki alas berupa jajar genjang dengan koordinat titik-titik sudut disajikan pada gambar.\n\nKoordinat titik $S$ adalah ….", 
    options: [
        "$(7, 12)$", 
        "$(6, 12)$", 
        "$(4, 12)$", 
        "$(6, 7)$", 
        "$(5, 12)$"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 0, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 55
// ==========================================
{ 
    text: "<img src=\"54-57.png\" style=\"max-width:100%; height:auto; margin-bottom: 10px;\" /><br>\nSuatu prisma dengan volume 300 satuan volume memiliki alas berupa jajar genjang dengan koordinat titik-titik sudut disajikan pada gambar.\n\nPanjang diagonal terpendek adalah ….", 
    options: [
        "$4\\sqrt{10}$", 
        "$4\\sqrt{5}$", 
        "$2\\sqrt{10}$", 
        "$2\\sqrt{5}$", 
        "$3\\sqrt{10}$"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 2, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 56
// ==========================================
{ 
    text: "<img src=\"54-57.png\" style=\"max-width:100%; height:auto; margin-bottom: 10px;\" /><br>\nSuatu prisma dengan volume 300 satuan volume memiliki alas berupa jajar genjang dengan koordinat titik-titik sudut disajikan pada gambar.\n\nLuas jajar genjang tersebut adalah ….", 
    options: [
        "30 satuan luas", 
        "50 satuan luas", 
        "$30\\sqrt{2}$ satuan luas", 
        "$50\\sqrt{2}$ satuan luas", 
        "$30\\sqrt{6}$ satuan luas"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 0, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 57
// ==========================================
{ 
    text: "<img src=\"54-57.png\" style=\"max-width:100%; height:auto; margin-bottom: 10px;\" /><br>\nSuatu prisma dengan volume 300 satuan volume memiliki alas berupa jajar genjang dengan koordinat titik-titik sudut disajikan pada gambar.\n\nTinggi prisma tersebut adalah ….", 
    options: [
        "$\\frac{5}{2}\\sqrt{6}$", 
        "$3\\sqrt{2}$", 
        "$5\\sqrt{2}$", 
        "6", 
        "10"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 4, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 58
// ==========================================
{ 
    text: "Di antara pilihan berikut yang merupakan faktor persekutuan dari $(17^2 + 85)$ dan $(18^2 - 54)$ adalah ….\n(1) 42\n(2) 34\n(3) 12\n(4) 2", 
    options: [
        "(1), (2), dan (3) saja yang benar.", 
        "(1) dan (3) saja yang benar.", 
        "(2) dan (4) saja yang benar.", 
        "hanya (4) yang benar.", 
        "semua pilihan benar"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 2, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 59
// ==========================================
{ 
    text: "Fungsi $f$ memenuhi $3x - 2 < f(x) < 3^x$ untuk $x > 1$.\n\nDi antara persamaan fungsi berikut yang memenuhi interval untuk nilai $f(x)$ di $x = 3$ adalah ….\n(1) $x + 5$\n(2) $x^2 + 12x + 2$\n(3) $-x^2 + 4x + 5$\n(4) $x + 1$", 
    options: [
        "(1), (2), dan (3) saja yang benar.", 
        "(1) dan (3) saja yang benar.", 
        "(2) dan (4) saja yang benar.", 
        "hanya (4) yang benar.", 
        "semua pilihan benar"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 1, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 60
// ==========================================
{ 
    text: "Jika $0^\\circ < \\theta < 90^\\circ$ dan $\\cos\\theta = \\frac{3}{8}$, di antara pilihan berikut yang benar adalah ….\n(1) $\\frac{1}{\\sin\\theta} = \\frac{8}{\\sqrt{55}}$\n(2) $\\tan\\theta = \\frac{\\sqrt{55}}{3}$\n(3) $\\sin\\theta > \\cos\\theta$\n(4) $\\cos(90^\\circ - \\theta) = \\frac{\\sqrt{55}}{8}$", 
    options: [
        "(1), (2), dan (3) saja yang benar.", 
        "(1) dan (3) saja yang benar.", 
        "(1) dan (4) saja yang benar.", 
        "hanya (4) yang benar.", 
        "semua pilihan benar"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 4, 
    score: 50, 
    difficulty: "Medium" 
}
    ],
},

"bi": {
    name: "Literasi Bahasa Indonesia",
    duration: 30 * 60,
    questions: [
        // ==========================================
// SOAL 61
// ==========================================
{
    text: "Menurut data Badan Pangan Nasional beberapa tahun terakhir, produksi beras nasional mengalami penurunan sebesar $4{,}2\%$ dibandingkan tahun sebelumnya, yakni dari $31{,}36$ juta ton pada 2023 menjadi $30{,}04$ juta ton pada 2024. Penurunan ini dikaitkan erat dengan fenomena El Niño yang memperpanjang musim kemarau di sejumlah daerah sentra produksi, seperti Jawa Tengah, Sulawesi Selatan, dan Sumatera Barat. Selain beras, produksi jagung juga turun sebesar $3{,}1\%$, yakni dari $19{,}4$ juta ton pada 2023 menjadi $18{,}8$ juta ton pada 2024. Hal itu berdampak pada harga pakan ternak dan inflasi sektor pangan yang mencapai $6{,}7\%$ pada kuartal keempat 2024.\n\nPenurunan produksi ini memunculkan kekhawatiran terhadap ketahanan pangan nasional. Ketahanan pangan tidak hanya bergantung pada kuantitas produksi, tetapi juga pada distribusi dan akses masyarakat terhadap bahan pangan. Dalam laporan Bank Dunia, disebutkan bahwa $19{,}4$ juta penduduk Indonesia masih mengalami kerawanan pangan kronis, terutama di wilayah timur Indonesia. Faktor geografis, infrastruktur terbatas, dan fluktuasi harga menjadi penghalang utama pemerataan pangan, meskipun cadangan pangan strategis pemerintah relatif stabil.\n\nSebagai respons, pemerintah meluncurkan program diversifikasi pangan berbasis lokal, seperti pengembangan sorgum, sagu, dan umbi-umbian di kawasan rawan pangan. Namun, efektivitas program ini dipertanyakan karena kontribusi pangan lokal non-beras terhadap konsumsi nasional masih di bawah $10\%$. Tanpa sinergi antara inovasi teknologi pertanian, insentif bagi petani lokal, dan reformasi distribusi logistik, kebijakan diversifikasi ini dikhawatirkan hanya menjadi solusi jangka pendek yang tidak menyentuh akar persoalan ketahanan pangan struktural.\n\n61. Apa inferensi yang dapat ditarik mengenai hubungan antara fenomena El Niño dan krisis ketahanan pangan nasional?",
    options: [
        "El Niño menguntungkan produksi pangan lokal non-beras melalui diversifikasi pangan berbasis lokal.",
        "El Niño tidak berpengaruh terhadap distribusi pangan nasional, tetapi menyebabkan krisis pangan dunia.",
        "El Niño secara langsung memperparah defisit pangan melalui penurunan produksi komoditas pangan utama.",
        "El Niño menyebabkan kerawanan pangan hanya di daerah urban yang belum memanfaatkan teknologi pertanian.",
        "El Niño mempercepat adaptasi masyarakat terhadap pangan lokal dengan sinergi yang baik pemerintah dan masyarakat melalui diversifikasi."
    ],
    answer: null,
    doubt: false,
    correctAnswer: 2,
    score: 50,
    difficulty: "Medium"
},

// ==========================================
// SOAL 62
// ==========================================
{
    text: "Menurut data Badan Pangan Nasional beberapa tahun terakhir, produksi beras nasional mengalami penurunan sebesar $4{,}2\%$ dibandingkan tahun sebelumnya, yakni dari $31{,}36$ juta ton pada 2023 menjadi $30{,}04$ juta ton pada 2024. Penurunan ini dikaitkan erat dengan fenomena El Niño yang memperpanjang musim kemarau di sejumlah daerah sentra produksi, seperti Jawa Tengah, Sulawesi Selatan, dan Sumatera Barat. Selain beras, produksi jagung juga turun sebesar $3{,}1\%$, yakni dari $19{,}4$ juta ton pada 2023 menjadi $18{,}8$ juta ton pada 2024. Hal itu berdampak pada harga pakan ternak dan inflasi sektor pangan yang mencapai $6{,}7\%$ pada kuartal keempat 2024.\n\nPenurunan produksi ini memunculkan kekhawatiran terhadap ketahanan pangan nasional. Ketahanan pangan tidak hanya bergantung pada kuantitas produksi, tetapi juga pada distribusi dan akses masyarakat terhadap bahan pangan. Dalam laporan Bank Dunia, disebutkan bahwa $19{,}4$ juta penduduk Indonesia masih mengalami kerawanan pangan kronis, terutama di wilayah timur Indonesia. Faktor geografis, infrastruktur terbatas, dan fluktuasi harga menjadi penghalang utama pemerataan pangan, meskipun cadangan pangan strategis pemerintah relatif stabil.\n\nSebagai respons, pemerintah meluncurkan program diversifikasi pangan berbasis lokal, seperti pengembangan sorgum, sagu, dan umbi-umbian di kawasan rawan pangan. Namun, efektivitas program ini dipertanyakan karena kontribusi pangan lokal non-beras terhadap konsumsi nasional masih di bawah $10\%$. Tanpa sinergi antara inovasi teknologi pertanian, insentif bagi petani lokal, dan reformasi distribusi logistik, kebijakan diversifikasi ini dikhawatirkan hanya menjadi solusi jangka pendek yang tidak menyentuh akar persoalan ketahanan pangan struktural.\n\n62. Jika tren penurunan produksi beras dan jagung berlanjut hingga 2026 dengan laju yang sama, berapa estimasi produksi beras dan jagung pada tahun tersebut (diasumsikan penurunan stabil tiap tahun)?",
    options: [
        "Beras: $28{,}8$ juta ton, Jagung: $16{,}2$ juta ton",
        "Beras: $27{,}6$ juta ton, Jagung: $17{,}4$ juta ton",
        "Beras: $29{,}1$ juta ton, Jagung: $17{,}2$ juta ton",
        "Beras: $27{,}4$ juta ton, Jagung: $15{,}9$ juta ton",
        "Beras: $27{,}2$ juta ton, Jagung: $15{,}8$ juta ton"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 1,
    score: 65,
    difficulty: "Hard"
},

// ==========================================
// SOAL 63
// ==========================================
{
    text: "Menurut data Badan Pangan Nasional beberapa tahun terakhir, produksi beras nasional mengalami penurunan sebesar $4{,}2\%$ dibandingkan tahun sebelumnya, yakni dari $31{,}36$ juta ton pada 2023 menjadi $30{,}04$ juta ton pada 2024. Penurunan ini dikaitkan erat dengan fenomena El Niño yang memperpanjang musim kemarau di sejumlah daerah sentra produksi, seperti Jawa Tengah, Sulawesi Selatan, dan Sumatera Barat. Selain beras, produksi jagung juga turun sebesar $3{,}1\%$, yakni dari $19{,}4$ juta ton pada 2023 menjadi $18{,}8$ juta ton pada 2024. Hal itu berdampak pada harga pakan ternak dan inflasi sektor pangan yang mencapai $6{,}7\%$ pada kuartal keempat 2024.\n\nPenurunan produksi ini memunculkan kekhawatiran terhadap ketahanan pangan nasional. Ketahanan pangan tidak hanya bergantung pada kuantitas produksi, tetapi juga pada distribusi dan akses masyarakat terhadap bahan pangan. Dalam laporan Bank Dunia, disebutkan bahwa $19{,}4$ juta penduduk Indonesia masih mengalami kerawanan pangan kronis, terutama di wilayah timur Indonesia. Faktor geografis, infrastruktur terbatas, dan fluktuasi harga menjadi penghalang utama pemerataan pangan, meskipun cadangan pangan strategis pemerintah relatif stabil.\n\nSebagai respons, pemerintah meluncurkan program diversifikasi pangan berbasis lokal, seperti pengembangan sorgum, sagu, dan umbi-umbian di kawasan rawan pangan. Namun, efektivitas program ini dipertanyakan karena kontribusi pangan lokal non-beras terhadap konsumsi nasional masih di bawah $10\%$. Tanpa sinergi antara inovasi teknologi pertanian, insentif bagi petani lokal, dan reformasi distribusi logistik, kebijakan diversifikasi ini dikhawatirkan hanya menjadi solusi jangka pendek yang tidak menyentuh akar persoalan ketahanan pangan struktural.\n\n63. Apa kelemahan utama dari kebijakan diversifikasi pangan menurut isi teks?",
    options: [
        "Hanya berfokus pada komoditas impor dari negara-negara Asia Pasifik",
        "Tidak mempertimbangkan preferensi konsumen yang ada di dalam negeri",
        "Belum mampu menggeser dominasi konsumsi beras nasional secara signifikan",
        "Mengurangi insentif bagi petani padi yang belum mengenal teknologi pertanian modern",
        "Mengandalkan komoditas yang tidak bisa dibudidayakan massal oleh masyarakat Indonesia"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 2,
    score: 35,
    difficulty: "Easy"
},

// ==========================================
// SOAL 64
// ==========================================
{
    text: "Menurut data Badan Pangan Nasional beberapa tahun terakhir, produksi beras nasional mengalami penurunan sebesar $4{,}2\%$ dibandingkan tahun sebelumnya, yakni dari $31{,}36$ juta ton pada 2023 menjadi $30{,}04$ juta ton pada 2024. Penurunan ini dikaitkan erat dengan fenomena El Niño yang memperpanjang musim kemarau di sejumlah daerah sentra produksi, seperti Jawa Tengah, Sulawesi Selatan, dan Sumatera Barat. Selain beras, produksi jagung juga turun sebesar $3{,}1\%$, yakni dari $19{,}4$ juta ton pada 2023 menjadi $18{,}8$ juta ton pada 2024. Hal itu berdampak pada harga pakan ternak dan inflasi sektor pangan yang mencapai $6{,}7\%$ pada kuartal keempat 2024.\n\nPenurunan produksi ini memunculkan kekhawatiran terhadap ketahanan pangan nasional. Ketahanan pangan tidak hanya bergantung pada kuantitas produksi, tetapi juga pada distribusi dan akses masyarakat terhadap bahan pangan. Dalam laporan Bank Dunia, disebutkan bahwa $19{,}4$ juta penduduk Indonesia masih mengalami kerawanan pangan kronis, terutama di wilayah timur Indonesia. Faktor geografis, infrastruktur terbatas, dan fluktuasi harga menjadi penghalang utama pemerataan pangan, meskipun cadangan pangan strategis pemerintah relatif stabil.\n\nSebagai respons, pemerintah meluncurkan program diversifikasi pangan berbasis lokal, seperti pengembangan sorgum, sagu, dan umbi-umbian di kawasan rawan pangan. Namun, efektivitas program ini dipertanyakan karena kontribusi pangan lokal non-beras terhadap konsumsi nasional masih di bawah $10\%$. Tanpa sinergi antara inovasi teknologi pertanian, insentif bagi petani lokal, dan reformasi distribusi logistik, kebijakan diversifikasi ini dikhawatirkan hanya menjadi solusi jangka pendek yang tidak menyentuh akar persoalan ketahanan pangan struktural.\n\n64. Bagaimana Anda menilai efektivitas intervensi pemerintah berdasarkan data yang disampaikan dalam teks?",
    options: [
        "Sangat efektif karena angka inflasi pangan selalu dalam tren menurun",
        "Cukup efektif karena pangan lokal, seperti umbi-umbian, telah menggantikan beras sebagai makanan pokok",
        "Kurang efektif karena masih ada kerawanan pangan kronis dan kontribusi pangan lokal rendah",
        "Tidak relevan karena data tidak mendukung intervensi apa pun",
        "Efektif secara distribusi tetapi gagal secara produksi"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 2,
    score: 50,
    difficulty: "Medium"
},

// ==========================================
// SOAL 65
// ==========================================
{
    text: "Menurut data Badan Pangan Nasional beberapa tahun terakhir, produksi beras nasional mengalami penurunan sebesar $4{,}2\%$ dibandingkan tahun sebelumnya, yakni dari $31{,}36$ juta ton pada 2023 menjadi $30{,}04$ juta ton pada 2024. Penurunan ini dikaitkan erat dengan fenomena El Niño yang memperpanjang musim kemarau di sejumlah daerah sentra produksi, seperti Jawa Tengah, Sulawesi Selatan, dan Sumatera Barat. Selain beras, produksi jagung juga turun sebesar $3{,}1\%$, yakni dari $19{,}4$ juta ton pada 2023 menjadi $18{,}8$ juta ton pada 2024. Hal itu berdampak pada harga pakan ternak dan inflasi sektor pangan yang mencapai $6{,}7\%$ pada kuartal keempat 2024.\n\nPenurunan produksi ini memunculkan kekhawatiran terhadap ketahanan pangan nasional. Ketahanan pangan tidak hanya bergantung pada kuantitas produksi, tetapi juga pada distribusi dan akses masyarakat terhadap bahan pangan. Dalam laporan Bank Dunia, disebutkan bahwa $19{,}4$ juta penduduk Indonesia masih mengalami kerawanan pangan kronis, terutama di wilayah timur Indonesia. Faktor geografis, infrastruktur terbatas, dan fluktuasi harga menjadi penghalang utama pemerataan pangan, meskipun cadangan pangan strategis pemerintah relatif stabil.\n\nSebagai respons, pemerintah meluncurkan program diversifikasi pangan berbasis lokal, seperti pengembangan sorgum, sagu, dan umbi-umbian di kawasan rawan pangan. Namun, efektivitas program ini dipertanyakan karena kontribusi pangan lokal non-beras terhadap konsumsi nasional masih di bawah $10\%$. Tanpa sinergi antara inovasi teknologi pertanian, insentif bagi petani lokal, dan reformasi distribusi logistik, kebijakan diversifikasi ini dikhawatirkan hanya menjadi solusi jangka pendek yang tidak menyentuh akar persoalan ketahanan pangan struktural.\n\n65. Dari seluruh informasi yang disampaikan, apa rekomendasi strategis yang paling logis untuk memperkuat ketahanan pangan nasional?",
    options: [
        "Meningkatkan impor beras secara besar-besaran",
        "Fokus pada pertanian organik berskala kecil dan menengah",
        "Menambah subsidi pupuk tanpa memperluas teknologi pertanian",
        "Memperkuat inovasi teknologi dan infrastruktur distribusi pangan lokal",
        "Mengandalkan pasokan pangan dari luar negeri dalam jangka panjang"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 3,
    score: 35,
    difficulty: "Easy"
},
            
// ==========================================
// SOAL 66
// ==========================================
{
    text: "Era digital telah membawa perubahan besar dalam cara masyarakat Indonesia berinteraksi dengan budaya lokal. Tradisi-tradisi seperti wayang, tari daerah, dan musik etnik kini tidak hanya tampil di panggung-panggung tradisional, tetapi juga diunggah dan disiarkan melalui berbagai platform digital. Fenomena ini memperluas jangkauan budaya lokal ke audiens global, sekaligus membuka peluang baru dalam bentuk ekonomi kreatif berbasis warisan budaya. Data Kementerian Pariwisata dan Ekonomi Kreatif tahun 2024 mencatat peningkatan $28\%$ jumlah konten budaya lokal yang diunggah ke platform seperti YouTube dan TikTok dibanding tahun sebelumnya.\n\nNamun, ekspansi budaya lokal di ruang digital juga menghadirkan tantangan baru. Dalam banyak kasus, nilai-nilai filosofis dan sakralitas budaya mulai tereduksi menjadi sekadar tontonan viral. Misalnya, tarian sakral yang semula hanya ditampilkan dalam upacara adat kini dikemas ulang untuk kepentingan komersial tanpa konteks budaya yang utuh. Praktik semacam ini menuai kritik dari budayawan karena berisiko menurunkan pemahaman masyarakat terhadap makna asli kebudayaan tersebut. Transformasi digital dianggap mempercepat proses komodifikasi budaya, yakni menjadikan budaya sebagai produk konsumsi massal.\n\nMeski demikian, tidak semua bentuk transformasi budaya bersifat negatif. Banyak komunitas adat dan seniman tradisional justru memanfaatkan media digital untuk mendokumentasikan pengetahuan budaya mereka yang selama ini diwariskan secara lisan. Platform seperti podcast dan vlog budaya digunakan sebagai sarana pendidikan lintas generasi. Beberapa inisiatif lokal bahkan mendapat dukungan dari UNESCO dalam upaya melestarikan bahasa daerah dan praktik budaya minoritas yang terancam punah. Dengan pendekatan yang sensitif terhadap konteks, digitalisasi justru dapat menjadi alat pelindung budaya.\n\nKe depan, tantangan utama dalam pelestarian budaya lokal bukan hanya pada teknologinya, tetapi pada etika pemanfaatannya. Pemerintah dan pelaku budaya perlu merumuskan pedoman yang memastikan bahwa pemanfaatan media digital tetap menghormati nilai-nilai budaya asli. Selain itu, edukasi masyarakat menjadi penting agar publik tidak hanya menjadi konsumen budaya, tetapi juga aktor yang turut menjaga kelestariannya. Dalam hal ini, transformasi digital budaya Indonesia dapat menjadi jembatan antara warisan tradisional dan masa depan, bukan sekadar panggung hiburan sesaat.\n\n66. Apa argumen utama penulis mengenai dampak digitalisasi terhadap budaya lokal Indonesia?",
    options: [
        "Digitalisasi menyebabkan hilangnya semua bentuk budaya tradisional milik bangsa Indonesia",
        "Digitalisasi memperkuat budaya pop global di Indonesia yang telah berakulturasi sejak lama",
        "Digitalisasi berpotensi menjadi alat pelestarian budaya jika digunakan secara etis",
        "Digitalisasi hanya bermanfaat bagi komunitas urban yang cepat beradaptasi",
        "Digitalisasi sepenuhnya mengomersialkan budaya lokal sebagai produk digital semata"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 2,
    score: 50,
    difficulty: "Medium"
},

// ==========================================
// SOAL 67
// ==========================================
{
    text: "Era digital telah membawa perubahan besar dalam cara masyarakat Indonesia berinteraksi dengan budaya lokal. Tradisi-tradisi seperti wayang, tari daerah, dan musik etnik kini tidak hanya tampil di panggung-panggung tradisional, tetapi juga diunggah dan disiarkan melalui berbagai platform digital. Fenomena ini memperluas jangkauan budaya lokal ke audiens global, sekaligus membuka peluang baru dalam bentuk ekonomi kreatif berbasis warisan budaya. Data Kementerian Pariwisata dan Ekonomi Kreatif tahun 2024 mencatat peningkatan $28\%$ jumlah konten budaya lokal yang diunggah ke platform seperti YouTube dan TikTok dibanding tahun sebelumnya.\n\nNamun, ekspansi budaya lokal di ruang digital juga menghadirkan tantangan baru. Dalam banyak kasus, nilai-nilai filosofis dan sakralitas budaya mulai tereduksi menjadi sekadar tontonan viral. Misalnya, tarian sakral yang semula hanya ditampilkan dalam upacara adat kini dikemas ulang untuk kepentingan komersial tanpa konteks budaya yang utuh. Praktik semacam ini menuai kritik dari budayawan karena berisiko menurunkan pemahaman masyarakat terhadap makna asli kebudayaan tersebut. Transformasi digital dianggap mempercepat proses komodifikasi budaya, yakni menjadikan budaya sebagai produk konsumsi massal.\n\nMeski demikian, tidak semua bentuk transformasi budaya bersifat negatif. Banyak komunitas adat dan seniman tradisional justru memanfaatkan media digital untuk mendokumentasikan pengetahuan budaya mereka yang selama ini diwariskan secara lisan. Platform seperti podcast dan vlog budaya digunakan sebagai sarana pendidikan lintas generasi. Beberapa inisiatif lokal bahkan mendapat dukungan dari UNESCO dalam upaya melestarikan bahasa daerah dan praktik budaya minoritas yang terancam punah. Dengan pendekatan yang sensitif terhadap konteks, digitalisasi justru dapat menjadi alat pelindung budaya.\n\nKe depan, tantangan utama dalam pelestarian budaya lokal bukan hanya pada teknologinya, tetapi pada etika pemanfaatannya. Pemerintah dan pelaku budaya perlu merumuskan pedoman yang memastikan bahwa pemanfaatan media digital tetap menghormati nilai-nilai budaya asli. Selain itu, edukasi masyarakat menjadi penting agar publik tidak hanya menjadi konsumen budaya, tetapi juga aktor yang turut menjaga kelestariannya. Dalam hal ini, transformasi digital budaya Indonesia dapat menjadi jembatan antara warisan tradisional dan masa depan, bukan sekadar panggung hiburan sesaat.\n\n67. Mengapa digitalisasi budaya dikritik oleh budayawan menurut teks?",
    options: [
        "Karena digitalisasi pasti merusak pemahaman masyarakat terhadap keaslian budaya",
        "Karena menghambat proses komodifikasi budaya yang menjadikannya produk konsumsi massal",
        "Karena digitalisasi mereduksi makna filosofis budaya menjadi sekadar tontonan",
        "Karena ada peningkatan $28\%$ jumlah konten budaya lokal yang diunggah",
        "Karena tidak semua bentuk transformasi budaya bersifat negatif"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 2,
    score: 35,
    difficulty: "Easy"
},

// ==========================================
// SOAL 68
// ==========================================
{
    text: "Era digital telah membawa perubahan besar dalam cara masyarakat Indonesia berinteraksi dengan budaya lokal. Tradisi-tradisi seperti wayang, tari daerah, dan musik etnik kini tidak hanya tampil di panggung-panggung tradisional, tetapi juga diunggah dan disiarkan melalui berbagai platform digital. Fenomena ini memperluas jangkauan budaya lokal ke audiens global, sekaligus membuka peluang baru dalam bentuk ekonomi kreatif berbasis warisan budaya. Data Kementerian Pariwisata dan Ekonomi Kreatif tahun 2024 mencatat peningkatan $28\%$ jumlah konten budaya lokal yang diunggah ke platform seperti YouTube dan TikTok dibanding tahun sebelumnya.\n\nNamun, ekspansi budaya lokal di ruang digital juga menghadirkan tantangan baru. Dalam banyak kasus, nilai-nilai filosofis dan sakralitas budaya mulai tereduksi menjadi sekadar tontonan viral. Misalnya, tarian sakral yang semula hanya ditampilkan dalam upacara adat kini dikemas ulang untuk kepentingan komersial tanpa konteks budaya yang utuh. Praktik semacam ini menuai kritik dari budayawan karena berisiko menurunkan pemahaman masyarakat terhadap makna asli kebudayaan tersebut. Transformasi digital dianggap mempercepat proses komodifikasi budaya, yakni menjadikan budaya sebagai produk konsumsi massal.\n\nMeski demikian, tidak semua bentuk transformasi budaya bersifat negatif. Banyak komunitas adat dan seniman tradisional justru memanfaatkan media digital untuk mendokumentasikan pengetahuan budaya mereka yang selama ini diwariskan secara lisan. Platform seperti podcast dan vlog budaya digunakan sebagai sarana pendidikan lintas generasi. Beberapa inisiatif lokal bahkan mendapat dukungan dari UNESCO dalam upaya melestarikan bahasa daerah dan praktik budaya minoritas yang terancam punah. Dengan pendekatan yang sensitif terhadap konteks, digitalisasi justru dapat menjadi alat pelindung budaya.\n\nKe depan, tantangan utama dalam pelestarian budaya lokal bukan hanya pada teknologinya, tetapi pada etika pemanfaatannya. Pemerintah dan pelaku budaya perlu merumuskan pedoman yang memastikan bahwa pemanfaatan media digital tetap menghormati nilai-nilai budaya asli. Selain itu, edukasi masyarakat menjadi penting agar publik tidak hanya menjadi konsumen budaya, tetapi juga aktor yang turut menjaga kelestariannya. Dalam hal ini, transformasi digital budaya Indonesia dapat menjadi jembatan antara warisan tradisional dan masa depan, bukan sekadar panggung hiburan sesaat.\n\n68. Apa yang dapat disimpulkan dari paragraf ketiga tentang inisiatif pelestarian budaya melalui media digital?",
    options: [
        "Pelestarian budaya sangat memerlukan dukungan dari lembaga internasional",
        "Komunitas adat sangat sensitif dan menolak teknologi sebagai sarana pewarisan budaya secara lisan",
        "Dokumentasi budaya secara digital hanya berlaku pada budaya mayoritas agar terlindung dari budaya asing",
        "Digitalisasi dapat digunakan sebagai sarana edukasi lintas generasi dan pelestarian bahasa daerah",
        "Transformasi budaya digital tidak relevan dengan kebutuhan generasi muda yang terbiasa membuat podcast dan vlog"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 3,
    score: 35,
    difficulty: "Easy"
}, 

// ==========================================
// SOAL 69
// ==========================================
{
    text: "Era digital telah membawa perubahan besar dalam cara masyarakat Indonesia berinteraksi dengan budaya lokal. Tradisi-tradisi seperti wayang, tari daerah, dan musik etnik kini tidak hanya tampil di panggung-panggung tradisional, tetapi juga diunggah dan disiarkan melalui berbagai platform digital. Fenomena ini memperluas jangkauan budaya lokal ke audiens global, sekaligus membuka peluang baru dalam bentuk ekonomi kreatif berbasis warisan budaya. Data Kementerian Pariwisata dan Ekonomi Kreatif tahun 2024 mencatat peningkatan $28\%$ jumlah konten budaya lokal yang diunggah ke platform seperti YouTube dan TikTok dibanding tahun sebelumnya.\n\nNamun, ekspansi budaya lokal di ruang digital juga menghadirkan tantangan baru. Dalam banyak kasus, nilai-nilai filosofis dan sakralitas budaya mulai tereduksi menjadi sekadar tontonan viral. Misalnya, tarian sakral yang semula hanya ditampilkan dalam upacara adat kini dikemas ulang untuk kepentingan komersial tanpa konteks budaya yang utuh. Praktik semacam ini menuai kritik dari budayawan karena berisiko menurunkan pemahaman masyarakat terhadap makna asli kebudayaan tersebut. Transformasi digital dianggap mempercepat proses komodifikasi budaya, yakni menjadikan budaya sebagai produk konsumsi massal.\n\nMeski demikian, tidak semua bentuk transformasi budaya bersifat negatif. Banyak komunitas adat dan seniman tradisional justru memanfaatkan media digital untuk mendokumentasikan pengetahuan budaya mereka yang selama ini diwariskan secara lisan. Platform seperti podcast dan vlog budaya digunakan sebagai sarana pendidikan lintas generasi. Beberapa inisiatif lokal bahkan mendapat dukungan dari UNESCO dalam upaya melestarikan bahasa daerah dan praktik budaya minoritas yang terancam punah. Dengan pendekatan yang sensitif terhadap konteks, digitalisasi justru dapat menjadi alat pelindung budaya.\n\nKe depan, tantangan utama dalam pelestarian budaya lokal bukan hanya pada teknologinya, tetapi pada etika pemanfaatannya. Pemerintah dan pelaku budaya perlu merumuskan pedoman yang memastikan bahwa pemanfaatan media digital tetap menghormati nilai-nilai budaya asli. Selain itu, edukasi masyarakat menjadi penting agar publik tidak hanya menjadi konsumen budaya, tetapi juga aktor yang turut menjaga kelestariannya. Dalam hal ini, transformasi digital budaya Indonesia dapat menjadi jembatan antara warisan tradisional dan masa depan, bukan sekadar panggung hiburan sesaat.\n\n69. Perhatikan pernyataan-pernyataan berikut terkait isi teks. Tentukan kombinasi BENAR (B) atau SALAH (S) yang tepat!\n[A] Penggunaan TikTok dan YouTube memperluas jangkauan budaya lokal ke audiens global\n[B] Seluruh bentuk transformasi budaya di era digital dianggap membahayakan kelestarian budaya\n[C] Komodifikasi budaya terjadi ketika budaya dikemas ulang tanpa mempertimbangkan makna asli\n[D] Digitalisasi budaya menjamin peningkatan pemahaman masyarakat terhadap nilai filosofis budaya\n[E] Kritik budayawan muncul karena budaya sering kali dipresentasikan tanpa konteks adat yang tepat",
    options: [
        "BSBSB",
        "SBSBS",
        "BBBSS",
        "SSSBB",
        "BSSBB"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 0,
    score: 50,
    difficulty: "Medium"
},

// ==========================================
// SOAL 70
// ==========================================
{
    text: "Era digital telah membawa perubahan besar dalam cara masyarakat Indonesia berinteraksi dengan budaya lokal. Tradisi-tradisi seperti wayang, tari daerah, dan musik etnik kini tidak hanya tampil di panggung-panggung tradisional, tetapi juga diunggah dan disiarkan melalui berbagai platform digital. Fenomena ini memperluas jangkauan budaya lokal ke audiens global, sekaligus membuka peluang baru dalam bentuk ekonomi kreatif berbasis warisan budaya. Data Kementerian Pariwisata dan Ekonomi Kreatif tahun 2024 mencatat peningkatan $28\%$ jumlah konten budaya lokal yang diunggah ke platform seperti YouTube dan TikTok dibanding tahun sebelumnya.\n\nNamun, ekspansi budaya lokal di ruang digital juga menghadirkan tantangan baru. Dalam banyak kasus, nilai-nilai filosofis dan sakralitas budaya mulai tereduksi menjadi sekadar tontonan viral. Misalnya, tarian sakral yang semula hanya ditampilkan dalam upacara adat kini dikemas ulang untuk kepentingan komersial tanpa konteks budaya yang utuh. Praktik semacam ini menuai kritik dari budayawan karena berisiko menurunkan pemahaman masyarakat terhadap makna asli kebudayaan tersebut. Transformasi digital dianggap mempercepat proses komodifikasi budaya, yakni menjadikan budaya sebagai produk konsumsi massal.\n\nMeski demikian, tidak semua bentuk transformasi budaya bersifat negatif. Banyak komunitas adat dan seniman tradisional justru memanfaatkan media digital untuk mendokumentasikan pengetahuan budaya mereka yang selama ini diwariskan secara lisan. Platform seperti podcast dan vlog budaya digunakan sebagai sarana pendidikan lintas generasi. Beberapa inisiatif lokal bahkan mendapat dukungan dari UNESCO dalam upaya melestarikan bahasa daerah dan praktik budaya minoritas yang terancam punah. Dengan pendekatan yang sensitif terhadap konteks, digitalisasi justru dapat menjadi alat pelindung budaya.\n\nKe depan, tantangan utama dalam pelestarian budaya lokal bukan hanya pada teknologinya, tetapi pada etika pemanfaatannya. Pemerintah dan pelaku budaya perlu merumuskan pedoman yang memastikan bahwa pemanfaatan media digital tetap menghormati nilai-nilai budaya asli. Selain itu, edukasi masyarakat menjadi penting agar publik tidak hanya menjadi konsumen budaya, tetapi juga aktor yang turut menjaga kelestariannya. Dalam hal ini, transformasi digital budaya Indonesia dapat menjadi jembatan antara warisan tradisional dan masa depan, bukan sekadar panggung hiburan sesaat.\n\n70. Perhatikan pernyataan-pernyataan berikut dan tentukan kombinasi BENAR (B) atau SALAH (S) berdasarkan isi bacaan!\n[A] Pemerintah dan pelaku budaya perlu merumuskan pedoman etis dalam pemanfaatan media digital budaya\n[B] Komunitas adat banyak menolak teknologi karena dianggap menghilangkan nilai sakral budaya\n[C] UNESCO memberikan dukungan terhadap upaya pelestarian budaya lokal yang berbasis komunitas\n[D] Transformasi digital budaya Indonesia hanya bermanfaat dalam bidang ekonomi\n[E] Edukasi publik menjadi kunci agar masyarakat turut serta dalam pelestarian budaya",
    options: [
        "BSBSB",
        "SBSBS",
        "BBBSS",
        "SSSBB",
        "BSSBB"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 0,
    score: 50,
    difficulty: "Medium"
},

// ==========================================
// SOAL 71
// ==========================================
{
    text: "Tahun 2025 menjadi tonggak penting dalam adopsi kecerdasan buatan (AI) di berbagai sektor di Indonesia. Berdasarkan laporan Komdigi, penggunaan AI meningkat tajam sebesar $47\%$ dibanding tahun sebelumnya. Sektor industri manufaktur, layanan pelanggan, hingga pendidikan mulai mengintegrasikan teknologi AI untuk meningkatkan efisiensi dan personalisasi layanan. Chatbot, sistem prediksi, dan asisten virtual kini telah menjadi bagian dari aktivitas harian masyarakat urban.\n\nMeski menawarkan berbagai kemudahan, perkembangan AI tidak lepas dari persoalan etika dan regulasi. Beberapa kasus penyalahgunaan data pengguna dan keputusan algoritma yang diskriminatif telah memicu kekhawatiran publik. Misalnya, sistem rekrutmen berbasis AI yang secara tidak sadar memprioritaskan kandidat dari latar belakang tertentu. Hal ini menimbulkan perdebatan mengenai tanggung jawab moral dan hukum dalam pengembangan teknologi yang “belajar” dari data yang bias.\n\nLembaga riset teknologi nasional telah mengusulkan pembentukan Dewan Etika AI Indonesia yang bertugas mengawasi dan memberikan panduan etik dalam implementasi teknologi ini. Di sisi lain, beberapa kalangan justru mendorong pendekatan yang lebih fleksibel, dengan alasan bahwa regulasi ketat bisa menghambat inovasi. Tantangan utamanya adalah menciptakan keseimbangan antara perlindungan publik dan percepatan teknologi dalam iklim global yang sangat kompetitif.\n\nLebih jauh, AI di tahun 2025 bukan lagi sekadar alat, tetapi juga entitas yang memengaruhi pola pikir, budaya kerja, dan struktur sosial. Ketika mesin mulai meniru proses pengambilan keputusan manusia, muncul pertanyaan mendasar tentang batas antara otoritas teknologi dan otonomi manusia. Oleh karena itu, literasi digital yang menyeluruh menjadi penting, tidak hanya untuk memahami cara kerja AI, tetapi juga untuk membentuk masyarakat yang mampu menavigasi perubahan zaman secara etis dan kritis.\n\n71. Apa isu utama yang ditekankan penulis terkait perkembangan AI di tahun 2025?",
    options: [
        "Kemajuan teknologi Indonesia dalam industri perangkat keras komputer jinjing.",
        "Kesenjangan digital antara kota dan desa dalam pemanfaatan AI.",
        "Pentingnya regulasi dan etika dalam literasi digital, khususnya penggunaan AI.",
        "Penggunaan AI yang terbatas hanya di sektor teknologi informasi dan komunikasi.",
        "Pentingnya literasi digital yang menyeluruh untuk percepatan teknologi."
    ],
    answer: null,
    doubt: false,
    correctAnswer: 2,
    score: 35,
    difficulty: "Easy"
},

// ==========================================
// SOAL 72
// ==========================================
{
    text: "Tahun 2025 menjadi tonggak penting dalam adopsi kecerdasan buatan (AI) di berbagai sektor di Indonesia. Berdasarkan laporan Komdigi, penggunaan AI meningkat tajam sebesar $47\%$ dibanding tahun sebelumnya. Sektor industri manufaktur, layanan pelanggan, hingga pendidikan mulai mengintegrasikan teknologi AI untuk meningkatkan efisiensi dan personalisasi layanan. Chatbot, sistem prediksi, dan asisten virtual kini telah menjadi bagian dari aktivitas harian masyarakat urban.\n\nMeski menawarkan berbagai kemudahan, perkembangan AI tidak lepas dari persoalan etika dan regulasi. Beberapa kasus penyalahgunaan data pengguna dan keputusan algoritma yang diskriminatif telah memicu kekhawatiran publik. Misalnya, sistem rekrutmen berbasis AI yang secara tidak sadar memprioritaskan kandidat dari latar belakang tertentu. Hal ini menimbulkan perdebatan mengenai tanggung jawab moral dan hukum dalam pengembangan teknologi yang “belajar” dari data yang bias.\n\nLembaga riset teknologi nasional telah mengusulkan pembentukan Dewan Etika AI Indonesia yang bertugas mengawasi dan memberikan panduan etik dalam implementasi teknologi ini. Di sisi lain, beberapa kalangan justru mendorong pendekatan yang lebih fleksibel, dengan alasan bahwa regulasi ketat bisa menghambat inovasi. Tantangan utamanya adalah menciptakan keseimbangan antara perlindungan publik dan percepatan teknologi dalam iklim global yang sangat kompetitif.\n\nLebih jauh, AI di tahun 2025 bukan lagi sekadar alat, tetapi juga entitas yang memengaruhi pola pikir, budaya kerja, dan struktur sosial. Ketika mesin mulai meniru proses pengambilan keputusan manusia, muncul pertanyaan mendasar tentang batas antara otoritas teknologi dan otonomi manusia. Oleh karena itu, literasi digital yang menyeluruh menjadi penting, tidak hanya untuk memahami cara kerja AI, tetapi juga untuk membentuk masyarakat yang mampu menavigasi perubahan zaman secara etis dan kritis.\n\n72. Apa dampak negatif dari AI yang disinggung dalam teks?",
    options: [
        "Menurunnya jumlah pengguna media sosial",
        "Meningkatnya konsumsi listrik di wilayah perkotaan",
        "Terjadinya keputusan algoritmik yang bias dan diskriminatif",
        "Ketergantungan pada teknologi yang menurunkan produktivitas",
        "Percepatan teknologi dalam iklim global yang sangat kompetitif"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 2,
    score: 35,
    difficulty: "Easy"
},

// ==========================================
// SOAL 73
// ==========================================
{
    text: "Tahun 2025 menjadi tonggak penting dalam adopsi kecerdasan buatan (AI) di berbagai sektor di Indonesia. Berdasarkan laporan Komdigi, penggunaan AI meningkat tajam sebesar $47\%$ dibanding tahun sebelumnya. Sektor industri manufaktur, layanan pelanggan, hingga pendidikan mulai mengintegrasikan teknologi AI untuk meningkatkan efisiensi dan personalisasi layanan. Chatbot, sistem prediksi, dan asisten virtual kini telah menjadi bagian dari aktivitas harian masyarakat urban.\n\nMeski menawarkan berbagai kemudahan, perkembangan AI tidak lepas dari persoalan etika dan regulasi. Beberapa kasus penyalahgunaan data pengguna dan keputusan algoritma yang diskriminatif telah memicu kekhawatiran publik. Misalnya, sistem rekrutmen berbasis AI yang secara tidak sadar memprioritaskan kandidat dari latar belakang tertentu. Hal ini menimbulkan perdebatan mengenai tanggung jawab moral dan hukum dalam pengembangan teknologi yang “belajar” dari data yang bias.\n\nLembaga riset teknologi nasional telah mengusulkan pembentukan Dewan Etika AI Indonesia yang bertugas mengawasi dan memberikan panduan etik dalam implementasi teknologi ini. Di sisi lain, beberapa kalangan justru mendorong pendekatan yang lebih fleksibel, dengan alasan bahwa regulasi ketat bisa menghambat inovasi. Tantangan utamanya adalah menciptakan keseimbangan antara perlindungan publik dan percepatan teknologi dalam iklim global yang sangat kompetitif.\n\nLebih jauh, AI di tahun 2025 bukan lagi sekadar alat, tetapi juga entitas yang memengaruhi pola pikir, budaya kerja, dan struktur sosial. Ketika mesin mulai meniru proses pengambilan keputusan manusia, muncul pertanyaan mendasar tentang batas antara otoritas teknologi dan otonomi manusia. Oleh karena itu, literasi digital yang menyeluruh menjadi penting, tidak hanya untuk memahami cara kerja AI, tetapi juga untuk membentuk masyarakat yang mampu menavigasi perubahan zaman secara etis dan kritis.\n\n73. Mengapa terdapat perdebatan soal regulasi terhadap AI menurut teks?",
    options: [
        "Karena AI masih dianggap terlalu canggih untuk diatur",
        "Karena regulasi dianggap dapat menghambat pertumbuhan inovasi teknologi",
        "Karena belum ada lembaga yang memahami cara kerja AI",
        "Karena masyarakat belum menerima kehadiran AI secara luas",
        "Karena masyarakat Indonesia sangat membutuhkan keberadaan AI untuk beraktivitas."
    ],
    answer: null,
    doubt: false,
    correctAnswer: 1,
    score: 35,
    difficulty: "Easy"
},

// ==========================================
// SOAL 74
// ==========================================
{
    text: "Tahun 2025 menjadi tonggak penting dalam adopsi kecerdasan buatan (AI) di berbagai sektor di Indonesia. Berdasarkan laporan Komdigi, penggunaan AI meningkat tajam sebesar $47\%$ dibanding tahun sebelumnya. Sektor industri manufaktur, layanan pelanggan, hingga pendidikan mulai mengintegrasikan teknologi AI untuk meningkatkan efisiensi dan personalisasi layanan. Chatbot, sistem prediksi, dan asisten virtual kini telah menjadi bagian dari aktivitas harian masyarakat urban.\n\nMeski menawarkan berbagai kemudahan, perkembangan AI tidak lepas dari persoalan etika dan regulasi. Beberapa kasus penyalahgunaan data pengguna dan keputusan algoritma yang diskriminatif telah memicu kekhawatiran publik. Misalnya, sistem rekrutmen berbasis AI yang secara tidak sadar memprioritaskan kandidat dari latar belakang tertentu. Hal ini menimbulkan perdebatan mengenai tanggung jawab moral dan hukum dalam pengembangan teknologi yang “belajar” dari data yang bias.\n\nLembaga riset teknologi nasional telah mengusulkan pembentukan Dewan Etika AI Indonesia yang bertugas mengawasi dan memberikan panduan etik dalam implementasi teknologi ini. Di sisi lain, beberapa kalangan justru mendorong pendekatan yang lebih fleksibel, dengan alasan bahwa regulasi ketat bisa menghambat inovasi. Tantangan utamanya adalah menciptakan keseimbangan antara perlindungan publik dan percepatan teknologi dalam iklim global yang sangat kompetitif.\n\nLebih jauh, AI di tahun 2025 bukan lagi sekadar alat, tetapi juga entitas yang memengaruhi pola pikir, budaya kerja, dan struktur sosial. Ketika mesin mulai meniru proses pengambilan keputusan manusia, muncul pertanyaan mendasar tentang batas antara otoritas teknologi dan otonomi manusia. Oleh karena itu, literasi digital yang menyeluruh menjadi penting, tidak hanya untuk memahami cara kerja AI, tetapi juga untuk membentuk masyarakat yang mampu menavigasi perubahan zaman secara etis dan kritis.\n\n74. Apa yang dimaksud dengan “AI bukan lagi sekadar alat” dalam paragraf keempat?",
    options: [
        "AI mulai menggantikan manusia dalam semua sektor",
        "AI mulai memiliki kesadaran diri dan bertindak mandiri",
        "AI memengaruhi cara manusia berpikir dan berinteraksi secara sosial",
        "AI menjadi pusat kendali atas pemerintahan dan ekonomi",
        "AI menjadi entitas yang berada dalam struktur sosial masyarakat"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 2,
    score: 50,
    difficulty: "Medium"
},

// ==========================================
// SOAL 75
// ==========================================
{
    text: "Tahun 2025 menjadi tonggak penting dalam adopsi kecerdasan buatan (AI) di berbagai sektor di Indonesia. Berdasarkan laporan Komdigi, penggunaan AI meningkat tajam sebesar $47\%$ dibanding tahun sebelumnya. Sektor industri manufaktur, layanan pelanggan, hingga pendidikan mulai mengintegrasikan teknologi AI untuk meningkatkan efisiensi dan personalisasi layanan. Chatbot, sistem prediksi, dan asisten virtual kini telah menjadi bagian dari aktivitas harian masyarakat urban.\n\nMeski menawarkan berbagai kemudahan, perkembangan AI tidak lepas dari persoalan etika dan regulasi. Beberapa kasus penyalahgunaan data pengguna dan keputusan algoritma yang diskriminatif telah memicu kekhawatiran publik. Misalnya, sistem rekrutmen berbasis AI yang secara tidak sadar memprioritaskan kandidat dari latar belakang tertentu. Hal ini menimbulkan perdebatan mengenai tanggung jawab moral dan hukum dalam pengembangan teknologi yang “belajar” dari data yang bias.\n\nLembaga riset teknologi nasional telah mengusulkan pembentukan Dewan Etika AI Indonesia yang bertugas mengawasi dan memberikan panduan etik dalam implementasi teknologi ini. Di sisi lain, beberapa kalangan justru mendorong pendekatan yang lebih fleksibel, dengan alasan bahwa regulasi ketat bisa menghambat inovasi. Tantangan utamanya adalah menciptakan keseimbangan antara perlindungan publik dan percepatan teknologi dalam iklim global yang sangat kompetitif.\n\nLebih jauh, AI di tahun 2025 bukan lagi sekadar alat, tetapi juga entitas yang memengaruhi pola pikir, budaya kerja, dan struktur sosial. Ketika mesin mulai meniru proses pengambilan keputusan manusia, muncul pertanyaan mendasar tentang batas antara otoritas teknologi dan otonomi manusia. Oleh karena itu, literasi digital yang menyeluruh menjadi penting, tidak hanya untuk memahami cara kerja AI, tetapi juga untuk membentuk masyarakat yang mampu menavigasi perubahan zaman secara etis dan kritis.\n\n75. Berdasarkan bacaan, manakah dari pernyataan berikut yang sesuai dengan tantangan implementasi AI di Indonesia tahun 2025?\n(1) AI memiliki potensi besar, tetapi memerlukan panduan etika yang jelas\n(2) Regulasi terhadap AI harus dihapus agar inovasi berjalan cepat\n(3) Literasi digital dibutuhkan agar masyarakat mampu berpikir kritis terhadap AI\n(4) Semua kalangan menyepakati pendekatan etika yang ketat terhadap AI\n(5) Penggunaan AI tanpa kontrol dapat menyebabkan ketimpangan sosial baru",
    options: [
        "1-2-3",
        "2-3-4",
        "3-4-5",
        "1-3-5",
        "2-4-5"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 3,
    score: 50,
    difficulty: "Medium"
}
    ],
},

"en": {
    name: "Literasi Bahasa Inggris",
    duration: 30 * 60,
    questions: [
        // ==========================================
// SOAL 76
// ==========================================
{
    text: `<table border="1" style="width:100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; margin-bottom: 10px;">
  <tr><td style="padding:8px; font-weight:bold; width:25%;">Stormy<br>04-08-2024</td><td style="padding:8px;">Social media can be a tempting distraction. It’s a pretty common experience to want to pick up your phone whenever you can’t focus or need a quick break. But you <b>may</b> find yourself struggling with endless doomscrolling, waiting for messages or comparing yourself to others. How do you disconnect from social media?</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Dewgong<br>05-08-2024</td><td style="padding:8px;">This is a great question! I’m going to be honest here and admit that I often fail at disconnecting from social media (predominantly just TikTok). But I am trying harder to set boundaries and give myself a break!</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Lightning<br>07-08-2024</td><td style="padding:8px;">I deleted Instagram a few weeks ago and have found a profound impact on my mental health. Since deleting it, I am not constantly comparing myself to others anymore. I can appreciate little things more as I’m not bombarded with information.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Infinity<br>16-08-2024</td><td style="padding:8px;">For me, I am not active on social media but yes, as you said sometimes we keep scrolling and watching. I noticed I was spending hours of my time scrolling through reels to wind down, only to realize I had wasted my time.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Ironman<br>20-08-2024</td><td style="padding:8px;">Thanks for posting about this! I often find myself doomscrolling social media during the night when I feel like I haven’t found time for myself during the day. It definitely has had impacts on my sleep schedule and I’m not proud of it, but I have been able to reduce the use of social media in the past few months.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Golden<br>28-08-2024</td><td style="padding:8px;">This is a really good post. I am curious to hear what others have to say on the topic. I definitely could use less social media by installing Flora app that helps you stay off your phone, but this is still a work in progress.</td></tr>
</table><br>76. Who posted the negative effect of social media on their lives?`,
    options: [
        "Dewgong and Golden",
        "Lightning and Ironman",
        "Lightning and Dewgong",
        "Infinity and Golden",
        "Ironman and Golden"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 1,
    score: 35,
    difficulty: "Easy"
},

// ==========================================
// SOAL 77
// ==========================================
{
    text: `<table border="1" style="width:100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; margin-bottom: 10px;">
  <tr><td style="padding:8px; font-weight:bold; width:25%;">Stormy<br>04-08-2024</td><td style="padding:8px;">Social media can be a tempting distraction. It’s a pretty common experience to want to pick up your phone whenever you can’t focus or need a quick break. But you <b>may</b> find yourself struggling with endless doomscrolling, waiting for messages or comparing yourself to others. How do you disconnect from social media?</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Dewgong<br>05-08-2024</td><td style="padding:8px;">This is a great question! I’m going to be honest here and admit that I often fail at disconnecting from social media (predominantly just TikTok). But I am trying harder to set boundaries and give myself a break!</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Lightning<br>07-08-2024</td><td style="padding:8px;">I deleted Instagram a few weeks ago and have found a profound impact on my mental health. Since deleting it, I am not constantly comparing myself to others anymore. I can appreciate little things more as I’m not bombarded with information.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Infinity<br>16-08-2024</td><td style="padding:8px;">For me, I am not active on social media but yes, as you said sometimes we keep scrolling and watching. I noticed I was spending hours of my time scrolling through reels to wind down, only to realize I had wasted my time.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Ironman<br>20-08-2024</td><td style="padding:8px;">Thanks for posting about this! I often find myself doomscrolling social media during the night when I feel like I haven’t found time for myself during the day. It definitely has had impacts on my sleep schedule and I’m not proud of it, but I have been able to reduce the use of social media in the past few months.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Golden<br>28-08-2024</td><td style="padding:8px;">This is a really good post. I am curious to hear what others have to say on the topic. I definitely could use less social media by installing Flora app that helps you stay off your phone, but this is still a work in progress.</td></tr>
</table><br>77. The word may in Stormy’s post is used to express a ....`,
    options: [
        "Possibility",
        "Permission",
        "Wish",
        "Suggestion",
        "Request"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 0,
    score: 35,
    difficulty: "Easy"
},

// ==========================================
// SOAL 78
// ==========================================
{
    text: `<table border="1" style="width:100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; margin-bottom: 10px;">
  <tr><td style="padding:8px; font-weight:bold; width:25%;">Stormy<br>04-08-2024</td><td style="padding:8px;">Social media can be a tempting distraction. It’s a pretty common experience to want to pick up your phone whenever you can’t focus or need a quick break. But you <b>may</b> find yourself struggling with endless doomscrolling, waiting for messages or comparing yourself to others. How do you disconnect from social media?</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Dewgong<br>05-08-2024</td><td style="padding:8px;">This is a great question! I’m going to be honest here and admit that I often fail at disconnecting from social media (predominantly just TikTok). But I am trying harder to set boundaries and give myself a break!</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Lightning<br>07-08-2024</td><td style="padding:8px;">I deleted Instagram a few weeks ago and have found a profound impact on my mental health. Since deleting it, I am not constantly comparing myself to others anymore. I can appreciate little things more as I’m not bombarded with information.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Infinity<br>16-08-2024</td><td style="padding:8px;">For me, I am not active on social media but yes, as you said sometimes we keep scrolling and watching. I noticed I was spending hours of my time scrolling through reels to wind down, only to realize I had wasted my time.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Ironman<br>20-08-2024</td><td style="padding:8px;">Thanks for posting about this! I often find myself doomscrolling social media during the night when I feel like I haven’t found time for myself during the day. It definitely has had impacts on my sleep schedule and I’m not proud of it, but I have been able to reduce the use of social media in the past few months.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Golden<br>28-08-2024</td><td style="padding:8px;">This is a really good post. I am curious to hear what others have to say on the topic. I definitely could use less social media by installing Flora app that helps you stay off your phone, but this is still a work in progress.</td></tr>
</table><br>78. Which of the following issues is stated at the beginning of the thread?`,
    options: [
        "Talking about experiences on handling distractions",
        "Asking for a suggestion to focus on work",
        "Finding a solution for not comparing oneself to others",
        "Sharing tips on limiting the use of social media",
        "Discussing issues related to the use of social media"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 4,
    score: 35,
    difficulty: "Easy"
},

// ==========================================
// SOAL 79
// ==========================================
{
    text: `<table border="1" style="width:100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; margin-bottom: 10px;">
  <tr><td style="padding:8px; font-weight:bold; width:25%;">Stormy<br>04-08-2024</td><td style="padding:8px;">Social media can be a tempting distraction. It’s a pretty common experience to want to pick up your phone whenever you can’t focus or need a quick break. But you <b>may</b> find yourself struggling with endless doomscrolling, waiting for messages or comparing yourself to others. How do you disconnect from social media?</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Dewgong<br>05-08-2024</td><td style="padding:8px;">This is a great question! I’m going to be honest here and admit that I often fail at disconnecting from social media (predominantly just TikTok). But I am trying harder to set boundaries and give myself a break!</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Lightning<br>07-08-2024</td><td style="padding:8px;">I deleted Instagram a few weeks ago and have found a profound impact on my mental health. Since deleting it, I am not constantly comparing myself to others anymore. I can appreciate little things more as I’m not bombarded with information.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Infinity<br>16-08-2024</td><td style="padding:8px;">For me, I am not active on social media but yes, as you said sometimes we keep scrolling and watching. I noticed I was spending hours of my time scrolling through reels to wind down, only to realize I had wasted my time.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Ironman<br>20-08-2024</td><td style="padding:8px;">Thanks for posting about this! I often find myself doomscrolling social media during the night when I feel like I haven’t found time for myself during the day. It definitely has had impacts on my sleep schedule and I’m not proud of it, but I have been able to reduce the use of social media in the past few months.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Golden<br>28-08-2024</td><td style="padding:8px;">This is a really good post. I am curious to hear what others have to say on the topic. I definitely could use less social media by installing Flora app that helps you stay off your phone, but this is still a work in progress.</td></tr>
</table><br>79. Who shared the positive impact of disconnecting from social media by giving evidence?`,
    options: [
        "Dewgong",
        "Lightning",
        "Infinity",
        "Ironman",
        "Golden"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 1,
    score: 35,
    difficulty: "Easy"
},

// ==========================================
// SOAL 80
// ==========================================
{
    text: `<table border="1" style="width:100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; margin-bottom: 10px;">
  <tr><td style="padding:8px; font-weight:bold; width:25%;">Stormy<br>04-08-2024</td><td style="padding:8px;">Social media can be a tempting distraction. It’s a pretty common experience to want to pick up your phone whenever you can’t focus or need a quick break. But you <b>may</b> find yourself struggling with endless doomscrolling, waiting for messages or comparing yourself to others. How do you disconnect from social media?</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Dewgong<br>05-08-2024</td><td style="padding:8px;">This is a great question! I’m going to be honest here and admit that I often fail at disconnecting from social media (predominantly just TikTok). But I am trying harder to set boundaries and give myself a break!</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Lightning<br>07-08-2024</td><td style="padding:8px;">I deleted Instagram a few weeks ago and have found a profound impact on my mental health. Since deleting it, I am not constantly comparing myself to others anymore. I can appreciate little things more as I’m not bombarded with information.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Infinity<br>16-08-2024</td><td style="padding:8px;">For me, I am not active on social media but yes, as you said sometimes we keep scrolling and watching. I noticed I was spending hours of my time scrolling through reels to wind down, only to realize I had wasted my time.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Ironman<br>20-08-2024</td><td style="padding:8px;">Thanks for posting about this! I often find myself doomscrolling social media during the night when I feel like I haven’t found time for myself during the day. It definitely has had impacts on my sleep schedule and I’m not proud of it, but I have been able to reduce the use of social media in the past few months.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Golden<br>28-08-2024</td><td style="padding:8px;">This is a really good post. I am curious to hear what others have to say on the topic. I definitely could use less social media by installing Flora app that helps you stay off your phone, but this is still a work in progress.</td></tr>
</table><br>80. The aim of Golden’s response to Stormy’s post is to ....`,
    options: [
        "Find other solutions to disconnect from social media",
        "Talk about his/her experience in using social media",
        "Share one effective way to limit social media use",
        "Introduce an app to maximize social media use",
        "Show how to create a social media apps"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 0,
    score: 50,
    difficulty: "Medium"
},

// ==========================================
// SOAL 81
// ==========================================
{
    text: `<table border="1" style="width:100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; margin-bottom: 10px;">
  <tr><td style="padding:8px; font-weight:bold; width:25%;">Stormy<br>04-08-2024</td><td style="padding:8px;">Social media can be a tempting distraction. It’s a pretty common experience to want to pick up your phone whenever you can’t focus or need a quick break. But you <b>may</b> find yourself struggling with endless doomscrolling, waiting for messages or comparing yourself to others. How do you disconnect from social media?</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Dewgong<br>05-08-2024</td><td style="padding:8px;">This is a great question! I’m going to be honest here and admit that I often fail at disconnecting from social media (predominantly just TikTok). But I am trying harder to set boundaries and give myself a break!</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Lightning<br>07-08-2024</td><td style="padding:8px;">I deleted Instagram a few weeks ago and have found a profound impact on my mental health. Since deleting it, I am not constantly comparing myself to others anymore. I can appreciate little things more as I’m not bombarded with information.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Infinity<br>16-08-2024</td><td style="padding:8px;">For me, I am not active on social media but yes, as you said sometimes we keep scrolling and watching. I noticed I was spending hours of my time scrolling through reels to wind down, only to realize I had wasted my time.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Ironman<br>20-08-2024</td><td style="padding:8px;">Thanks for posting about this! I often find myself doomscrolling social media during the night when I feel like I haven’t found time for myself during the day. It definitely has had impacts on my sleep schedule and I’m not proud of it, but I have been able to reduce the use of social media in the past few months.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Golden<br>28-08-2024</td><td style="padding:8px;">This is a really good post. I am curious to hear what others have to say on the topic. I definitely could use less social media by installing Flora app that helps you stay off your phone, but this is still a work in progress.</td></tr>
</table><br>81. Who posted the most relevant answer to Stormy’s question?`,
    options: [
        "Dewgong and Lightning",
        "Dewgong and Infinity",
        "Lightning and Golden",
        "Infinity and Ironman",
        "Ironman and Golden"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 3,
    score: 50,
    difficulty: "Medium"
},

// ==========================================
// SOAL 82
// ==========================================
{
    text: `<table border="1" style="width:100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; margin-bottom: 10px;">
  <tr><td style="padding:8px; font-weight:bold; width:25%;">Stormy<br>04-08-2024</td><td style="padding:8px;">Social media can be a tempting distraction. It’s a pretty common experience to want to pick up your phone whenever you can’t focus or need a quick break. But you <b>may</b> find yourself struggling with endless doomscrolling, waiting for messages or comparing yourself to others. How do you disconnect from social media?</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Dewgong<br>05-08-2024</td><td style="padding:8px;">This is a great question! I’m going to be honest here and admit that I often fail at disconnecting from social media (predominantly just TikTok). But I am trying harder to set boundaries and give myself a break!</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Lightning<br>07-08-2024</td><td style="padding:8px;">I deleted Instagram a few weeks ago and have found a profound impact on my mental health. Since deleting it, I am not constantly comparing myself to others anymore. I can appreciate little things more as I’m not bombarded with information.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Infinity<br>16-08-2024</td><td style="padding:8px;">For me, I am not active on social media but yes, as you said sometimes we keep scrolling and watching. I noticed I was spending hours of my time scrolling through reels to wind down, only to realize I had wasted my time.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Ironman<br>20-08-2024</td><td style="padding:8px;">Thanks for posting about this! I often find myself doomscrolling social media during the night when I feel like I haven’t found time for myself during the day. It definitely has had impacts on my sleep schedule and I’m not proud of it, but I have been able to reduce the use of social media in the past few months.</td></tr>
  <tr><td style="padding:8px; font-weight:bold;">Golden<br>28-08-2024</td><td style="padding:8px;">This is a really good post. I am curious to hear what others have to say on the topic. I definitely could use less social media by installing Flora app that helps you stay off your phone, but this is still a work in progress.</td></tr>
</table><br>82. What is the tone of the thread?`,
    options: [
        "Professional",
        "Emotional",
        "Sarcastic",
        "Provocative",
        "Introspective"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 4,
    score: 50,
    difficulty: "Medium"
},

// ==========================================
// SOAL 83
// ==========================================
{
    text: `The Power of Scent Marketing: Branding and Atmosphere

You have heard of scent marketing. You might have even heard some of the hype surrounding it-so many major brands use scent marketing. However, you may be wondering how a plug-in could improve your business. Sure, there is nothing wrong with using a simple air freshener to thread and banish unwanted smells, but scent marketing is so much more than air freshening.

Scent marketing is the use of a strategically chosen fragrance diffused at customer touchpoints. The right fragrance and strategy will communicate a clear, likable brand identity. Scent marketing increases sales and brand loyalty by creating unique customer experiences. There are two main types of scent marketing strategies, scent branding and ambient scenting.

The first scent marketing strategy is scent branding. What if you could make your brand instantly recognizable without needing to display your logo? The world’s most powerful brands lie in the minds of consumers. However, while visual recognition is powerful, factory recognition is much more powerful. Memories related to scent are resistant to time and more easily recalled. Our sense of smell is the only sense that reaches us at a deep, instinctual level by tapping directly to the pleasure center of the brain-and the emotions, memories, and creativity that live there. A scent marketing system allows you to access an under-used touchpoint with customers. It is a unique way to make your brand stand out in a crowded marketplace.

The second scent marketing strategy is known as ambient scenting strategy. For some businesses, setting the tone for your business is more than branding. It is a powerful tool to manage customer touchpoints and create a pleasant atmosphere that builds trust and makes customers want to return. There have been many studies on the power of scent to affect mood. Ambient scenting with a scent marketing system allows you to direct customers in a gentle yet impactful way. By putting customers in the right mind-set, you can enhance customer experience and help to mitigate stress and anxiety during tough customer interactions. For example, gyms and fitness facilities often incorporate bright, invigorating scents which inspire action and make members feel more prepared to tackle their workout.

83. According to the text, memories related to scent ....`,
    options: [
        "Prof direct customers in a gentle yet impactful way",
        "put customers in the right mind-set",
        "can enhance customer experience",
        "are long lasting and easy to remember",
        "are the most powerful brand in the minds of consumers"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 3,
    score: 35,
    difficulty: "Easy"
},

// ==========================================
// SOAL 84
// ==========================================
{
    text: `The Power of Scent Marketing: Branding and Atmosphere

You have heard of scent marketing. You might have even heard some of the hype surrounding it-so many major brands use scent marketing. However, you may be wondering how a plug-in could improve your business. Sure, there is nothing wrong with using a simple air freshener to thread and banish unwanted smells, but scent marketing is so much more than air freshening.

Scent marketing is the use of a strategically chosen fragrance diffused at customer touchpoints. The right fragrance and strategy will communicate a clear, likable brand identity. Scent marketing increases sales and brand loyalty by creating unique customer experiences. There are two main types of scent marketing strategies, scent branding and ambient scenting.

The first scent marketing strategy is scent branding. What if you could make your brand instantly recognizable without needing to display your logo? The world’s most powerful brands lie in the minds of consumers. However, while visual recognition is powerful, factory recognition is much more powerful. Memories related to scent are resistant to time and more easily recalled. Our sense of smell is the only sense that reaches us at a deep, instinctual level by tapping directly to the pleasure center of the brain-and the emotions, memories, and creativity that live there. A scent marketing system allows you to access an under-used touchpoint with customers. It is a unique way to make your brand stand out in a crowded marketplace.

The second scent marketing strategy is known as ambient scenting strategy. For some businesses, setting the tone for your business is more than branding. It is a powerful tool to manage customer touchpoints and create a pleasant atmosphere that builds trust and makes customers want to return. There have been many studies on the power of scent to affect mood. Ambient scenting with a scent marketing system allows you to direct customers in a gentle yet impactful way. By putting customers in the right mind-set, you can enhance customer experience and help to mitigate stress and anxiety during tough customer interactions. For example, gyms and fitness facilities often incorporate bright, invigorating scents which inspire action and make members feel more prepared to tackle their workout.

84. The phrase “a pleasant atmosphere” in paragraph 4 is closest in meaning to ....`,
    options: [
        "a safe situation",
        "a quiet moment",
        "a calm surrounding",
        "a festive environment",
        "a delightful ambience"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 4,
    score: 35,
    difficulty: "Easy"
},

// ==========================================
// SOAL 85
// ==========================================
{
    text: `The Power of Scent Marketing: Branding and Atmosphere

You have heard of scent marketing. You might have even heard some of the hype surrounding it-so many major brands use scent marketing. However, you may be wondering how a plug-in could improve your business. Sure, there is nothing wrong with using a simple air freshener to thread and banish unwanted smells, but scent marketing is so much more than air freshening.

Scent marketing is the use of a strategically chosen fragrance diffused at customer touchpoints. The right fragrance and strategy will communicate a clear, likable brand identity. Scent marketing increases sales and brand loyalty by creating unique customer experiences. There are two main types of scent marketing strategies, scent branding and ambient scenting.

The first scent marketing strategy is scent branding. What if you could make your brand instantly recognizable without needing to display your logo? The world’s most powerful brands lie in the minds of consumers. However, while visual recognition is powerful, factory recognition is much more powerful. Memories related to scent are resistant to time and more easily recalled. Our sense of smell is the only sense that reaches us at a deep, instinctual level by tapping directly to the pleasure center of the brain-and the emotions, memories, and creativity that live there. A scent marketing system allows you to access an under-used touchpoint with customers. It is a unique way to make your brand stand out in a crowded marketplace.

The second scent marketing strategy is known as ambient scenting strategy. For some businesses, setting the tone for your business is more than branding. It is a powerful tool to manage customer touchpoints and create a pleasant atmosphere that builds trust and makes customers want to return. There have been many studies on the power of scent to affect mood. Ambient scenting with a scent marketing system allows you to direct customers in a gentle yet impactful way. By putting customers in the right mind-set, you can enhance customer experience and help to mitigate stress and anxiety during tough customer interactions. For example, gyms and fitness facilities often incorporate bright, invigorating scents which inspire action and make members feel more prepared to tackle their workout.

85. Which of the following best describes the main idea of text?`,
    options: [
        "Scent marketing is a field that is under study",
        "Good smells help reducing customer’s anxiety",
        "Scent modification may be used to attract consumers",
        "Scent and sight last longer in customers’ minds and memories",
        "It is possible to earn profit from a business even with an unusual smell"
    ],
    answer: null,
    doubt: false,
    correctAnswer: 2,
    score: 50,
    difficulty: "Medium"
},

// ==========================================
// SOAL 86
// ==========================================
{
    text: `TEXT 1
Indonesia's economic landscape, while certainly influenced by persistent global headwinds, remains robust and demonstrates remarkable resilience. From the government's perspective, the nation's economic fundamentals are strong, evidenced by a stable growth trajectory and controlled inflation. Despite global economic slowdowns, geopolitical tensions, and fluctuating commodity prices, Indonesia has managed to maintain positive growth, with Q1 2025 seeing GDP growth of 4.87% year-on-year. This performance is a testament to sound macroeconomic policies, including disciplined fiscal management and responsive monetary policies by Bank Indonesia, which have helped keep inflation within target ranges (e.g., 1.57% year-on-year in December 2024).

The government's strategic focus on domestic consumption, which contributes over 56% of GDP, has been a key driver of this stability. Policies designed to boost purchasing power, such as holiday allowances and the 13th-month salary for civil servants, have supported household consumption. Furthermore, significant investments in infrastructure and the digital economy are laying the groundwork for future growth. The digital economy, projected to reach $146 billion by 2025, is a burgeoning sector attracting substantial foreign direct investment (FDI). The Job Creation Law has also played a crucial role in enhancing the investment climate, simplifying regulations, and improving labor market flexibility, which in turn boosts Indonesia's competitiveness on the global stage.

Challenges, though acknowledged, are being actively addressed. While global trade contractions and deindustrialization trends exist, the government is committed to export diversification and promoting sustainable industrial transformation. The unemployment rate, while a concern, is also being tackled through synergistic efforts between the Ministry of Higher Education, Science, and Technology, the Ministry of Manpower, and various industries to improve job absorption for graduates and address the impact of deindustrialization. Overall, the government views Indonesia's economic future with optimism, confident that ongoing structural reforms and strategic investments will pave the way for sustained, inclusive growth and position Indonesia as a leader in regional economic development.

TEXT 2
While official reports may paint a picture of economic resilience, for many Indonesian citizens, the reality on the ground feels far more challenging. Despite positive GDP growth figures, the benefits of this growth often do not trickle down effectively, leading to persistent issues of inequality and a squeezed middle class. The declining size of Indonesia's middle class, coupled with sluggish real wage growth, indicates that everyday Indonesians are grappling with rising living costs and limited improvements in their economic well-being.

Inflation, even when seemingly controlled at a macroeconomic level, can significantly impact household budgets, particularly for lower-income families where a large portion of income is spent on basic necessities like food. Furthermore, the issue of unemployment remains a pressing concern, especially for the youth and in less developed regions. While the government cites efforts to link graduates with industries, many still face difficulties finding stable and well-paying jobs, leading to underemployment and job insecurity. Layoffs in various industries, including the textile and technology sectors, further compound these anxieties.

Beyond direct economic indicators, systemic issues like corruption and bureaucratic inefficiencies continue to erode public trust and hinder genuine economic progress. Reports of significant state budget leakage due to corruption mean that public funds intended for welfare and development often do not reach their intended recipients, further exacerbating the plight of vulnerable communities. The relaxation of import policies has also led to concerns among domestic industries, with some sectors like textiles facing collapse due to increased competition, resulting in job losses for thousands. For the average Indonesian citizen, the focus shifts from grand economic targets to the daily struggle of making ends meet, securing stable employment, and experiencing a tangible improvement in their quality of life amidst these ongoing economic pressures and perceived inequalities.

86. Which of the following best describes the fundamental difference in perspective between Text 1 and Text 2?`,
    options: [
        "Text 1 focuses on export growth, while Text 2 focuses on domestic consumption.",
        "Text 1 highlights the role of foreign investment, while Text 2 emphasizes local businesses.",
        "Text 1 presents an optimistic, top-down view of the economy, while Text 2 offers a more pessimistic, ground-level view.",
        "Text 1 discusses government policy successes, while Text 2 critiques the effectiveness of those policies.",
        "Text 1 emphasizes infrastructure development, while Text 2 focuses on agricultural output."
    ],
    answer: null,
    doubt: false,
    correctAnswer: 2,
    score: 50,
    difficulty: "Medium"
},

// ==========================================
// SOAL 87
// ==========================================
{
    text: `TEXT 1
Indonesia's economic landscape, while certainly influenced by persistent global headwinds, remains robust and demonstrates remarkable resilience. From the government's perspective, the nation's economic fundamentals are strong, evidenced by a stable growth trajectory and controlled inflation. Despite global economic slowdowns, geopolitical tensions, and fluctuating commodity prices, Indonesia has managed to maintain positive growth, with Q1 2025 seeing GDP growth of 4.87% year-on-year. This performance is a testament to sound macroeconomic policies, including disciplined fiscal management and responsive monetary policies by Bank Indonesia, which have helped keep inflation within target ranges (e.g., 1.57% year-on-year in December 2024).

The government's strategic focus on domestic consumption, which contributes over 56% of GDP, has been a key driver of this stability. Policies designed to boost purchasing power, such as holiday allowances and the 13th-month salary for civil servants, have supported household consumption. Furthermore, significant investments in infrastructure and the digital economy are laying the groundwork for future growth. The digital economy, projected to reach $146 billion by 2025, is a burgeoning sector attracting substantial foreign direct investment (FDI). The Job Creation Law has also played a crucial role in enhancing the investment climate, simplifying regulations, and improving labor market flexibility, which in turn boosts Indonesia's competitiveness on the global stage.

Challenges, though acknowledged, are being actively addressed. While global trade contractions and deindustrialization trends exist, the government is committed to export diversification and promoting sustainable industrial transformation. The unemployment rate, while a concern, is also being tackled through synergistic efforts between the Ministry of Higher Education, Science, and Technology, the Ministry of Manpower, and various industries to improve job absorption for graduates and address the impact of deindustrialization. Overall, the government views Indonesia's economic future with optimism, confident that ongoing structural reforms and strategic investments will pave the way for sustained, inclusive growth and position Indonesia as a leader in regional economic development.

TEXT 2
While official reports may paint a picture of economic resilience, for many Indonesian citizens, the reality on the ground feels far more challenging. Despite positive GDP growth figures, the benefits of this growth often do not trickle down effectively, leading to persistent issues of inequality and a squeezed middle class. The declining size of Indonesia's middle class, coupled with sluggish real wage growth, indicates that everyday Indonesians are grappling with rising living costs and limited improvements in their economic well-being.

Inflation, even when seemingly controlled at a macroeconomic level, can significantly impact household budgets, particularly for lower-income families where a large portion of income is spent on basic necessities like food. Furthermore, the issue of unemployment remains a pressing concern, especially for the youth and in less developed regions. While the government cites efforts to link graduates with industries, many still face difficulties finding stable and well-paying jobs, leading to underemployment and job insecurity. Layoffs in various industries, including the textile and technology sectors, further compound these anxieties.

Beyond direct economic indicators, systemic issues like corruption and bureaucratic inefficiencies continue to erode public trust and hinder genuine economic progress. Reports of significant state budget leakage due to corruption mean that public funds intended for welfare and development often do not reach their intended recipients, further exacerbating the plight of vulnerable communities. The relaxation of import policies has also led to concerns among domestic industries, with some sectors like textiles facing collapse due to increased competition, resulting in job losses for thousands. For the average Indonesian citizen, the focus shifts from grand economic targets to the daily struggle of making ends meet, securing stable employment, and experiencing a tangible improvement in their quality of life amidst these ongoing economic pressures and perceived inequalities.

87. Regarding inflation, how do the two texts differ in their portrayal?`,
    options: [
        "Text 1 claims inflation is completely eradicated, while Text 2 states it's soaring.",
        "Both texts agree that inflation is a major problem for all Indonesians.",
        "Text 1 presents inflation as controlled and within target ranges, while Text 2 highlights its significant impact on household budgets despite macro figures.",
        "Text 1 attributes inflation solely to global factors, while Text 2 blames government spending.",
        "Text 1 ignores inflation, while Text 2 makes it the central theme."
    ],
    answer: null,
    doubt: false,
    correctAnswer: 2,
    score: 35,
    difficulty: "Easy"
},

// ==========================================
// SOAL 88
// ==========================================
{
    text: `TEXT 1
Indonesia's economic landscape, while certainly influenced by persistent global headwinds, remains robust and demonstrates remarkable resilience. From the government's perspective, the nation's economic fundamentals are strong, evidenced by a stable growth trajectory and controlled inflation. Despite global economic slowdowns, geopolitical tensions, and fluctuating commodity prices, Indonesia has managed to maintain positive growth, with Q1 2025 seeing GDP growth of 4.87% year-on-year. This performance is a testament to sound macroeconomic policies, including disciplined fiscal management and responsive monetary policies by Bank Indonesia, which have helped keep inflation within target ranges (e.g., 1.57% year-on-year in December 2024).

The government's strategic focus on domestic consumption, which contributes over 56% of GDP, has been a key driver of this stability. Policies designed to boost purchasing power, such as holiday allowances and the 13th-month salary for civil servants, have supported household consumption. Furthermore, significant investments in infrastructure and the digital economy are laying the groundwork for future growth. The digital economy, projected to reach $146 billion by 2025, is a burgeoning sector attracting substantial foreign direct investment (FDI). The Job Creation Law has also played a crucial role in enhancing the investment climate, simplifying regulations, and improving labor market flexibility, which in turn boosts Indonesia's competitiveness on the global stage.

Challenges, though acknowledged, are being actively addressed. While global trade contractions and deindustrialization trends exist, the government is committed to export diversification and promoting sustainable industrial transformation. The unemployment rate, while a concern, is also being tackled through synergistic efforts between the Ministry of Higher Education, Science, and Technology, the Ministry of Manpower, and various industries to improve job absorption for graduates and address the impact of deindustrialization. Overall, the government views Indonesia's economic future with optimism, confident that ongoing structural reforms and strategic investments will pave the way for sustained, inclusive growth and position Indonesia as a leader in regional economic development.

TEXT 2
While official reports may paint a picture of economic resilience, for many Indonesian citizens, the reality on the ground feels far more challenging. Despite positive GDP growth figures, the benefits of this growth often do not trickle down effectively, leading to persistent issues of inequality and a squeezed middle class. The declining size of Indonesia's middle class, coupled with sluggish real wage growth, indicates that everyday Indonesians are grappling with rising living costs and limited improvements in their economic well-being.

Inflation, even when seemingly controlled at a macroeconomic level, can significantly impact household budgets, particularly for lower-income families where a large portion of income is spent on basic necessities like food. Furthermore, the issue of unemployment remains a pressing concern, especially for the youth and in less developed regions. While the government cites efforts to link graduates with industries, many still face difficulties finding stable and well-paying jobs, leading to underemployment and job insecurity. Layoffs in various industries, including the textile and technology sectors, further compound these anxieties.

Beyond direct economic indicators, systemic issues like corruption and bureaucratic inefficiencies continue to erode public trust and hinder genuine economic progress. Reports of significant state budget leakage due to corruption mean that public funds intended for welfare and development often do not reach their intended recipients, further exacerbating the plight of vulnerable communities. The relaxation of import policies has also led to concerns among domestic industries, with some sectors like textiles facing collapse due to increased competition, resulting in job losses for thousands. For the average Indonesian citizen, the focus shifts from grand economic targets to the daily struggle of making ends meet, securing stable employment, and experiencing a tangible improvement in their quality of life amidst these ongoing economic pressures and perceived inequalities.

88. What is a key difference in how the texts address the issue of employment/unemployment?`,
    options: [
        "Text 1 denies the existence of unemployment, while Text 2 claims everyone is unemployed.",
        "Both texts present unemployment as a minor issue that is quickly being resolved.",
        "Text 1 emphasizes government efforts to improve job absorption and labor market flexibility, while Text 2 points to persistent difficulties in finding stable jobs and recent layoffs.",
        "Text 1 focuses on job creation in the digital sector, while Text 2 concentrates on job losses in traditional industries.",
        "Text 1 argues for more foreign workers, while Text 2 advocates for fewer."
    ],
    answer: null,
    doubt: false,
    correctAnswer: 2,
    score: 50,
    difficulty: "Medium"
},

// ==========================================
// SOAL 89
// ==========================================
{
    text: `TEXT 1
Indonesia's economic landscape, while certainly influenced by persistent global headwinds, remains robust and demonstrates remarkable resilience. From the government's perspective, the nation's economic fundamentals are strong, evidenced by a stable growth trajectory and controlled inflation. Despite global economic slowdowns, geopolitical tensions, and fluctuating commodity prices, Indonesia has managed to maintain positive growth, with Q1 2025 seeing GDP growth of 4.87% year-on-year. This performance is a testament to sound macroeconomic policies, including disciplined fiscal management and responsive monetary policies by Bank Indonesia, which have helped keep inflation within target ranges (e.g., 1.57% year-on-year in December 2024).

The government's strategic focus on domestic consumption, which contributes over 56% of GDP, has been a key driver of this stability. Policies designed to boost purchasing power, such as holiday allowances and the 13th-month salary for civil servants, have supported household consumption. Furthermore, significant investments in infrastructure and the digital economy are laying the groundwork for future growth. The digital economy, projected to reach $146 billion by 2025, is a burgeoning sector attracting substantial foreign direct investment (FDI). The Job Creation Law has also played a crucial role in enhancing the investment climate, simplifying regulations, and improving labor market flexibility, which in turn boosts Indonesia's competitiveness on the global stage.

Challenges, though acknowledged, are being actively addressed. While global trade contractions and deindustrialization trends exist, the government is committed to export diversification and promoting sustainable industrial transformation. The unemployment rate, while a concern, is also being tackled through synergistic efforts between the Ministry of Higher Education, Science, and Technology, the Ministry of Manpower, and various industries to improve job absorption for graduates and address the impact of deindustrialization. Overall, the government views Indonesia's economic future with optimism, confident that ongoing structural reforms and strategic investments will pave the way for sustained, inclusive growth and position Indonesia as a leader in regional economic development.

TEXT 2
While official reports may paint a picture of economic resilience, for many Indonesian citizens, the reality on the ground feels far more challenging. Despite positive GDP growth figures, the benefits of this growth often do not trickle down effectively, leading to persistent issues of inequality and a squeezed middle class. The declining size of Indonesia's middle class, coupled with sluggish real wage growth, indicates that everyday Indonesians are grappling with rising living costs and limited improvements in their economic well-being.

Inflation, even when seemingly controlled at a macroeconomic level, can significantly impact household budgets, particularly for lower-income families where a large portion of income is spent on basic necessities like food. Furthermore, the issue of unemployment remains a pressing concern, especially for the youth and in less developed regions. While the government cites efforts to link graduates with industries, many still face difficulties finding stable and well-paying jobs, leading to underemployment and job insecurity. Layoffs in various industries, including the textile and technology sectors, further compound these anxieties.

Beyond direct economic indicators, systemic issues like corruption and bureaucratic inefficiencies continue to erode public trust and hinder genuine economic progress. Reports of significant state budget leakage due to corruption mean that public funds intended for welfare and development often do not reach their intended recipients, further exacerbating the plight of vulnerable communities. The relaxation of import policies has also led to concerns among domestic industries, with some sectors like textiles facing collapse due to increased competition, resulting in job losses for thousands. For the average Indonesian citizen, the focus shifts from grand economic targets to the daily struggle of making ends meet, securing stable employment, and experiencing a tangible improvement in their quality of life amidst these ongoing economic pressures and perceived inequalities.

89. Which statement accurately reflects how the two texts discuss the "Job Creation Law" or similar government initiatives?`,
    options: [
        "Both texts praise the Job Creation Law as a universal success.",
        "Text 1 highlights the Job Creation Law as improving the investment climate and competitiveness, while Text 2 implicitly suggests such laws may not translate to improved citizen welfare.",
        "Text 1 expresses concern over the Job Creation Law's impact, while Text 2 fully supports it.",
        "Neither text mentions any specific government laws or initiatives.",
        "Text 1 blames the Job Creation Law for economic problems, while Text 2 credits it with all positive developments."
    ],
    answer: null,
    doubt: false,
    correctAnswer: 1,
    score: 50,
    difficulty: "Medium"
},

// ==========================================
// SOAL 90
// ==========================================
{
    text: `TEXT 1
Indonesia's economic landscape, while certainly influenced by persistent global headwinds, remains robust and demonstrates remarkable resilience. From the government's perspective, the nation's economic fundamentals are strong, evidenced by a stable growth trajectory and controlled inflation. Despite global economic slowdowns, geopolitical tensions, and fluctuating commodity prices, Indonesia has managed to maintain positive growth, with Q1 2025 seeing GDP growth of 4.87% year-on-year. This performance is a testament to sound macroeconomic policies, including disciplined fiscal management and responsive monetary policies by Bank Indonesia, which have helped keep inflation within target ranges (e.g., 1.57% year-on-year in December 2024).

The government's strategic focus on domestic consumption, which contributes over 56% of GDP, has been a key driver of this stability. Policies designed to boost purchasing power, such as holiday allowances and the 13th-month salary for civil servants, have supported household consumption. Furthermore, significant investments in infrastructure and the digital economy are laying the groundwork for future growth. The digital economy, projected to reach $146 billion by 2025, is a burgeoning sector attracting substantial foreign direct investment (FDI). The Job Creation Law has also played a crucial role in enhancing the investment climate, simplifying regulations, and improving labor market flexibility, which in turn boosts Indonesia's competitiveness on the global stage.

Challenges, though acknowledged, are being actively addressed. While global trade contractions and deindustrialization trends exist, the government is committed to export diversification and promoting sustainable industrial transformation. The unemployment rate, while a concern, is also being tackled through synergistic efforts between the Ministry of Higher Education, Science, and Technology, the Ministry of Manpower, and various industries to improve job absorption for graduates and address the impact of deindustrialization. Overall, the government views Indonesia's economic future with optimism, confident that ongoing structural reforms and strategic investments will pave the way for sustained, inclusive growth and position Indonesia as a leader in regional economic development.

TEXT 2
While official reports may paint a picture of economic resilience, for many Indonesian citizens, the reality on the ground feels far more challenging. Despite positive GDP growth figures, the benefits of this growth often do not trickle down effectively, leading to persistent issues of inequality and a squeezed middle class. The declining size of Indonesia's middle class, coupled with sluggish real wage growth, indicates that everyday Indonesians are grappling with rising living costs and limited improvements in their economic well-being.

Inflation, even when seemingly controlled at a macroeconomic level, can significantly impact household budgets, particularly for lower-income families where a large portion of income is spent on basic necessities like food. Furthermore, the issue of unemployment remains a pressing concern, especially for the youth and in less developed regions. While the government cites efforts to link graduates with industries, many still face difficulties finding stable and well-paying jobs, leading to underemployment and job insecurity. Layoffs in various industries, including the textile and technology sectors, further compound these anxieties.

Beyond direct economic indicators, systemic issues like corruption and bureaucratic inefficiencies continue to erode public trust and hinder genuine economic progress. Reports of significant state budget leakage due to corruption mean that public funds intended for welfare and development often do not reach their intended recipients, further exacerbating the plight of vulnerable communities. The relaxation of import policies has also led to concerns among domestic industries, with some sectors like textiles facing collapse due to increased competition, resulting in job losses for thousands. For the average Indonesian citizen, the focus shifts from grand economic targets to the daily struggle of making ends meet, securing stable employment, and experiencing a tangible improvement in their quality of life amidst these ongoing economic pressures and perceived inequalities.

90. Based on the two texts, which of the following is most likely to be a point of contention between the "government's optimistic outlook" and the "citizen's perspective"?`,
    options: [
        "The importance of global trade for Indonesia's economy.",
        "The role of Bank Indonesia in maintaining monetary stability.",
        "Whether economic growth figures accurately reflect the lived experiences and well-being of the majority of the population.",
        "The necessity of infrastructure development for long-term growth.",
        "The impact of natural disasters on the Indonesian economy."
    ],
    answer: null,
    doubt: false,
    correctAnswer: 2,
    score: 50,
    difficulty: "Medium"
}
    ],
},

"pm": {
    name: "Penalaran Matematika",
    duration: 30 * 60,
    questions: [
        // ==========================================
// SOAL 91
// ==========================================
{ 
    text: "Tito bekerja sebagai karyawan tetap di suatu perusahaan komputer di kota J. Tito memperoleh gaji pokok setiap tanggal 1. Selain gaji pokok, Tito juga mendapatkan tunjangan kesehatan dan keluarga dengan aturan sebagai berikut:\na) Besarnya tunjangan kesehatan = $\\frac{3}{10} \\times \\text{tunjangan keluarga}$\nb) Besarnya tunjangan keluarga = $\\text{Rp } 100.000 + \\frac{1}{5} \\times \\text{gaji pokok}$\n\nJika gaji pokok Tito di perusahaan itu adalah Rp 4.000.000,- maka besarnya tunjangan keluarga yang diperoleh Tito adalah ….", 
    options: [
        "Rp 900.000,-", 
        "Rp 950.000,-", 
        "Rp 1.000.000,-", 
        "Rp 1.050.000,-", 
        "Rp 1.100.000,-"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 0, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 92
// ==========================================
{ 
    text: "Tito bekerja sebagai karyawan tetap di suatu perusahaan komputer di kota J. Tito memperoleh gaji pokok setiap tanggal 1. Selain gaji pokok, Tito juga mendapatkan tunjangan kesehatan dan keluarga dengan aturan sebagai berikut:\na) Besarnya tunjangan kesehatan = $\\frac{3}{10} \\times \\text{tunjangan keluarga}$\nb) Besarnya tunjangan keluarga = $\\text{Rp } 100.000 + \\frac{1}{5} \\times \\text{gaji pokok}$\n\nJika besarnya tunjangan kesehatan Tito adalah Rp 420.000,- maka besarnya gaji pokok Tito di perusahaan itu adalah ….", 
    options: [
        "Rp. 5.500.000,-", 
        "Rp. 6.000.000,-", 
        "Rp. 6.500.000,-", 
        "Rp. 7.000.000,-", 
        "Rp. 7.500.000,-"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 2, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 93
// ==========================================
{ 
    text: "Tito bekerja sebagai karyawan tetap di suatu perusahaan komputer di kota J. Tito memperoleh gaji pokok setiap tanggal 1. Selain gaji pokok, Tito juga mendapatkan tunjangan kesehatan dan keluarga dengan aturan sebagai berikut:\na) Besarnya tunjangan kesehatan = $\\frac{3}{10} \\times \\text{tunjangan keluarga}$\nb) Besarnya tunjangan keluarga = $\\text{Rp } 100.000 + \\frac{1}{5} \\times \\text{gaji pokok}$\n\nJika gaji pokok yang diterima Tito adalah $\\frac{7}{5}X$ rupiah, maka besarnya tunjangan kesehatan yang diterima Tito dalam $X$ adalah …. rupiah.", 
    options: [
        "$\\frac{21}{25}X + 100.000$", 
        "$\\frac{7}{25}X + 100.000$", 
        "$\\frac{21}{250}X + 100.000$", 
        "$\\frac{21}{250}X + 30.000$", 
        "$\\frac{7}{25}X + 30.000$"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 3, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 94
// ==========================================
{ 
    text: "Tito bekerja sebagai karyawan tetap di suatu perusahaan komputer di kota J. Tito memperoleh gaji pokok setiap tanggal 1. Selain gaji pokok, Tito juga mendapatkan tunjangan kesehatan dan keluarga dengan aturan sebagai berikut:\na) Besarnya tunjangan kesehatan = $\\frac{3}{10} \\times \\text{tunjangan keluarga}$\nb) Besarnya tunjangan keluarga = $\\text{Rp } 100.000 + \\frac{1}{5} \\times \\text{gaji pokok}$\n\nJika Tito ada tanggungan di perusahaan dan mengangsur Rp 450.000 per bulan dan besar tunjangan kesehatan adalah Rp 344.400,- maka total pendapatan setiap bulan yang diterima Tito adalah ….", 
    options: [
        "Rp. 5.240.000,-", 
        "Rp. 5.460.200,-", 
        "Rp. 5.870.600,-", 
        "Rp. 6.282.400,-", 
        "Rp. 6.702.400"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 3, 
    score: 50, 
    difficulty: "Medium" 
},

            // ==========================================
// SOAL 95
// ==========================================
{ 
    text: "Dalam rangka memperingati hari kemerdekaan Indonesia ke 80, RT 18 akan membentuk panitia yang terdiri dari laki-laki dan perempuan dewasa. Pada hari ini diadakan rapat untuk membentuk panitia inti yang terdiri dari ketua, sekretaris dan bendahara panitia 17-an RT 18. Pengurus lain akan dibentuk setelah pengurus inti terpilih. Rapat tersebut dihadiri oleh 15 laki-laki dan 20 perempuan dewasa warga RT 18. Pengurus inti panitia dipilih dari peserta rapat yang hadir.\n\nBanyak cara terpilihnya pengurus inti panitia 17-an dengan bendahara laki-laki adalah …. cara.", 
    options: [
        "14.380", 
        "14.840", 
        "15.670", 
        "16.140", 
        "16.830"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 4, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 96
// ==========================================
{ 
    text: "Dalam rangka memperingati hari kemerdekaan Indonesia ke 80, RT 18 akan membentuk panitia yang terdiri dari laki-laki dan perempuan dewasa. Pada hari ini diadakan rapat untuk membentuk panitia inti yang terdiri dari ketua, sekretaris dan bendahara panitia 17-an RT 18. Pengurus lain akan dibentuk setelah pengurus inti terpilih. Rapat tersebut dihadiri oleh 15 laki-laki dan 20 perempuan dewasa warga RT 18. Pengurus inti panitia dipilih dari peserta rapat yang hadir.\n\nDalam rapat tersebut dipilih 3 orang untuk mengambil konsumsi di rumah Bu Dewi. Peluang terpilihnya ketiganya laki-laki adalah ….", 
    options: [
        "11 : 187", 
        "13 : 187", 
        "445 : 6.545", 
        "455 : 6.055", 
        "455 : 6.455"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 1, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 97
// ==========================================
{ 
    text: "Dalam rangka memperingati hari kemerdekaan Indonesia ke 80, RT 18 akan membentuk panitia yang terdiri dari laki-laki dan perempuan dewasa. Pada hari ini diadakan rapat untuk membentuk panitia inti yang terdiri dari ketua, sekretaris dan bendahara panitia 17-an RT 18. Pengurus lain akan dibentuk setelah pengurus inti terpilih. Rapat tersebut dihadiri oleh 15 laki-laki dan 20 perempuan dewasa warga RT 18. Pengurus inti panitia dipilih dari peserta rapat yang hadir.\n\nPada rapat tersebut juga akan dipilih 4 orang untuk berbelanja semua kebutuhan acara 17 agustusan di RT tersebut. Peluang terpilihnya 1 laki-laki 3 perempuan atau 1 perempuan 3 laki-laki untuk berbelanja adalah ….", 
    options: [
        "$\\frac{329}{662}$", 
        "$\\frac{327}{660}$", 
        "$\\frac{330}{666}$", 
        "$\\frac{36}{73}$", 
        "$\\frac{35}{77}$"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 3, 
    score: 65, 
    difficulty: "Hard" 
},

// ==========================================
// SOAL 98
// ==========================================
{ 
    text: "Dalam rangka memperingati hari kemerdekaan Indonesia ke 80, RT 18 akan membentuk panitia yang terdiri dari laki-laki dan perempuan dewasa. Pada hari ini diadakan rapat untuk membentuk panitia inti yang terdiri dari ketua, sekretaris dan bendahara panitia 17-an RT 18. Pengurus lain akan dibentuk setelah pengurus inti terpilih. Rapat tersebut dihadiri oleh 15 laki-laki dan 20 perempuan dewasa warga RT 18. Pengurus inti panitia dipilih dari peserta rapat yang hadir.\n\nPeluang terpilihnya ketua panitia laki-laki dengan sekretaris dan bendahara berbeda jenis kelamin adalah ….", 
    options: [
        "$\\frac{40}{187}$", 
        "$\\frac{80}{392}$", 
        "$\\frac{125}{594}$", 
        "$\\frac{364}{1.382}$", 
        "$\\frac{569}{1.777}$"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 0, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 99
// ==========================================
{ 
    text: "<img src=\"99-102.png\" style=\"max-width:100%; height:auto; margin-bottom: 10px;\" /><br>\nRadjaa adalah seorang penggembala sapi. Suatu hari ia menggembalakan sapi di sebuah lapangan berbentuk persegi panjang yang penuh dengan rumput segar. Jika pojok-pojok lapangan diberikan titik JKLM maka akan membentuk persegi panjang JKLM seperti pada gambar dengan panjang JK adalah 24 meter dan panjang KL adalah 18 meter.\n\nSapi Radjaa ditambatkan pada sisi JM dengan panjang tali a meter. Pangkal tali ditambatkan di titik B dengan x meter dari sudut L.\n\nDaerah merumput sapi akan maksimal dengan luas daerah adalah ….", 
    options: [
        "$\\frac{41}{4} \\pi$", 
        "$\\frac{51}{4} \\pi$", 
        "$\\frac{61}{4} \\pi$", 
        "$\\frac{71}{4} \\pi$", 
        "$\\frac{81}{4} \\pi$"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 4, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 100
// ==========================================
{ 
    text: "<img src=\"99-102.png\" style=\"max-width:100%; height:auto; margin-bottom: 10px;\" /><br>\nRadjaa adalah seorang penggembala sapi. Suatu hari ia menggembalakan sapi di sebuah lapangan berbentuk persegi panjang yang penuh dengan rumput segar. Jika pojok-pojok lapangan diberikan titik JKLM maka akan membentuk persegi panjang JKLM seperti pada gambar dengan panjang JK adalah 24 meter dan panjang KL adalah 18 meter.\n\nSapi Radjaa ditambatkan pada sisi JM dengan panjang tali a meter. Pangkal tali ditambatkan di titik B dengan x meter dari sudut L.\n\nJika diketahui bahwa panjang tali lebih dari 0 meter tetapi kurang dari 12 meter, maka daerah merumput sapi akan maksimal jika ….", 
    options: [
        "$\\frac{a}{2} \\leq x \\leq 12 + \\frac{a}{2}$", 
        "$12 - a \\leq x \\leq 24 - a$", 
        "$\\frac{a}{2} \\leq x \\leq 12 + a$", 
        "$a \\leq x \\leq 12 + a$", 
        "$a \\leq x \\leq 24 - a$"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 4, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 101
// ==========================================
{ 
    text: "<img src=\"99-102.png\" style=\"max-width:100%; height:auto; margin-bottom: 10px;\" /><br>\nRadjaa adalah seorang penggembala sapi. Suatu hari ia menggembalakan sapi di sebuah lapangan berbentuk persegi panjang yang penuh dengan rumput segar. Jika pojok-pojok lapangan diberikan titik JKLM maka akan membentuk persegi panjang JKLM seperti pada gambar dengan panjang JK adalah 24 meter dan panjang KL adalah 18 meter.\n\nPada hari ini Radjaa menggembalakan 2 sapi. Misalkan $BL = x = 6$ meter dan panjang tali sapi pertama adalah $a$ meter dengan $a \\leq 18$ meter. Sapi kedua ditempatkan di titik C pada sisi JM. Panjang CM adalah 12 meter. Supaya kedua sapi tidak bertemu dan berebut rumput, maka panjang tali kedua tidak boleh lebih dari …. meter.", 
    options: [
        "$\\sqrt{466} + a$", 
        "$2\\sqrt{233} + a$", 
        "$4\\sqrt{29} - a$", 
        "$6\\sqrt{19} - a$", 
        "$8\\sqrt{11} + 2a$"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 2, 
    score: 65, 
    difficulty: "Hard" 
},

// ==========================================
// SOAL 102
// ==========================================
{ 
    text: "<img src=\"99-102.png\" style=\"max-width:100%; height:auto; margin-bottom: 10px;\" /><br>\nRadjaa adalah seorang penggembala sapi. Suatu hari ia menggembalakan sapi di sebuah lapangan berbentuk persegi panjang yang penuh dengan rumput segar. Jika pojok-pojok lapangan diberikan titik JKLM maka akan membentuk persegi panjang JKLM seperti pada gambar dengan panjang JK adalah 24 meter dan panjang KL adalah 18 meter.\n\nPada hari ini Radjaa menggembalakan 2 sapi. Sapi pertama ditambatkan di sudut L dengan panjang tali $12 \\leq a \\leq 18$ dan sapi kedua ditambatkan di sudut J. Jika panjang tali sapi kedua adalah maksimal sehingga kedua kambing tidak berebut rumput, jumlah luas daerah merumput kedua sapi akan mencapai nilai minimum untuk panjang tali sapi pertama adalah ….", 
    options: [
        "7,5 m", 
        "10 m", 
        "12,5 m", 
        "15 m", 
        "17,5 m"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 3, 
    score: 50, 
    difficulty: "Medium" 
},

// ==========================================
// SOAL 103
// ==========================================
{ 
    text: "Biaya administrasi untuk penukaran mata uang Euro ke Ringgit Malaysia adalah 3 Euro, sedangkan biaya administrasi untuk penukaran Ringgit Malaysia ke Rupiah Indonesia adalah 5 Ringgit Malaysia. Besar nilai tukar antara ketiga mata uang tersebut adalah sebagai berikut:\n1 EUR = 5 Ringgit Malaysia\n1 RM = 3.850 Rupiah Indonesia\n\nLiam seorang turis asal Italia akan berkunjung ke Malaysia dan membawa uang sebanyak $n$ EUR. Persamaan fungsi penukaran nilai mata uang dalam Ringgit Malaysia jika uang Liam ditukarkan semua adalah ….", 
    options: [
        "$5n - 15$", 
        "$5n - 5$", 
        "$3n - 25$", 
        "$3n - 15$", 
        "$3n + 5$"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 0, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 104
// ==========================================
{ 
    text: "Biaya administrasi untuk penukaran mata uang Euro ke Ringgit Malaysia adalah 3 Euro, sedangkan biaya administrasi untuk penukaran Ringgit Malaysia ke Rupiah Indonesia adalah 5 Ringgit Malaysia. Besar nilai tukar antara ketiga mata uang tersebut adalah sebagai berikut:\n1 EUR = 5 Ringgit Malaysia\n1 RM = 3.850 Rupiah Indonesia\n\nLiam seorang turis asal Italia akan berkunjung ke Malaysia dan menukar uang sebanyak 3.000 EUR. Pada saat di Malaysia Liam berbelanja sebanyak 9.485 RM. Sisa uang yang sudah di tukar Liam adalah ….", 
    options: [
        "5.000 RM", 
        "5.500 RM", 
        "6.000 RM", 
        "6.500 RM", 
        "7.000 RM"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 1, 
    score: 35, 
    difficulty: "Easy" 
},

// ==========================================
// SOAL 105
// ==========================================
{ 
    text: "Biaya administrasi untuk penukaran mata uang Euro ke Ringgit Malaysia adalah 3 Euro, sedangkan biaya administrasi untuk penukaran Ringgit Malaysia ke Rupiah Indonesia adalah 5 Ringgit Malaysia. Besar nilai tukar antara ketiga mata uang tersebut adalah sebagai berikut:\n1 EUR = 5 Ringgit Malaysia\n1 RM = 3.850 Rupiah Indonesia\n\nRooney seorang turis dari Swiss akan berlibur ke Indonesia dengan menggunakan pesawat yang akan transit di Malaysia. Saat akan berangkat dari Swiss, Rooney menukarkan $x$ EUR ke Ringgit Malaysia dan saat di Malaysia menukarkan kembali uang ringgitnya menjadi $y$ Rupiah Indonesia. Persamaan yang menyatakan $y$ adalah fungsi dari $x$ adalah ….", 
    options: [
        "$y = 19.200x - 75.000$", 
        "$y = 19.225x - 76.000$", 
        "$y = 19.235x - 76.500$", 
        "$y = 19.250x - 77.000$", 
        "$y = 19.300x - 77.500$"
    ], 
    answer: null, 
    doubt: false, 
    correctAnswer: 3, 
    score: 50, 
    difficulty: "Medium" 
        }
]
}
};
