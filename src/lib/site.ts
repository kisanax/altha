export const site = {
  name: "Altha Veer Diandri",
  legalName: "PT Altha Veer Diandri",
  shortName: "Althav",
  brandTagline: "Your Trusted Distribution Partner",
  subtitle: "Pendirian PT & Perizinan Alat Kesehatan",
  tagline: "Pendirian PT & Perizinan Distribusi Alat Kesehatan",
  description:
    "PT Altha Veer Diandri membantu pendirian PT, NIB/OSS, IDAK/IPAK, izin edar alat kesehatan, hingga sertifikasi CDAKB — didampingi sampai izin terbit.",
  url: "https://www.althaveerdiandri.com",
  repo: "https://github.com/kisanax/altha.git",
  emailLeads: "sales@althaveerdiandri.com",
  emailSupport: "admin@althaveerdiandri.com",
  phone: "0857-1990-6608",
  whatsapp: "6285719906608",
  landline: "(021) 89080715",
  landlineHref: "+622189080715",
  address:
    "Jl. Kp. Rawa Kalong No.59, RT.01/RW.10, Grogol, Kec. Limo, Kota Depok, Jawa Barat 16512",
  mapsUrl: "https://maps.app.goo.gl/rzqWUyHet2v15Ujo6",
  hours: "Senin - Jumat, 09.00 - 18.00 WIB",
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

// Link navbar sengaja dijaga tetap sedikit agar tidak saling berhimpitan.
// Harga, Panduan (blog), dan FAQ tetap terjangkau lewat footer dan section
// homepage masing-masing.
export const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/layanan", label: "Layanan" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
] as const;

// Footer menampilkan navigasi lengkap, termasuk halaman yang tidak dimuat
// di navbar.
export const footerLinks = [
  ...navLinks,
  { href: "/harga", label: "Harga" },
  { href: "/blog", label: "Panduan" },
  { href: "/faq", label: "FAQ" },
] as const;
