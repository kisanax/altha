import type { Metadata } from "next";
import { ServiceCard } from "@/components/Cards";
import { CallToAction } from "@/components/Sections";
import { ServiceCategoryHero } from "@/components/ServiceCategoryHero";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Perizinan & Distribusi Alat Kesehatan",
  description:
    "NIB & OSS RBA, IDAK/IPAK distribusi, izin edar alkes, CDAKB, dan perizinan sektoral. Didampingi sampai izin terbit.",
  alternates: { canonical: "/layanan/perizinan" },
};

const points = [
  {
    title: "Syarat legal beroperasi",
    desc: "IDAK/IPAK dan izin edar wajib agar produk bisa disalurkan secara sah.",
  },
  {
    title: "Lolos tender & kerja sama RS",
    desc: "Rumah sakit, klinik, dan pengadaan pemerintah mensyaratkan izin lengkap.",
  },
  {
    title: "Hindari sanksi",
    desc: "Operasi tanpa izin berisiko sanksi administratif sampai penutupan usaha.",
  },
];

export default function PerizinanPage() {
  const items = services.filter((s) => s.category === "Perizinan");
  return (
    <>
      <ServiceCategoryHero
        breadcrumb="Perizinan"
        eyebrow="Layanan · Perizinan"
        title="Perizinan distribusi alat kesehatan"
        description="NIB & OSS, IDAK/IPAK, izin edar alkes, CDAKB, dan izin sektoral — disiapkan dari dokumen, audit sarana, sampai izin terbit."
        image="/photos/hero-perizinan.jpg"
        imageAlt="Ilustrasi apoteker wanita Asia berjasket lab di apotek (ilustrasi, bukan foto tim)"
        waMessage="Halo, saya ingin konsultasi tentang perizinan alat kesehatan."
      />
      <section id="daftar" className="container-page scroll-mt-24 py-14 sm:py-16">
        <h2 className="text-2xl font-bold text-brand-900">Pilih layanan perizinan</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <section className="bg-gradient-soft">
        <div className="container-page grid gap-6 py-14 sm:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-xl border border-brand-100 bg-white p-6">
              <h3 className="text-base font-semibold text-brand-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CallToAction title="Siap urus IDAK / izin edar?" />
    </>
  );
}
