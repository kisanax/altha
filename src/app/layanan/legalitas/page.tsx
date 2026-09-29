import type { Metadata } from "next";
import { ServiceCard } from "@/components/Cards";
import { CallToAction } from "@/components/Sections";
import { ServiceCategoryHero } from "@/components/ServiceCategoryHero";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Legalitas Badan Usaha — PT, CV, Merek",
  description:
    "Pendirian PT, CV, PT Perorangan, pendaftaran merek & HAKI, serta perubahan akta. Dampingi notaris sampai SK terbit.",
  alternates: { canonical: "/layanan/legalitas" },
};

const points = [
  {
    title: "Badan hukum yang sah",
    desc: "Akta notaris + SK Kemenkumham agar usaha diakui hukum dan bisa ikut tender.",
  },
  {
    title: "Fondasi perizinan lain",
    desc: "NIB, IDAK, dan izin sektoral mensyaratkan badan usaha yang beres lebih dulu.",
  },
  {
    title: "Aset merek terlindungi",
    desc: "Merek didaftarkan ke DJKI dengan sistem first-to-file, siapa cepat dia dapat.",
  },
];

export default function LegalitasPage() {
  const items = services.filter((s) => s.category === "Legalitas");
  return (
    <>
      <ServiceCategoryHero
        breadcrumb="Legalitas"
        eyebrow="Layanan · Legalitas"
        title="Legalitas badan usaha, beres sampai tuntas"
        description="Pendirian PT, CV, PT Perorangan, pendaftaran merek, hingga perubahan akta — dari konsultasi struktur sampai dokumen terbit."
        image="/photos/hero-legalitas-v2.jpg"
        imageAlt="Ilustrasi profesional wanita Asia di kantor (ilustrasi, bukan foto tim)"
        waMessage="Halo, saya ingin konsultasi tentang legalitas badan usaha."
      />
      <section id="daftar" className="container-page scroll-mt-24 py-14 sm:py-16">
        <h2 className="text-2xl font-bold text-brand-900">Pilih layanan legalitas</h2>
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
      <CallToAction title="Mau dirikan PT atau CV?" />
    </>
  );
}
