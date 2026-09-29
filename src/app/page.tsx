import Image from "next/image";
import Link from "next/link";
import { ServiceCard, PostCard } from "@/components/Cards";
import { Reveal } from "@/components/Reveal";
import { CallToAction, SectionHeading } from "@/components/Sections";
import { services } from "@/lib/services";
import { sortedPosts } from "@/lib/posts";
import { clients } from "@/lib/portfolio";
import { site, whatsappLink } from "@/lib/site";

const stats = [
  { value: "5-10 hari", label: "Estimasi PT + NIB" },
  { value: "End-to-end", label: "Dari legalitas sampai izin terbit" },
  { value: "KBLI 46691", label: "Fokus distribusi alat kesehatan" },
  { value: "Online", label: "Remote-friendly se-Indonesia" },
];

const benefits = [
  {
    icon: "📚",
    title: "Paham regulasi terbaru",
    desc: "Mengikuti perubahan ketentuan alat kesehatan dan prosedur perizinan berbasis risiko.",
  },
  {
    icon: "💬",
    title: "Transparan",
    desc: "Estimasi biaya dan timeline dijelaskan sejak awal, tanpa biaya tersembunyi.",
  },
  {
    icon: "🤝",
    title: "Pendampingan penuh",
    desc: "Termasuk saat audit sarana oleh instansi, sampai temuan dituntaskan.",
  },
  {
    icon: "🌏",
    title: "Remote-friendly",
    desc: "Klien di luar Jakarta tetap terlayani melalui proses daring.",
  },
];

const steps = [
  {
    n: "01",
    title: "Konsultasi & analisa",
    desc: "Diskusi kebutuhan, jenis izin, dan KBLI, beserta estimasi waktu serta biaya. Gratis tanpa komitmen.",
  },
  {
    n: "02",
    title: "Penyiapan dokumen",
    desc: "Kami bantu menyusun dokumen persyaratan dan memeriksa kelengkapannya sejak awal.",
  },
  {
    n: "03",
    title: "Proses pengurusan",
    desc: "Pengajuan ke notaris, OSS, hingga Kementerian Kesehatan — Anda tinggal menunggu.",
  },
  {
    n: "04",
    title: "Izin terbit",
    desc: "Dokumen diserahkan lengkap, dengan pendampingan bila ada revisi dari regulator.",
  },
];

const alkesSlugs = ["pendirian-pt", "idak-ipak", "izin-edar-alkes", "cdakb"];

const processPhotos = [
  {
    src: "/photos/konsultasi.jpg",
    width: 1200,
    height: 1800,
    alt: "Konsultan menjelaskan kebutuhan perizinan kepada klien",
    step: "Tahap 01",
    caption: "Konsultasi & analisa kebutuhan izin",
  },
  {
    src: "/photos/dokumen-legalitas.jpg",
    width: 1200,
    height: 1800,
    alt: "Pemeriksaan dokumen legalitas perusahaan",
    step: "Tahap 02",
    caption: "Penyiapan berkas sampai lengkap",
  },
  {
    src: "/photos/distribusi-gudang.jpg",
    width: 1200,
    height: 800,
    alt: "Produk siap didistribusikan dari gudang",
    step: "Tahap 03",
    caption: "Izin terbit, produk siap didistribusikan",
  },
];

const alkesChecklist = [
  "Akta Pendirian PT",
  "SK Menkumham",
  "NPWP & NIB (OSS)",
  "KBLI 46691 & kelas risiko",
  "IDAK / IPAK Distribusi",
  "Izin Edar Alat Kesehatan",
  "Sertifikat CDAKB (opsional)",
];

