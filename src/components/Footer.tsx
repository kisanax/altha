import Image from "next/image";
import Link from "next/link";
import { footerLinks, site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-gradient-to-b from-brand-900 via-brand-900 to-brand-800 text-brand-100">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white p-1.5">
              <Image
                src="/logo.png"
                alt={`Logo ${site.name}`}
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-white">{site.name}</span>
              <span className="text-[10px] font-medium uppercase tracking-wide text-brand-300">
                {site.brandTagline}
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-200">
            {site.description}
          </p>
          <p className="mt-4 text-xs text-brand-300">
            {site.subtitle} — melayani seluruh Indonesia.
          </p>
          <p className="mt-4 text-xs text-brand-300">
            Terdaftar sebagai badan usaha: {site.legalName}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Layanan
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/layanan/${service.slug}`}
                  className="text-brand-200 transition hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Navigasi
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-brand-200 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Kontak
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-200">
            <li>
              <a
                href={whatsappLink("Halo, saya ingin bertanya mengenai layanan Anda.")}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp: {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.landlineHref}`}
                className="transition hover:text-white"
              >
                Telepon: {site.landline}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.emailLeads}`}
                className="transition hover:text-white"
              >
                {site.emailLeads}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.emailSupport}`}
                className="transition hover:text-white"
              >
                {site.emailSupport}
              </a>
            </li>
            <li>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed transition hover:text-white"
              >
                {site.address}
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}. Seluruh hak cipta dilindungi.
          </p>
          <p>
            Informasi di situs ini bersifat umum dan bukan nasihat hukum resmi untuk
            kasus tertentu.
          </p>
        </div>
      </div>
    </footer>
  );
}
