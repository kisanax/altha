import type { Metadata } from "next";
import { ServiceCard } from "@/components/Cards";
import { CallToAction } from "@/components/Sections";
import { ServiceCategoryHero } from "@/components/ServiceCategoryHero";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Website, Domain & Email Perusahaan",
  description:
    "Website corporate responsif lengkap dengan domain dan email perusahaan — siap pakai dan ramah SEO.",
  alternates: { canonical: "/layanan/website-domain-email" },
};

const points = [
  {
    title: "Tampil profesional",
    desc: "Website + email domain sendiri menaikkan kepercayaan calon klien dan mitra.",
  },
  {
    title: "Siap pakai",
    desc: "Desain, domain, email, dan dasar SEO disiapkan dalam satu paket.",
  },
  {
    title: "Bisa digabung legalitas",
    desc: "Pendirian PT dan website dapat diproses bersamaan agar lebih hemat waktu.",
  },
];

export default function WebsitePage() {
  const items = services.filter((s) => s.category === "Website, Domain & Email");
  return (
    <>
      <ServiceCategoryHero
        breadcrumb="Website"
        eyebrow="Layanan · Website"
        title="Website, domain & email perusahaan"
        description="Website corporate responsif dengan domain dan email perusahaan — tampil profesional tanpa urus teknis sendiri."
        image="/photos/hero-website.jpg"
        imageAlt="Ilustrasi tim bekerja dengan laptop di kantor (ilustrasi, bukan foto tim)"
        waMessage="Halo, saya ingin konsultasi tentang paket website perusahaan."
      />
      <section id="daftar" className="container-page scroll-mt-24 py-14 sm:py-16">
        <h2 className="text-2xl font-bold text-brand-900">Paket website</h2>
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
      <CallToAction title="Mau website perusahaan yang siap pakai?" />
    </>
  );
}
