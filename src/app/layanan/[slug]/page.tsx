import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CallToAction } from "@/components/Sections";
import { getService, services } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Layanan tidak ditemukan" };
  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/layanan/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-brand-100 bg-gradient-to-b from-brand-50 to-white">
        <div className="container-page py-14">
          <nav className="text-sm text-brand-500">
            <Link href="/layanan" className="hover:text-brand-700">
              Layanan
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-700">{service.title}</span>
          </nav>
          <div className="mt-6 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <span className="text-4xl" aria-hidden="true">
                {service.icon}
              </span>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
                {service.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-600">
                {service.welcome}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-700">
                    <span className="mt-0.5 text-brand-500" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-brand-500">Mulai dari</p>
              <p className="mt-1 text-3xl font-bold text-brand-900">{service.priceFrom}</p>
              <p className="mt-2 text-sm text-brand-600">Estimasi: {service.duration}</p>
              <a
                href={whatsappLink(`Halo, saya ingin bertanya tentang layanan ${service.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient focus-ring mt-5 block rounded-lg px-5 py-3 text-center text-sm font-semibold"
              >
                Konsultasi Layanan Ini
              </a>
              <a
                href={`mailto:${site.emailLeads}`}
                className="mt-2 block rounded-lg border border-brand-200 px-5 py-3 text-center text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
              >
                Minta Penawaran
              </a>
            </aside>
          </div>
        </div>
      </section>

      <div className="container-page grid gap-12 py-14 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-14">
          {/* Paket */}
          <section>
            <h2 className="text-2xl font-bold text-brand-900">Pilihan paket</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {service.packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`flex flex-col rounded-2xl border p-6 ${
                    pkg.popular
                      ? "border-brand-400 bg-brand-50 shadow-md"
                      : "border-brand-100 bg-white"
                  }`}
                >
                  {pkg.popular && (
                    <span className="mb-3 inline-flex w-fit rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                      Paling dipilih
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-brand-900">{pkg.name}</h3>
                  <div className="mt-3 flex flex-wrap items-baseline gap-2">
                    {pkg.priceOriginal && (
                      <span className="text-sm text-brand-400 line-through">
                        {pkg.priceOriginal}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-brand-900">{pkg.price}</span>
                  </div>
                  <p className="mt-1 text-sm text-brand-500">{pkg.duration}</p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-brand-500">
                    Termasuk
                  </p>
                  <ul className="mt-3 flex-1 space-y-2.5">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-brand-700">
                        <span className="mt-0.5 text-brand-500" aria-hidden="true">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(
                      `Halo, saya tertarik dengan ${pkg.name} untuk layanan ${service.title}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 block rounded-lg bg-brand-700 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-800"
                  >
                    Pilih paket ini
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Syarat */}
          <section>
            <h2 className="text-2xl font-bold text-brand-900">Dokumen &amp; syarat</h2>
            <ul className="mt-6 space-y-3">
              {service.requirements.map((req) => (
                <li
                  key={req}
                  className="flex items-start gap-3 rounded-lg border border-brand-100 bg-white px-4 py-3 text-sm text-brand-700"
                >
                  <span className="mt-0.5 text-brand-400" aria-hidden="true">
                    ●
                  </span>
                  {req}
                </li>
              ))}
            </ul>
          </section>

          {/* Alur */}
          <section>
            <h2 className="text-2xl font-bold text-brand-900">Alur proses</h2>
            <ol className="mt-6 space-y-6">
              {service.steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-800 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-brand-900">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-600">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* FAQ */}
          {service.faq.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-brand-900">
                Pertanyaan seputar {service.title}
              </h2>
              <div className="mt-6 space-y-4">
                {service.faq.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-xl border border-brand-100 bg-white p-5"
                  >
                    <summary className="cursor-pointer list-none text-sm font-semibold text-brand-900">
                      <span className="flex items-center justify-between gap-4">
                        {item.q}
                        <span className="text-brand-400 transition group-open:rotate-45" aria-hidden="true">
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-brand-600">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
            <h3 className="text-base font-semibold text-brand-900">Layanan lain</h3>
            <ul className="mt-4 space-y-3">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/layanan/${other.slug}`}
                    className="flex items-center gap-3 text-sm text-brand-700 transition hover:text-brand-900"
                  >
                    <span aria-hidden="true">{other.icon}</span>
                    {other.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/layanan"
              className="mt-5 inline-block text-sm font-semibold text-brand-600 hover:text-brand-800"
            >
              Lihat semua layanan &rarr;
            </Link>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-white p-6">
            <h3 className="text-base font-semibold text-brand-900">Butuh bantuan memilih?</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-600">
              Ceritakan bidang usaha Anda, kami bantu tentukan layanan dan izin yang tepat.
            </p>
            <a
              href={whatsappLink("Halo, saya butuh bantuan memilih layanan legalitas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-800"
            >
              Tanya lewat WhatsApp
            </a>
          </div>
        </aside>
      </div>

      <CallToAction
        title={`Siap mulai ${service.title.toLowerCase()}?`}
        description="Konsultasi awal gratis untuk memastikan kebutuhan dan anggaran Anda sesuai."
      />
    </>
  );
}
