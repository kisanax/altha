import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak & Konsultasi Gratis",
  description:
    "Hubungi kami untuk konsultasi gratis seputar pendirian PT, legalitas, dan perizinan usaha Anda.",
};

// Query untuk embed Google Maps. Koordinat diambil dari mapsUrl yang
// di-resolve ke listing "PT. ALTHA VEER DIANDRI", ditambah nama daerah agar
// pin terkait ke bisnis yang tepat.
const googleMapsQuery = encodeURIComponent("PT. Altha Veer Diandri, Grogol, Depok");

function InfoCardIcon({ path }: { path: string }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d={path} />
      </svg>
    </span>
  );
}

const cardLinkClass =
  "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition hover:text-brand-900";
const cardLabelClass = "mt-4 block text-xs font-semibold uppercase tracking-wide text-brand-400";
const cardValueClass = "mt-1 text-sm leading-relaxed text-brand-800";

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

      {/* Baris 4 kartu info kontak */}
      <section className="container-page grid gap-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-brand-100 bg-white p-6">
          <InfoCardIcon path="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z M12 10h.01" />
          <span className={cardLabelClass}>Alamat kantor</span>
          <p className={cardValueClass}>
            Jl. Kp. Rawa Kalong No.59, Grogol, Kec. Limo, Kota Depok, Jawa Barat 16512
          </p>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className={cardLinkClass}>
            Buka Google Maps <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="rounded-2xl border border-brand-100 bg-white p-6">
          <InfoCardIcon path="M4 5a2 2 0 0 1 2-2h2l2 5-2.5 1.5a12 12 0 0 0 6 6L15 13l5 2v2a2 2 0 0 1-2 2A15 15 0 0 1 4 5Z" />
          <span className={cardLabelClass}>Telepon &amp; WhatsApp</span>
          <p className={cardValueClass}>
            {site.landline}
            <br />
            {site.phone}
          </p>
          <a
            href={whatsappLink("Halo, saya ingin konsultasi legalitas usaha.")}
            target="_blank"
            rel="noopener noreferrer"
            className={cardLinkClass}
          >
            Chat via WhatsApp <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="rounded-2xl border border-brand-100 bg-white p-6">
          <InfoCardIcon path="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Z M3.5 7l8.5 6 8.5-6" />
          <span className={cardLabelClass}>Email</span>
          <p className={cardValueClass}>
            {site.emailLeads}
            <br />
            {site.emailSupport}
          </p>
          <a href={`mailto:${site.emailLeads}`} className={cardLinkClass}>
            Kirim Email <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="rounded-2xl border border-brand-100 bg-white p-6">
          <InfoCardIcon path="M12 8v4l3 3 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          <span className={cardLabelClass}>Jam operasional</span>
          <p className={cardValueClass}>
            {site.hours.replace("Senin - Jumat, ", "Senin – Jumat, ")}
          </p>
          <p className={cardValueClass}>Remote-friendly, melayani se-Indonesia.</p>
        </div>
      </section>

      {/* Peta bersebelahan dengan formulir */}
      <section className="container-page pb-16">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col gap-6">
            <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white">
              <div className="flex items-center justify-between gap-4 px-6 pb-4 pt-5">
                <h2 className="text-base font-semibold text-brand-900">Lokasi kantor kami</h2>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm font-medium text-brand-700 hover:text-brand-900"
                >
                  Buka di Google Maps
                </a>
              </div>
              <iframe
                src={`https://maps.google.com/maps?q=${googleMapsQuery}&z=17&output=embed`}
                title="Lokasi kantor PT Altha Veer Diandri di Google Maps"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="block min-h-80 w-full flex-1 border-0"
              />
            </div>

            <div className="rounded-2xl bg-brand-800 p-6 text-brand-100">
              <h2 className="text-base font-semibold text-white">Butuh respon cepat?</h2>
              <p className="mt-2 text-sm leading-relaxed">
                Langsung chat dengan tim kami via WhatsApp untuk respons instan pada jam kerja.
              </p>
              <a
                href={whatsappLink("Halo, saya ingin konsultasi legalitas usaha.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 transition hover:bg-brand-100"
              >
                Chat WhatsApp Sekarang
              </a>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
