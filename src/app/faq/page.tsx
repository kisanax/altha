import type { Metadata } from "next";
import { CallToAction } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pertanyaan yang Sering Diajukan",
  description:
    "Jawaban atas pertanyaan umum seputar proses, biaya, dan waktu pengerjaan layanan legalitas dan perizinan usaha.",
};

const groups = [
  {
    title: "Umum",
    items: [
      {
        q: "Apa saja layanan yang tersedia?",
        a: "Kami melayani pendirian PT, CV, PT Perorangan, pendaftaran NIB & OSS, IDAK/IPAK, izin edar alat kesehatan, sertifikasi CDAKB, perizinan sektoral, pendaftaran merek, perubahan data perusahaan, serta pembuatan website lengkap dengan domain dan email.",
      },
      {
        q:
          "Apakah bisa mengurus legalitas jika perusahaan saya berada di luar kota Anda?",
        a: "Bisa. Sebagian besar proses dapat dilakukan secara daring dengan dokumen digital. Untuk tanda tangan akta tertentu, kami akan mengatur penjadwalan yang paling praktis.",
      },
      {
        q: "Apakah data saya aman?",
        a: "Ya. Dokumen dan data klien hanya digunakan untuk keperluan pengurusan dan dijaga kerahasiaannya. Kami dapat menandatangani perjanjian kerahasiaan bila diperlukan.",
      },
    ],
  },
  {
    title: "Biaya & Pembayaran",
    items: [
      {
        q: "Apakah ada biaya konsultasi?",
        a: "Konsultasi awal gratis. Biaya baru berlaku setelah Anda menyetujui penawaran tertulis yang kami kirimkan.",
      },
      {
        q: "Apakah harga bisa berubah di tengah proses?",
        a: "Harga yang disepakati bersifat tetap untuk lingkup layanan pada penawaran. Perubahan hanya terjadi jika ada tambahan kebutuhan di luar lingkup awal, dan itu selalu kami konfirmasi lebih dulu.",
      },
      {
        q: "Bagaimana skema pembayarannya?",
        a: "Umumnya pembayaran dilakukan di awal sebelum proses dimulai. Untuk beberapa layanan tertentu, kami dapat mengatur pembayaran bertahap.",
      },
    ],
  },
  {
    title: "Proses & Waktu",
    items: [
      {
        q: "Berapa lama prosesnya?",
        a: "Bervariasi. PT Perorangan dapat selesai dalam 3-7 hari kerja, PT biasa 7-14 hari kerja, sedangkan perizinan sektoral tergantung kompleksitas dan instansi terkait.",
      },
      {
        q: "Apa yang terjadi jika dokumen saya kurang lengkap?",
        a: "Kami akan memberi tahu daftar kekurangan secara spesifik dan membantu melengkapinya. Proses berjalan kembali setelah dokumen lengkap.",
      },
      {
        q: "Apakah saya mendapat laporan progres?",
        a: "Ya. Kami memberi kabar di setiap tahap penting sehingga Anda tahu posisi proses saat ini.",
      },
    ],
  },
  {
    title: "Setelah Selesai",
    items: [
      {
        q: "Apa saja dokumen yang saya terima?",
        a: "Tergantung layanan. Untuk pendirian PT, umumnya berupa akta, SK badan hukum, NIB, NPWP badan usaha, dan dokumen pendukung lain sesuai lingkup.",
      },
      {
        q: "Apakah ada pendampingan setelah proses selesai?",
        a: "Ya. Kami siap membantu pertanyaan atau kebutuhan lanjutan, termasuk perubahan data perusahaan dan perpanjangan izin.",
      },
      {
        q: "Apakah bisa dibantu pembuatan website perusahaan?",
        a: "Ya. Kami menyediakan paket website lengkap dengan domain dan email perusahaan, dan dapat digabung dengan proses pendirian PT.",
      },
    ],
  },
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-gradient-soft border-b border-brand-100">
        <div className="container-page py-14 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
            FAQ
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Pertanyaan yang sering diajukan
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-600">
            Belum menemukan jawaban? Hubungi kami di {site.phone} dan kami akan membantu.
          </p>
        </div>
      </section>

      <div className="container-page py-14 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          {groups.map((group) => (
            <section key={group.title}>
              <h2 className="text-xl font-semibold text-brand-900">{group.title}</h2>
              <div className="mt-4 space-y-4">
                {group.items.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-xl border border-brand-100 bg-white p-5"
                  >
                    <summary className="cursor-pointer list-none text-sm font-semibold text-brand-900">
                      <span className="flex items-center justify-between gap-4">
                        {item.q}
                        <span
                          className="text-brand-400 transition group-open:rotate-45"
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-brand-600">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <CallToAction title="Masih ada yang ingin ditanyakan?" />
    </>
  );
}
