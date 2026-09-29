export type ServicePackage = {
  name: string;
  price: string;
  priceOriginal?: string;
  duration: string;
  popular?: boolean;
  features: string[];
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  category: string;
  priceFrom: string;
  duration: string;
  welcome: string;
  highlights: string[];
  packages: ServicePackage[];
  requirements: string[];
  steps: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "pendirian-pt",
    title: "Pendirian PT",
    short:
      "Dirikan Perseroan Terbatas lengkap dengan akta notaris, SK Kemenkumham, NIB, dan NPWP badan usaha.",
    icon: "🏢",
    category: "Legalitas",
    priceFrom: "Rp 4.500.000",
    duration: "7 - 14 hari kerja",
    welcome:
      "Perseroan Terbatas (PT) adalah bentuk badan usaha paling umum untuk bisnis yang ingin berkembang, mencari investor, atau mengikuti tender. Kami mengurus seluruh rangkaian pendirian dari akta notaris hingga perusahaan siap beroperasi.",
    highlights: [
      "Akta pendirian notaris resmi",
      "SK Pengesahan Kemenkumham",
      "NIB + NPWP badan usaha",
      "Konsultasi struktur saham & direksi",
    ],
    packages: [
      {
        name: "Paket Dasar",
        price: "Rp 4.500.000",
        duration: "7 - 10 hari kerja",
        features: [
          "Akta pendirian notaris",
          "SK Kemenkumham",
          "NIB & NPWP badan usaha",
          "Konsultasi awal",
        ],
      },
      {
        name: "Paket Lengkap",
        price: "Rp 7.900.000",
        priceOriginal: "Rp 9.500.000",
        duration: "10 - 14 hari kerja",
        popular: true,
        features: [
          "Semua pada Paket Dasar",
          "Pendaftaran BPJS Kesehatan & Ketenagakerjaan",
          "Sertifikat pendaftaran perusahaan",
          "Pendampingan OSS sektoral",
        ],
      },
      {
        name: "Paket Investor",
        price: "Rp 14.500.000",
        duration: "14 - 21 hari kerja",
        features: [
          "Semua pada Paket Lengkap",
          "Perumusan anggaran dasar khusus",
          "Konsultasi struktur holding & saham",
          "Pendampingan legal due diligence",
          "Pendampingan penanaman modal (PMDN/PMA)",
        ],
      },
    ],
    requirements: [
      "Minimal 2 orang pemegang saham (perorangan atau badan)",
      "1 orang direktur dan 1 orang komisaris",
      "KTP dan NPWP para pengurus dan pemegang saham",
      "Nama PT minimal 3 kata",
      "Alamat domisili usaha yang jelas",
      "Modal dasar minimal Rp 50.000.000 (menyesuaikan bidang usaha)",
    ],
    steps: [
      {
        title: "Konsultasi & pengecekan nama",
        desc: "Kami bantu struktur, modal, dan pengecekan ketersediaan nama PT.",
      },
      {
        title: "Penyiapan dokumen",
        desc: "Pengumpulan data pemegang saham, direksi, dan domisili usaha.",
      },
      {
        title: "Akta notaris",
        desc: "Penandatanganan akta pendirian di hadapan notaris.",
      },
      {
        title: "Pengesahan Kemenkumham",
        desc: "Pengurusan SK badan hukum agar PT sah secara hukum.",
      },
      {
        title: "NIB, NPWP & perizinan",
        desc: "Pendaftaran OSS untuk NIB dan izin usaha dasar sampai serah terima.",
      },
    ],
    faq: [
      {
        q: "Berapa modal minimal untuk mendirikan PT?",
        a: "Modal dasar minimal umumnya Rp 50.000.000 dengan minimal 25% disetor. Beberapa bidang usaha tertentu memiliki ketentuan modal yang berbeda, terutama untuk penanaman modal asing.",
      },
      {
        q: "Apakah bisa mendirikan PT seorang diri?",
        a: "PT biasa memerlukan minimal 2 pemegang saham. Jika ingin sendiri, Anda bisa menggunakan PT Perorangan yang diperuntukkan bagi UMK.",
      },
      {
        q: "Berapa lama proses pendirian PT?",
        a: "Rata-rata 7 - 14 hari kerja tergantung kelengkapan dokumen dan antrean pengesahan badan hukum.",
      },
    ],
  },
  {
    slug: "pendirian-cv",
    title: "Pendirian CV",
    short:
      "Bentuk badan usaha CV dengan biaya lebih ringan, cocok untuk usaha yang baru mulai bertumbuh.",
    icon: "🤝",
    category: "Legalitas",
    priceFrom: "Rp 2.900.000",
    duration: "5 - 10 hari kerja",
    welcome:
      "Commanditaire Vennootschap (CV) adalah badan usaha yang ringan biaya dan prosesnya, namun sudah bisa memiliki rekening badan usaha serta mengikuti pengadaan. Cocok untuk usaha keluarga atau bisnis yang baru berkembangan.",
    highlights: [
      "Biaya lebih ringan dari PT",
      "Akta notaris & SK pendaftaran",
      "Bisa buka rekening badan usaha",
      "Proses cepat",
    ],
    packages: [
      {
        name: "Paket Dasar",
        price: "Rp 2.900.000",
        duration: "5 - 7 hari kerja",
        features: ["Akta pendirian CV", "SK Pendaftaran", "NPWP badan usaha", "NIB"],
      },
      {
        name: "Paket Lengkap",
        price: "Rp 4.900.000",
        priceOriginal: "Rp 5.900.000",
        duration: "7 - 10 hari kerja",
        popular: true,
        features: [
          "Semua pada Paket Dasar",
          "Pendaftaran OSS lengkap",
          "Konsultasi KBLI & struktur usaha",
        ],
      },
    ],
    requirements: [
      "Minimal 2 orang pendiri (sekutu aktif & pasif)",
      "KTP dan NPWP para pendiri",
      "Nama CV minimal 3 kata",
      "Alamat domisili usaha",
    ],
    steps: [
      { title: "Konsultasi", desc: "Menentukan susunan sekutu aktif dan pasif." },
      { title: "Penyiapan dokumen", desc: "Pengumpulan data pendiri dan domisili." },
      { title: "Akta notaris", desc: "Penandatanganan akta pendirian CV." },
      { title: "SK & perizinan", desc: "Pendaftaran SK, NPWP, dan NIB melalui OSS." },
    ],
    faq: [
      {
        q: "Apa bedanya CV dan PT?",
        a: "PT berbadan hukum dan tanggung jawab pemegang saham terbatas sesuai modal, sedangkan CV bukan badan hukum dan sekutu aktif bertanggung jawab hingga harta pribadi.",
      },
      {
        q: "Apakah CV bisa ikut tender?",
        a: "Banyak pengadaan sudah menerima CV, namun sebagian tender besar mensyaratkan PT. Pertimbangkan target pasar Anda sebelum memilih.",
      },
    ],
  },
  {
    slug: "pt-perorangan",
    title: "Pendirian PT Perorangan",
    short:
      "Badan usaha perorangan berbadan hukum untuk UMK, satu orang saja sudah cukup.",
    icon: "👤",
    category: "Legalitas",
    priceFrom: "Rp 1.500.000",
    duration: "3 - 7 hari kerja",
    welcome:
      "PT Perorangan adalah badan usaha berbadan hukum yang dirancang untuk Usaha Mikro dan Kecil. Hanya butuh satu orang pemilik, tanpa akta notaris, dengan pendaftaran daring melalui sistem resmi.",
    highlights: [
      "Cukup 1 orang pemilik",
      "Tanpa akta notaris",
      "Biaya paling terjangkau",
      "Perusahaan berbadan hukum",
    ],
    packages: [
      {
        name: "Paket Dasar",
        price: "Rp 1.500.000",
        priceOriginal: "Rp 1.900.000",
        duration: "3 - 5 hari kerja",
        popular: true,
        features: [
          "Pendaftaran PT Perorangan",
          "Sertifikat pendaftaran",
          "NIB & NPWP badan usaha",
          "Konsultasi KBLI",
        ],
      },
      {
        name: "Paket Lengkap",
        price: "Rp 2.400.000",
        duration: "5 - 7 hari kerja",
        features: [
          "Semua pada Paket Dasar",
          "Pendampingan perizinan sektoral",
          "Konsultasi KBLI & struktur usaha",
        ],
      },
    ],
    requirements: [
      "WNI dan berusia minimal 17 tahun",
      "KTP dan NPWP pribadi",
      "Alamat domisili usaha",
      "Bidang usaha termasuk kriteria UMK",
    ],
    steps: [
      { title: "Pengecekan kelayakan", desc: "Memastikan bidang usaha sesuai kriteria UMK." },
      { title: "Pengumpulan data", desc: "Data pemilik, KBLI, dan domisili usaha." },
      { title: "Pendaftaran resmi", desc: "Pengurusan pendaftaran PT Perorangan secara daring." },
      { title: "NIB & NPWP", desc: "Penerbitan NIB, NPWP, dan dokumen pendukung." },
    ],
    faq: [
      {
        q: "Apakah PT Perorangan bisa naik kelas menjadi PT biasa?",
        a: "Bisa. Ketika usaha berkembang dan memerlukan investor atau modal lebih besar, Anda dapat bertransformasi menjadi PT biasa melalui proses pendirian ulang.",
      },
      {
        q: "Apa saja batasan PT Perorangan?",
        a: "Diperuntukkan bagi kriteria UMK dengan batasan modal dan omzet tertentu sesuai regulasi yang berlaku. Kami akan cek kelayakan bidang usaha Anda terlebih dahulu.",
      },
    ],
  },
  {
    slug: "website-domain-email",
    title: "Paket Website, Domain & Email",
    short:
      "Website corporate lengkap dengan domain dan email perusahaan — siap pakai dan ramah SEO.",
    icon: "🌐",
    category: "Website, Domain & Email",
    priceFrom: "Rp 3.500.000",
    duration: "7 - 14 hari kerja",
    welcome:
      "Kehadiran online yang meyakinkan sering menjadi penentu apakah calon klien dan mitra percaya pada usaha Anda. Paket ini mencakup perancangan website, pendaftaran domain, dan email perusahaan sehingga Anda bisa langsung tampil profesional tanpa mengurus teknisnya sendiri.",
    highlights: [
      "Website corporate responsif",
      "Domain sesuai pilihan Anda",
      "Email perusahaan berbasis domain",
      "Dasar SEO on-page & optimasi kecepatan",
    ],
    packages: [
      {
        name: "Website Lite",
        price: "Rp 3.500.000",
        priceOriginal: "Rp 4.500.000",
        duration: "7 - 10 hari kerja",
        features: [
          "Website 5 halaman responsif",
          "Domain 1 tahun",
          "Email perusahaan 1 akun",
          "Dasar SEO on-page",
        ],
      },
      {
        name: "Website Lengkap",
        price: "Rp 6.900.000",
        priceOriginal: "Rp 8.500.000",
        duration: "10 - 14 hari kerja",
        popular: true,
        features: [
          "Semua pada Website Lite",
          "Halaman layanan & katalog produk",
          "Form kontak terhubung WhatsApp",
          "Email perusahaan 5 akun",
          "Google Analytics & Search Console",
        ],
      },
      {
        name: "Website Premium",
        price: "Rp 12.500.000",
        priceOriginal: "Rp 15.000.000",
        duration: "14 - 21 hari kerja",
        features: [
          "Semua pada Website Lengkap",
          "Desain khusus sesuai brand",
          "Halaman blog & optimasi SEO lanjutan",
          "Email perusahaan berbasis domain tanpa batas",
          "Panduan pengelolaan konten & pelatihan singkat",
        ],
      },
    ],
    requirements: [
      "Nama domain yang diinginkan",
      "Logo dan identitas visual usaha",
      "Materi profil usaha, layanan, dan kontak",
      "Referensi desain situs (opsional)",
    ],
    steps: [
      {
        title: "Konsultasi & struktur",
        desc: "Menentukan tujuan situs, halaman yang dibutuhkan, dan nama domain.",
      },
      {
        title: "Desain & pengembangan",
        desc: "Perancangan tampilan, penulisan konten, dan pengembangan situs.",
      },
      {
        title: "Domain & email",
        desc: "Pendaftaran domain serta penyiapan email perusahaan.",
      },
      {
        title: "Tayang & serah terima",
        desc: "Situs tayang, email aktif, dan panduan pengelolaan diserahkan.",
      },
    ],
    faq: [
      {
        q: "Apakah domain dan email sudah termasuk?",
        a: "Ya. Paket mencakup pendaftaran domain untuk tahun pertama serta email perusahaan berbasis domain tersebut. Perpanjangan tahun berikutnya mengikuti biaya registrasi.",
      },
      {
        q: "Apakah bisa pakai konten saya sendiri?",
        a: "Bisa. Kami dapat mengembangkan situs berdasarkan materi yang Anda siapkan, atau membantu menyusun struktur dan draf kontennya.",
      },
      {
        q: "Apakah website bisa digabung dengan pendirian PT?",
        a: "Bisa. Jika Anda juga membutuhkan pendirian badan usaha, keduanya dapat diproses dalam satu paket agar lebih hemat waktu.",
      },
    ],
  },
  {
    slug: "nib-oss",
    title: "NIB & OSS RBA",
    short:
      "Pendaftaran Nomor Induk Berusaha dan perizinan dasar melalui sistem OSS berbasis risiko.",
    icon: "🆔",
    category: "Perizinan",
    priceFrom: "Rp 1.200.000",
    duration: "2 - 5 hari kerja",
    welcome:
      "Nomor Induk Berusaha (NIB) adalah identitas pelaku usaha yang wajib dimiliki sebelum beroperasi. Kami bantu pendaftaran melalui OSS RBA, termasuk pemilihan KBLI dan tingkat risiko yang tepat.",
    highlights: [
      "NIB untuk PT, CV, atau perorangan",
      "Pemetaan KBLI yang tepat",
      "Sertifikat standar & izin terbit",
      "Pendampingan sampai aktif",
    ],
    packages: [
      {
        name: "NIB Dasar",
        price: "Rp 1.200.000",
        duration: "2 - 3 hari kerja",
        features: ["Pendaftaran akun OSS", "Penerbitan NIB", "Pemetaan KBLI dasar", "Konsultasi risiko"],
      },
      {
        name: "NIB + Sertifikat Standar",
        price: "Rp 2.500.000",
        priceOriginal: "Rp 3.200.000",
        duration: "3 - 5 hari kerja",
        popular: true,
        features: [
          "Semua pada NIB Dasar",
          "Penyusunan dokumen sertifikat standar",
          "Pendampingan pemenuhan persyaratan",
          "Verifikasi sampai terbit",
        ],
      },
    ],
    requirements: [
      "Akta pendirian atau dokumen badan usaha",
      "NPWP badan usaha",
      "Data pengurus dan pemegang saham",
      "Alamat dan luas lahan usaha",
    ],
    steps: [
      { title: "Pemetaan KBLI", desc: "Menentukan kode KBLI dan tingkat risiko usaha Anda." },
      { title: "Pendaftaran akun", desc: "Pembuatan akun OSS dan verifikasi data pelaku usaha." },
      { title: "Pengisian data usaha", desc: "Input data sesuai KBLI dan skala usaha." },
      { title: "Penerbitan izin", desc: "NIB dan izin terkait terbit, siap diunduh." },
    ],
    faq: [
      {
        q: "Apa itu OSS RBA?",
        a: "OSS Risk Based Approach adalah sistem perizinan daring yang menentukan kewajiban izin berdasarkan tingkat risiko setiap KBLI: rendah, menengah, atau tinggi.",
      },
      {
        q: "Apakah NIB cukup untuk mulai beroperasi?",
        a: "Tergantung bidang usaha. Risiko rendah umumnya cukup dengan NIB, sedangkan risiko menengah dan tinggi memerlukan sertifikat standar atau izin tambahan.",
      },
    ],
  },
  {
    slug: "idak-ipak",
    title: "IDAK / IPAK Distribusi",
    short:
      "Izin Distribusi Alat Kesehatan (dahulu IPAK) beserta pendampingan audit gudang, workshop, dan PJT.",
    icon: "🏥",
    category: "Perizinan",
    priceFrom: "Rp 12.500.000",
    duration: "30 - 60 hari kerja",
    welcome:
      "IDAK (Izin Distribusi Alat Kesehatan) — sebelumnya dikenal sebagai IPAK — adalah izin yang wajib dimiliki setiap distributor alat kesehatan di Indonesia. Kami menyiapkan seluruh dokumen, mendampingi audit sarana, dan mengawal proses sampai izin terbit.",
    highlights: [
      "Penetapan KBLI 46691 dan kelas risiko",
      "Penyiapan dokumen sarana & PJT",
      "Pendampingan audit gudang dan workshop",
      "Pengajuan melalui OSS dan Kementerian Kesehatan",
    ],
    packages: [
      {
        name: "Persiapan IDAK",
        price: "Rp 12.500.000",
        duration: "30 - 45 hari kerja",
        features: [
          "Analisis kesiapan sarana & dokumen",
          "Penyusunan berkas persyaratan",
          "Konsultasi penunjukan PJT",
          "Pengajuan melalui OSS",
        ],
      },
      {
        name: "IDAK + Audit",
        price: "Rp 21.500.000",
        priceOriginal: "Rp 26.500.000",
        duration: "45 - 60 hari kerja",
        popular: true,
        features: [
          "Semua pada Persiapan IDAK",
          "Pendampingan audit gudang/workshop",
          "Penyusunan SOP distribusi",
          "Pemenuhan temuan audit",
          "Monitoring sampai izin terbit",
        ],
      },
    ],
    requirements: [
      "Akta pendirian dan SK badan hukum",
      "NIB dengan KBLI bidang distribusi alat kesehatan",
      "Alamat gudang/workshop yang sesuai peruntukan",
      "Penanggung Jawab Teknis (PJT) yang memenuhi kualifikasi",
      "Dokumen sarana, denah, dan peralatan penyimpanan",
      "SOP distribusi dan penanganan produk",
    ],
    steps: [
      {
        title: "Analisa kesiapan",
        desc: "Kami periksa kesesuaian sarana, PJT, dan dokumen terhadap persyaratan yang berlaku.",
      },
      {
        title: "Penyiapan dokumen",
        desc: "Penyusunan berkas, SOP, dan pemenuhan kekurangan yang ditemukan.",
      },
      {
        title: "Pengajuan & audit",
        desc: "Pengajuan ke OSS/instansi terkait dan pendampingan saat audit sarana.",
      },
      {
        title: "Penerbitan izin",
        desc: "Penanganan revisi bila ada, sampai IDAK terbit dan diserahkan.",
      },
    ],
    faq: [
      {
        q: "Apa bedanya IDAK dan IPAK?",
        a: "IPAK adalah istilah lama untuk izin distribusi alat kesehatan. Seiring penyesuaian regulasi dan sistem perizinan berbasis risiko, istilah yang kini digunakan adalah IDAK. Substansinya tetap izin untuk menyalurkan alat kesehatan.",
      },
      {
        q: "Apakah gudang harus dimiliki sendiri?",
        a: "Tidak harus milik sendiri, namun harus memenuhi persyaratan penyimpanan dan peruntukan lokasi. Kami bantu menilai kelayakan sarana Anda sebelum pengajuan.",
      },
      {
        q: "Apakah PJT wajib dipekerjakan penuh waktu?",
        a: "PJT harus memenuhi kualifikasi dan bertanggung jawab atas aspek teknis distribusi. Kami bantu memetakan opsi yang sesuai dengan skala usaha Anda.",
      },
    ],
  },
  {
    slug: "izin-edar-alkes",
    title: "Izin Edar Alat Kesehatan",
    short:
      "Registrasi izin edar alat kesehatan dalam negeri maupun impor melalui regalkes Kemenkes.",
    icon: "📋",
    category: "Perizinan",
    priceFrom: "Rp 7.500.000",
    duration: "30 - 90 hari kerja",
    welcome:
      "Sebelum alat kesehatan boleh diperdagangkan, produk tersebut wajib memiliki izin edar. Kami membantu registrasi produk dalam negeri maupun impor, dari penyiapan berkas teknis hingga nomor izin edar terbit.",
    highlights: [
      "Penelusuran kelas risiko produk",
      "Penyusunan dokumen teknis",
      "Registrasi via regalkes Kemenkes",
      "Pendampingan penanganan kueri regulator",
    ],
    packages: [
      {
        name: "Registrasi 1 Produk",
        price: "Rp 7.500.000",
        priceOriginal: "Rp 9.500.000",
        duration: "30 - 60 hari kerja",
        popular: true,
        features: [
          "Penetapan kelas risiko alat kesehatan",
          "Penyiapan dokumen administratif",
          "Pendampingan unggah dokumen teknis",
          "Monitoring status registrasi",
        ],
      },
      {
        name: "Registrasi Multi Produk",
        price: "Mulai Rp 19.500.000",
        duration: "60 - 90 hari kerja",
        features: [
          "Semua pada Registrasi 1 Produk",
          "Pengelolaan beberapa varian sekaligus",
          "Koordinasi dengan pemilik izin edar",
          "Penanganan kueri regulator",
        ],
      },
    ],
    requirements: [
      "NIB dan KBLI yang relevan",
      "Dokumen legalitas produsen atau prinsipal",
      "Data teknis dan label produk",
      "Hasil uji laboratorium bila dipersyaratkan",
      "Surat kuasa atau perjanjian distribusi",
    ],
    steps: [
      {
        title: "Klasifikasi produk",
        desc: "Menentukan kelas risiko dan jalur registrasi yang tepat.",
      },
      {
        title: "Penyusunan berkas",
        desc: "Melengkapi dokumen administratif dan teknis sesuai persyaratan.",
      },
      {
        title: "Registrasi",
        desc: "Pengajuan melalui sistem registrasi alat kesehatan Kemenkes.",
      },
      {
        title: "Penanganan kueri",
        desc: "Menjawab permintaan tambahan dari regulator hingga izin edar terbit.",
      },
    ],
    faq: [
      {
        q: "Siapa yang boleh mengajukan izin edar?",
        a: "Izin edar diajukan oleh pihak yang memenuhi persyaratan sebagai pemilik izin edar, umumnya produsen dalam negeri atau distributor/importir dengan penunjukan resmi dari prinsipal.",
      },
      {
        q: "Berapa lama izin edar terbit?",
        a: "Bergantung kelas risiko dan kelengkapan dokumen. Produk kelas rendah umumnya lebih cepat, sedangkan kelas tinggi yang memerlukan evaluasi lebih mendalam bisa memakan waktu beberapa bulan.",
      },
    ],
  },
  {
    slug: "cdakb",
    title: "Sertifikasi CDAKB",
    short:
      "Sertifikasi Cara Distribusi Alat Kesehatan yang Baik sebagai bukti kepatuhan distribusi.",
    icon: "✅",
    category: "Perizinan",
    priceFrom: "Rp 15.000.000",
    duration: "45 - 90 hari kerja",
    welcome:
      "CDAKB adalah standar cara distribusi alat kesehatan yang baik. Sertifikasinya menjadi bukti keseriusan distributor di mata prinsipal, rumah sakit, dan instansi. Kami dampingi dari penyiapan sistem mutu hingga audit.",
    highlights: [
      "Gap analysis sistem mutu",
      "Penyusunan dokumen dan SOP wajib",
      "Simulasi audit internal",
      "Pendampingan audit sertifikasi",
    ],
    packages: [
      {
        name: "Persiapan CDAKB",
        price: "Rp 15.000.000",
        priceOriginal: "Rp 18.500.000",
        duration: "45 - 60 hari kerja",
        popular: true,
        features: [
          "Gap analysis terhadap standar CDAKB",
          "Penyusunan dokumen & SOP",
          "Pelatihan singkat tim internal",
          "Simulasi audit",
        ],
      },
      {
        name: "Persiapan + Pendampingan Audit",
        price: "Rp 24.500.000",
        duration: "60 - 90 hari kerja",
        features: [
          "Semua pada Persiapan CDAKB",
          "Pendampingan saat audit sertifikasi",
          "Penyusunan rencana tindak lanjut",
          "Pendampingan pemenuhan temuan",
        ],
      },
    ],
    requirements: [
      "IDAK yang masih berlaku",
      "Sarana penyimpanan dan distribusi yang memenuhi standar",
      "Struktur organisasi dan uraian tugas",
      "Dokumen mutu dan rekaman distribusi",
      "PJT dan personel yang terlatih",
    ],
    steps: [
      {
        title: "Gap analysis",
        desc: "Menilai kesenjangan kondisi saat ini terhadap standar CDAKB.",
      },
      {
        title: "Penyusunan sistem",
        desc: "Menyiapkan dokumen mutu, SOP, dan rekaman yang dipersyaratkan.",
      },
      {
        title: "Simulasi audit",
        desc: "Melatih tim dan menguji kesiapan sebelum audit sebenarnya.",
      },
      {
        title: "Audit & tindak lanjut",
        desc: "Mendampingi proses audit dan menuntaskan temuan sampai sertifikat terbit.",
      },
    ],
    faq: [
      {
        q: "Apakah CDAKB wajib bagi semua distributor?",
        a: "Kewajiban dan penerapannya mengikuti ketentuan yang berlaku serta persyaratan mitra bisnis Anda. Banyak prinsipal dan fasilitas kesehatan mensyaratkan CDAKB dalam proses kerja sama.",
      },
      {
        q: "Apakah bisa diurus bersamaan dengan IDAK?",
        a: "Bisa. Sebaiknya direncanakan berurutan karena beberapa persyaratan saling terkait. Kami akan menyusun jadwalnya agar efisien.",
      },
    ],
  },
  {
    slug: "izin-sektoral",
    title: "Perizinan Khusus & Sektoral",
    short:
      "Pengurusan izin sektor khusus seperti kesehatan, pangan, konstruksi, dan perdagangan.",
    icon: "📜",
    category: "Perizinan",
    priceFrom: "Rp 3.500.000",
    duration: "Sesuai jenis izin",
    welcome:
      "Setiap sektor usaha memiliki persyaratan izin spesifik. Kami membantu identifikasi izin yang wajib Anda miliki dan mengurusnya dari penyiapan dokumen hingga terbit.",
    highlights: [
      "Analisis kebutuhan izin per sektor",
      "Pendampingan audit & verifikasi",
      "Koordinasi dengan instansi terkait",
      "Manajemen dokumen terpusat",
    ],
    packages: [
      {
        name: "Konsultasi Pemetaan",
        price: "Rp 3.500.000",
        duration: "3 - 7 hari kerja",
        features: [
          "Audit kebutuhan izin",
          "Peta regulasi sektor",
          "Roadmap perizinan",
          "Estimasi waktu & biaya",
        ],
      },
      {
        name: "Pengurusan Penuh",
        price: "Mulai Rp 9.500.000",
        priceOriginal: "Mulai Rp 12.500.000",
        duration: "Sesuai jenis izin",
        popular: true,
        features: [
          "Penyiapan seluruh dokumen",
          "Pendampingan audit lapangan",
          "Koordinasi instansi & notaris",
          "Monitoring sampai izin terbit",
        ],
      },
    ],
    requirements: [
      "Dokumen badan usaha lengkap",
      "Spesifikasi produk atau jasa",
      "Data lokasi & fasilitas usaha",
      "Dokumen teknis sesuai sektor",
    ],
    steps: [
      { title: "Audit perizinan", desc: "Memetakan izin yang wajib dimiliki sesuai sektor." },
      { title: "Penyusunan dokumen", desc: "Menyiapkan dokumen teknis dan administratif." },
      { title: "Pengajuan", desc: "Pengajuan ke instansi pusat atau daerah terkait." },
      { title: "Verifikasi & audit", desc: "Pendampingan proses verifikasi hingga audit lapangan." },
      { title: "Penerbitan izin", desc: "Izin terbit dan serah terima dokumen." },
    ],
    faq: [
      {
        q: "Sektor apa saja yang biasa kami tangani?",
        a: "Antara lain perdagangan, konstruksi, kesehatan, pangan dan kosmetik, serta sektor lain yang memerlukan izin khusus. Setiap kasus kami nilai kebutuhan izinnya secara spesifik.",
      },
      {
        q: "Berapa lama proses izin sektoral?",
        a: "Sangat bervariasi. Izin sederhana bisa selesai dalam hitungan minggu, sementara izin yang memerlukan audit lapangan bisa memakan waktu beberapa bulan.",
      },
    ],
  },
  {
    slug: "pendaftaran-merek",
    title: "Pendaftaran Merek & HAKI",
    short:
      "Lindungi merek dagang dan kekayaan intelektual usaha Anda agar tidak diklaim pihak lain.",
    icon: "™️",
    category: "Legalitas",
    priceFrom: "Rp 2.700.000",
    duration: "1 - 3 hari kerja (pengajuan)",
    welcome:
      "Merek adalah aset paling berharga bagi banyak bisnis. Kami membantu penelusuran, penyiapan dokumen, dan pengajuan pendaftaran merek ke DJKI agar merek Anda aman secara hukum.",
    highlights: [
      "Penelusuran merek sebelum daftar",
      "Klasifikasi barang & jasa",
      "Pengajuan ke DJKI",
      "Pemantauan status permohonan",
    ],
    packages: [
      {
        name: "Merek Perorangan (UMK)",
        price: "Rp 2.700.000",
        priceOriginal: "Rp 3.400.000",
        duration: "1 - 3 hari kerja",
        popular: true,
        features: [
          "Penelusuran merek",
          "1 kelas barang/jasa",
          "Pengajuan permohonan",
          "Laporan status berkala",
        ],
      },
      {
        name: "Merek Badan Usaha",
        price: "Rp 3.900.000",
        duration: "1 - 3 hari kerja",
        features: [
          "Penelusuran merek",
          "1 kelas barang/jasa",
          "Pengajuan permohonan",
          "Pendampingan tanggapan keberatan",
        ],
      },
    ],
    requirements: [
      "Label atau logo merek yang akan didaftarkan",
      "KTP atau dokumen badan usaha",
      "Daftar barang/jasa yang diperdagangkan",
      "Surat pernyataan kepemilikan merek",
    ],
    steps: [
      { title: "Penelusuran", desc: "Mengecek kemungkinan kesamaan dengan merek terdaftar." },
      { title: "Penentuan kelas", desc: "Menentukan kelas barang/jasa yang tepat." },
      { title: "Pengajuan", desc: "Mengajukan permohonan pendaftaran ke DJKI." },
      { title: "Pemantauan", desc: "Memantau proses hingga sertifikat merek terbit." },
    ],
    faq: [
      {
        q: "Mengapa merek perlu didaftarkan?",
        a: "Indonesia menganut sistem first to file. Pihak yang mendaftar lebih dulu berhak atas merek tersebut, sehingga mendaftar lebih awal melindungi bisnis Anda.",
      },
      {
        q: "Berapa lama sertifikat merek terbit?",
        a: "Jika tidak ada keberatan, sertifikat umumnya terbit dalam beberapa bulan hingga sekitar satu tahun setelah pengajuan, tergantung proses pemeriksaan.",
      },
    ],
  },
  {
    slug: "perubahan-pt",
    title: "Perubahan Data & Akta PT",
    short:
      "Perubahan direksi, alamat, modal, nama, atau bidang usaha beserta pengesahan resminya.",
    icon: "🔄",
    category: "Legalitas",
    priceFrom: "Rp 2.500.000",
    duration: "5 - 21 hari kerja",
    welcome:
      "Seiring pertumbuhan usaha, data perusahaan sering perlu diperbarui. Kami menangani perubahan akta notaris, pengesahan Kemenkumham, hingga pembaruan data di OSS dan pajak.",
    highlights: [
      "Perubahan direksi & komisaris",
      "Perubahan alamat & domisili",
      "Perubahan modal & pemegang saham",
      "Sinkronisasi data OSS dan pajak",
    ],
    packages: [
      {
        name: "Perubahan Ringan",
        price: "Rp 2.500.000",
        priceOriginal: "Rp 3.200.000",
        duration: "5 - 10 hari kerja",
        popular: true,
        features: [
          "Perubahan direksi/komisaris atau alamat",
          "Akta perubahan notaris",
          "Pembaruan data OSS",
          "Pelaporan ke instansi terkait",
        ],
      },
      {
        name: "Perubahan Kompleks",
        price: "Mulai Rp 5.500.000",
        duration: "14 - 21 hari kerja",
        features: [
          "Perubahan modal & pemegang saham",
          "Pengesahan Kemenkumham",
          "Pembaruan NPWP & OSS",
          "Konsultasi kebutuhan dokumen",
        ],
      },
    ],
    requirements: [
      "Akta pendirian dan perubahan terakhir",
      "SK Kemenkumham terakhir",
      "KTP dan NPWP pengurus baru (jika ada)",
      "Data perubahan yang dikehendaki",
    ],
    steps: [
      { title: "Identifikasi perubahan", desc: "Menentukan jenis perubahan dan dokumen yang dibutuhkan." },
      { title: "Penyusunan akta", desc: "Pembuatan akta perubahan di hadapan notaris." },
      { title: "Pengesahan", desc: "Pengesahan perubahan ke Kemenkumham jika diperlukan." },
      { title: "Pembaruan data", desc: "Sinkronisasi data ke OSS, pajak, dan instansi terkait." },
    ],
    faq: [
      {
        q: "Kapan perubahan PT wajib diurus?",
        a: "Setiap kali ada perubahan pengurus, alamat, modal, nama, atau bidang usaha. Data resmi harus konsisten dengan kondisi sebenarnya agar tidak menimbulkan masalah administratif.",
      },
      {
        q: "Apakah perubahan alamat selalu perlu akta notaris?",
        a: "Perpindahan alamat dalam satu wilayah biasanya cukup dengan akta perubahan, sedangkan perpindahan antar kota/provinsi memerlukan persetujuan tambahan. Kami akan sesuaikan prosedurnya.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);

export const serviceCategories = [
  "Legalitas",
  "Perizinan",
  "Website, Domain & Email",
] as const;

/**
 * Anchor hash untuk sebuah kategori layanan, dipakai bersama oleh Navbar
 * (dropdown + drawer mobile) dan section kategori di /layanan.
 * Contoh: "Website, Domain & Email" -> "website-domain-email".
 */
export const categoryAnchor = (category: string) =>
  category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
