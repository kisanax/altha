import type { ReactNode } from "react";
import { site, whatsappLink } from "@/lib/site";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-brand-600">{description}</p>
      )}
    </div>
  );
}

export function CallToAction({
  title = "Siap memulai legalitas usaha Anda?",
  description = "Konsultasi awal gratis. Kami bantu memetakan kebutuhan izin dan estimasi biaya sesuai bidang usaha Anda.",
  children,
}: {
  title?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="container-page my-16">
      <div className="bg-gradient-brand-strong overflow-hidden rounded-2xl px-6 py-12 sm:px-12 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-brand-100">{description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappLink(
                "Halo, saya ingin konsultasi gratis mengenai legalitas usaha saya.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
            >
              Chat WhatsApp
            </a>
            <a
              href={`mailto:${site.emailLeads}`}
              className="focus-ring rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Kirim Email
            </a>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600">
      {children}
    </span>
  );
}
