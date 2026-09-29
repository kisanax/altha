# Altha Veer Diandri — Website

Situs profil dan layanan **PT Altha Veer Diandri**: pendirian badan usaha, legalitas,
perizinan distribusi alat kesehatan (IDAK/IPAK, izin edar, CDAKB), serta paket website,
domain, dan email perusahaan.

- **Domain:** https://www.althaveerdiandri.com
- **Repositori:** https://github.com/kisanax/altha.git
- **Email penawaran:** sales@althaveerdiandri.com
- **Email layanan pelanggan:** admin@althaveerdiandri.com

## Teknologi

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
npm run lint     # pemeriksaan ESLint
```

## Struktur

| Lokasi | Isi |
| --- | --- |
| `src/lib/site.ts` | Identitas brand, domain, email, WhatsApp, alamat, navigasi |
| `src/lib/services.ts` | Data seluruh layanan: paket, harga, syarat, alur, FAQ |
| `src/lib/portfolio.ts` | Daftar klien pada halaman portofolio |
| `src/lib/posts.ts` | Artikel panduan beserta isinya |
| `src/app/` | Halaman: beranda, layanan, harga, portofolio, blog, tentang, FAQ, kontak |
| `src/components/` | Navbar, Footer, kartu, CTA, form kontak, perender markdown |
| `public/photos/` | Foto stok yang dipakai di situs |
| `CREDITS.md` | Sumber dan lisensi aset |

## Mengubah konten

- **Ganti nomor WhatsApp / email / alamat** — cukup ubah `src/lib/site.ts`. Seluruh
  tautan WhatsApp, tombol email, dan data terstruktur SEO mengikuti file itu.
- **Tambah atau ubah layanan** — tambahkan objek pada `services` di
  `src/lib/services.ts`. Halaman `/layanan/[slug]`, daftar harga, sitemap, dan menu
  footer menyesuaikan secara otomatis. Isi `category` hanya dengan salah satu nilai di
  `serviceCategories` agar layanan muncul pada grup yang benar.
- **Ganti foto** — timpa berkas di `public/photos/` dengan nama yang sama, atau ubah
  `src` pada komponen terkait.
- **Ganti harga promo** — isi `priceOriginal` pada paket; harga itu akan tampil
  dicoret di samping `price`.

## SEO

`src/app/sitemap.ts` dan `src/app/robots.ts` menghasilkan sitemap serta robots.txt dari
daftar halaman, layanan, dan artikel. Beranda dan halaman FAQ menyertakan data terstruktur
`ProfessionalService`, `FAQPage`, dan `Article`.

Alamat kanonik situs diambil dari `site.url`, jadi pastikan nilainya sudah benar sebelum
deploy — nilai itu dipakai untuk `metadataBase`, sitemap, dan URL kanonik setiap halaman.

## Catatan

Harga layanan pada `src/lib/services.ts` masih berupa estimasi dan perlu diverifikasi
sebelum dipublikasikan. Nama klien pada `src/lib/portfolio.ts` ditampilkan berdasarkan
persetujuan masing-masing klien.