const faqs = [
  {
    q: "Berapa lama pendirian PT + NIB?",
    a: "Umumnya 5 sampai 10 hari kerja untuk pendirian PT beserta NIB, tergantung kelengkapan dokumen dan antrean pengesahan badan hukum.",
  },
  {
    q: "Apa itu IDAK dan bedanya dengan IPAK?",
    a: "IPAK adalah istilah lama untuk izin distribusi alat kesehatan. Istilah yang kini digunakan adalah IDAK, dengan substansi yang sama: izin untuk menyalurkan alat kesehatan.",
  },
  {
    q: "Apakah bisa memproses dari luar kota?",
    a: "Bisa. Sebagian besar proses dapat dilakukan daring, termasuk pengumpulan dokumen dan konsultasi. Untuk tanda tangan akta tertentu kami atur penjadwalannya.",
  },
  {
    q: "Apakah ada garansi?",
    a: "Kami mendampingi sampai izin terbit dan menangani revisi dari regulator. Rincian komitmen kami sampaikan tertulis sebelum proses dimulai.",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.emailLeads,
    telephone: site.phone,
    address: { "@type": "PostalAddress", streetAddress: site.address },
    areaServed: "ID",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero — foto full-bleed di belakang smart navbar */}
      {/* Negative margin menarik hero ke bawah navbar sticky sehingga foto
          benar-benar full-bleed dan navbar transparan berada di atasnya. */}
      <section className="-mt-20 relative isolate flex min-h-[90svh] items-center overflow-hidden border-b border-brand-100 sm:-mt-24 sm:min-h-[82svh]">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/photos/hero-konsultan.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            /* Anchor vertikal ke bawah (100%): orang di meja berada di
               sepertiga bawah foto, jadi crop harus memotong bagian atas
               (plafon) agar orang terlihat utuh, bukan terpotong kepala. */
            className="object-cover object-[72%_100%]"
          />
          {/* Mobile: teks selebar layar, jadi scrim dibuat rata. Warna dibuat
              mendekati netral gelap agar warna asli foto tidak ikut memudar. */}
          <div className="absolute inset-0 bg-[rgba(24,10,48,0.62)] lg:hidden" />
          {/* Desktop: gelap di sisi teks lalu memudar; cukup tipis agar
              suasana ruangan dan orang di foto tetap terlihat. */}
          <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,rgba(53,24,104,0.9)_0%,rgba(53,24,104,0.72)_38%,rgba(53,24,104,0.34)_64%,rgba(53,24,104,0.04)_100%)] lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/45 to-transparent" />
        </div>

        <div className="container-page py-14 text-white sm:py-16 lg:py-24">
          {/* Padding atas menyamai tinggi navbar agar teks tidak tertutup. */}
          <div className="max-w-2xl pt-20 sm:pt-24">
            <span
              className="motion-fade-up inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur"
              style={{ "--motion-delay": "0ms" } as React.CSSProperties}
            >
              <span className="h-2 w-2 rounded-full bg-brand-300" />
              Melayani seluruh Indonesia
            </span>
            <h1
              className="motion-fade-up mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl"
              style={{ "--motion-delay": "80ms" } as React.CSSProperties}
            >
              Pendirian PT &amp; perizinan distribusi{" "}
              <span className="text-brand-300">alat kesehatan</span>
            </h1>
            <p
              className="motion-fade-up mt-6 max-w-xl text-lg leading-relaxed text-brand-100"
              style={{ "--motion-delay": "160ms" } as React.CSSProperties}
            >
              Dari akta notaris, NIB/OSS, IDAK/IPAK, hingga izin edar alat kesehatan —
              didampingi tim berpengalaman sampai izin terbit.
            </p>
            <div
              className="motion-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ "--motion-delay": "240ms" } as React.CSSProperties}
            >
              <a
                href={whatsappLink("Halo, saya ingin konsultasi gratis legalitas usaha.")}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-xl bg-white px-6 py-3.5 text-center text-sm font-semibold text-brand-800 shadow-lg transition hover:bg-brand-50 sm:py-3"
              >
                Konsultasi Gratis
              </a>
              <Link
                href="/layanan"
                className="focus-ring rounded-xl border border-white/40 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:py-3"
              >
                Lihat Semua Layanan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ringkasan singkat — dipindah dari hero agar foto tetap dominan di mobile */}
      <section className="border-b border-brand-100 bg-white">
        <dl className="container-page grid grid-cols-2 gap-x-6 gap-y-7 py-8 sm:grid-cols-4 sm:py-9">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 70}>
              <dt className="text-xl font-bold text-brand-900 sm:text-2xl">{stat.value}</dt>
              <dd className="mt-1 text-xs leading-snug text-brand-600 sm:text-sm">
                {stat.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Layanan populer — dulu panel di dalam hero, kini section foto-free */}
      <section className="border-b border-brand-100 bg-gradient-soft">
        <div className="container-page grid items-center gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
              Mulai dari sini
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
              Butuh izin alat kesehatan?
            </h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-brand-600">
              Pilih layanan populer dan ceritakan kebutuhan Anda. Kami balas pada hari
              kerja yang sama.
            </p>
            <Link
              href="/harga"
              className="focus-ring mt-5 inline-block rounded-lg text-sm font-semibold text-brand-600 hover:text-brand-800"
            >
              Lihat daftar harga lengkap &rarr;
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-xl">
              <ul className="space-y-3 p-5 sm:p-6">
                {services
                  .filter((service) => alkesSlugs.includes(service.slug))
                  .map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/layanan/${service.slug}`}
                        className="flex items-center justify-between gap-3 rounded-lg border border-brand-100 px-4 py-3 transition hover:border-brand-300 hover:bg-brand-50"
                      >
                        <span className="flex items-center gap-3 text-sm font-medium text-brand-800">
                          <span aria-hidden="true">{service.icon}</span>
                          {service.title}
                        </span>
                        <span className="shrink-0 text-xs text-brand-500">
                          {service.duration}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Layanan */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow="Layanan"
          title="Satu tempat untuk semua kebutuhan legalitas usaha"
          description="Mulai dari pendirian badan usaha hingga perizinan dan administrasi rutin."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 90} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Keunggulan */}
      <section className="bg-gradient-soft">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="Kenapa kami"
            title="Legalitas adalah soal kepercayaan"
            description="Kami menjaga setiap proses tetap jelas, cepat, dan dapat dipertanggungjawabkan."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => (
              <Reveal key={item.title} delay={(index % 4) * 90} className="h-full">
                <div className="h-full rounded-xl border border-brand-100 bg-white p-6">
                  <span className="text-3xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-brand-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-600">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Alur kerja */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow="Alur kerja"
          title="Proses yang jelas dari awal sampai tuntas"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.n} delay={index * 90}>
              <div className="relative">
                <span className="text-3xl font-bold text-brand-200">{step.n}</span>
                <h3 className="mt-3 text-base font-semibold text-brand-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-600">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Visual proses */}
      <section className="container-page pb-16 sm:pb-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {processPhotos.map((item, index) => (
            <Reveal key={item.src} delay={index * 110} as="figure" className="m-0">
              <div
                className="group relative overflow-hidden rounded-2xl"
              >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(min-width: 640px) 33vw, 100vw"
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/30 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-200">
                  {item.step}
                </span>
                <p className="mt-1 text-sm font-semibold text-white">{item.caption}</p>
              </figcaption>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Spesialisasi alat kesehatan */}
      <section className="bg-gradient-brand-strong">
        <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">
              Spesialisasi
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Perizinan alkes itu detail. Kami yang pegang detailnya.
            </h2>
            <p className="mt-4 leading-relaxed text-brand-100">
              Regulasi alat kesehatan berubah cepat — mulai dari KBLI, kelas risiko,
              syarat PJT, hingga audit sarana. Kami memastikan berkas Anda lengkap sejak
              awal agar proses tidak bolak-balik.
            </p>
            <a
              href={whatsappLink(
                "Halo, saya ingin konsultasi tentang perizinan alat kesehatan.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-6 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
            >
              Tanya Tim Kami
            </a>
          </div>
          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/photos/dokter-tablet.jpg"
                alt="Ilustrasi dokter menggunakan tablet digital (ilustrasi, bukan foto tim)"
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 480px, 100vw"
                className="h-52 w-full object-cover sm:h-60"
              />
            </div>
            <div className="rounded-2xl bg-brand-800/70 p-6 backdrop-blur sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-300">
                Checklist perizinan
              </h3>
              <ul className="mt-5 space-y-3">
                {alkesChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-100">
                    <span className="mt-0.5 text-brand-300" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-brand-700 pt-4 text-xs leading-relaxed text-brand-300">
                Daftar dokumen dan alur dapat berbeda sesuai jenis produk, kelas risiko,
                dan skala usaha Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portofolio */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow="Portofolio"
          title="Badan usaha yang telah kami dampingi"
          description="Sebagian klien kami bergerak di bidang kesehatan, perdagangan, dan jasa."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-4 rounded-xl border border-brand-100 bg-white p-5 transition hover:border-brand-300 hover:shadow-md"
            >
              <span className="bg-gradient-brand grid h-12 w-12 shrink-0 place-items-center rounded-xl text-xs font-bold tracking-wide text-white">
                {client.initials}
              </span>
              <span className="text-sm font-semibold leading-snug text-brand-900">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="container-page py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Panduan"
            title="Pelajari sebelum memutuskan"
            description="Artikel ringkas seputar pendirian usaha, perizinan, dan kepatuhan."
          />
          <Link
            href="/blog"
            className="text-sm font-semibold text-brand-600 hover:text-brand-800"
          >
            Semua artikel &rarr;
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.slice(0, 3).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-soft">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading eyebrow="FAQ" title="Pertanyaan yang sering diajukan" align="center" />
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-brand-100 bg-white p-6">
                <h3 className="text-sm font-semibold text-brand-900">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-600">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="text-sm font-semibold text-brand-600 hover:text-brand-800"
            >
              Lihat semua FAQ &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
