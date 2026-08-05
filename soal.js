// File: soal.js
const examData = {
"pu": {
        name: "Penalaran Umum",
        duration: 30 * 60, // 30 Menit
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
    duration: 25 * 60, // 25 Menit 
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
    text: "Bacaan berikut untuk menjawab soal nomor 43—45.\n(1) Tujuan pendidikan adalah mengembangkan dan mengoptimalkan daya anak didik agar siap menyongsong masa depan sesuai dengan zamannya. (2) Saat ini teknologi yang berkembang dengan pesat memicu pada perubahan yang cepat pula, bahkan tidak terduga. (3) Laporan Dell Technology menyebutkan bahwa 85 persen pekerjaan pada 2030 yang akan dimasuki Generasi Z dan Alpha belum ditemukan. (4) Sementara itu, konsep otomasi di era 4.0 juga akan mengubah struktur dan lapangan pekerjaan. (5) Padahal, institusi dari pendidikan formal saat ini dinilai belum optimal membekali siswa dengan keterampilan praktis yang menjadi modal siswa untuk mengembangkan diri secara mandiri atau masuk dunia kerja. (6) Paradigma pendidikan sudah bergeser mengikuti perkembangan zaman, tetapi sistem pendidikan belum....\n\nKata yang harus dihilangkan pada kalimat (5) adalah ….", 
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
    text: "Bacaan berikut untuk menjawab soal nomor 43—45.\n(1) Tujuan pendidikan adalah mengembangkan dan mengoptimalkan daya anak didik agar siap menyongsong masa depan sesuai dengan zamannya. (2) Saat ini teknologi yang berkembang dengan pesat memicu pada perubahan yang cepat pula, bahkan tidak terduga. (3) Laporan Dell Technology menyebutkan bahwa 85 persen pekerjaan pada 2030 yang akan dimasuki Generasi Z dan Alpha belum ditemukan. (4) Sementara itu, konsep otomasi di era 4.0 juga akan mengubah struktur dan lapangan pekerjaan. (5) Padahal, institusi dari pendidikan formal saat ini dinilai belum optimal membekali siswa dengan keterampilan praktis yang menjadi modal siswa untuk mengembangkan diri secara mandiri atau masuk dunia kerja. (6) Paradigma pendidikan sudah bergeser mengikuti perkembangan zaman, tetapi sistem pendidikan belum....\n\nKalimat (2) perlu disempurnakan dengan cara ….", 
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
    text: "Bacaan berikut untuk menjawab soal nomor 43—45.\n(1) Tujuan pendidikan adalah mengembangkan dan mengoptimalkan daya anak didik agar siap menyongsong masa depan sesuai dengan zamannya. (2) Saat ini teknologi yang berkembang dengan pesat memicu pada perubahan yang cepat pula, bahkan tidak terduga. (3) Laporan Dell Technology menyebutkan bahwa 85 persen pekerjaan pada 2030 yang akan dimasuki Generasi Z dan Alpha belum ditemukan. (4) Sementara itu, konsep otomasi di era 4.0 juga akan mengubah struktur dan lapangan pekerjaan. (5) Padahal, institusi dari pendidikan formal saat ini dinilai belum optimal membekali siswa dengan keterampilan praktis yang menjadi modal siswa untuk mengembangkan diri secara mandiri atau masuk dunia kerja. (6) Paradigma pendidikan sudah bergeser mengikuti perkembangan zaman, tetapi sistem pendidikan belum....\n\nAgar sesuai dengan konteks bacaan, pernyataan yang paling tepat untuk melengkapi kalimat (6) adalah ….", 
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
    text: "Keterangan berikut untuk mengerjakan soal nomor 51—53!\nGrafik fungsi $g(x) = x^2 - 20$ dan garis $ax - 2y + 30 = 0$ berpotongan di dua titik berbeda yaitu $P(a, b)$ dan $D(-5, r)$.\n\nNilai $a$ sama dengan ….", 
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
    text: "Keterangan berikut untuk mengerjakan soal nomor 51—53!\nGrafik fungsi $g(x) = x^2 - 20$ dan garis $ax - 2y + 30 = 0$ berpotongan di dua titik berbeda yaitu $P(a, b)$ dan $D(-5, r)$.\n\nGradien garis tersebut adalah ….", 
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
    text: "Keterangan berikut untuk mengerjakan soal nomor 51—53!\nGrafik fungsi $g(x) = x^2 - 20$ dan garis $ax - 2y + 30 = 0$ berpotongan di dua titik berbeda yaitu $P(a, b)$ dan $D(-5, r)$.\n\nPersamaan garis yang sejajar dengan garis tersebut dan melalui titik $(-1, 2)$ adalah ….", 
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
    duration: 45 * 60,
    questions: [
        // TEKS 1 (Soal 1-4)
        {
            text: "<b>TEKS 1</b><br>Susu merupakan minuman bergizi tinggj yang dibutuhkan oleh balita untuk dapat tumbuh dan berkembang secara optimal. Namun, susu sering kali digolongkan sebagai minuman yang berharga cukup mahal, terutama sediaan susu yang telah mengalami berbagai proses pengolahan. Di pasaran, susu tersedia dalam bentuk minuman kemasan yang biasanya telah ditambahkan sukrosa serta zat perisai tertentu untuk memberikan variasi rasa. Kandungan gizi dalam susu sangat dipengaruhi oleh jenis ternak yang menghasilkannya, jenis makanan yang dikonsumsi ternak, dan tingkat kesehatan ternak. Setiap 100 mL susu sapi murni rata-rata dapat menghasilkan energi sekitar 259 kJ<br><br>Umumnya, kandungan susu sapi murni menurut berat adalah 87% air, 3,7% lemak, 3,5% protein, 4,9% laktosa, 0,07% mineral, dan sisanya berupa berbagai jenis vitamin, enzim, dan lain-lain. Mineral yang terdapat dalam susu sapi murni di antaranya adalah kalsium, fosfor, natrium, besi, tembaga, dan seng. Kalsium dan fosfor merupakan mineral penting untuk pertumbuhan tulang dan gigi.<br><br>Susu juga mengandung vitamin yang larut dalam lemak, yaitu vitamin A, D, E, dan K, serta vitamin yang larut dalam air, yaitu vitamin B dan C. Selain itu, di dalam susu juga terdapat beberapa jenis enzim, seperti peroksidase, katalase, fosfatase, dan lipase. Lipase berfungsi untuk menghidrolisis lipid. Di antara enzim-enzim tersebut, peroksidase dan fosfatase umumnya digunakan sebagai indikator kecukupan pasteurisasi susu karena kedua enzim ini akan rusak pada suhu pasteurisasi, sementara vitamin, mineral, dan enzim lain tidak mengalami perubahan.<br><br>Simbol salah satu mineral yang terkandung dalam susu sesuai dengan bacaan di atas adalah…..",
            options: ["F", "N", "Be", "Cu", "Se"],
            answer: null, doubt: false, correctAnswer: 3, score: 30, difficulty: "Easy"
        },
        {
            text: "<b>TEKS 1</b><br>Susu merupakan minuman bergizi tinggj yang dibutuhkan oleh balita untuk dapat tumbuh dan berkembang secara optimal. Namun, susu sering kali digolongkan sebagai minuman yang berharga cukup mahal, terutama sediaan susu yang telah mengalami berbagai proses pengolahan. Di pasaran, susu tersedia dalam bentuk minuman kemasan yang biasanya telah ditambahkan sukrosa serta zat perisai tertentu untuk memberikan variasi rasa. Kandungan gizi dalam susu sangat dipengaruhi oleh jenis ternak yang menghasilkannya, jenis makanan yang dikonsumsi ternak, dan tingkat kesehatan ternak. Setiap 100 mL susu sapi murni rata-rata dapat menghasilkan energi sekitar 259 kJ<br><br>Umumnya, kandungan susu sapi murni menurut berat adalah 87% air, 3,7% lemak, 3,5% protein, 4,9% laktosa, 0,07% mineral, dan sisanya berupa berbagai jenis vitamin, enzim, dan lain-lain. Mineral yang terdapat dalam susu sapi murni di antaranya adalah kalsium, fosfor, natrium, besi, tembaga, dan seng. Kalsium dan fosfor merupakan mineral penting untuk pertumbuhan tulang dan gigi.<br><br>Susu juga mengandung vitamin yang larut dalam lemak, yaitu vitamin A, D, E, dan K, serta vitamin yang larut dalam air, yaitu vitamin B dan C. Selain itu, di dalam susu juga terdapat beberapa jenis enzim, seperti peroksidase, katalase, fosfatase, dan lipase. Lipase berfungsi untuk menghidrolisis lipid. Di antara enzim-enzim tersebut, peroksidase dan fosfatase umumnya digunakan sebagai indikator kecukupan pasteurisasi susu karena kedua enzim ini akan rusak pada suhu pasteurisasi, sementara vitamin, mineral, dan enzim lain tidak mengalami perubahan.<br><br>Menurut bacaan, senyawa karbohidrat yang terdapat dalam susu sapi murni adalah…..",
            options: ["amilum", "selulosa", "sukrosa", "laktosa", "vitamin"],
            answer: null, doubt: false, correctAnswer: 3, score: 30, difficulty: "Easy"
        },
        {
            text: "<b>TEKS 1</b><br>Susu merupakan minuman bergizi tinggj yang dibutuhkan oleh balita untuk dapat tumbuh dan berkembang secara optimal. Namun, susu sering kali digolongkan sebagai minuman yang berharga cukup mahal, terutama sediaan susu yang telah mengalami berbagai proses pengolahan. Di pasaran, susu tersedia dalam bentuk minuman kemasan yang biasanya telah ditambahkan sukrosa serta zat perisai tertentu untuk memberikan variasi rasa. Kandungan gizi dalam susu sangat dipengaruhi oleh jenis ternak yang menghasilkannya, jenis makanan yang dikonsumsi ternak, dan tingkat kesehatan ternak. Setiap 100 mL susu sapi murni rata-rata dapat menghasilkan energi sekitar 259 kJ<br><br>Umumnya, kandungan susu sapi murni menurut berat adalah 87% air, 3,7% lemak, 3,5% protein, 4,9% laktosa, 0,07% mineral, dan sisanya berupa berbagai jenis vitamin, enzim, dan lain-lain. Mineral yang terdapat dalam susu sapi murni di antaranya adalah kalsium, fosfor, natrium, besi, tembaga, dan seng. Kalsium dan fosfor merupakan mineral penting untuk pertumbuhan tulang dan gigi.<br><br>Susu juga mengandung vitamin yang larut dalam lemak, yaitu vitamin A, D, E, dan K, serta vitamin yang larut dalam air, yaitu vitamin B dan C. Selain itu, di dalam susu juga terdapat beberapa jenis enzim, seperti peroksidase, katalase, fosfatase, dan lipase. Lipase berfungsi untuk menghidrolisis lipid. Di antara enzim-enzim tersebut, peroksidase dan fosfatase umumnya digunakan sebagai indikator kecukupan pasteurisasi susu karena kedua enzim ini akan rusak pada suhu pasteurisasi, sementara vitamin, mineral, dan enzim lain tidak mengalami perubahan.<br><br>pernyataan yang benar tentang peroksidase dan lipase yang terdapat dalam susu adalah…..",
            options: ["peroksidase dapat menghidrolisis molekul lemak dalam susu", "lipase merupakan enzim yang terdenaturasi pada suhu pasteurisasi susu", "peroksidase akan mengalami perubahan warna pada suhu pasteurisasi susu", "lipase dalam susu akan menghidrolisis molekul laktosa menjadi asam karboksilat", "peroksidase dan lipase merupakan protein yang berfungsi sebagai biokatalisator"],
            answer: null, doubt: false, correctAnswer: 4, score: 35, difficulty: "Medium"
        },
        {
            text: "<b>TEKS 1</b><br>Susu merupakan minuman bergizi tinggj yang dibutuhkan oleh balita untuk dapat tumbuh dan berkembang secara optimal. Namun, susu sering kali digolongkan sebagai minuman yang berharga cukup mahal, terutama sediaan susu yang telah mengalami berbagai proses pengolahan. Di pasaran, susu tersedia dalam bentuk minuman kemasan yang biasanya telah ditambahkan sukrosa serta zat perisai tertentu untuk memberikan variasi rasa. Kandungan gizi dalam susu sangat dipengaruhi oleh jenis ternak yang menghasilkannya, jenis makanan yang dikonsumsi ternak, dan tingkat kesehatan ternak. Setiap 100 mL susu sapi murni rata-rata dapat menghasilkan energi sekitar 259 kJ<br><br>Umumnya, kandungan susu sapi murni menurut berat adalah 87% air, 3,7% lemak, 3,5% protein, 4,9% laktosa, 0,07% mineral, dan sisanya berupa berbagai jenis vitamin, enzim, dan lain-lain. Mineral yang terdapat dalam susu sapi murni di antaranya adalah kalsium, fosfor, natrium, besi, tembaga, dan seng. Kalsium dan fosfor merupakan mineral penting untuk pertumbuhan tulang dan gigi.<br><br>Susu juga mengandung vitamin yang larut dalam lemak, yaitu vitamin A, D, E, dan K, serta vitamin yang larut dalam air, yaitu vitamin B dan C. Selain itu, di dalam susu juga terdapat beberapa jenis enzim, seperti peroksidase, katalase, fosfatase, dan lipase. Lipase berfungsi untuk menghidrolisis lipid. Di antara enzim-enzim tersebut, peroksidase dan fosfatase umumnya digunakan sebagai indikator kecukupan pasteurisasi susu karena kedua enzim ini akan rusak pada suhu pasteurisasi, sementara vitamin, mineral, dan enzim lain tidak mengalami perubahan.<br><br>Pemanasan susu pada suhu yang sedikit lebih tinggi dari suhu pasteurisasi mengakibatkan.....",
            options: ["Hidrolisis molekul lemak sehingga susu menjadi asam lemak dan gliserol", "Denaturasi sebagian besar protein dan enzim sehingga menurunkan kualitas susu", "Katabolisme susu sehingga memperkecil kandungan energinya", "Penurunan kadar kalsium dan fosfor sehingga menurunkan gizi susu", "Degradasi vitamin dalam susu sehingga menimbulkan bau tidak sedap"],
            answer: null, doubt: false, correctAnswer: 1, score: 35, difficulty: "Medium"
        },

        // TEKS 2 (Soal 5-8) - FLUIDA
        {
            text: "<b>TEKS 2</b><br>Dinamika fluida berkaitan dengan tegangan geser yang menggambarkan pengaruh luar terhadap fluida dan laju regangan geser yang mengambarkan gerak fluida. Laju regangan fluida merupakan perubahan kecepatan fluida per satuan jarak. Untuk aliran fluida di dalam pipa, kecepatan v(r) merupakan kecepatan partikel fluida yang berada pada posisi radial r dari pusat pipa. Jadi, laju regangan geser sama dengan dv/dr. Sebagai contoh, fluida yang mengalir di dalam pipa dengan kecepatan v(r)=v_0 (R-r)/R) memiliki laju regangan geser -v_0/R yang seragam.<br><br>Berdasarkan hubungan antara tegangan geser dan regangan geser, fluida dapat dibagi atas fluida Newtonian dan fluida non-Newtonian. Fluida jenis pertama dicirikan oleh rasio antara tegangan geser dan laju regangan geser yang konstan. Rasio ini dinamakan viskositas dinamis fluida. Jadi, untuk fluida Newtonian, tegangan geser sebanding dengan laju regangan geser. Fluida jenis kedua tidak memiliki sifat seperti ini. Pada fluida jenis kedua, viskositas dinamis tidak konstan, tetapi bergantung pada laju regangan geser. Atas dasar sifat hubungan antara tegangan geser dan laju regangan geser, fluida non-Newtonian terbagi atas fluida Bingham, fluida dilatan, dan luida pseudoplastik. Gambar di bawah menunjukkan perbedaan hubungan antara tegangan geser dan laju regangan geser dari fluida Bingham dan fluida non-Newtonian.<br><br>Fluida Bingham mengalir dengan kelajuan geser tidak nol ketika nilai tegangan geser yang bekerja pada fluida…..",
            options: ["Lebih kecil dari yield stress", "Sama dengan nol", "Melampaui batas tegangan tertentu (yield stress)", "Berbanding terbalik dengan viskositas", "Konstan pada setiap tekanan"],
            answer: null, doubt: false, correctAnswer: 2, score: 35, difficulty: "Medium"
        },
        {
            text: "<b>TEKS 2</b><br>Dinamika fluida berkaitan dengan tegangan geser yang menggambarkan pengaruh luar terhadap fluida dan laju regangan geser yang mengambarkan gerak fluida. Laju regangan fluida merupakan perubahan kecepatan fluida per satuan jarak. Untuk aliran fluida di dalam pipa, kecepatan v(r) merupakan kecepatan partikel fluida yang berada pada posisi radial r dari pusat pipa. Jadi, laju regangan geser sama dengan dv/dr. Sebagai contoh, fluida yang mengalir di dalam pipa dengan kecepatan v(r)=v_0 (R-r)/R) memiliki laju regangan geser -v_0/R yang seragam.<br><br>Berdasarkan hubungan antara tegangan geser dan regangan geser, fluida dapat dibagi atas fluida Newtonian dan fluida non-Newtonian. Fluida jenis pertama dicirikan oleh rasio antara tegangan geser dan laju regangan geser yang konstan. Rasio ini dinamakan viskositas dinamis fluida. Jadi, untuk fluida Newtonian, tegangan geser sebanding dengan laju regangan geser. Fluida jenis kedua tidak memiliki sifat seperti ini. Pada fluida jenis kedua, viskositas dinamis tidak konstan, tetapi bergantung pada laju regangan geser. Atas dasar sifat hubungan antara tegangan geser dan laju regangan geser, fluida non-Newtonian terbagi atas fluida Bingham, fluida dilatan, dan luida pseudoplastik. Gambar di bawah menunjukkan perbedaan hubungan antara tegangan geser dan laju regangan geser dari fluida Bingham dan fluida non-Newtonian.<br><br>Kecepatan partikel fluida di pusat pipa dari fluida yang laju regangan gesernya disebutkan dalam bacaan sama dengan…..",
            options: ["Maksimum", "Nol", "Minimum", "Setengah dari kecepatan dinding", "Tidak dapat ditentukan"],
            answer: null, doubt: false, correctAnswer: 0, score: 35, difficulty: "Medium"
        },
        {
            text: "<b>TEKS 2</b><br>Dinamika fluida berkaitan dengan tegangan geser yang menggambarkan pengaruh luar terhadap fluida dan laju regangan geser yang mengambarkan gerak fluida. Laju regangan fluida merupakan perubahan kecepatan fluida per satuan jarak. Untuk aliran fluida di dalam pipa, kecepatan v(r) merupakan kecepatan partikel fluida yang berada pada posisi radial r dari pusat pipa. Jadi, laju regangan geser sama dengan dv/dr. Sebagai contoh, fluida yang mengalir di dalam pipa dengan kecepatan v(r)=v_0 (R-r)/R) memiliki laju regangan geser -v_0/R yang seragam.<br><br>Berdasarkan hubungan antara tegangan geser dan regangan geser, fluida dapat dibagi atas fluida Newtonian dan fluida non-Newtonian. Fluida jenis pertama dicirikan oleh rasio antara tegangan geser dan laju regangan geser yang konstan. Rasio ini dinamakan viskositas dinamis fluida. Jadi, untuk fluida Newtonian, tegangan geser sebanding dengan laju regangan geser. Fluida jenis kedua tidak memiliki sifat seperti ini. Pada fluida jenis kedua, viskositas dinamis tidak konstan, tetapi bergantung pada laju regangan geser. Atas dasar sifat hubungan antara tegangan geser dan laju regangan geser, fluida non-Newtonian terbagi atas fluida Bingham, fluida dilatan, dan luida pseudoplastik. Gambar di bawah menunjukkan perbedaan hubungan antara tegangan geser dan laju regangan geser dari fluida Bingham dan fluida non-Newtonian.<br><br>Pernyataan yang menunjukkan perbedaan fluida Bingham dengan fluida Newtonian yang benar adalah…..",
            options: ["Fluida Bingham mengalir dengan laju regangan tidak nol meskipun tegangan geser yang diberikan kecil", "Fluida Bingham memiliki viskositas dinamis yang membesar seiring dengan membesarnya tegangan geser yang diberikan", "Fluida Bingham mengalir dengan laju regangan konstan jika tegangan geser yang diberikan sama dengan nol", "Fluida Bingham memiliki viskositas dinamis yang konstan jika tegangan geser yang diberikan lebih dari yield stress", "Fluida Bingham mengalir dengan laju regangan tidak nol hanya jika tegangan geser yang diberikan kurang dari yield stress"],
            answer: null, doubt: false, correctAnswer: 3, score: 40, difficulty: "Hard"
        },
        {
            text: "<b>TEKS 2</b><br>Dinamika fluida berkaitan dengan tegangan geser yang menggambarkan pengaruh luar terhadap fluida dan laju regangan geser yang mengambarkan gerak fluida. Laju regangan fluida merupakan perubahan kecepatan fluida per satuan jarak. Untuk aliran fluida di dalam pipa, kecepatan v(r) merupakan kecepatan partikel fluida yang berada pada posisi radial r dari pusat pipa. Jadi, laju regangan geser sama dengan dv/dr. Sebagai contoh, fluida yang mengalir di dalam pipa dengan kecepatan v(r)=v_0 (R-r)/R) memiliki laju regangan geser -v_0/R yang seragam.<br><br>Berdasarkan hubungan antara tegangan geser dan regangan geser, fluida dapat dibagi atas fluida Newtonian dan fluida non-Newtonian. Fluida jenis pertama dicirikan oleh rasio antara tegangan geser dan laju regangan geser yang konstan. Rasio ini dinamakan viskositas dinamis fluida. Jadi, untuk fluida Newtonian, tegangan geser sebanding dengan laju regangan geser. Fluida jenis kedua tidak memiliki sifat seperti ini. Pada fluida jenis kedua, viskositas dinamis tidak konstan, tetapi bergantung pada laju regangan geser. Atas dasar sifat hubungan antara tegangan geser dan laju regangan geser, fluida non-Newtonian terbagi atas fluida Bingham, fluida dilatan, dan luida pseudoplastik. Gambar di bawah menunjukkan perbedaan hubungan antara tegangan geser dan laju regangan geser dari fluida Bingham dan fluida non-Newtonian.<br><br>Memperbesar tegangan geser pada fluida Bingham menyebabkan…..",
            options: ["Viskositas dinamis meningkat", "Viskositas dinamis menurun", "Laju regangan geser berubah dari 0 sampai meningkat", "Laju regangan geser menurun", "Laju regangan geser tetap sebesar nol"],
            answer: null, doubt: false, correctAnswer: 2, score: 40, difficulty: "Hard"
        },

        // TEKS 3 (Soal 9-12) - CACING
        {
            text: "<b>TEKS 3</b><br>Cacing merupakan kelompok hewan yang pada umumnya dikenal berifat parasit karena banyak menimbulkan penyakit pada manusia dan hewan. Cacing Fasciola termasuk kelompok cacing pipih (Platyheiminthes) yang dapat menyebabkan penyakit Fascioliasis. Fascioliasis merupakan penyakit cacing hati yang menyerang organ hati sapi, kerbau, kambing, dan domba. Cacing ini berbentuk seperti daun, berwarna abu-abu kehijauan sampai kecoklatan, dan berukuran 2 hingga 3 cm.<br><br>Hewan ternak dapat terinfeksi cacing ini melalui pakan, terutama rumput yang tercemar larva cacing. Saat rumput masuk ke saluran pencernaan hewan, cacing bermigrasi dari usus ke hati. Cacing dewasa menetap di hati dan bereproduksi. Telur cacing disalurkan ke saluran empedu, kemudian masuk ke usus, dan keluar dari tubuh hewan bersama feses. Telur ini mencemari tanah dan air, selanjutnya menetas menjadi mirasidium, dan mengalami perkembangan menjadi larva serkaria pada tubuh siput air. Larva sarkaria keluar dari tubuh siput dan membentuk larva metaserkaria yang menempel pada tanaman atau rumput. Jika rumput ini termakan oleh hewan ternak, larva cacing menginfeksi hewan tersebut.<br><br>Berdasarkan bacaan, pernyataan yang benar tentang siklus hidup cacing adalah…..",
            options: ["Cacing dewasa dalam hewan inang bergerak dari usus menuju hati melalui saluran empedu", "Telur cacing menetas dalam usus besar hewan inang dan akan keluar bersama feses", "Perkembangan larva terakhir cacing Fasciola terjadi dalam tubuh siput air", "Cacing dewasa dalam hewan inang bergerak dari lambung menuju hati melalui saluran empedu", "Larva cacing dalam hewan inang berpindah dari usus menuju hati melalui pembuluh darah"],
            answer: null, doubt: false, correctAnswer: 4, score: 30, difficulty: "Easy"
        },
        {
            text: "<b>TEKS 3</b><br>Cacing merupakan kelompok hewan yang pada umumnya dikenal berifat parasit karena banyak menimbulkan penyakit pada manusia dan hewan. Cacing Fasciola termasuk kelompok cacing pipih (Platyheiminthes) yang dapat menyebabkan penyakit Fascioliasis. Fascioliasis merupakan penyakit cacing hati yang menyerang organ hati sapi, kerbau, kambing, dan domba. Cacing ini berbentuk seperti daun, berwarna abu-abu kehijauan sampai kecoklatan, dan berukuran 2 hingga 3 cm.<br><br>Hewan ternak dapat terinfeksi cacing ini melalui pakan, terutama rumput yang tercemar larva cacing. Saat rumput masuk ke saluran pencernaan hewan, cacing bermigrasi dari usus ke hati. Cacing dewasa menetap di hati dan bereproduksi. Telur cacing disalurkan ke saluran empedu, kemudian masuk ke usus, dan keluar dari tubuh hewan bersama feses. Telur ini mencemari tanah dan air, selanjutnya menetas menjadi mirasidium, dan mengalami perkembangan menjadi larva serkaria pada tubuh siput air. Larva sarkaria keluar dari tubuh siput dan membentuk larva metaserkaria yang menempel pada tanaman atau rumput. Jika rumput ini termakan oleh hewan ternak, larva cacing menginfeksi hewan tersebut.<br><br>Berdasarkan siklus hidup cacing Fasciola, urutan perkembangan larva yang benar adalah…..",
            options: ["Telur -> mirasidium -> serkaria -> metaserkaria", "Telur -> serkaria -> mirasidium -> metaserkaria", "Telur -> metaserkaria -> serkaria -> mirasidium", "Telur -> mirasidium -> metaserkaria -> serkaria", "Telur -> serkaria -> metaserkaria -> mirasidium"],
            answer: null, doubt: false, correctAnswer: 0, score: 30, difficulty: "Easy"
        },
        {
            text: "<b>TEKS 3</b><br>Cacing merupakan kelompok hewan yang pada umumnya dikenal berifat parasit karena banyak menimbulkan penyakit pada manusia dan hewan. Cacing Fasciola termasuk kelompok cacing pipih (Platyheiminthes) yang dapat menyebabkan penyakit Fascioliasis. Fascioliasis merupakan penyakit cacing hati yang menyerang organ hati sapi, kerbau, kambing, dan domba. Cacing ini berbentuk seperti daun, berwarna abu-abu kehijauan sampai kecoklatan, dan berukuran 2 hingga 3 cm.<br><br>Hewan ternak dapat terinfeksi cacing ini melalui pakan, terutama rumput yang tercemar larva cacing. Saat rumput masuk ke saluran pencernaan hewan, cacing bermigrasi dari usus ke hati. Cacing dewasa menetap di hati dan bereproduksi. Telur cacing disalurkan ke saluran empedu, kemudian masuk ke usus, dan keluar dari tubuh hewan bersama feses. Telur ini mencemari tanah dan air, selanjutnya menetas menjadi mirasidium, dan mengalami perkembangan menjadi larva serkaria pada tubuh siput air. Larva sarkaria keluar dari tubuh siput dan membentuk larva metaserkaria yang menempel pada tanaman atau rumput. Jika rumput ini termakan oleh hewan ternak, larva cacing menginfeksi hewan tersebut.<br><br>Cacing parasit pada manusia yang satu kelompok (Platyhelminthes) dengan cacing hati adalah…..",
            options: ["Cacing perut", "Cacing pita", "Cacing kremi", "Cacing tambang", "Cacing filarial"],
            answer: null, doubt: false, correctAnswer: 1, score: 35, difficulty: "Medium"
        },
        {
            text: "<b>TEKS 3</b><br>Cacing merupakan kelompok hewan yang pada umumnya dikenal berifat parasit karena banyak menimbulkan penyakit pada manusia dan hewan. Cacing Fasciola termasuk kelompok cacing pipih (Platyheiminthes) yang dapat menyebabkan penyakit Fascioliasis. Fascioliasis merupakan penyakit cacing hati yang menyerang organ hati sapi, kerbau, kambing, dan domba. Cacing ini berbentuk seperti daun, berwarna abu-abu kehijauan sampai kecoklatan, dan berukuran 2 hingga 3 cm.<br><br>Hewan ternak dapat terinfeksi cacing ini melalui pakan, terutama rumput yang tercemar larva cacing. Saat rumput masuk ke saluran pencernaan hewan, cacing bermigrasi dari usus ke hati. Cacing dewasa menetap di hati dan bereproduksi. Telur cacing disalurkan ke saluran empedu, kemudian masuk ke usus, dan keluar dari tubuh hewan bersama feses. Telur ini mencemari tanah dan air, selanjutnya menetas menjadi mirasidium, dan mengalami perkembangan menjadi larva serkaria pada tubuh siput air. Larva sarkaria keluar dari tubuh siput dan membentuk larva metaserkaria yang menempel pada tanaman atau rumput. Jika rumput ini termakan oleh hewan ternak, larva cacing menginfeksi hewan tersebut.<br><br>Salah satu upaya untuk mencegah infeksi cacing Fasciola ke kambing atau sapi sebagai sel inang baru adalah…..",
            options: ["Mempercepat perkembangan mirasidium menjadi larva serkaria", "Menggunakan feses hewan ternak sebagai pupuk tanaman", "Membersihkan tanaman yang tumbuh di dekat perairan", "Meningkatkan perkembangan serkaria menjadi metaserkaria", "Memberikan rumput sebagai pakan sapi dan kambing"],
            answer: null, doubt: false, correctAnswer: 2, score: 35, difficulty: "Medium"
        },

        // TEKS 4 (Soal 13-16) - REFERENDUM
        {
            text: "<b>TEKS 4</b><br>Pelaksanaan referendum Timor-Timur pada masa pemerintahan Presiden B.J. Habibie merupakan langkah berani dan bijaksana dalam menyelesaikan permasalahan yang kompleks dan berlarut-larut. Sejak integrasi Timor-Timur ke Indonesia pada tahun 1975, banyak pengorbanan telah diberikan, termasuk subsidi yang besar dari pemerintah pusat untuk pembangunan dan kesejahteraan daerah tersebut. Namun, integrasi ini tidak pernah mendapatkan pengakuan internasional dan terus menjadi sorotan di berbagai forum dunia. Indonesia harus menghadapi kenyataan bahwa posisi negara sering kali dipojokkan oleh resolusi-resolusi PBB yang mendesak penyelesaian masalah Timor-Timur.<br><br>Opsi otonomi luas yang ditawarkan oleh Indonesia dalam perundingan tripartit sebenarnya sudah merupakan solusi yang masuk akal. Namun. pihak-pihak yang menolak integrasi tetap menginginkan referendum untuk menentukan nasib mereka, antara memilih otonomi atau kemerdekaan. Menyadari sulitnya mencapai perdamaian jika konflik terus berlanjut, pemerintah Indonesia akhirya memilih untuk menyetujui pelaksanaan jajak pendapat.<br><br>Referendum berlangsung pada 30 Agustus 1999 dan hasilnya menunjukkan bahwa mayoritas rakyat Timor-Timur, sebesar 78,5%, memilih kemerdekaan. Setelah referendum, meskipun terjadi kekerasan, Indonesia dengan bijaksana menyetujui pengiriman pasukan multinasional demi menjaga perdamaian. Sikap ini menunjukkan komitmen Indonesia untuk menghormati hak asasi manusia dan memenuhi tanggung jawab internasionalnya.<br><br>Dengan menerima hasil referendum, pemerintah Habibie memberikan contoh bahwa Indonesia adalah negara yang demokratis, menghargai hak setiap bangsa untuk merdeka, serta berperan sebagai anggota masyarakat internasional yang bertanggung jawab<br><br>Alasan utama pemerintah Indonesia menyetujui pelaksanaan referendum di Timor-Timur pada tahun 1999 adalah.....",
            options: ["untuk mendapatkan pengakuan internasional terhadap integrasi Timor-Timur", "karena pemerintah Indonesia ingin menghentikan subsidi ke Timor-Timur", "agar masyarakat Timor-Timur dapat memilih otonomi atau kemerdekaan", "karena Indonesia didesak oleh dunia internasional", "untuk memutuskan apakah Indonesia tetap mempertahankan Timor-Timur"],
            answer: null, doubt: false, correctAnswer: 2, score: 30, difficulty: "Easy"
        },
        {
            text: "<b>TEKS 4</b><br>Pelaksanaan referendum Timor-Timur pada masa pemerintahan Presiden B.J. Habibie merupakan langkah berani dan bijaksana dalam menyelesaikan permasalahan yang kompleks dan berlarut-larut. Sejak integrasi Timor-Timur ke Indonesia pada tahun 1975, banyak pengorbanan telah diberikan, termasuk subsidi yang besar dari pemerintah pusat untuk pembangunan dan kesejahteraan daerah tersebut. Namun, integrasi ini tidak pernah mendapatkan pengakuan internasional dan terus menjadi sorotan di berbagai forum dunia. Indonesia harus menghadapi kenyataan bahwa posisi negara sering kali dipojokkan oleh resolusi-resolusi PBB yang mendesak penyelesaian masalah Timor-Timur.<br><br>Opsi otonomi luas yang ditawarkan oleh Indonesia dalam perundingan tripartit sebenarnya sudah merupakan solusi yang masuk akal. Namun. pihak-pihak yang menolak integrasi tetap menginginkan referendum untuk menentukan nasib mereka, antara memilih otonomi atau kemerdekaan. Menyadari sulitnya mencapai perdamaian jika konflik terus berlanjut, pemerintah Indonesia akhirya memilih untuk menyetujui pelaksanaan jajak pendapat.<br><br>Referendum berlangsung pada 30 Agustus 1999 dan hasilnya menunjukkan bahwa mayoritas rakyat Timor-Timur, sebesar 78,5%, memilih kemerdekaan. Setelah referendum, meskipun terjadi kekerasan, Indonesia dengan bijaksana menyetujui pengiriman pasukan multinasional demi menjaga perdamaian. Sikap ini menunjukkan komitmen Indonesia untuk menghormati hak asasi manusia dan memenuhi tanggung jawab internasionalnya.<br><br>Dengan menerima hasil referendum, pemerintah Habibie memberikan contoh bahwa Indonesia adalah negara yang demokratis, menghargai hak setiap bangsa untuk merdeka, serta berperan sebagai anggota masyarakat internasional yang bertanggung jawab<br><br>Berdasarkan bacaan di atas yang dimaksud dengan 'resolusi-resolusi PBB' adalah…..",
            options: ["keputusan yang dibuat oleh pemerintah Indonesia untuk menjaga perdamaian", "tuntutan internasional yang mendesak penyelesaian masalah Timor-Timur", "seruan dari negara-negara anggota PBB agar Indonesia mengakui kedaulatan Timor-Timur", "pernyataan dukungan negara-negara anggota PBB terhadap integrasi Timor-Timur ke Indonesia", "seruan dari anggota Dewan Keamanan PBB untuk mengadakan referendum di Timor-Timur"],
            answer: null, doubt: false, correctAnswer: 1, score: 30, difficulty: "Easy"
        },
        {
            text: "<b>TEKS 4</b><br>Pelaksanaan referendum Timor-Timur pada masa pemerintahan Presiden B.J. Habibie merupakan langkah berani dan bijaksana dalam menyelesaikan permasalahan yang kompleks dan berlarut-larut. Sejak integrasi Timor-Timur ke Indonesia pada tahun 1975, banyak pengorbanan telah diberikan, termasuk subsidi yang besar dari pemerintah pusat untuk pembangunan dan kesejahteraan daerah tersebut. Namun, integrasi ini tidak pernah mendapatkan pengakuan internasional dan terus menjadi sorotan di berbagai forum dunia. Indonesia harus menghadapi kenyataan bahwa posisi negara sering kali dipojokkan oleh resolusi-resolusi PBB yang mendesak penyelesaian masalah Timor-Timur.<br><br>Opsi otonomi luas yang ditawarkan oleh Indonesia dalam perundingan tripartit sebenarnya sudah merupakan solusi yang masuk akal. Namun. pihak-pihak yang menolak integrasi tetap menginginkan referendum untuk menentukan nasib mereka, antara memilih otonomi atau kemerdekaan. Menyadari sulitnya mencapai perdamaian jika konflik terus berlanjut, pemerintah Indonesia akhirya memilih untuk menyetujui pelaksanaan jajak pendapat.<br><br>Referendum berlangsung pada 30 Agustus 1999 dan hasilnya menunjukkan bahwa mayoritas rakyat Timor-Timur, sebesar 78,5%, memilih kemerdekaan. Setelah referendum, meskipun terjadi kekerasan, Indonesia dengan bijaksana menyetujui pengiriman pasukan multinasional demi menjaga perdamaian. Sikap ini menunjukkan komitmen Indonesia untuk menghormati hak asasi manusia dan memenuhi tanggung jawab internasionalnya.<br><br>Dengan menerima hasil referendum, pemerintah Habibie memberikan contoh bahwa Indonesia adalah negara yang demokratis, menghargai hak setiap bangsa untuk merdeka, serta berperan sebagai anggota masyarakat internasional yang bertanggung jawab<br><br>Menurut bacaan, pernyataan yang paling tepat tentang opsi otonomi luas dan referendum adalah…..",
            options: ["otonomi luas menekankan kekuasaan pemerintah pusat, sedangkan referendum diatur oleh PBB", "otonomi luas dan referendum pada dasamya sama karena keduanya tetap dalam wilayah Indonesia", "otonomi luas memberikan kedaulatan penuh, sedangkan referendum hanya memberikan pilihan integrasi", "keduanya merupakan bagian dari upaya Indonesia dalam menunjukkan komitmen terhadap demokrasi dan hak asasi manusia", "otonomi luas memberikan kebebasan internal tanpa memisahkan diri, sementara referendum memberikan pilihan kemerdekaan"],
            answer: null, doubt: false, correctAnswer: 4, score: 35, difficulty: "Medium"
        },
        {
            text: "<b>TEKS 4</b><br>Pelaksanaan referendum Timor-Timur pada masa pemerintahan Presiden B.J. Habibie merupakan langkah berani dan bijaksana dalam menyelesaikan permasalahan yang kompleks dan berlarut-larut. Sejak integrasi Timor-Timur ke Indonesia pada tahun 1975, banyak pengorbanan telah diberikan, termasuk subsidi yang besar dari pemerintah pusat untuk pembangunan dan kesejahteraan daerah tersebut. Namun, integrasi ini tidak pernah mendapatkan pengakuan internasional dan terus menjadi sorotan di berbagai forum dunia. Indonesia harus menghadapi kenyataan bahwa posisi negara sering kali dipojokkan oleh resolusi-resolusi PBB yang mendesak penyelesaian masalah Timor-Timur.<br><br>Opsi otonomi luas yang ditawarkan oleh Indonesia dalam perundingan tripartit sebenarnya sudah merupakan solusi yang masuk akal. Namun. pihak-pihak yang menolak integrasi tetap menginginkan referendum untuk menentukan nasib mereka, antara memilih otonomi atau kemerdekaan. Menyadari sulitnya mencapai perdamaian jika konflik terus berlanjut, pemerintah Indonesia akhirya memilih untuk menyetujui pelaksanaan jajak pendapat.<br><br>Referendum berlangsung pada 30 Agustus 1999 dan hasilnya menunjukkan bahwa mayoritas rakyat Timor-Timur, sebesar 78,5%, memilih kemerdekaan. Setelah referendum, meskipun terjadi kekerasan, Indonesia dengan bijaksana menyetujui pengiriman pasukan multinasional demi menjaga perdamaian. Sikap ini menunjukkan komitmen Indonesia untuk menghormati hak asasi manusia dan memenuhi tanggung jawab internasionalnya.<br><br>Dengan menerima hasil referendum, pemerintah Habibie memberikan contoh bahwa Indonesia adalah negara yang demokratis, menghargai hak setiap bangsa untuk merdeka, serta berperan sebagai anggota masyarakat internasional yang bertanggung jawab<br><br>Dampak positif dari keputusan Presiden B.J. Habibie dalam menerima hasil referendum Timor-Timur adalah…..",
            options: ["meningkatkan stabilitas ekonomi di wilayah Indonesia lainnya", "membangun citra Indonesia sebagai negara yang menghargai demokrasi", "menurunkan konflik dengan negara tetangga yang mendukung Timor-Timur", "mengurangi kebutuhan anggaran pertahanan di Indonesia secara drastis", "mengurangi tekanan dunia internasional terhadap Indonesia"],
            answer: null, doubt: false, correctAnswer: 1, score: 35, difficulty: "Medium"
        },

        // TEKS 5 (Soal 17-20) - LABUBU
        {
            text: "<b>TEKS 5</b><br>Boneka Labubu kini menjadi fenomena populer, khususnya di kalangan kolektor, berkat desainnya yang khas dan strategi pemasaran yang inovatif. Produk dari perusahaan Pop Mart yang didirikan oleh miliader muda Wang Ning tersebut memiliki kepala besar, mata bulat, ekspresi unik, dan cerita karakter yang kuat.<br><br>Salah satu strategi utama yang digunakan adalah ‘blind box’ atau kotak kejutan yang menciptakan elemen ketidakpastian sehingga menarik minat konsumen. Strategi ini memperkuat daya tarik Labubu sehingga mendorong banyak orang untuk mengoleksinya.<br><br>Kepopuleran boneka Labubu semakin meningkat setelah Lisa dari Blackpink mengungahnya di Instagram pada April 2024. Fenomena Labubu juga menarik perhatian besar di Thailand dan negara-negara Asia lainnya, termasuk Indonesia. Tren ini didorong oleh fear of missing out (FOMO). Dengan menciptakan eksklusivitas dan memanfaatkan pengaruh media sosial, produsen berhasil memengaruhi konsumen untuk membeli Labubu.<br><br>Strategi pemasaran Pop Mart juga memanfaatkan konsep kelangkaan (scarcity marketing), dengan memproduksi Labubu dalam jumlah terbatas. Ini menciptakan rasa urgensi, membuat penggemar rela menunggu lama untuk membelinya. Kelangkaan ini juga meningkatkan nilai jual boneka tersebut di pasar sehingga harga Labubu menjadi naik seiring tingginya permintaan.<br><br>Fakta mengenai boneka Labubu yang benar menurut bacaan adalah…..",
            options: ["Labubu pertama kali diproduksi di Korea", "Thailand merupakan negara dengan penggemar Labubu terbanyak", "Labubu sangat populer karena masyarakat sangat membutuhkannya", "Blackpink berperan besar meningkatkan popularitas Labubu", "Pop Mart menggunakan cerita karakter Labubu sebagai strategi pemasaran utama"],
            answer: null, doubt: false, correctAnswer: 3, score: 30, difficulty: "Easy"
        },
        {
            text: "<b>TEKS 5</b><br>Boneka Labubu kini menjadi fenomena populer, khususnya di kalangan kolektor, berkat desainnya yang khas dan strategi pemasaran yang inovatif. Produk dari perusahaan Pop Mart yang didirikan oleh miliader muda Wang Ning tersebut memiliki kepala besar, mata bulat, ekspresi unik, dan cerita karakter yang kuat.<br><br>Salah satu strategi utama yang digunakan adalah ‘blind box’ atau kotak kejutan yang menciptakan elemen ketidakpastian sehingga menarik minat konsumen. Strategi ini memperkuat daya tarik Labubu sehingga mendorong banyak orang untuk mengoleksinya.<br><br>Kepopuleran boneka Labubu semakin meningkat setelah Lisa dari Blackpink mengungahnya di Instagram pada April 2024. Fenomena Labubu juga menarik perhatian besar di Thailand dan negara-negara Asia lainnya, termasuk Indonesia. Tren ini didorong oleh fear of missing out (FOMO). Dengan menciptakan eksklusivitas dan memanfaatkan pengaruh media sosial, produsen berhasil memengaruhi konsumen untuk membeli Labubu.<br><br>Strategi pemasaran Pop Mart juga memanfaatkan konsep kelangkaan (scarcity marketing), dengan memproduksi Labubu dalam jumlah terbatas. Ini menciptakan rasa urgensi, membuat penggemar rela menunggu lama untuk membelinya. Kelangkaan ini juga meningkatkan nilai jual boneka tersebut di pasar sehingga harga Labubu menjadi naik seiring tingginya permintaan.<br><br>Istilah 'blind box' pada bacaan memiliki makna.....",
            options: ["cara perancangan metode produksi yang memanfaatkan konsep kelangkaan", "cara penjualan dengan kemasan tanpa memberikan kepastian jenis barangnya", "tingkat penyebaran popularitas ke banyak negara tanpa arah yang pasti", "strategi pemasaran yang mengandalkan produksi dengan jumlah tidak tentu", "metode penjualan barang kepada konsumen secara acak"],
            answer: null, doubt: false, correctAnswer: 1, score: 30, difficulty: "Easy"
        },
        {
            text: "<b>TEKS 5</b><br>Boneka Labubu kini menjadi fenomena populer, khususnya di kalangan kolektor, berkat desainnya yang khas dan strategi pemasaran yang inovatif. Produk dari perusahaan Pop Mart yang didirikan oleh miliader muda Wang Ning tersebut memiliki kepala besar, mata bulat, ekspresi unik, dan cerita karakter yang kuat.<br><br>Salah satu strategi utama yang digunakan adalah ‘blind box’ atau kotak kejutan yang menciptakan elemen ketidakpastian sehingga menarik minat konsumen. Strategi ini memperkuat daya tarik Labubu sehingga mendorong banyak orang untuk mengoleksinya.<br><br>Kepopuleran boneka Labubu semakin meningkat setelah Lisa dari Blackpink mengungahnya di Instagram pada April 2024. Fenomena Labubu juga menarik perhatian besar di Thailand dan negara-negara Asia lainnya, termasuk Indonesia. Tren ini didorong oleh fear of missing out (FOMO). Dengan menciptakan eksklusivitas dan memanfaatkan pengaruh media sosial, produsen berhasil memengaruhi konsumen untuk membeli Labubu.<br><br>Strategi pemasaran Pop Mart juga memanfaatkan konsep kelangkaan (scarcity marketing), dengan memproduksi Labubu dalam jumlah terbatas. Ini menciptakan rasa urgensi, membuat penggemar rela menunggu lama untuk membelinya. Kelangkaan ini juga meningkatkan nilai jual boneka tersebut di pasar sehingga harga Labubu menjadi naik seiring tingginya permintaan.<br><br>Faktor utama yang memengaruhi permintaan konsumen akibat unggahan influencer di media sosial menurut bacaan adalah…..",
            options: ["harga produk itu sendiri", "harga produk serupa", "pendapatan konsumen", "ekspektasi konsumen", "tren/selera konsumen"],
            answer: null, doubt: false, correctAnswer: 4, score: 30, difficulty: "Easy"
        },
        {
            text: "<b>TEKS 5</b><br>Boneka Labubu kini menjadi fenomena populer, khususnya di kalangan kolektor, berkat desainnya yang khas dan strategi pemasaran yang inovatif. Produk dari perusahaan Pop Mart yang didirikan oleh miliader muda Wang Ning tersebut memiliki kepala besar, mata bulat, ekspresi unik, dan cerita karakter yang kuat.<br><br>Salah satu strategi utama yang digunakan adalah ‘blind box’ atau kotak kejutan yang menciptakan elemen ketidakpastian sehingga menarik minat konsumen. Strategi ini memperkuat daya tarik Labubu sehingga mendorong banyak orang untuk mengoleksinya.<br><br>Kepopuleran boneka Labubu semakin meningkat setelah Lisa dari Blackpink mengungahnya di Instagram pada April 2024. Fenomena Labubu juga menarik perhatian besar di Thailand dan negara-negara Asia lainnya, termasuk Indonesia. Tren ini didorong oleh fear of missing out (FOMO). Dengan menciptakan eksklusivitas dan memanfaatkan pengaruh media sosial, produsen berhasil memengaruhi konsumen untuk membeli Labubu.<br><br>Strategi pemasaran Pop Mart juga memanfaatkan konsep kelangkaan (scarcity marketing), dengan memproduksi Labubu dalam jumlah terbatas. Ini menciptakan rasa urgensi, membuat penggemar rela menunggu lama untuk membelinya. Kelangkaan ini juga meningkatkan nilai jual boneka tersebut di pasar sehingga harga Labubu menjadi naik seiring tingginya permintaan.<br><br>Kenaikan harga Labubu akibat strategi scarcity marketing pada bacaan dapat ditunjukkan dalam diagram permintaan dan penawaran melalui…..",
            options: ["pergeseran kurva permintaan ke kanan", "pergeseran kurva permintaan ke kiri", "pergeseran kurva permintaan dan penawaran ke kiri", "pergeseran kurva permintaan dan penawaran ke kanan", "pergeseran kurva permintaan kiri dan kurva penawaran ke kanan"],
            answer: null, doubt: false, correctAnswer: 0, score: 35, difficulty: "Medium"
        },

        // TEKS 6 (Soal 21-24) - PASIR LAUT
        {
            text: "<b>TEKS 6</b><br>Penambangan pasir laut yang semakin marak di Indonesia menjadi ancaman serius bagi ekosistem pesisir dan kelautan. Aktivitas pengerukan, pengangkutan, dan perdagangan pasir laut yang tidak terkendali dapat menyebabkan kerusakan ekosistem, abrasi, dan bahkan menenggelamkan pulau-pulau kecil. Sebagai negara kepulauan yang kaya akan biodiversitas, Indonesia harus bijak dalam mengelola sumber daya ini agar kerusakan ekologis tidak terjadi.<br><br>Pengendalian penambangan pasir laut harus dilakukan dengan strategi yang tepat dan terintegrasi. Pendekatan ini sejalan dengan Tujuan Pembangunan Berkelanjutan/Sustainable Development Goals (SDGs), terutama dalam melestarikan dan memanfaatkan sumber daya kelautan secara berkelanjutan. Langkah ini tidak hanya bertujuan melindungi lingkungan, tetapi juga memastikan kesejahteraan masyarakat pesisir, seperti nelayan dan perempuan nelayan, yang sering menjadi korban utama akibat kerusakan lingkungan.<br><br>Permasalahan ini memerlukan penyelesaian komprehensif yang mempertimbangkan aspek ekonomi, sosial, lingkungan, dan tata ruang laut. Salah satu solusinya adalah penerapan Rencana Zonasi Wilayah Pesisir dan Pulau-pulau Kecil (RZWP3K) yang mengatur pemanfaatan ruang laut secara berkelanjutan. Selain itu, penting untuk melakukan kajian mendalam terkait sedimentasi laut akibat aktivitas di hulu sungai.<br><br>Melalui edukasi dan partisipasi masyarakat, pengendalian ini dapat lebih efektif. Dengan melibatkan masyarakat pesisir dalam menjaga ekosistemnya, upaya pelestarian menjadi lebih inklusif dan berkelanjutan. Penambangan pasir laut harus ditangani dengan kebijakan terpadu agar ekosistem pesisir dan kehidupan masyarakat tetap teriaga.<br><br>Pendekatan pengendalian penambangan pasir laut di Indonesia yang sejalan dengan Tujuan Pembangunan Berkelanjutan/SDGs adalah.....",
            options: ["pengkajian terhadap sumber penyebab sedimentasi laut yang berasal dari daratan", "penanganan secara terpadu dan menyeluruh dengan mengikutsertakan masyarakat", "pelaksanaan edukasi kepada masyarakat tentang pentingnya kelestarian pesisir", "pengembangan sistem peringatan dini bahaya eksploitasi penambangan pasir laut", "pemanfaatan secara berkelanjutan untuk mendukung pembangunan berkelanjutan"],
            answer: null, doubt: false, correctAnswer: 1, score: 30, difficulty: "Easy"
        },
        {
            text: "<b>TEKS 6</b><br>Penambangan pasir laut yang semakin marak di Indonesia menjadi ancaman serius bagi ekosistem pesisir dan kelautan. Aktivitas pengerukan, pengangkutan, dan perdagangan pasir laut yang tidak terkendali dapat menyebabkan kerusakan ekosistem, abrasi, dan bahkan menenggelamkan pulau-pulau kecil. Sebagai negara kepulauan yang kaya akan biodiversitas, Indonesia harus bijak dalam mengelola sumber daya ini agar kerusakan ekologis tidak terjadi.<br><br>Pengendalian penambangan pasir laut harus dilakukan dengan strategi yang tepat dan terintegrasi. Pendekatan ini sejalan dengan Tujuan Pembangunan Berkelanjutan/Sustainable Development Goals (SDGs), terutama dalam melestarikan dan memanfaatkan sumber daya kelautan secara berkelanjutan. Langkah ini tidak hanya bertujuan melindungi lingkungan, tetapi juga memastikan kesejahteraan masyarakat pesisir, seperti nelayan dan perempuan nelayan, yang sering menjadi korban utama akibat kerusakan lingkungan.<br><br>Permasalahan ini memerlukan penyelesaian komprehensif yang mempertimbangkan aspek ekonomi, sosial, lingkungan, dan tata ruang laut. Salah satu solusinya adalah penerapan Rencana Zonasi Wilayah Pesisir dan Pulau-pulau Kecil (RZWP3K) yang mengatur pemanfaatan ruang laut secara berkelanjutan. Selain itu, penting untuk melakukan kajian mendalam terkait sedimentasi laut akibat aktivitas di hulu sungai.<br><br>Melalui edukasi dan partisipasi masyarakat, pengendalian ini dapat lebih efektif. Dengan melibatkan masyarakat pesisir dalam menjaga ekosistemnya, upaya pelestarian menjadi lebih inklusif dan berkelanjutan. Penambangan pasir laut harus ditangani dengan kebijakan terpadu agar ekosistem pesisir dan kehidupan masyarakat tetap teriaga.<br><br>Maksud ungkapan 'Indonesia kaya akan biodiversitas' dalam bacaan adalah…..",
            options: ["ekosistem lautnya beraneka macam", "jenis tambang pasir laut beraneka ragam", "sumber daya alam laut melimpah", "keanekaragaman hayati laut melimpah", "sumber daya alam pesisir tak terbatas"],
            answer: null, doubt: false, correctAnswer: 3, score: 30, difficulty: "Easy"
        },
        {
            text: "<b>TEKS 6</b><br>Penambangan pasir laut yang semakin marak di Indonesia menjadi ancaman serius bagi ekosistem pesisir dan kelautan. Aktivitas pengerukan, pengangkutan, dan perdagangan pasir laut yang tidak terkendali dapat menyebabkan kerusakan ekosistem, abrasi, dan bahkan menenggelamkan pulau-pulau kecil. Sebagai negara kepulauan yang kaya akan biodiversitas, Indonesia harus bijak dalam mengelola sumber daya ini agar kerusakan ekologis tidak terjadi.<br><br>Pengendalian penambangan pasir laut harus dilakukan dengan strategi yang tepat dan terintegrasi. Pendekatan ini sejalan dengan Tujuan Pembangunan Berkelanjutan/Sustainable Development Goals (SDGs), terutama dalam melestarikan dan memanfaatkan sumber daya kelautan secara berkelanjutan. Langkah ini tidak hanya bertujuan melindungi lingkungan, tetapi juga memastikan kesejahteraan masyarakat pesisir, seperti nelayan dan perempuan nelayan, yang sering menjadi korban utama akibat kerusakan lingkungan.<br><br>Permasalahan ini memerlukan penyelesaian komprehensif yang mempertimbangkan aspek ekonomi, sosial, lingkungan, dan tata ruang laut. Salah satu solusinya adalah penerapan Rencana Zonasi Wilayah Pesisir dan Pulau-pulau Kecil (RZWP3K) yang mengatur pemanfaatan ruang laut secara berkelanjutan. Selain itu, penting untuk melakukan kajian mendalam terkait sedimentasi laut akibat aktivitas di hulu sungai.<br><br>Melalui edukasi dan partisipasi masyarakat, pengendalian ini dapat lebih efektif. Dengan melibatkan masyarakat pesisir dalam menjaga ekosistemnya, upaya pelestarian menjadi lebih inklusif dan berkelanjutan. Penambangan pasir laut harus ditangani dengan kebijakan terpadu agar ekosistem pesisir dan kehidupan masyarakat tetap teriaga.<br><br>Berdasarkan bacaan, salah satu kelebihan argumen yang disampaikan adalah…..",
            options: ["penyelesaian masalah abrasi tanpa memperhatikan aspek lain yang terkait", "penekanan pada peran masyarakat pesisir dalam pengendalian penambangan pasir laut", "penggunaan strategi yang parsial untuk menyelesaikan masalah penambangan pasir laut", "penerapan RZWP3K tanpa mempertimbangkan dampak sosial", "pendekatan yang hanya menekankan dampak ekonomi bagi masyarakat pesisir"],
            answer: null, doubt: false, correctAnswer: 1, score: 35, difficulty: "Medium"
        },
        {
            text: "<b>TEKS 6</b><br>Penambangan pasir laut yang semakin marak di Indonesia menjadi ancaman serius bagi ekosistem pesisir dan kelautan. Aktivitas pengerukan, pengangkutan, dan perdagangan pasir laut yang tidak terkendali dapat menyebabkan kerusakan ekosistem, abrasi, dan bahkan menenggelamkan pulau-pulau kecil. Sebagai negara kepulauan yang kaya akan biodiversitas, Indonesia harus bijak dalam mengelola sumber daya ini agar kerusakan ekologis tidak terjadi.<br><br>Pengendalian penambangan pasir laut harus dilakukan dengan strategi yang tepat dan terintegrasi. Pendekatan ini sejalan dengan Tujuan Pembangunan Berkelanjutan/Sustainable Development Goals (SDGs), terutama dalam melestarikan dan memanfaatkan sumber daya kelautan secara berkelanjutan. Langkah ini tidak hanya bertujuan melindungi lingkungan, tetapi juga memastikan kesejahteraan masyarakat pesisir, seperti nelayan dan perempuan nelayan, yang sering menjadi korban utama akibat kerusakan lingkungan.<br><br>Permasalahan ini memerlukan penyelesaian komprehensif yang mempertimbangkan aspek ekonomi, sosial, lingkungan, dan tata ruang laut. Salah satu solusinya adalah penerapan Rencana Zonasi Wilayah Pesisir dan Pulau-pulau Kecil (RZWP3K) yang mengatur pemanfaatan ruang laut secara berkelanjutan. Selain itu, penting untuk melakukan kajian mendalam terkait sedimentasi laut akibat aktivitas di hulu sungai.<br><br>Melalui edukasi dan partisipasi masyarakat, pengendalian ini dapat lebih efektif. Dengan melibatkan masyarakat pesisir dalam menjaga ekosistemnya, upaya pelestarian menjadi lebih inklusif dan berkelanjutan. Penambangan pasir laut harus ditangani dengan kebijakan terpadu agar ekosistem pesisir dan kehidupan masyarakat tetap teriaga.<br><br>Jika penambangan pasir laut di Indonesia tidak dikendalikan dengan baik, prediksi yang paling mungkin terjadi dalam jangka panjang berdasarkan isi bacaan adalah.....",
            options: ["hilangnya biodiversitas laut sepenuhnya dalam 10 tahun ke depan akibat eksploitasi berlebilh", "pulau-pulau kecil tenggelam karena abrasi disertai meningkatnya kemiskinan di kalangan masyarakat pesisir", "perbaikan ekosistem laut akibat sedimentasi dari aktivitas di hulu sungai yang berlangsung secara alami", "pemanfaatan sumber daya kelautan akan lebih berkelanjutan dengan partisipasi masyarakat yang terus meningkat", "peningkatan konflik sosial di wilayah pesisir karena masyarakat tidak diibatkan dalam pengambilan keputusan"],
            answer: null, doubt: false, correctAnswer: 1, score: 35, difficulty: "Medium"
        },

        // TEKS 7 (Soal 25-30) - PERANTAUAN
        {
            text: "<b>TEKS 7</b><br>Sudah hampir sebulan aku di perantauan. Lima hari lagi aku harus pulang ke kampung halaman. PERASAANKU berkecamuk. Di satu sisi aku kangen pada tanah air tercinta yang alamnya konon kaya raya dan indah permai. Aku rindu makanan kesukaanku yang tak ada di sini: nasi pecel, rujak cingur, tongseng kambing. Namun, di sisi lain menyelusup sebersit perasan enggan pulang. Dan perasaan itu kian lama kian kuat. Orang bilang lebih baik hujan batu di negeri sendiri ketimbang hujan emas di negeri orang. Tetapi, bagiku itu hanya omong kosong orang yang tak pernah merasakan kesulitan hidup. Tentu saja lebih baik mendapat hujan emas di luar negeri daripada menjadi cacing melata di tanah air sendiri. Nasib mujur membawaku terbang ke sini.<br><br>Aku ditugaskan sebagai asisten Pak Lurah untuk melakukan studi banding pembangunan berkelanjutan di pinggiran kota di negeri asing ini selama sebulan atas biaya sebuah yayasan sosial yang memiliki cita-cita mulia untuk kemakmuran dunia. Desa kami dipilih sebab dianggap berhasil menggali potensi swadaya desa dan bangkit dari kemiskinan. Kubilang mujur sebab tadinya bukan aku yang mendapatkan rezeki ini. Semula yang akan berangkat adalah Srimulat, staf khusus Pak Lurah yang genit dan suka menjilat. Namun, Bu Lurah murka dan memprotes rencana itu karena cemburu. Akibatnya, Srimulat batal berangkat. Posisinya lalu digantikan Mas Yoyon, kemenakan Bu Lurah yang menjadi staf di kantor desa. Tetapi, enam minggu sebelum berangkat, dia terkena penyakit Iumpuh sebelah. Ada yang bilang itu karena guna-guna. Orang-orang bergujirat bahwa itu penyakit kiriman Srimulat. Aku tak tahu pasti. Yang kutahu, aku ketiban pulung menggantikan Mas Yoyon berangkat ke Jerman.<br><br>Tokoh Aku enggan pulang karena…..",
            options: ["ketidakrinduan pada kehidupan di tanah kelahiran", "kesulitan hidup yang selama ini dijalani tokoh Aku", "kekecewaan pada kondisi kemiskinan desa kelahiran", "ketidakadilan dalam lingkungan pekerjaan", "kekecewaaan pada pola pikir masyarakat desa"],
            answer: null, doubt: false, correctAnswer: 1, score: 30, difficulty: "Easy"
        },
        {
            text: "<b>TEKS 7</b><br>Sudah hampir sebulan aku di perantauan. Lima hari lagi aku harus pulang ke kampung halaman. PERASAANKU berkecamuk. Di satu sisi aku kangen pada tanah air tercinta yang alamnya konon kaya raya dan indah permai. Aku rindu makanan kesukaanku yang tak ada di sini: nasi pecel, rujak cingur, tongseng kambing. Namun, di sisi lain menyelusup sebersit perasan enggan pulang. Dan perasaan itu kian lama kian kuat. Orang bilang lebih baik hujan batu di negeri sendiri ketimbang hujan emas di negeri orang. Tetapi, bagiku itu hanya omong kosong orang yang tak pernah merasakan kesulitan hidup. Tentu saja lebih baik mendapat hujan emas di luar negeri daripada menjadi cacing melata di tanah air sendiri. Nasib mujur membawaku terbang ke sini.<br><br>Aku ditugaskan sebagai asisten Pak Lurah untuk melakukan studi banding pembangunan berkelanjutan di pinggiran kota di negeri asing ini selama sebulan atas biaya sebuah yayasan sosial yang memiliki cita-cita mulia untuk kemakmuran dunia. Desa kami dipilih sebab dianggap berhasil menggali potensi swadaya desa dan bangkit dari kemiskinan. Kubilang mujur sebab tadinya bukan aku yang mendapatkan rezeki ini. Semula yang akan berangkat adalah Srimulat, staf khusus Pak Lurah yang genit dan suka menjilat. Namun, Bu Lurah murka dan memprotes rencana itu karena cemburu. Akibatnya, Srimulat batal berangkat. Posisinya lalu digantikan Mas Yoyon, kemenakan Bu Lurah yang menjadi staf di kantor desa. Tetapi, enam minggu sebelum berangkat, dia terkena penyakit Iumpuh sebelah. Ada yang bilang itu karena guna-guna. Orang-orang bergujirat bahwa itu penyakit kiriman Srimulat. Aku tak tahu pasti. Yang kutahu, aku ketiban pulung menggantikan Mas Yoyon berangkat ke Jerman.<br><br>Majas yang digunakan untuk menggambarkan perubahan nasib tokoh Aku adalah.....",
            options: ["metafora untuk menggambarkan nasib sebagai sesuatu yang dapat 'terbang'", "alegori untuk menunjukkan tokoh lain yang menjadi sumber keberuntungan", "hiperbola untuk melebih-lebihkan peran nasib dalam membawa tokoh pergi", "simile untuk membandingkan nasib tokoh dengan sesuatu yang beruntung", "personifikasi untuk menyampaikan peran nasib dalam kehidupan tokoh"],
            answer: null, doubt: false, correctAnswer: 0, score: 35, difficulty: "Medium"
        },
        {
            text: "<b>TEKS 7</b><br>Sudah hampir sebulan aku di perantauan. Lima hari lagi aku harus pulang ke kampung halaman. PERASAANKU berkecamuk. Di satu sisi aku kangen pada tanah air tercinta yang alamnya konon kaya raya dan indah permai. Aku rindu makanan kesukaanku yang tak ada di sini: nasi pecel, rujak cingur, tongseng kambing. Namun, di sisi lain menyelusup sebersit perasan enggan pulang. Dan perasaan itu kian lama kian kuat. Orang bilang lebih baik hujan batu di negeri sendiri ketimbang hujan emas di negeri orang. Tetapi, bagiku itu hanya omong kosong orang yang tak pernah merasakan kesulitan hidup. Tentu saja lebih baik mendapat hujan emas di luar negeri daripada menjadi cacing melata di tanah air sendiri. Nasib mujur membawaku terbang ke sini.<br><br>Aku ditugaskan sebagai asisten Pak Lurah untuk melakukan studi banding pembangunan berkelanjutan di pinggiran kota di negeri asing ini selama sebulan atas biaya sebuah yayasan sosial yang memiliki cita-cita mulia untuk kemakmuran dunia. Desa kami dipilih sebab dianggap berhasil menggali potensi swadaya desa dan bangkit dari kemiskinan. Kubilang mujur sebab tadinya bukan aku yang mendapatkan rezeki ini. Semula yang akan berangkat adalah Srimulat, staf khusus Pak Lurah yang genit dan suka menjilat. Namun, Bu Lurah murka dan memprotes rencana itu karena cemburu. Akibatnya, Srimulat batal berangkat. Posisinya lalu digantikan Mas Yoyon, kemenakan Bu Lurah yang menjadi staf di kantor desa. Tetapi, enam minggu sebelum berangkat, dia terkena penyakit Iumpuh sebelah. Ada yang bilang itu karena guna-guna. Orang-orang bergujirat bahwa itu penyakit kiriman Srimulat. Aku tak tahu pasti. Yang kutahu, aku ketiban pulung menggantikan Mas Yoyon berangkat ke Jerman.<br><br>Tujuan penulis menggambarkan konflik batin tokoh dalam cerita tersebut adalah…..",
            options: ["menggambarkan dilema atas keraguan tokoh Aku untuk pulang sehingga pembaca memahami kompleksitas perasaan tokoh", "menunjukkan bahwa tokoh Aku adalah pribadi yang sulit puas dengan keadaan yang dianugerahkan kepadanya", "memperlihatkan bahwa tokoh Aku memiliki pandangan positif dan negatif terhadap kampung halamannya", "menekankan bahwa keinginan tokoh Aku tinggal di negeri asing selalu lebih baik daripada tinggal di kampung halaman", "menyoroti konflik tokoh Aku dengan tokoh lain dalam cerita yang membuat cerita lebih realistis dengan kehidupan sehari-hari"],
            answer: null, doubt: false, correctAnswer: 0, score: 35, difficulty: "Medium"
        },
        {
            text: "<b>TEKS 7</b><br>Sudah hampir sebulan aku di perantauan. Lima hari lagi aku harus pulang ke kampung halaman. PERASAANKU berkecamuk. Di satu sisi aku kangen pada tanah air tercinta yang alamnya konon kaya raya dan indah permai. Aku rindu makanan kesukaanku yang tak ada di sini: nasi pecel, rujak cingur, tongseng kambing. Namun, di sisi lain menyelusup sebersit perasan enggan pulang. Dan perasaan itu kian lama kian kuat. Orang bilang lebih baik hujan batu di negeri sendiri ketimbang hujan emas di negeri orang. Tetapi, bagiku itu hanya omong kosong orang yang tak pernah merasakan kesulitan hidup. Tentu saja lebih baik mendapat hujan emas di luar negeri daripada menjadi cacing melata di tanah air sendiri. Nasib mujur membawaku terbang ke sini.<br><br>Aku ditugaskan sebagai asisten Pak Lurah untuk melakukan studi banding pembangunan berkelanjutan di pinggiran kota di negeri asing ini selama sebulan atas biaya sebuah yayasan sosial yang memiliki cita-cita mulia untuk kemakmuran dunia. Desa kami dipilih sebab dianggap berhasil menggali potensi swadaya desa dan bangkit dari kemiskinan. Kubilang mujur sebab tadinya bukan aku yang mendapatkan rezeki ini. Semula yang akan berangkat adalah Srimulat, staf khusus Pak Lurah yang genit dan suka menjilat. Namun, Bu Lurah murka dan memprotes rencana itu karena cemburu. Akibatnya, Srimulat batal berangkat. Posisinya lalu digantikan Mas Yoyon, kemenakan Bu Lurah yang menjadi staf di kantor desa. Tetapi, enam minggu sebelum berangkat, dia terkena penyakit Iumpuh sebelah. Ada yang bilang itu karena guna-guna. Orang-orang bergujirat bahwa itu penyakit kiriman Srimulat. Aku tak tahu pasti. Yang kutahu, aku ketiban pulung menggantikan Mas Yoyon berangkat ke Jerman.<br><br>Cara tokoh utama menghadapi konflik batin antara keinginan untuk tetap tinggal di negeri asing dan kerinduan terhadap kampung halaman adalah…..",
            options: ["mengabaikan rasa rindu dan tinggal lebih lama di negeri asing", "merenungi konflik yang berkecamuk dalam hati tanpa mengambil keputusan", "mengingat kembali keberuntungan yang membawanya ke negeri orang", "memilih pulang karena merasa bertanggung jawab atas kampung halaman", "memutuskan untuk tidak pulang dan merencanakan karier baru di negeri asing"],
            answer: null, doubt: false, correctAnswer: 1, score: 35, difficulty: "Medium"
        },
        {
            text: "<b>TEKS 7</b><br>Sudah hampir sebulan aku di perantauan. Lima hari lagi aku harus pulang ke kampung halaman. PERASAANKU berkecamuk. Di satu sisi aku kangen pada tanah air tercinta yang alamnya konon kaya raya dan indah permai. Aku rindu makanan kesukaanku yang tak ada di sini: nasi pecel, rujak cingur, tongseng kambing. Namun, di sisi lain menyelusup sebersit perasan enggan pulang. Dan perasaan itu kian lama kian kuat. Orang bilang lebih baik hujan batu di negeri sendiri ketimbang hujan emas di negeri orang. Tetapi, bagiku itu hanya omong kosong orang yang tak pernah merasakan kesulitan hidup. Tentu saja lebih baik mendapat hujan emas di luar negeri daripada menjadi cacing melata di tanah air sendiri. Nasib mujur membawaku terbang ke sini.<br><br>Aku ditugaskan sebagai asisten Pak Lurah untuk melakukan studi banding pembangunan berkelanjutan di pinggiran kota di negeri asing ini selama sebulan atas biaya sebuah yayasan sosial yang memiliki cita-cita mulia untuk kemakmuran dunia. Desa kami dipilih sebab dianggap berhasil menggali potensi swadaya desa dan bangkit dari kemiskinan. Kubilang mujur sebab tadinya bukan aku yang mendapatkan rezeki ini. Semula yang akan berangkat adalah Srimulat, staf khusus Pak Lurah yang genit dan suka menjilat. Namun, Bu Lurah murka dan memprotes rencana itu karena cemburu. Akibatnya, Srimulat batal berangkat. Posisinya lalu digantikan Mas Yoyon, kemenakan Bu Lurah yang menjadi staf di kantor desa. Tetapi, enam minggu sebelum berangkat, dia terkena penyakit Iumpuh sebelah. Ada yang bilang itu karena guna-guna. Orang-orang bergujirat bahwa itu penyakit kiriman Srimulat. Aku tak tahu pasti. Yang kutahu, aku ketiban pulung menggantikan Mas Yoyon berangkat ke Jerman.<br><br>Penggambaran tokoh utama berıkut yang paling sesuai dengan isi cerpen adalah…..",
            options: ["ambisius karena ia selalu berusaha untuk mengungguli rekan-rekan di desa dalam semua bidang", "tertutup karena ia tidak pernah membagikan perasaannya kepada orang lain di sekitarnya", "tidak berpendirian karena ia terus-menerus bimbang dan tidak mampu membuat keputusan", "egois karena ia tidak peduli dengan kehidupan di kampung halaman dan hanya mementingkan dirinya sendiri", "realistis karena ia menyadari bahwa peluang hidup lebih baik mungkin ada di negeri asing"],
            answer: null, doubt: false, correctAnswer: 4, score: 35, difficulty: "Medium"
        },
        // SOAL NOMOR 30 (TAMBAHAN AI)
        {
            text: "<b>TEKS 7</b><br>Sudah hampir sebulan aku di perantauan. Lima hari lagi aku harus pulang ke kampung halaman. PERASAANKU berkecamuk. Di satu sisi aku kangen pada tanah air tercinta yang alamnya konon kaya raya dan indah permai. Aku rindu makanan kesukaanku yang tak ada di sini: nasi pecel, rujak cingur, tongseng kambing. Namun, di sisi lain menyelusup sebersit perasan enggan pulang. Dan perasaan itu kian lama kian kuat. Orang bilang lebih baik hujan batu di negeri sendiri ketimbang hujan emas di negeri orang. Tetapi, bagiku itu hanya omong kosong orang yang tak pernah merasakan kesulitan hidup. Tentu saja lebih baik mendapat hujan emas di luar negeri daripada menjadi cacing melata di tanah air sendiri. Nasib mujur membawaku terbang ke sini.<br><br>Aku ditugaskan sebagai asisten Pak Lurah untuk melakukan studi banding pembangunan berkelanjutan di pinggiran kota di negeri asing ini selama sebulan atas biaya sebuah yayasan sosial yang memiliki cita-cita mulia untuk kemakmuran dunia. Desa kami dipilih sebab dianggap berhasil menggali potensi swadaya desa dan bangkit dari kemiskinan. Kubilang mujur sebab tadinya bukan aku yang mendapatkan rezeki ini. Semula yang akan berangkat adalah Srimulat, staf khusus Pak Lurah yang genit dan suka menjilat. Namun, Bu Lurah murka dan memprotes rencana itu karena cemburu. Akibatnya, Srimulat batal berangkat. Posisinya lalu digantikan Mas Yoyon, kemenakan Bu Lurah yang menjadi staf di kantor desa. Tetapi, enam minggu sebelum berangkat, dia terkena penyakit Iumpuh sebelah. Ada yang bilang itu karena guna-guna. Orang-orang bergujirat bahwa itu penyakit kiriman Srimulat. Aku tak tahu pasti. Yang kutahu, aku ketiban pulung menggantikan Mas Yoyon berangkat ke Jerman.<br><br>Amanat yang paling menonjol dalam kutipan cerpen tersebut terkait dengan motivasi seseorang bekerja di luar negeri adalah.....",
            options: ["Kebahagiaan sejati hanya bisa ditemukan di tempat yang penuh kemewahan", "Keberuntungan sering kali datang melalui musibah yang menimpa orang lain", "Mencari kehidupan yang lebih layak adalah hal manusiawi meskipun harus meninggalkan tanah air", "Persaingan di dunia kerja pedesaan selalu diwarnai dengan praktik mistis", "Rasa rindu pada makanan khas daerah adalah beban terberat bagi para perantau"],
            answer: null, doubt: false, correctAnswer: 2, score: 40, difficulty: "Hard"
        }
    ]
},

"en": {
    name: "Literasi Bahasa Inggris",
    duration: 30 * 60,
    questions: [
        // BAGIAN 1: SOCIAL MEDIA THREAD (Soal 1-7)
        {
            text: `<table border="1" style="width:100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; margin-bottom: 10px;">
                    <tr><td style="padding:8px; font-weight:bold; width:25%;">Stormy<br>04-08-2024</td><td style="padding:8px;">Social media can be a tempting distraction. It’s a pretty common experience to want to pick up your phone whenever you can’t focus or need a quick break. But you <b>may</b> find yourself struggling with endless doomscrolling, waiting for messages or comparing yourself to others. How do you disconnect from social media?</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Dewgong<br>05-08-2024</td><td style="padding:8px;">This is a great question! I’m going to be honest here and admit that I often fail at disconnecting from social media (predominantly just TikTok). But I am trying harder to set boundaries and give myself a break!</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Lightning<br>07-08-2024</td><td style="padding:8px;">I deleted Instagram a few weeks ago and have found a profound impact on my mental health. Since deleting it, I am not constantly comparing myself to others anymore. I can appreciate little things more as I’m not bombarded with information.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Infinity<br>16-08-2024</td><td style="padding:8px;">For me, I am not active on social media but yes, as you said sometimes we keep scrolling and watching. I noticed I was spending hours of my time scrolling through reels to wind down, only to realize I had wasted my time.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Ironman<br>20-08-2024</td><td style="padding:8px;">Thanks for posting about this! I often find myself doomscrolling social media during the night when I feel like I haven’t found time for myself during the day. It definitely has had impacts on my sleep schedule and I’m not proud of it, but I have been able to reduce the use of social media in the past few months.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Golden<br>28-08-2024</td><td style="padding:8px;">This is a really good post. I am curious to hear what others have to say on the topic. I definitely could use less social media by installing Flora app that helps you stay off your phone, but this is still a work in progress.</td></tr>
                  </table><br>Who posted the negative effect of social media on their lives?`,
            options: ["Dewgong and Golden", "Lightning and Ironman", "Lightning and Dewgong", "Infinity and Golden", "Ironman and Golden"],
            answer: null, doubt: false, correctAnswer: 1, score: 40, difficulty: "Medium"
        },
        {
            text: `<table border="1" style="width:100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; margin-bottom: 10px;">
                    <tr><td style="padding:8px; font-weight:bold; width:25%;">Stormy<br>04-08-2024</td><td style="padding:8px;">Social media can be a tempting distraction. It’s a pretty common experience to want to pick up your phone whenever you can’t focus or need a quick break. But you <b>may</b> find yourself struggling with endless doomscrolling, waiting for messages or comparing yourself to others. How do you disconnect from social media?</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Dewgong<br>05-08-2024</td><td style="padding:8px;">This is a great question! I’m going to be honest here and admit that I often fail at disconnecting from social media (predominantly just TikTok). But I am trying harder to set boundaries and give myself a break!</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Lightning<br>07-08-2024</td><td style="padding:8px;">I deleted Instagram a few weeks ago and have found a profound impact on my mental health. Since deleting it, I am not constantly comparing myself to others anymore. I can appreciate little things more as I’m not bombarded with information.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Infinity<br>16-08-2024</td><td style="padding:8px;">For me, I am not active on social media but yes, as you said sometimes we keep scrolling and watching. I noticed I was spending hours of my time scrolling through reels to wind down, only to realize I had wasted my time.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Ironman<br>20-08-2024</td><td style="padding:8px;">Thanks for posting about this! I often find myself doomscrolling social media during the night when I feel like I haven’t found time for myself during the day. It definitely has had impacts on my sleep schedule and I’m not proud of it, but I have been able to reduce the use of social media in the past few months.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Golden<br>28-08-2024</td><td style="padding:8px;">This is a really good post. I am curious to hear what others have to say on the topic. I definitely could use less social media by installing Flora app that helps you stay off your phone, but this is still a work in progress.</td></tr>
                  </table><br>The word <b>may</b> in Stormy’s post is used to express a …`,
            options: ["Possibility", "Permission", "Wish", "Suggestion", "Request"],
            answer: null, doubt: false, correctAnswer: 0, score: 30, difficulty: "Easy"
        },
        {
            text: `<table border="1" style="width:100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; margin-bottom: 10px;">
                    <tr><td style="padding:8px; font-weight:bold; width:25%;">Stormy<br>04-08-2024</td><td style="padding:8px;">Social media can be a tempting distraction. It’s a pretty common experience to want to pick up your phone whenever you can’t focus or need a quick break. But you <b>may</b> find yourself struggling with endless doomscrolling, waiting for messages or comparing yourself to others. How do you disconnect from social media?</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Dewgong<br>05-08-2024</td><td style="padding:8px;">This is a great question! I’m going to be honest here and admit that I often fail at disconnecting from social media (predominantly just TikTok). But I am trying harder to set boundaries and give myself a break!</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Lightning<br>07-08-2024</td><td style="padding:8px;">I deleted Instagram a few weeks ago and have found a profound impact on my mental health. Since deleting it, I am not constantly comparing myself to others anymore. I can appreciate little things more as I’m not bombarded with information.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Infinity<br>16-08-2024</td><td style="padding:8px;">For me, I am not active on social media but yes, as you said sometimes we keep scrolling and watching. I noticed I was spending hours of my time scrolling through reels to wind down, only to realize I had wasted my time.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Ironman<br>20-08-2024</td><td style="padding:8px;">Thanks for posting about this! I often find myself doomscrolling social media during the night when I feel like I haven’t found time for myself during the day. It definitely has had impacts on my sleep schedule and I’m not proud of it, but I have been able to reduce the use of social media in the past few months.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Golden<br>28-08-2024</td><td style="padding:8px;">This is a really good post. I am curious to hear what others have to say on the topic. I definitely could use less social media by installing Flora app that helps you stay off your phone, but this is still a work in progress.</td></tr>
                  </table><br>Which of the following issues is stated at the beginning of the thread?`,
            options: ["Talking about experiences on handling distractions", "Asking for a suggestion to focus on work", "Finding a solution for not comparing oneself to others", "Sharing tips on limiting the use of social media", "Discussing issues related to the use of social media"],
            answer: null, doubt: false, correctAnswer: 4, score: 40, difficulty: "Medium"
        },
        {
            text: `<table border="1" style="width:100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; margin-bottom: 10px;">
                    <tr><td style="padding:8px; font-weight:bold; width:25%;">Stormy<br>04-08-2024</td><td style="padding:8px;">Social media can be a tempting distraction. It’s a pretty common experience to want to pick up your phone whenever you can’t focus or need a quick break. But you <b>may</b> find yourself struggling with endless doomscrolling, waiting for messages or comparing yourself to others. How do you disconnect from social media?</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Dewgong<br>05-08-2024</td><td style="padding:8px;">This is a great question! I’m going to be honest here and admit that I often fail at disconnecting from social media (predominantly just TikTok). But I am trying harder to set boundaries and give myself a break!</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Lightning<br>07-08-2024</td><td style="padding:8px;">I deleted Instagram a few weeks ago and have found a profound impact on my mental health. Since deleting it, I am not constantly comparing myself to others anymore. I can appreciate little things more as I’m not bombarded with information.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Infinity<br>16-08-2024</td><td style="padding:8px;">For me, I am not active on social media but yes, as you said sometimes we keep scrolling and watching. I noticed I was spending hours of my time scrolling through reels to wind down, only to realize I had wasted my time.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Ironman<br>20-08-2024</td><td style="padding:8px;">Thanks for posting about this! I often find myself doomscrolling social media during the night when I feel like I haven’t found time for myself during the day. It definitely has had impacts on my sleep schedule and I’m not proud of it, but I have been able to reduce the use of social media in the past few months.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Golden<br>28-08-2024</td><td style="padding:8px;">This is a really good post. I am curious to hear what others have to say on the topic. I definitely could use less social media by installing Flora app that helps you stay off your phone, but this is still a work in progress.</td></tr>
                  </table><br>Who shared the positive impact of disconnecting from social media by giving evidence?`,
            options: ["Dewgong", "Lightning", "Infinity", "Ironman", "Golden"],
            answer: null, doubt: false, correctAnswer: 1, score: 40, difficulty: "Medium"
        },
        {
            text: `<table border="1" style="width:100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; margin-bottom: 10px;">
                    <tr><td style="padding:8px; font-weight:bold; width:25%;">Stormy<br>04-08-2024</td><td style="padding:8px;">Social media can be a tempting distraction. It’s a pretty common experience to want to pick up your phone whenever you can’t focus or need a quick break. But you <b>may</b> find yourself struggling with endless doomscrolling, waiting for messages or comparing yourself to others. How do you disconnect from social media?</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Dewgong<br>05-08-2024</td><td style="padding:8px;">This is a great question! I’m going to be honest here and admit that I often fail at disconnecting from social media (predominantly just TikTok). But I am trying harder to set boundaries and give myself a break!</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Lightning<br>07-08-2024</td><td style="padding:8px;">I deleted Instagram a few weeks ago and have found a profound impact on my mental health. Since deleting it, I am not constantly comparing myself to others anymore. I can appreciate little things more as I’m not bombarded with information.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Infinity<br>16-08-2024</td><td style="padding:8px;">For me, I am not active on social media but yes, as you said sometimes we keep scrolling and watching. I noticed I was spending hours of my time scrolling through reels to wind down, only to realize I had wasted my time.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Ironman<br>20-08-2024</td><td style="padding:8px;">Thanks for posting about this! I often find myself doomscrolling social media during the night when I feel like I haven’t found time for myself during the day. It definitely has had impacts on my sleep schedule and I’m not proud of it, but I have been able to reduce the use of social media in the past few months.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Golden<br>28-08-2024</td><td style="padding:8px;">This is a really good post. I am curious to hear what others have to say on the topic. I definitely could use less social media by installing Flora app that helps you stay off your phone, but this is still a work in progress.</td></tr>
                  </table><br>The aim of Golden’s response to Stormy’s post is to …`,
            options: ["Find other solutions to disconnect from social media", "Talk about his/her experience in using social media", "Share one effective way to limit social media use", "Introduce an app to maximize social media use", "Show how to create a social media apps"],
            answer: null, doubt: false, correctAnswer: 2, score: 40, difficulty: "Medium"
        },
        {
            text: `<table border="1" style="width:100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; margin-bottom: 10px;">
                    <tr><td style="padding:8px; font-weight:bold; width:25%;">Stormy<br>04-08-2024</td><td style="padding:8px;">Social media can be a tempting distraction. It’s a pretty common experience to want to pick up your phone whenever you can’t focus or need a quick break. But you <b>may</b> find yourself struggling with endless doomscrolling, waiting for messages or comparing yourself to others. How do you disconnect from social media?</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Dewgong<br>05-08-2024</td><td style="padding:8px;">This is a great question! I’m going to be honest here and admit that I often fail at disconnecting from social media (predominantly just TikTok). But I am trying harder to set boundaries and give myself a break!</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Lightning<br>07-08-2024</td><td style="padding:8px;">I deleted Instagram a few weeks ago and have found a profound impact on my mental health. Since deleting it, I am not constantly comparing myself to others anymore. I can appreciate little things more as I’m not bombarded with information.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Infinity<br>16-08-2024</td><td style="padding:8px;">For me, I am not active on social media but yes, as you said sometimes we keep scrolling and watching. I noticed I was spending hours of my time scrolling through reels to wind down, only to realize I had wasted my time.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Ironman<br>20-08-2024</td><td style="padding:8px;">Thanks for posting about this! I often find myself doomscrolling social media during the night when I feel like I haven’t found time for myself during the day. It definitely has had impacts on my sleep schedule and I’m not proud of it, but I have been able to reduce the use of social media in the past few months.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Golden<br>28-08-2024</td><td style="padding:8px;">This is a really good post. I am curious to hear what others have to say on the topic. I definitely could use less social media by installing Flora app that helps you stay off your phone, but this is still a work in progress.</td></tr>
                  </table><br>Who posted the most relevant answer to Stormy’s question?`,
            options: ["Dewgong and Lightning", "Dewgong and Infinity", "Lightning and Golden", "Infinity and Ironman", "Ironman and Golden"],
            answer: null, doubt: false, correctAnswer: 2, score: 60, difficulty: "Hard"
        },
        {
            text: `<table border="1" style="width:100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; margin-bottom: 10px;">
                    <tr><td style="padding:8px; font-weight:bold; width:25%;">Stormy<br>04-08-2024</td><td style="padding:8px;">Social media can be a tempting distraction. It’s a pretty common experience to want to pick up your phone whenever you can’t focus or need a quick break. But you <b>may</b> find yourself struggling with endless doomscrolling, waiting for messages or comparing yourself to others. How do you disconnect from social media?</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Dewgong<br>05-08-2024</td><td style="padding:8px;">This is a great question! I’m going to be honest here and admit that I often fail at disconnecting from social media (predominantly just TikTok). But I am trying harder to set boundaries and give myself a break!</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Lightning<br>07-08-2024</td><td style="padding:8px;">I deleted Instagram a few weeks ago and have found a profound impact on my mental health. Since deleting it, I am not constantly comparing myself to others anymore. I can appreciate little things more as I’m not bombarded with information.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Infinity<br>16-08-2024</td><td style="padding:8px;">For me, I am not active on social media but yes, as you said sometimes we keep scrolling and watching. I noticed I was spending hours of my time scrolling through reels to wind down, only to realize I had wasted my time.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Ironman<br>20-08-2024</td><td style="padding:8px;">Thanks for posting about this! I often find myself doomscrolling social media during the night when I feel like I haven’t found time for myself during the day. It definitely has had impacts on my sleep schedule and I’m not proud of it, but I have been able to reduce the use of social media in the past few months.</td></tr>
                    <tr><td style="padding:8px; font-weight:bold;">Golden<br>28-08-2024</td><td style="padding:8px;">This is a really good post. I am curious to hear what others have to say on the topic. I definitely could use less social media by installing Flora app that helps you stay off your phone, but this is still a work in progress.</td></tr>
                  </table><br>What is the tone of the thread?`,
            options: ["Professional", "Emotional", "Sarcastic", "Provocative", "Introspective"],
            answer: null, doubt: false, correctAnswer: 4, score: 60, difficulty: "Hard"
        },

        // BAGIAN 2: ART & MATERIALS (Soal 8-14)
        {
            text: `<b>Text 1</b><br>At Frieze London this year, three large artworks by the artist Nengi Omuku were hung away from the walls so viewers could walk around them. With each work, one side offered a vibrant nature-filled painting. The other presented strips of sanyan, a thick traditional Nigerian fabric that Omuku uses to replace the usual canvas fabric painters often used as their base. 'The fact I'm painting on a vintage surface gives soul to my work,' Omuku said over Zoom two days before the fair opened. For the 37-year-old, the fabric she works on has become as crucial as her paintings themselves. 'Even when it's not a vintage surface, it is a surface that has been made collaboratively with craftsmen from Nigeria.'
    <br><br>
    Omuku's reason to use sanyan initially came from a place of necessity, but has now become an integral part of her practice. 'I worked on canvas for a little while, but eventually shifted to working on sanyan, which is a pre-colonial Yoruba textile,' she told CNN in a video call, adding that she 'made the switch' after eight years of studying in the UK. 'I was trying to rediscover myself and my identity,' she said. 'When I moved back to Nigeria, I couldn't find high-quality canvas, and I was also really fascinated by how, as Nigerians, we identify ourselves through our clothes.' However, she found sanyan more appealing than other more contemporary fabrics. 'I'd never seen a pre-colonial Nigerian textile before, and it looked quite similar to linen.'
    <br><br>
    <b>Text 2</b><br>When a banana duct-taped to a wall sold for <b>USD 120,000</b> in 2019, social media uproar and an age-old debate about the meaning of art ensued. However, artist Maurizio Cattelan's surreal creation, titled 'Comedian', may yet prove a sound investment. On Friday, auction house Sotheby's announced it could fetch <b>USD 1 million to USD 1.5 million</b>. I doubt that it will be sold at this high price.
    <br><br>
    For their money, the winning bidder will receive a roll of duct tape and one banana. They will also receive a certificate of authenticity and official instructions for installing the work. Sotheby's confirmed to CNN that neither the tape nor the banana are the originals. 'Comedian' is a conceptual artwork, and the physical materials are replaced with every installation,' an auction spokesperson said via email.
    <br><br>
    Cattelan and French art gallery Perrotin made headlines around the world five years ago when they displayed 'Comedian' with a six-figure asking price at the Art Basel Miami Beach fair. The original was created using a banana bought in a Miami grocery store, though the gallery said it could be replaced, as per the artist's instruction's.
    <br><br>According to Text 1, which of the following is NOT the reason why sanyan is used by Nengi Omuku? It …`,
            options: ["is a high-quality canvas", "is a thick Nigerian fabric", "gives soul to the painting", "is a pre-colonial textile from Nigeria", "has a better quality compared to linen"],
            answer: null, doubt: false, correctAnswer: 0, score: 30, difficulty: "Easy"
        },
        {
            text: `<b>Text 1</b><br>At Frieze London this year, three large artworks by the artist Nengi Omuku were hung away from the walls so viewers could walk around them. With each work, one side offered a vibrant nature-filled painting. The other presented strips of sanyan, a thick traditional Nigerian fabric that Omuku uses to replace the usual canvas fabric painters often used as their base. 'The fact I'm painting on a vintage surface gives soul to my work,' Omuku said over Zoom two days before the fair opened. For the 37-year-old, the fabric she works on has become as crucial as her paintings themselves. 'Even when it's not a vintage surface, it is a surface that has been made collaboratively with craftsmen from Nigeria.'
    <br><br>
    Omuku's reason to use sanyan initially came from a place of necessity, but has now become an integral part of her practice. 'I worked on canvas for a little while, but eventually shifted to working on sanyan, which is a pre-colonial Yoruba textile,' she told CNN in a video call, adding that she 'made the switch' after eight years of studying in the UK. 'I was trying to rediscover myself and my identity,' she said. 'When I moved back to Nigeria, I couldn't find high-quality canvas, and I was also really fascinated by how, as Nigerians, we identify ourselves through our clothes.' However, she found sanyan more appealing than other more contemporary fabrics. 'I'd never seen a pre-colonial Nigerian textile before, and it looked quite similar to linen.'
    <br><br>
    <b>Text 2</b><br>When a banana duct-taped to a wall sold for <b>USD 120,000</b> in 2019, social media uproar and an age-old debate about the meaning of art ensued. However, artist Maurizio Cattelan's surreal creation, titled 'Comedian', may yet prove a sound investment. On Friday, auction house Sotheby's announced it could fetch <b>USD 1 million to USD 1.5 million</b>. I doubt that it will be sold at this high price.
    <br><br>
    For their money, the winning bidder will receive a roll of duct tape and one banana. They will also receive a certificate of authenticity and official instructions for installing the work. Sotheby's confirmed to CNN that neither the tape nor the banana are the originals. 'Comedian' is a conceptual artwork, and the physical materials are replaced with every installation,' an auction spokesperson said via email.
    <br><br>
    Cattelan and French art gallery Perrotin made headlines around the world five years ago when they displayed 'Comedian' with a six-figure asking price at the Art Basel Miami Beach fair. The original was created using a banana bought in a Miami grocery store, though the gallery said it could be replaced, as per the artist's instruction's.
    <br><br>The phrase <i>a place of necessity</i> in Text 1 Paragraph 2 is closest in meaning to … an urgent need.`,
            options: ["A practical", "A long-term", "A high-quality", "A possible", "An urgent"],
            answer: null, doubt: false, correctAnswer: 0, score: 40, difficulty: "Medium"
        },
        {
            text: `<b>Text 1</b><br>At Frieze London this year, three large artworks by the artist Nengi Omuku were hung away from the walls so viewers could walk around them. With each work, one side offered a vibrant nature-filled painting. The other presented strips of sanyan, a thick traditional Nigerian fabric that Omuku uses to replace the usual canvas fabric painters often used as their base. 'The fact I'm painting on a vintage surface gives soul to my work,' Omuku said over Zoom two days before the fair opened. For the 37-year-old, the fabric she works on has become as crucial as her paintings themselves. 'Even when it's not a vintage surface, it is a surface that has been made collaboratively with craftsmen from Nigeria.'
    <br><br>
    Omuku's reason to use sanyan initially came from a place of necessity, but has now become an integral part of her practice. 'I worked on canvas for a little while, but eventually shifted to working on sanyan, which is a pre-colonial Yoruba textile,' she told CNN in a video call, adding that she 'made the switch' after eight years of studying in the UK. 'I was trying to rediscover myself and my identity,' she said. 'When I moved back to Nigeria, I couldn't find high-quality canvas, and I was also really fascinated by how, as Nigerians, we identify ourselves through our clothes.' However, she found sanyan more appealing than other more contemporary fabrics. 'I'd never seen a pre-colonial Nigerian textile before, and it looked quite similar to linen.'
    <br><br>
    <b>Text 2</b><br>When a banana duct-taped to a wall sold for <b>USD 120,000</b> in 2019, social media uproar and an age-old debate about the meaning of art ensued. However, artist Maurizio Cattelan's surreal creation, titled 'Comedian', may yet prove a sound investment. On Friday, auction house Sotheby's announced it could fetch <b>USD 1 million to USD 1.5 million</b>. I doubt that it will be sold at this high price.
    <br><br>
    For their money, the winning bidder will receive a roll of duct tape and one banana. They will also receive a certificate of authenticity and official instructions for installing the work. Sotheby's confirmed to CNN that neither the tape nor the banana are the originals. 'Comedian' is a conceptual artwork, and the physical materials are replaced with every installation,' an auction spokesperson said via email.
    <br><br>
    Cattelan and French art gallery Perrotin made headlines around the world five years ago when they displayed 'Comedian' with a six-figure asking price at the Art Basel Miami Beach fair. The original was created using a banana bought in a Miami grocery store, though the gallery said it could be replaced, as per the artist's instruction's.
    <br><br>Which of the following is the best main idea of Text 1?`,
            options: ["There are some reasons why sanyan is selected by Nengi Omuku", "The artist Nengi Omuku prefers to use materials from her own country", "For Nengi Omuku, the fabric chosen is less important", "The use of sanyan by Nengi Omuku is meant to popularize it", "Sanyan is as good as canvas to be used as the base"],
            answer: null, doubt: false, correctAnswer: 0, score: 40, difficulty: "Medium"
        },
        {
            text: `<b>Text 1</b><br>At Frieze London this year, three large artworks by the artist Nengi Omuku were hung away from the walls so viewers could walk around them. With each work, one side offered a vibrant nature-filled painting. The other presented strips of sanyan, a thick traditional Nigerian fabric that Omuku uses to replace the usual canvas fabric painters often used as their base. 'The fact I'm painting on a vintage surface gives soul to my work,' Omuku said over Zoom two days before the fair opened. For the 37-year-old, the fabric she works on has become as crucial as her paintings themselves. 'Even when it's not a vintage surface, it is a surface that has been made collaboratively with craftsmen from Nigeria.'
    <br><br>
    Omuku's reason to use sanyan initially came from a place of necessity, but has now become an integral part of her practice. 'I worked on canvas for a little while, but eventually shifted to working on sanyan, which is a pre-colonial Yoruba textile,' she told CNN in a video call, adding that she 'made the switch' after eight years of studying in the UK. 'I was trying to rediscover myself and my identity,' she said. 'When I moved back to Nigeria, I couldn't find high-quality canvas, and I was also really fascinated by how, as Nigerians, we identify ourselves through our clothes.' However, she found sanyan more appealing than other more contemporary fabrics. 'I'd never seen a pre-colonial Nigerian textile before, and it looked quite similar to linen.'
    <br><br>
    <b>Text 2</b><br>When a banana duct-taped to a wall sold for <b>USD 120,000</b> in 2019, social media uproar and an age-old debate about the meaning of art ensued. However, artist Maurizio Cattelan's surreal creation, titled 'Comedian', may yet prove a sound investment. On Friday, auction house Sotheby's announced it could fetch <b>USD 1 million to USD 1.5 million</b>. I doubt that it will be sold at this high price.
    <br><br>
    For their money, the winning bidder will receive a roll of duct tape and one banana. They will also receive a certificate of authenticity and official instructions for installing the work. Sotheby's confirmed to CNN that neither the tape nor the banana are the originals. 'Comedian' is a conceptual artwork, and the physical materials are replaced with every installation,' an auction spokesperson said via email.
    <br><br>
    Cattelan and French art gallery Perrotin made headlines around the world five years ago when they displayed 'Comedian' with a six-figure asking price at the Art Basel Miami Beach fair. The original was created using a banana bought in a Miami grocery store, though the gallery said it could be replaced, as per the artist's instruction's.
    <br><br>Which of the following best restates the statement “They will also receive a certificate of authority and official instructions for installing the work.” in Text 2 Paragraph 2?`,
            options: ["The work should be installed by paying attention to original guidelines", "A certificate of authenticity will also be given, and ask the official", "A document of originality and authorized directions will be given", "A letter of originality that contains formal directions", "To set the work in place, formal instructions and license provided"],
            answer: null, doubt: false, correctAnswer: 2, score: 70, difficulty: "Hard"
        },
        {
            text: `<b>Text 1</b><br>At Frieze London this year, three large artworks by the artist Nengi Omuku were hung away from the walls so viewers could walk around them. With each work, one side offered a vibrant nature-filled painting. The other presented strips of sanyan, a thick traditional Nigerian fabric that Omuku uses to replace the usual canvas fabric painters often used as their base. 'The fact I'm painting on a vintage surface gives soul to my work,' Omuku said over Zoom two days before the fair opened. For the 37-year-old, the fabric she works on has become as crucial as her paintings themselves. 'Even when it's not a vintage surface, it is a surface that has been made collaboratively with craftsmen from Nigeria.'
    <br><br>
    Omuku's reason to use sanyan initially came from a place of necessity, but has now become an integral part of her practice. 'I worked on canvas for a little while, but eventually shifted to working on sanyan, which is a pre-colonial Yoruba textile,' she told CNN in a video call, adding that she 'made the switch' after eight years of studying in the UK. 'I was trying to rediscover myself and my identity,' she said. 'When I moved back to Nigeria, I couldn't find high-quality canvas, and I was also really fascinated by how, as Nigerians, we identify ourselves through our clothes.' However, she found sanyan more appealing than other more contemporary fabrics. 'I'd never seen a pre-colonial Nigerian textile before, and it looked quite similar to linen.'
    <br><br>
    <b>Text 2</b><br>When a banana duct-taped to a wall sold for <b>USD 120,000</b> in 2019, social media uproar and an age-old debate about the meaning of art ensued. However, artist Maurizio Cattelan's surreal creation, titled 'Comedian', may yet prove a sound investment. On Friday, auction house Sotheby's announced it could fetch <b>USD 1 million to USD 1.5 million</b>. I doubt that it will be sold at this high price.
    <br><br>
    For their money, the winning bidder will receive a roll of duct tape and one banana. They will also receive a certificate of authenticity and official instructions for installing the work. Sotheby's confirmed to CNN that neither the tape nor the banana are the originals. 'Comedian' is a conceptual artwork, and the physical materials are replaced with every installation,' an auction spokesperson said via email.
    <br><br>
    Cattelan and French art gallery Perrotin made headlines around the world five years ago when they displayed 'Comedian' with a six-figure asking price at the Art Basel Miami Beach fair. The original was created using a banana bought in a Miami grocery store, though the gallery said it could be replaced, as per the artist's instruction's.
    <br><br>According to Text 2, the purpose of providing a certificate of authenticity is to …`,
            options: ["State that the artwork is genuine", "Provide directions to install the artwork", "Inform that the artwork uses real materials", "Help the owner get a new buyer", "Explain that “Comedy” is a conceptual artwork"],
            answer: null, doubt: false, correctAnswer: 0, score: 30, difficulty: "Easy"
        },
        {
            text: `<b>Text 1</b><br>At Frieze London this year, three large artworks by the artist Nengi Omuku were hung away from the walls so viewers could walk around them. With each work, one side offered a vibrant nature-filled painting. The other presented strips of sanyan, a thick traditional Nigerian fabric that Omuku uses to replace the usual canvas fabric painters often used as their base. 'The fact I'm painting on a vintage surface gives soul to my work,' Omuku said over Zoom two days before the fair opened. For the 37-year-old, the fabric she works on has become as crucial as her paintings themselves. 'Even when it's not a vintage surface, it is a surface that has been made collaboratively with craftsmen from Nigeria.'
    <br><br>
    Omuku's reason to use sanyan initially came from a place of necessity, but has now become an integral part of her practice. 'I worked on canvas for a little while, but eventually shifted to working on sanyan, which is a pre-colonial Yoruba textile,' she told CNN in a video call, adding that she 'made the switch' after eight years of studying in the UK. 'I was trying to rediscover myself and my identity,' she said. 'When I moved back to Nigeria, I couldn't find high-quality canvas, and I was also really fascinated by how, as Nigerians, we identify ourselves through our clothes.' However, she found sanyan more appealing than other more contemporary fabrics. 'I'd never seen a pre-colonial Nigerian textile before, and it looked quite similar to linen.'
    <br><br>
    <b>Text 2</b><br>When a banana duct-taped to a wall sold for <b>USD 120,000</b> in 2019, social media uproar and an age-old debate about the meaning of art ensued. However, artist Maurizio Cattelan's surreal creation, titled 'Comedian', may yet prove a sound investment. On Friday, auction house Sotheby's announced it could fetch <b>USD 1 million to USD 1.5 million</b>. I doubt that it will be sold at this high price.
    <br><br>
    For their money, the winning bidder will receive a roll of duct tape and one banana. They will also receive a certificate of authenticity and official instructions for installing the work. Sotheby's confirmed to CNN that neither the tape nor the banana are the originals. 'Comedian' is a conceptual artwork, and the physical materials are replaced with every installation,' an auction spokesperson said via email.
    <br><br>
    Cattelan and French art gallery Perrotin made headlines around the world five years ago when they displayed 'Comedian' with a six-figure asking price at the Art Basel Miami Beach fair. The original was created using a banana bought in a Miami grocery store, though the gallery said it could be replaced, as per the artist's instruction's.
    <br><br>Which of the following statements from Text 2 shows the author’s negative attitude toward the value of the artwork?`,
            options: ["When a banana duct-taped to a wall sold for $120,000", "I doubt that it will be sold at this high price", "For their money, the winning bidder will receive a roll of duct tape", "Sotheby’s confirmed that neither the tape nor the banana are originals", "Cattelan and French art gallery made headlines around the world"],
            answer: null, doubt: false, correctAnswer: 1, score: 60, difficulty: "Hard"
        },
        {
            text: `<b>Text 1</b><br>At Frieze London this year, three large artworks by the artist Nengi Omuku were hung away from the walls so viewers could walk around them. With each work, one side offered a vibrant nature-filled painting. The other presented strips of sanyan, a thick traditional Nigerian fabric that Omuku uses to replace the usual canvas fabric painters often used as their base. 'The fact I'm painting on a vintage surface gives soul to my work,' Omuku said over Zoom two days before the fair opened. For the 37-year-old, the fabric she works on has become as crucial as her paintings themselves. 'Even when it's not a vintage surface, it is a surface that has been made collaboratively with craftsmen from Nigeria.'
    <br><br>
    Omuku's reason to use sanyan initially came from a place of necessity, but has now become an integral part of her practice. 'I worked on canvas for a little while, but eventually shifted to working on sanyan, which is a pre-colonial Yoruba textile,' she told CNN in a video call, adding that she 'made the switch' after eight years of studying in the UK. 'I was trying to rediscover myself and my identity,' she said. 'When I moved back to Nigeria, I couldn't find high-quality canvas, and I was also really fascinated by how, as Nigerians, we identify ourselves through our clothes.' However, she found sanyan more appealing than other more contemporary fabrics. 'I'd never seen a pre-colonial Nigerian textile before, and it looked quite similar to linen.'
    <br><br>
    <b>Text 2</b><br>When a banana duct-taped to a wall sold for <b>USD 120,000</b> in 2019, social media uproar and an age-old debate about the meaning of art ensued. However, artist Maurizio Cattelan's surreal creation, titled 'Comedian', may yet prove a sound investment. On Friday, auction house Sotheby's announced it could fetch <b>USD 1 million to USD 1.5 million</b>. I doubt that it will be sold at this high price.
    <br><br>
    For their money, the winning bidder will receive a roll of duct tape and one banana. They will also receive a certificate of authenticity and official instructions for installing the work. Sotheby's confirmed to CNN that neither the tape nor the banana are the originals. 'Comedian' is a conceptual artwork, and the physical materials are replaced with every installation,' an auction spokesperson said via email.
    <br><br>
    Cattelan and French art gallery Perrotin made headlines around the world five years ago when they displayed 'Comedian' with a six-figure asking price at the Art Basel Miami Beach fair. The original was created using a banana bought in a Miami grocery store, though the gallery said it could be replaced, as per the artist's instruction's.
    <br><br>Which of the following is the best synthesis of the two texts?`,
            options: ["Materials can be important in artworks like Nengi Omuku’s, but in “Comedian”, it can be replaced", "Nengi Omuku spent a lot of time looking for fabric while Maurizio Cattelan did not", "Nengi Omuku and Maurizio Cattelan believe materials should always be high-quality", "Nengi Omuku and Maurizio Cattelan used different tools but share ethnic identities", "Both Text 1 and Text 2 discuss integrating excellent physical materials"],
            answer: null, doubt: false, correctAnswer: 0, score: 70, difficulty: "Hard"
        },

        // BAGIAN 3: NANOGENERATORS (Soal 15-20)
        {
            text: `<b>Text 3</b><br>Scientists have made a new type of nanogenerator. These devices are very energy-efficient and flexible.It can increase power density 140 times more than regular ones. They think this could make small devices as good as today’s solar panel. The new nanogenerator can turn small movements, like walking or opening a door, into a lot of electricity. For example, if a regular nanogenerator makes 10 milliwatts, this one can make over 1,000 milliwatts.<br><br>
            The nanogenerator works like a relay race. Instead of one part passing energy atoms, each part collects and adds energy before passing it on. This boosts the total energy collected. This process is called the charge regeneration effect. The lead researcher said they wanted to capture energy from everyday movements, like running, walking, or waves. Their device uses 34 tiny energy collectors, improved with a laser technique, which can be made in large numbers.<br><br>
            This type of nanogenerator is called a triboelectric nanogenerator (TENS). It turns simple movements into electricity by using special materials. These special materials get electrically charged when they touch and seperate, line how a balloon sticks to hair. The researchers said they would start a company to make healthcare sensors using this technology.<br><br>
            It is also said that with more technology, soon there would be over 50 billion devices needing power. Local green energy solutions are important to ensure sustainable future. This technology can use mechanical movements to power small devices. It could be used in smart homes, security systems, and healthcare to help patients.<br><br>
            <b>Text 4</b><br>The triboelectric effect happens when two materials touch and then separate. It is like when you rub a balloon on your hair and it sticks because of static electricity. When two different things touch, electrons move from one to the other. This makes one thing positively charged and the other negatively charged. This effect builds up these charges.<br><br>
            Triboelectric devices, also called triboelectric nanogenerator (TENG), use this effect to make energy. They use the static charge made when materials touch and then separate. TENG can change mechanical energy from movement or vibration into electrical energy. These devices are made of pairs of materials with opposite triboelectric properties. When they touch and then separate, they create voltage and current, which can be used to make energy.<br><br>
            Triboelectric devices have many uses. They can turn energy from everyday activities, like walking, into power for small gadgets. TENG can also change body movements into electricity for small usable devices. By using energy from wind or water, they can help sensors monitor the movements.<br><br>
            This technology can run gadgets that power themselves. The use of TENG in various devices can reduce or even replace the use of conventional batteries. Furthermore, this means reducing the waste from conventional battery products.<br><br>
            According to Text 3, a triboelectric nanogenerator (TENG) generates electricity when the nanogenerator materials …`,
            options: ["Produce electrical power from sensors like a balloon sticks to hair", "Work like an open door and collect energy using laser technique", "Are driven by regular daily movements", "Come into contact and separate", "Use the laser technique"],
            answer: null, doubt: false, correctAnswer: 3, score: 40, difficulty: "Medium"
        },
        {
            text: `<b>Text 3</b><br>Scientists have made a new type of nanogenerator. These devices are very energy-efficient and flexible.It can increase power density 140 times more than regular ones. They think this could make small devices as good as today’s solar panel. The new nanogenerator can turn small movements, like walking or opening a door, into a lot of electricity. For example, if a regular nanogenerator makes 10 milliwatts, this one can make over 1,000 milliwatts.<br><br>
            The nanogenerator works like a relay race. Instead of one part passing energy atoms, each part collects and adds energy before passing it on. This boosts the total energy collected. This process is called the charge regeneration effect. The lead researcher said they wanted to capture energy from everyday movements, like running, walking, or waves. Their device uses 34 tiny energy collectors, improved with a laser technique, which can be made in large numbers.<br><br>
            This type of nanogenerator is called a triboelectric nanogenerator (TENS). It turns simple movements into electricity by using special materials. These special materials get electrically charged when they touch and seperate, line how a balloon sticks to hair. The researchers said they would start a company to make healthcare sensors using this technology.<br><br>
            It is also said that with more technology, soon there would be over 50 billion devices needing power. Local green energy solutions are important to ensure sustainable future. This technology can use mechanical movements to power small devices. It could be used in smart homes, security systems, and healthcare to help patients.<br><br>
            <b>Text 4</b><br>The triboelectric effect happens when two materials touch and then separate. It is like when you rub a balloon on your hair and it sticks because of static electricity. When two different things touch, electrons move from one to the other. This makes one thing positively charged and the other negatively charged. This effect builds up these charges.<br><br>
            Triboelectric devices, also called triboelectric nanogenerator (TENG), use this effect to make energy. They use the static charge made when materials touch and then separate. TENG can change mechanical energy from movement or vibration into electrical energy. These devices are made of pairs of materials with opposite triboelectric properties. When they touch and then separate, they create voltage and current, which can be used to make energy.<br><br>
            Triboelectric devices have many uses. They can turn energy from everyday activities, like walking, into power for small gadgets. TENG can also change body movements into electricity for small usable devices. By using energy from wind or water, they can help sensors monitor the movements.<br><br>
            This technology can run gadgets that power themselves. The use of TENG in various devices can reduce or even replace the use of conventional batteries. Furthermore, this means reducing the waste from conventional battery products.<br><br>The word <b>They</b> in Text 4 Paragraph 3 refers to …`,
            options: ["Small wearable devices", "Triboelectrical devices", "Everyday activities", "Body movements", "Small gadgets"],
            answer: null, doubt: false, correctAnswer: 1, score: 30, difficulty: "Easy"
        },
        {
            text: `<b>Text 3</b><br>Scientists have made a new type of nanogenerator. These devices are very energy-efficient and flexible.It can increase power density 140 times more than regular ones. They think this could make small devices as good as today’s solar panel. The new nanogenerator can turn small movements, like walking or opening a door, into a lot of electricity. For example, if a regular nanogenerator makes 10 milliwatts, this one can make over 1,000 milliwatts.<br><br>
            The nanogenerator works like a relay race. Instead of one part passing energy atoms, each part collects and adds energy before passing it on. This boosts the total energy collected. This process is called the charge regeneration effect. The lead researcher said they wanted to capture energy from everyday movements, like running, walking, or waves. Their device uses 34 tiny energy collectors, improved with a laser technique, which can be made in large numbers.<br><br>
            This type of nanogenerator is called a triboelectric nanogenerator (TENS). It turns simple movements into electricity by using special materials. These special materials get electrically charged when they touch and seperate, line how a balloon sticks to hair. The researchers said they would start a company to make healthcare sensors using this technology.<br><br>
            It is also said that with more technology, soon there would be over 50 billion devices needing power. Local green energy solutions are important to ensure sustainable future. This technology can use mechanical movements to power small devices. It could be used in smart homes, security systems, and healthcare to help patients.<br><br>
            <b>Text 4</b><br>The triboelectric effect happens when two materials touch and then separate. It is like when you rub a balloon on your hair and it sticks because of static electricity. When two different things touch, electrons move from one to the other. This makes one thing positively charged and the other negatively charged. This effect builds up these charges.<br><br>
            Triboelectric devices, also called triboelectric nanogenerator (TENG), use this effect to make energy. They use the static charge made when materials touch and then separate. TENG can change mechanical energy from movement or vibration into electrical energy. These devices are made of pairs of materials with opposite triboelectric properties. When they touch and then separate, they create voltage and current, which can be used to make energy.<br><br>
            Triboelectric devices have many uses. They can turn energy from everyday activities, like walking, into power for small gadgets. TENG can also change body movements into electricity for small usable devices. By using energy from wind or water, they can help sensors monitor the movements.<br><br>
            This technology can run gadgets that power themselves. The use of TENG in various devices can reduce or even replace the use of conventional batteries. Furthermore, this means reducing the waste from conventional battery products.<br><br>Information about how the triboelectric nanogenerator can produce electricity can be found in …`,
            options: ["Text 3 Paragraph 1 and Text 4 Paragraph 1", "Text 3 Paragraph 1 and Text 4 Paragraph 2", "Text 3 Paragraph 2 and Text 4 Paragraph 4", "Text 3 Paragraph 3 and Text 4 Paragraph 1", "Text 3 Paragraph 3 and Text 4 Paragraph 4"],
            answer: null, doubt: false, correctAnswer: 3, score: 60, difficulty: "Hard"
        },
        {
            text: `<b>Text 3</b><br>Scientists have made a new type of nanogenerator. These devices are very energy-efficient and flexible.It can increase power density 140 times more than regular ones. They think this could make small devices as good as today’s solar panel. The new nanogenerator can turn small movements, like walking or opening a door, into a lot of electricity. For example, if a regular nanogenerator makes 10 milliwatts, this one can make over 1,000 milliwatts.<br><br>
            The nanogenerator works like a relay race. Instead of one part passing energy atoms, each part collects and adds energy before passing it on. This boosts the total energy collected. This process is called the charge regeneration effect. The lead researcher said they wanted to capture energy from everyday movements, like running, walking, or waves. Their device uses 34 tiny energy collectors, improved with a laser technique, which can be made in large numbers.<br><br>
            This type of nanogenerator is called a triboelectric nanogenerator (TENS). It turns simple movements into electricity by using special materials. These special materials get electrically charged when they touch and seperate, line how a balloon sticks to hair. The researchers said they would start a company to make healthcare sensors using this technology.<br><br>
            It is also said that with more technology, soon there would be over 50 billion devices needing power. Local green energy solutions are important to ensure sustainable future. This technology can use mechanical movements to power small devices. It could be used in smart homes, security systems, and healthcare to help patients.<br><br>
            <b>Text 4</b><br>The triboelectric effect happens when two materials touch and then separate. It is like when you rub a balloon on your hair and it sticks because of static electricity. When two different things touch, electrons move from one to the other. This makes one thing positively charged and the other negatively charged. This effect builds up these charges.<br><br>
            Triboelectric devices, also called triboelectric nanogenerator (TENG), use this effect to make energy. They use the static charge made when materials touch and then separate. TENG can change mechanical energy from movement or vibration into electrical energy. These devices are made of pairs of materials with opposite triboelectric properties. When they touch and then separate, they create voltage and current, which can be used to make energy.<br><br>
            Triboelectric devices have many uses. They can turn energy from everyday activities, like walking, into power for small gadgets. TENG can also change body movements into electricity for small usable devices. By using energy from wind or water, they can help sensors monitor the movements.<br><br>
            This technology can run gadgets that power themselves. The use of TENG in various devices can reduce or even replace the use of conventional batteries. Furthermore, this means reducing the waste from conventional battery products.<br><br>What is the relationship between Text 3 and Text 4?`,
            options: ["Text 3 explains development of energy source, energy generation described in Text 4", "Text 3 illustrates daily activities while Text 4 elaborates triboelectric effect", "Text 3 describes potential use while Text 4 discusses development process", "Both texts predict the success of electronically generated materials", "Both texts explain development of electrical instruments"],
            answer: null, doubt: false, correctAnswer: 0, score: 70, difficulty: "Hard"
        },
        {
            text: `<b>Text 3</b><br>Scientists have made a new type of nanogenerator. These devices are very energy-efficient and flexible.It can increase power density 140 times more than regular ones. They think this could make small devices as good as today’s solar panel. The new nanogenerator can turn small movements, like walking or opening a door, into a lot of electricity. For example, if a regular nanogenerator makes 10 milliwatts, this one can make over 1,000 milliwatts.<br><br>
            The nanogenerator works like a relay race. Instead of one part passing energy atoms, each part collects and adds energy before passing it on. This boosts the total energy collected. This process is called the charge regeneration effect. The lead researcher said they wanted to capture energy from everyday movements, like running, walking, or waves. Their device uses 34 tiny energy collectors, improved with a laser technique, which can be made in large numbers.<br><br>
            This type of nanogenerator is called a triboelectric nanogenerator (TENS). It turns simple movements into electricity by using special materials. These special materials get electrically charged when they touch and seperate, line how a balloon sticks to hair. The researchers said they would start a company to make healthcare sensors using this technology.<br><br>
            It is also said that with more technology, soon there would be over 50 billion devices needing power. Local green energy solutions are important to ensure sustainable future. This technology can use mechanical movements to power small devices. It could be used in smart homes, security systems, and healthcare to help patients.<br><br>
            <b>Text 4</b><br>The triboelectric effect happens when two materials touch and then separate. It is like when you rub a balloon on your hair and it sticks because of static electricity. When two different things touch, electrons move from one to the other. This makes one thing positively charged and the other negatively charged. This effect builds up these charges.<br><br>
            Triboelectric devices, also called triboelectric nanogenerator (TENG), use this effect to make energy. They use the static charge made when materials touch and then separate. TENG can change mechanical energy from movement or vibration into electrical energy. These devices are made of pairs of materials with opposite triboelectric properties. When they touch and then separate, they create voltage and current, which can be used to make energy.<br><br>
            Triboelectric devices have many uses. They can turn energy from everyday activities, like walking, into power for small gadgets. TENG can also change body movements into electricity for small usable devices. By using energy from wind or water, they can help sensors monitor the movements.<br><br>
            This technology can run gadgets that power themselves. The use of TENG in various devices can reduce or even replace the use of conventional batteries. Furthermore, this means reducing the waste from conventional battery products.<br><br>Based on the two texts, which of the following will most likely happen in the future? Scientists will …`,
            options: ["find a cheaper triboelectric effect mechanism", "be able to explain the mechanism of generating energy", "develop solar panels that work as environmentally friendly", "produce conventional batteries that use greater electrical power", "be able to develop a TENG that produces greater electrical power for a variety of devices"],
            answer: null, doubt: false, correctAnswer: 4, score: 70, difficulty: "Hard"
        },
        {
            text: `<b>Text 3</b><br>Scientists have made a new type of nanogenerator. These devices are very energy-efficient and flexible.It can increase power density 140 times more than regular ones. They think this could make small devices as good as today’s solar panel. The new nanogenerator can turn small movements, like walking or opening a door, into a lot of electricity. For example, if a regular nanogenerator makes 10 milliwatts, this one can make over 1,000 milliwatts.<br><br>
            The nanogenerator works like a relay race. Instead of one part passing energy atoms, each part collects and adds energy before passing it on. This boosts the total energy collected. This process is called the charge regeneration effect. The lead researcher said they wanted to capture energy from everyday movements, like running, walking, or waves. Their device uses 34 tiny energy collectors, improved with a laser technique, which can be made in large numbers.<br><br>
            This type of nanogenerator is called a triboelectric nanogenerator (TENS). It turns simple movements into electricity by using special materials. These special materials get electrically charged when they touch and seperate, line how a balloon sticks to hair. The researchers said they would start a company to make healthcare sensors using this technology.<br><br>
            It is also said that with more technology, soon there would be over 50 billion devices needing power. Local green energy solutions are important to ensure sustainable future. This technology can use mechanical movements to power small devices. It could be used in smart homes, security systems, and healthcare to help patients.<br><br>
            <b>Text 4</b><br>The triboelectric effect happens when two materials touch and then separate. It is like when you rub a balloon on your hair and it sticks because of static electricity. When two different things touch, electrons move from one to the other. This makes one thing positively charged and the other negatively charged. This effect builds up these charges.<br><br>
            Triboelectric devices, also called triboelectric nanogenerator (TENG), use this effect to make energy. They use the static charge made when materials touch and then separate. TENG can change mechanical energy from movement or vibration into electrical energy. These devices are made of pairs of materials with opposite triboelectric properties. When they touch and then separate, they create voltage and current, which can be used to make energy.<br><br>
            Triboelectric devices have many uses. They can turn energy from everyday activities, like walking, into power for small gadgets. TENG can also change body movements into electricity for small usable devices. By using energy from wind or water, they can help sensors monitor the movements.<br><br>
            This technology can run gadgets that power themselves. The use of TENG in various devices can reduce or even replace the use of conventional batteries. Furthermore, this means reducing the waste from conventional battery products.<br><br>Based on Text 3 and Text 4, which of the following recommendations is appropriate to be implemented?`,
            options: ["TENG should operate by limiting mechanical energy", "Small electronic devices must utilize traditional batteries", "Electronic devices using triboelectric effect should be developed for green energy", "The TENG in small devices should use solar panels", "Small wearable devices should convert electrical energy into mechanical"],
            answer: null, doubt: false, correctAnswer: 2, score: 70, difficulty: "Hard"
        }
    ]
},

"pm": {
    name: "Penalaran Matematika",
    duration: 30 * 60,
    questions: [
        // TEKS 1: PERTEMUAN KELUARGA (1-4)
        {
            text: `<b>Teks 1 untuk soal nomor 1-4</b><br>Pertemuan keluarga RT IX dihadiri oleh 15 laki-laki dan 10 perempuan. Pada pertemuan ini setiap keluarga diwakili satu orang. Salah satu agenda pertemuan tersebut adalah memilih pengurus RT baru yang terdiri atas ketua, bendahara, dan sekretaris. Para calon diambil di antara yang hadir. Pemilihan dilakukan secara acak.<br><br>
            Banyak cara terpilihnya pengurus dengan sekretaris perempuan adalah.....`,
            options: ["5.400", "5.520", "5.750", "5.760", "6.000"],
            answer: null, doubt: false, correctAnswer: 1, score: 40, difficulty: "Medium"
        },
        {
            text: `<b>Teks 1 untuk soal nomor 1-4</b><br>Pertemuan keluarga RT IX dihadiri oleh 15 laki-laki dan 10 perempuan. Pada pertemuan ini setiap keluarga diwakili satu orang. Salah satu agenda pertemuan tersebut adalah memilih pengurus RT baru yang terdiri atas ketua, bendahara, dan sekretaris. Para calon diambil di antara yang hadir. Pemilihan dilakukan secara acak.<br><br>
            Untuk memeriahkan suasana pertemuan, dipilih empat orang untuk menyanyi. Peluang yang terpilih keempatnya perempuan adalah.....`,
            options: ["$\\frac{2}{115}$", "$\\frac{3}{115}$", "$\\frac{4}{115}$", "$\\frac{5}{115}$", "$\\frac{6}{115}$"],
            answer: null, doubt: false, correctAnswer: 0, score: 50, difficulty: "Hard"
        },
        {
            text: `<b>Teks 1 untuk soal nomor 1-4</b><br>Pertemuan keluarga RT IX dihadiri oleh 15 laki-laki dan 10 perempuan. Pada pertemuan ini setiap keluarga diwakili satu orang. Salah satu agenda pertemuan tersebut adalah memilih pengurus RT baru yang terdiri atas ketua, bendahara, dan sekretaris. Para calon diambil di antara yang hadir. Pemilihan dilakukan secara acak.<br><br>
            Pada pertemuan tersebut juga dipilih tiga orang untuk mewakili RT dalam suatu kegiatan pada tingkat RW. Peluang terpilihnya satu laki-laki dua perempuan atau dua laki-laki satu perempuan adalah.....`,
            options: ["$\\frac{135}{230}$", "$\\frac{145}{230}$", "$\\frac{155}{230}$", "$\\frac{165}{230}$", "$\\frac{175}{230}$"],
            answer: null, doubt: false, correctAnswer: 3, score: 60, difficulty: "Hard"
        },
        {
            text: `<b>Teks 1 untuk soal nomor 1-4</b><br>Pertemuan keluarga RT IX dihadiri oleh 15 laki-laki dan 10 perempuan. Pada pertemuan ini setiap keluarga diwakili satu orang. Salah satu agenda pertemuan tersebut adalah memilih pengurus RT baru yang terdiri atas ketua, bendahara, dan sekretaris. Para calon diambil di antara yang hadir. Pemilihan dilakukan secara acak.<br><br>Peluang terpilihnya sekretaris perempuan dengan ketua dan bendahara berjenis kelamin berbeda adalah.....`,
            options: ["$\\frac{1}{115}$", "$\\frac{2}{23}$", "$\\frac{3}{23}$", "$\\frac{5}{46}$", "$\\frac{15}{46}$"],
            answer: null, doubt: false, correctAnswer: 4, score: 60, difficulty: "Hard"
        },

        // TEKS 2: KERTAS BERPETAK (5-8)
        {
            text: `<b>Teks 2</b><br>Kertas berpetak memiliki ukuran petak 8x8. Baris pertama: petak 1 = $2^0$, petak 2 = $2^1$, petak 3 = $2^2$, ..., petak 8 = $2^7$. Baris kedua dimulai dengan $256$ ($2^8$) sampai petak kedelapan baris kedua, dan seterusnya sampai baris ke-8.<br><br>
            Jika $f(n)$ menyatakan bilangan pada petak pertama baris ke-$n$, maka $f(n)$ adalah.....`,
            options: ["$2^{n}$", "$2^{8n}$", "$2^{8(n-1)}$", "$2^{8n-1}$", "$2^{n-8}$"],
            answer: null, doubt: false, correctAnswer: 2, score: 40, difficulty: "Medium"
        },
        {
            
            
            text: `<b>Teks 2</b><br>Kertas berpetak memiliki ukuran petak 8x8. Baris pertama: petak 1 = $2^0$, petak 2 = $2^1$, petak 3 = $2^2$, ..., petak 8 = $2^7$. Baris kedua dimulai dengan $256$ ($2^8$) sampai petak kedelapan baris kedua, dan seterusnya sampai baris ke-8.<br><br>
            [Teks 2: Kertas Berpetak]<br>Pilihlah jawaban pada kolom yang sesuai:<br>
            <table border="1" style="width:100%; border-collapse: collapse; font-family: sans-serif; font-size: 13px;">
                <tr style="background-color: #f2f2f2;"><th>Pernyataan</th><th style="width:15%;">Ya</th><th style="width:15%;">Tidak</th></tr>
                <tr><td>Bilangan pada petak ke-3 baris ke-2 adalah 512.</td><td></td><td></td></tr>
                <tr><td>Jumlah bilangan pada petak pertama sampai ke-5 baris pertama adalah 31.</td><td></td><td></td></tr>
                <tr><td>Bilangan pada baris ke-8 petak ke-8 adalah $2^{63}$.</td><td></td><td></td></tr>
            </table>`,
            options: ["Ya, Ya, Ya", "Tidak, Ya, Ya", "Tidak, Tidak, Ya", "Ya, Tidak, Ya", "Ya, Ya, Tidak"],
            answer: null, doubt: false, correctAnswer: 1, score: 50, difficulty: "Hard"
        },
        {
            text: `<b>Teks 2</b><br>Kertas berpetak memiliki ukuran petak 8x8. Baris pertama: petak 1 = $2^0$, petak 2 = $2^1$, petak 3 = $2^2$, ..., petak 8 = $2^7$. Baris kedua dimulai dengan $256$ ($2^8$) sampai petak kedelapan baris kedua, dan seterusnya sampai baris ke-8.<br><br>
            Hasil bagi bilangan pada petak pertama baris ketiga dengan bilangan pada petak kelima baris kedua adalah.....`,
            options: ["4", "8", "16", "32", "64"],
            answer: null, doubt: false, correctAnswer: 2, score: 40, difficulty: "Medium"
        },
        {
            text: `<b>Teks 2</b><br>Kertas berpetak memiliki ukuran petak 8x8. Baris pertama: petak 1 = $2^0$, petak 2 = $2^1$, petak 3 = $2^2$, ..., petak 8 = $2^7$. Baris kedua dimulai dengan $256$ ($2^8$) sampai petak kedelapan baris kedua, dan seterusnya sampai baris ke-8.<br><br>
            Jika bilangan pada petak ke-$n$ baris pertama dibagi dengan jumlah seluruh bilangan pada baris pertama adalah.....`,
            options: ["$2^{n-1} / (2^8 - 1)$", "$2^{n} / 255$", "$2^{n-1} / 256$", "$2^n / 256$", "$2^{n-1} / 128$"],
            answer: null, doubt: false, correctAnswer: 0, score: 60, difficulty: "Hard"
        },

        // TEKS 3: GEOMETRI LAMPU & BAYANGAN (9-12)
        {
            text: `<b>Teks 3</b><br>Lampu dipasang pada ketinggian 4 m. Meja segitiga ABC di bawah lampu dengan A dan C menempel dinding. Panjang $BC = 1$ m dan bayangannya $B'C' = 1,5$ m.<br><br>
            Tinggi meja adalah..... m.`,
            image: "9.png",
            options: ["1", "1,4", "1,5", "1,33", "2.67"],
            answer: null, doubt: false, correctAnswer: 3, score: 50, difficulty: "Hard"
        },
        {
            text: `<b>Teks 3</b><br>Lampu dipasang pada ketinggian 4 m. Meja segitiga ABC di bawah lampu dengan A dan C menempel dinding. Panjang $BC = 1$ m dan bayangannya $B'C' = 1,5$ m.<br><br>
            Jika luas meja adalah $L$, luas bayangan meja di lantai adalah.....`,
            options: ["$1,50 L$", "$1,75 L$", "$2,25 L$", "$2,50 L$", "$3,00 L$"],
            answer: null, doubt: false, correctAnswer: 2, score: 50, difficulty: "Hard"
        },
        {
            text: `<b>Teks 3</b><br>Lampu dipasang pada ketinggian 4 m. Meja segitiga ABC di bawah lampu dengan A dan C menempel dinding. Panjang $BC = 1$ m dan bayangannya $B'C' = 1,5$ m.<br><br>
            Seekor belalang terbang sejajar dinding dan lantai pada tinggi 2 m. Jika bayangan belalang di lantai menempuh 4 m dalam 10 detik, jarak sebenarnya belalang dalam 5 detik adalah..... m.`,
            options: ["1,00", "1,25", "1,50", "1,75", "2,00"],
            answer: null, doubt: false, correctAnswer: 0, score: 60, difficulty: "Hard"
        },
        {
            text: `<b>Teks 3</b><br>Lampu dipasang pada ketinggian 4 m. Meja segitiga ABC di bawah lampu dengan A dan C menempel dinding. Panjang $BC = 1$ m dan bayangannya $B'C' = 1,5$ m.<br><br>
            Alas patung tinggi 1 m berjarak 2 m dari dinding. Patung setinggi 1,5 m di atasnya. Panjang bayangan patung adalah..... m.`,
            options: ["14/6", "15/6", "16/6", "17/6", "18/6"],
            answer: null, doubt: false, correctAnswer: 1, score: 60, difficulty: "Hard"
        },

        // TEKS 4: DIAGRAM GULA PASIR (13-16)
        {
            text: `<b>Teks 4</b><br>Di suatu grosir kelontong, dijual sembilan bahan pokok makanan. 
            Salah satu barang yang dijual oleh pedagang grosir itu adalah gula pasir (dalam satuan kuintal). 
            Data pasokan dan yang terjual tiap hari dalam satu minggu disajikan dalam diagram berikut. <br><br>
            Dari diagram tersebut, stok gula yang terbanyak terjadi pada hari.....`,
            image: "13.png",
            options: ["Senin", "Selasa", "Rabu", "Sabtu", "Minggu"],
            answer: null, doubt: false, correctAnswer: 1, score: 30, difficulty: "Easy"
        },
        {
            text: `[Teks 4: Diagram Gula]<br>14. Pilihlah jawaban pada kolom yang sesuai:<br>
            <table border="1" style="width:100%; border-collapse: collapse; font-family: sans-serif; font-size: 13px;">
                <tr style="background-color: #f2f2f2;"><th>Pernyataan</th><th style="width:15%;">Ya</th><th style="width:15%;">Tidak</th></tr>
                <tr><td>Jumlah stok terbanyak dalam toko pada Minggu itu adalah 7 kuintal.</td><td></td><td></td></tr>
                <tr><td>Stok gula dalam satu minggu sebanyak 6 kuintal terjadi pada hari Rabu dan Minggu.</td><td></td><td></td></tr>
                <tr><td>Rata-rata stok gula per hari dalam waktu satu minggu adalah 4 kuintal.</td><td></td><td></td></tr>
            </table>`,
            options: ["Ya, Ya, Ya", "Ya, Tidak, Ya", "Tidak, Ya, Tidak", "Ya, Ya, Tidak", "Tidak, Tidak, Ya"],
            answer: null, doubt: false, correctAnswer: 0, score: 50, difficulty: "Hard"
        },
        {
            text: `<b>Teks 4</b><br>Di suatu grosir kelontong, dijual sembilan bahan pokok makanan. 
            Salah satu barang yang dijual oleh pedagang grosir itu adalah gula pasir (dalam satuan kuintal). 
            Data pasokan dan yang terjual tiap hari dalam satu minggu disajikan dalam diagram berikut. <br><br>
            Jika biaya operasional tercukupi jika terjual 40% dalam minggu itu. Jika 1 kuintal dijual Rp 150.000,00, keuntungan pedagang adalah..... juta rupiah.`,
            image: "13.png",
            options: ["3,15", "4,20", "5,25", "6,30", "7,35"],
            answer: null, doubt: false, correctAnswer: 2, score: 50, difficulty: "Hard"
        },
        {
            text: `<b>Teks 4</b><br>Di suatu grosir kelontong, dijual sembilan bahan pokok makanan. 
            Salah satu barang yang dijual oleh pedagang grosir itu adalah gula pasir (dalam satuan kuintal). 
            Data pasokan dan yang terjual tiap hari dalam satu minggu disajikan dalam diagram berikut. <br><br>
            Stok aman jika $> (rata-rata + simpangan baku)$. Pedagang merasa kurang aman pada hari.....`,
            image: "13.png",
            options: ["Senin, Selasa, Rabu", "Selasa, Rabu, Kamis", "Rabu, Kamis, Jumat", "Senin, Sabtu, Minggu", "Rabu, Jumat, Minggu"],
            answer: null, doubt: false, correctAnswer: 4, score: 60, difficulty: "Hard"
        },

        // TEKS 5: SAWAH DAN PETAK (17-20)
        {
            text: `<b>Teks 5</b><br>Sepetak sawah terdiri atas $x$ petak kecil berukuran $6\text{ m} \times 8\text{ m}$.<br><br>
            Jika $L(x)$ adalah fungsi luas sawah (dalam $\text{m}^2$), maka $L(x) = $ .....`,
            options: ["$14x$", "$24x$", "$48x$", "$68x$", "$86x$"],
            answer: null, doubt: false, correctAnswer: 2, score: 30, difficulty: "Easy"
        },
        {
            text: `<b>Teks 5</b><br>Sepetak sawah terdiri atas $x$ petak kecil berukuran $6\text{ m} \times 8\text{ m}$.<br><br>
            Jika jumlah petak kecil 36 petak dan panjang sisi depan sawah 12 m, panjang sisi samping sawah adalah..... m.`,
            options: ["72", "78", "90", "96", "144"],
            answer: null, doubt: false, correctAnswer: 4, score: 40, difficulty: "Medium"
        },
        {
            text: `<b>Teks 5</b><br>Sepetak sawah terdiri atas $x$ petak kecil berukuran $6\text{ m} \times 8\text{ m}$.<br><br>
            Sawah terdiri dari 2 baris petak (masing-masing 18 petak) dengan lebar parit 0,5 m di antara tiap petak. Luas sawah beserta parit adalah..... $\text{m}^2$.`,
            options: ["1.728,5", "1.750,5", "1.780,0", "1.820,5", "1.850,5"],
            answer: null, doubt: false, correctAnswer: 0, score: 60, difficulty: "Hard"
        },
        {
            text: `<b>Teks 5</b><br>Sepetak sawah terdiri atas $x$ petak kecil berukuran $6\text{ m} \times 8\text{ m}$.<br><br>
            Biaya pemeliharaan Rp 650.000,00 per petak. Jika total biaya Rp 26.000.000,00, luas sawah yang ditanami padi adalah..... $\text{m}^2$.`,
            options: ["1.340", "1.440", "1.460", "1.540", "1.920"],
            answer: null, doubt: false, correctAnswer: 4, score: 40, difficulty: "Medium"
        }
    ]
}
    
};
