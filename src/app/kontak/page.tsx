import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak & Konsultasi Gratis",
  description:
    "Hubungi kami untuk konsultasi gratis seputar pendirian PT, legalitas, dan perizinan usaha Anda.",
};

export default function KontakPage() {
  return (
    <>
      <section className="bg-gradient-soft border-b border-brand-100">
        <div className="container-page py-14 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
            Kontak
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Ceritakan kebutuhan legalitas Anda
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-600">
            Konsultasi awal gratis. Kami balas pada hari kerja yang sama dan membantu
            memetakan langkah yang paling efisien untuk usaha Anda.
          </p>
        </div>
      </section>

      <div className="container-page grid gap-12 py-14 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        <aside className="space-y-6 lg:col-span-2">
          <div className="overflow-hidden rounded-2xl border border-brand-100">
            <Image
              src="/photos/konsultasi.jpg"
              alt="Sesi konsultasi bersama tim kami"
              width={1200}
              height={1800}
              sizes="(min-width: 1024px) 360px, 100vw"
              className="h-56 w-full object-cover"
            />
          </div>
          <div className="rounded-2xl border border-brand-100 bg-white p-6">
            <h2 className="text-base font-semibold text-brand-900">Hubungi langsung</h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <span className="block text-xs uppercase tracking-wide text-brand-400">
                  WhatsApp
                </span>
                <a
                  href={whatsappLink("Halo, saya ingin konsultasi legalitas usaha.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-700 hover:text-brand-900"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-brand-400">
                  Telepon
                </span>
                <a
                  href={`tel:${site.landlineHref}`}
                  className="font-medium text-brand-700 hover:text-brand-900"
                >
                  {site.landline}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-brand-400">
                  Email — penawaran
                </span>
                <a
                  href={`mailto:${site.emailLeads}`}
                  className="font-medium text-brand-700 hover:text-brand-900"
                >
                  {site.emailLeads}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-brand-400">
                  Email — layanan pelanggan
                </span>
                <a
                  href={`mailto:${site.emailSupport}`}
                  className="font-medium text-brand-700 hover:text-brand-900"
                >
                  {site.emailSupport}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-brand-400">
                  Alamat
                </span>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-700 hover:text-brand-900"
                >
                  {site.address}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wide text-brand-400">
                  Jam operasional
                </span>
                <span className="text-brand-700">{site.hours}</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-brand-800 p-6 text-brand-100">
            <h2 className="text-base font-semibold text-white">Respon cepat</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Untuk kebutuhan mendesak, WhatsApp adalah cara tercepat menghubungi kami.
              Kami biasanya membalas dalam hitungan menit pada jam kerja.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
