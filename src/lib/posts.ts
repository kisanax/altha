import { site } from "@/lib/site";

const defaultAuthor = `Tim ${site.name}`;

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readMinutes: number;
  author: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "syarat-dan-estimasi-biaya-pendirian-pt",
    title: "Syarat dan Estimasi Biaya Pendirian PT di 2026",
    excerpt:
      "Panduan lengkap syarat, dokumen, dan komponen biaya pendirian PT agar Anda bisa menyiapkan anggaran sejak awal.",
    date: "2026-09-10",
    category: "Pendirian Usaha",
    readMinutes: 7,
    author: defaultAuthor,
    content: `Mendirikan PT adalah langkah penting untuk usaha yang ingin bertumbuh, mengikuti tender, atau menerima investor. Namun banyak calon pengusaha ragu karena belum memahami syarat dan komponen biayanya.

## Syarat utama pendirian PT

Secara umum, pendirian PT memerlukan:

- Minimal 2 orang pemegang saham
- 1 direktur dan 1 komisaris
- Nama PT minimal 3 kata yang belum dipakai
- Alamat domisili usaha yang jelas
- KTP dan NPWP para pengurus serta pemegang saham
- Modal dasar minimal Rp 50.000.000 dengan 25% disetor

Perlu diingat, bidang usaha tertentu memiliki ketentuan modal dan persyaratan tambahan yang berbeda.

## Komponen biaya yang perlu disiapkan

Biaya pendirian PT bukan hanya jasa pengurusan. Rincinya biasanya mencakup:

### 1. Akta notaris
Notaris menyusun dan mengesahkan akta pendirian. Biaya bervariasi tergantung nilai modal dan kelengkapan dokumen.

### 2. Pengesahan badan hukum
Setelah akta, perusahaan perlu disahkan sebagai badan hukum oleh Kementerian Hukum.

### 3. NIB dan NPWP badan usaha
Pendaftaran melalui sistem OSS untuk memperoleh Nomor Induk Berusaha beserta NPWP badan usaha.

### 4. Domisili usaha
Jika belum punya kantor fisik, Anda dapat menggunakan virtual office yang memenuhi syarat zonasi.

### 5. Perizinan sektoral
Beberapa bidang usaha memerlukan izin tambahan seperti sertifikat standar atau izin khusus.

## Estimasi waktu

Proses pendirian PT umumnya memakan waktu 7 sampai 14 hari kerja, tergantung kelengkapan dokumen dan kebutuhan izin tambahan.

## Kapan sebaiknya pakai jasa konsultan?

Jika Anda ingin proses berjalan lebih cepat, ingin memastikan KBLI dan struktur saham sudah tepat, atau bidang usaha Anda memerlukan izin khusus, menggunakan jasa konsultan biasanya lebih hemat waktu dan menghindari revisi berulang.

> Catatan: angka dan ketentuan di atas bersifat umum. Kami akan menyesuaikan dengan bidang usaha dan kebutuhan spesifik Anda.`,
  },
  {
    slug: "memilih-kbli-yang-tepat",
    title: "Cara Memilih KBLI yang Tepat Agar Perizinan Tidak Bermasalah",
    excerpt:
      "Salah pilih KBLI bisa membuat izin tertahan atau usaha dinilai tidak sesuai. Ini cara memilihnya dengan benar.",
    date: "2026-08-28",
    category: "Perizinan",
    readMinutes: 6,
    author: defaultAuthor,
    content: `KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) adalah kode yang menentukan bidang usaha Anda dalam sistem perizinan. Kesalahan memilih KBLI sering menjadi penyebab utama izin tertahan.

## Kenapa KBLI begitu penting?

KBLI menentukan:

- Tingkat risiko usaha dan jenis izin yang wajib dipenuhi
- Sertifikat standar yang perlu disiapkan
- Kewajiban pajak yang berlaku
- Kelayakan mengikuti tender tertentu

## Kesalahan yang sering terjadi

### Memilih KBLI yang terlalu umum
Kode yang terlalu luas bisa membuat usaha dinilai tidak spesifik dan menyulitkan verifikasi.

### Menyalin KBLI dari perusahaan lain
Setiap usaha punya kombinasi aktivitas yang berbeda, sehingga KBLI sebaiknya disesuaikan dengan kegiatan nyata.

### Lupa KBLI pendukung
Banyak usaha memerlukan lebih dari satu KBLI, misalnya untuk aktivitas utama dan penunjang.

## Cara memilih KBLI yang tepat

1. Daftarkan seluruh kegiatan usaha yang benar-benar dijalankan.
2. Cocokkan setiap kegiatan dengan kode KBLI terbaru.
3. Perhatikan tingkat risiko untuk setiap kode.
4. Pastikan dokumen persyaratan bisa dipenuhi sebelum mendaftar.
5. Konsultasikan jika kegiatan usaha saling terkait.

## Kesimpulan

KBLI yang tepat menghemat waktu, biaya, dan menghindarkan Anda dari revisi perizinan. Jika ragu, konsultasikan pemetaan KBLI sebelum mendaftar ke sistem perizinan.`,
  },
  {
    slug: "memahami-oss-rba",
    title: "Memahami OSS RBA: Izin Usaha Berbasis Risiko",
    excerpt:
      "Sistem perizinan kini berbasis risiko. Pahami bagaimana tingkat risiko menentukan izin usaha Anda.",
    date: "2026-08-15",
    category: "Perizinan",
    readMinutes: 6,
    author: defaultAuthor,
    content: `OSS RBA (Risk Based Approach) adalah pendekatan perizinan yang menyesuaikan kewajiban izin dengan tingkat risiko setiap kegiatan usaha.

## Tiga tingkat risiko

### Risiko rendah
Umumnya cukup dengan NIB sebagai identitas dan legalitas usaha.

### Risiko menengah
Diperlukan sertifikat standar, yang dapat berupa pernyataan mandiri atau verifikasi oleh instansi.

### Risiko tinggi
Memerlukan izin khusus dan pemeriksaan lebih lanjut sebelum usaha dapat beroperasi.

## Alur umum perizinan

- Pendaftaran akun dan data pelaku usaha
- Pemilihan KBLI dan skala usaha
- Penentuan tingkat risiko oleh sistem
- Pemenuhan persyaratan yang muncul
- Penerbitan NIB dan izin terkait

## Tips agar proses lancar

1. Siapkan dokumen badan usaha sejak awal.
2. Pastikan data alamat dan luas lahan sesuai kondisi nyata.
3. Pahami standar sektor usaha Anda sebelum verifikasi.
4. Perbarui data jika ada perubahan usaha.

## Kesimpulan

OSS RBA menuntut pelaku usaha memahami risikonya sendiri. Dengan persiapan yang baik, proses perizinan menjadi lebih singkat dan tidak berulang.`,
  },
  {
    slug: "pt-vs-cv-vs-pt-perorangan",
    title: "PT vs CV vs PT Perorangan: Mana yang Cocok untuk Bisnis Anda?",
    excerpt:
      "Bingung memilih bentuk badan usaha? Bandingkan PT, CV, dan PT Perorangan dari sisi biaya, risiko, dan target pasar.",
    date: "2026-07-30",
    category: "Pendirian Usaha",
    readMinutes: 8,
    author: defaultAuthor,
    content: `Memilih bentuk badan usaha adalah keputusan strategis, bukan sekadar administratif. Berikut perbandingan tiga bentuk yang paling umum.

## PT (Perseroan Terbatas)

**Kelebihan:** berbadan hukum, tanggung jawab pemegang saham terbatas, cocok untuk investor, dan diterima di hampir semua tender.

**Kekurangan:** biaya dan persyaratan lebih besar, memerlukan minimal 2 pemegang saham.

**Cocok untuk:** usaha yang ingin berkembang, mencari pendanaan, atau mengikuti pengadaan besar.

## CV (Commanditaire Vennootschap)

**Kelebihan:** biaya lebih ringan, proses cepat, cocok untuk usaha keluarga.

**Kekurangan:** bukan badan hukum, sekutu aktif bertanggung jawab hingga harta pribadi.

**Cocok untuk:** usaha kecil hingga menengah yang belum membutuhkan investor.

## PT Perorangan

**Kelebihan:** cukup satu pemilik, biaya paling terjangkau, berbadan hukum.

**Kekurangan:** diperuntukkan bagi kriteria UMK dengan batasan modal dan omzet.

**Cocok untuk:** pelaku usaha mikro dan kecil yang ingin legalitas resmi tanpa pasangan usaha.

## Cara memilih

1. Pertimbangkan target pasar dan persyaratan tender.
2. Pikirkan rencana pendanaan di masa depan.
3. Hitung kemampuan modal dan risiko yang siap ditanggung.
4. Sesuaikan dengan skala usaha saat ini.

## Kesimpulan

Tidak ada bentuk yang terbaik untuk semua orang. Pilih berdasarkan rencana pertumbuhan Anda, lalu sesuaikan seiring kebutuhan.`,
  },
  {
    slug: "pentingnya-pendaftaran-merek",
    title: "Kenapa Merek Anda Wajib Didaftarkan Sejak Awal",
    excerpt:
      "Indonesia menganut sistem first to file. Tanpa pendaftaran, merek yang sudah Anda pakai bertahun-tahun bisa diklaim pihak lain.",
    date: "2026-07-12",
    category: "Kekayaan Intelektual",
    readMinutes: 5,
    author: defaultAuthor,
    content: `Merek dagang sering menjadi aset paling bernilai dari sebuah usaha. Sayangnya, banyak pemilik usaha baru menyadari pentingnya pendaftaran setelah terjadi sengketa.

## Sistem first to file

Di Indonesia, hak atas merek diberikan kepada pihak yang lebih dulu mengajukan pendaftaran, bukan yang lebih dulu memakainya. Artinya, pemakaian saja tidak cukup melindungi merek Anda.

## Manfaat mendaftarkan merek

- Hak eksklusif untuk menggunakan merek
- Dasar hukum kuat jika terjadi sengketa
- Aset tidak berwujud yang bisa dilisensikan
- Nilai tambah saat menarik investor

## Proses pendaftaran singkat

1. Penelusuran untuk memastikan tidak ada merek serupa.
2. Menentukan kelas barang atau jasa.
3. Pengajuan permohonan ke lembaga terkait.
4. Pemantauan hingga sertifikat terbit.

## Kesimpulan

Mendaftarkan merek adalah bentuk perlindungan murah dibanding risiko kehilangan merek yang sudah Anda bangun bertahun-tahun. Lakukan sejak awal, sebelum nama Anda dikenal luas.`,
  },
  {
    slug: "kesalahan-umum-perusahaan-baru",
    title: "7 Kesalahan Administratif yang Sering Dilakukan Perusahaan Baru",
    excerpt:
      "Dari lupa pelaporan pajak hingga data OSS yang tidak diperbarui, hindari kesalahan yang bisa merugikan perusahaan Anda.",
    date: "2026-06-20",
    category: "Kepatuhan",
    readMinutes: 6,
    author: defaultAuthor,
    content: `Setelah perusahaan berdiri, banyak pemilik usaha terlalu fokus pada operasional hingga melupakan kewajiban administratif. Berikut kesalahan yang paling sering terjadi.

## 1. Tidak melaporkan pajak secara rutin

Kewajiban pelaporan tetap berjalan meski usaha belum menghasilkan. Keterlambatan dapat menimbulkan sanksi.

## 2. Data OSS tidak diperbarui

Perubahan direksi, alamat, atau bidang usaha harus segera disinkronkan agar tidak ada selisih data.

## 3. Domisili usaha tidak sesuai zonasi

Alamat yang tidak sesuai peruntukan dapat membuat perizinan bermasalah di kemudian hari.

## 4. Tidak memisahkan keuangan pribadi dan usaha

Pencampuran rekening menyulitkan pembukuan dan berisiko saat pemeriksaan.

## 5. Mengabaikan dokumen pendukung transaksi

Bukti transaksi yang tidak rapi menyulitkan pelaporan dan audit.

## 6. Tidak menyimpan salinan dokumen legal

Akta, SK, dan izin sebaiknya disimpan dalam salinan digital dan fisik.

## 7. Menunda perubahan data saat ada pergantian pengurus

Perubahan pengurus wajib dicatat resmi melalui akta dan pengesahan.

## Kesimpulan

Kepatuhan administratif bukan beban, melainkan perlindungan. Dengan pengelolaan yang rapi, perusahaan lebih siap menghadapi tender, pemeriksaan, dan pertumbuhan usaha.`,
  },
];

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);

export const sortedPosts = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
