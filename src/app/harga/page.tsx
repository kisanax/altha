import type { Metadata } from "next";
import Link from "next/link";
import { CallToAction } from "@/components/Sections";
import { services } from "@/lib/services";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Daftar Harga Layanan",
  description:
    "Harga transparan untuk pendirian PT, CV, PT Perorangan, NIB & OSS, IDAK/IPAK, izin edar alat kesehatan, CDAKB, merek, perubahan akta, dan paket website.",
};

export default function HargaPage() {
  return (
    <>
      <section className="bg-gradient-soft border-b border-brand-100">
        <div className="container-page py-14 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
            Harga
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Harga transparan, tanpa biaya tersembunyi
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-600">
            Kami menampilkan harga asli dan harga promo secara terbuka. Harga final dapat
            menyesuaikan bidang usaha dan kebutuhan izin spesifik Anda — rinciannya kami
            sampaikan tertulis sebelum proses dimulai.
          </p>
        </div>
      </section>

      <div className="container-page py-14 sm:py-16">
        <div className="space-y-12">
          {services.map((service) => (
            <section key={service.slug}>
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="flex items-center gap-2 text-xl font-semibold text-brand-900">
                    <span aria-hidden="true">{service.icon}</span>
                    {service.title}
                  </h2>
                  <p className="mt-1 text-sm text-brand-500">{service.short}</p>
                </div>
                <Link
                  href={`/layanan/${service.slug}`}
                  className="text-sm font-semibold text-brand-600 hover:text-brand-800"
                >
                  Detail layanan &rarr;
                </Link>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {service.packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`flex flex-col rounded-xl border p-5 ${
                      pkg.popular
                        ? "border-brand-400 bg-brand-50"
                        : "border-brand-100 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-brand-900">{pkg.name}</h3>
                      {pkg.popular && (
                        <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                          Populer
                        </span>
                      )}
                    </div>
                    <div className="mt-3 flex flex-wrap items-baseline gap-2">
                      {pkg.priceOriginal && (
                        <span className="text-xs text-brand-400 line-through">
                          {pkg.priceOriginal}
                        </span>
                      )}
                      <span className="text-xl font-bold text-brand-900">{pkg.price}</span>
                    </div>
                    <p className="mt-1 text-xs text-brand-500">{pkg.duration}</p>
                    <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-brand-500">
                      Termasuk
                    </p>
                    <ul className="mt-2 flex-1 space-y-1.5">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-xs text-brand-600"
                        >
                          <span className="mt-0.5 text-brand-500" aria-hidden="true">
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={whatsappLink(
                        `Halo, saya ingin memesan ${pkg.name} untuk layanan ${service.title}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring mt-4 inline-block rounded-lg border border-brand-300 px-3 py-2 text-center text-xs font-semibold text-brand-700 transition hover:bg-brand-100"
                    >
                      Pesan paket ini
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 rounded-xl border border-brand-100 bg-brand-50 px-5 py-4 text-sm text-brand-600">
          Catatan: harga di atas adalah estimasi dan dapat berbeda tergantung kompleksitas
          dokumen, kebutuhan izin tambahan, serta biaya pihak ketiga seperti notaris dan
          instansi resmi.
        </p>
      </div>

      <CallToAction title="Belum yakin paket mana yang sesuai?" />
    </>
  );
}
