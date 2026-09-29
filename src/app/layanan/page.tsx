import type { Metadata } from "next";
import { ServiceCard } from "@/components/Cards";
import { CallToAction } from "@/components/Sections";
import { categoryAnchor, services, serviceCategories } from "@/lib/services";

export const metadata: Metadata = {
  title: "Layanan Legalitas & Perizinan Usaha",
  description:
    "Daftar lengkap layanan pendirian PT, CV, PT Perorangan, NIB & OSS, IDAK/IPAK, izin edar alat kesehatan, CDAKB, perizinan sektoral, merek, perubahan akta, dan paket website.",
};

export default function LayananPage() {
  return (
    <>
      <section className="bg-gradient-soft border-b border-brand-100">
        <div className="container-page py-14 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
            Layanan
          </p>
          <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Semua yang Anda butuhkan untuk legalitas usaha
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-600">
            Pilih layanan yang sesuai. Setiap layanan memiliki rincian paket, syarat,
            dan alur proses yang dapat Anda pelajari sebelum memutuskan.
          </p>
        </div>
      </section>

      <div className="container-page py-14 sm:py-16">
        {serviceCategories.map((category) => {
          const items = services.filter((s) => s.category === category);
          if (items.length === 0) return null;
          return (
            <section
              key={category}
              id={categoryAnchor(category)}
              className="mb-14 scroll-mt-24 last:mb-0 sm:scroll-mt-28"
            >
              <h2 className="text-xl font-semibold text-brand-900">{category}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <CallToAction />
    </>
  );
}
