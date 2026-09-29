import type { Metadata } from "next";
import Image from "next/image";
import { CallToAction, SectionHeading } from "@/components/Sections";
import { clients } from "@/lib/portfolio";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    `Kenali tim dan prinsip kerja ${site.name} sebagai mitra pendirian PT dan perizinan distribusi alat kesehatan.`,
};

const values = [
  {
    title: "Transparan",
    desc: "Setiap biaya dan tahapan proses disampaikan terbuka sejak awal, tanpa kejutan di tengah jalan.",
  },
  {
    title: "Akurat",
    desc: "Dokumen dan data dipastikan sesuai regulasi terbaru sebelum diajukan.",
  },
  {
    title: "Bertanggung jawab",
    desc: "Kami mengawal proses hingga tuntas dan siap membantu setelahnya.",
  },
  {
    title: "Fokus pada klien",
    desc: "Setiap usaha berbeda, jadi setiap solusi legalitas juga kami sesuaikan.",
  },
];

const team = [
  { name: "Tim Legalitas", role: "Pendirian PT, akta notaris, dan pengesahan badan hukum" },
  { name: "Tim Perizinan Alkes", role: "IDAK/IPAK, izin edar, dan CDAKB" },
  { name: "Tim Sarana & Audit", role: "Persiapan gudang, PJT, dan pendampingan audit" },
  { name: "Tim Pendukung Klien", role: "Konsultasi, dokumen, dan pemantauan status" },
];

export default function TentangPage() {
  return (
    <>
      <section className="bg-gradient-soft border-b border-brand-100">
        <div className="container-page py-14 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
            Tentang kami
          </p>
          <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Membantu usaha tumbuh dengan fondasi legal yang kuat
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-600">
            {site.name} membantu pelaku usaha mendirikan badan usaha sekaligus mengurus
            perizinan distribusi alat kesehatan — dari berkas pertama sampai izin terbit.
          </p>
        </div>
      </section>

      <section className="container-page py-14 sm:py-16">
        <div className="mb-12 overflow-hidden rounded-3xl">
          <Image
            src="/photos/tim-meeting.jpg"
            alt={`Tim ${site.name} berdiskusi mengenai kebutuhan klien`}
            width={1200}
            height={800}
            sizes="100vw"
            className="h-64 w-full object-cover sm:h-80"
          />
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-brand-900">Cerita kami</h2>
            <div className="mt-4 space-y-4 text-brand-600 leading-relaxed">
              <p>
                Banyak pelaku usaha harus berhadapan dengan istilah hukum, kode KBLI, dan
                persyaratan perizinan yang rumit. Khusus alat kesehatan, persyaratan
                seperti penetapan kelas risiko, kualifikasi penanggung jawab teknis,
                kelayakan sarana, dan audit gudang membuat prosesnya terasa berat bila
                dijalani sendiri.
              </p>
              <p>
                Kami menyederhanakan hal itu menjadi langkah yang jelas dan terukur.
                Legalitas bukan sekadar kewajiban administratif, melainkan fondasi yang
                menentukan seberapa jauh sebuah usaha bisa bertumbuh — mulai dari
                kepercayaan mitra, akses kerja sama dengan fasilitas kesehatan, hingga
                kemampuan mengikuti pengadaan.
              </p>
              <p>
                Kami bekerja mengikuti ketentuan yang berlaku dan memperbarui pemahaman
                tim secara berkala, agar berkas yang Anda ajukan lengkap sejak awal dan
                tidak bolak-balik.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-white p-8">
            <h2 className="text-lg font-semibold text-brand-900">Komitmen kami</h2>
            <ul className="mt-5 space-y-4">
              {values.map((value) => (
                <li key={value.title} className="border-b border-brand-50 pb-4 last:border-0 last:pb-0">
                  <h3 className="text-sm font-semibold text-brand-900">{value.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-600">{value.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-50">
        <div className="container-page py-14 sm:py-16">
          <SectionHeading
            eyebrow="Tim"
            title="Tim yang menangani kebutuhan Anda"
            description="Struktur kami memastikan setiap aspek legalitas ditangani oleh tim yang tepat."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="rounded-xl border border-brand-100 bg-white p-6">
                <h3 className="text-base font-semibold text-brand-900">{member.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portofolio klien — dulu halaman terpisah, kini bagian dari halaman ini. */}
      <section className="container-page py-14 sm:py-16">
        <SectionHeading
          eyebrow="Portofolio"
          title="Badan usaha yang telah kami dampingi"
          description="Sebagian klien kami bergerak di bidang kesehatan, perdagangan, dan jasa."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-4 rounded-xl border border-brand-100 bg-white p-5 transition hover:border-brand-300 hover:shadow-md"
            >
              <span className="bg-gradient-brand grid h-14 w-14 shrink-0 place-items-center rounded-xl text-sm font-bold tracking-wide text-white">
                {client.initials}
              </span>
              <span className="text-sm font-semibold leading-snug text-brand-900">
                {client.name}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-10 rounded-xl border border-brand-100 bg-brand-50 px-5 py-4 text-sm leading-relaxed text-brand-600">
          Kami menjaga kerahasiaan klien sesuai perjanjian kerja sama. Nama badan usaha
          ditampilkan hanya atas persetujuan masing-masing klien.
        </p>
      </section>

      <CallToAction />
    </>
  );
}
