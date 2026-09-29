import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";

export function ServiceCategoryHero({
  breadcrumb,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  waMessage,
}: {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  waMessage: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center]"
        />
        {/* Overlay gelap agar teks terbaca, gaya izin.co.id */}
        <div className="absolute inset-0 bg-brand-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/50 to-brand-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
      </div>
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <nav aria-label="Breadcrumb" className="text-sm text-brand-200">
            <Link href="/" className="hover:text-white">
              Beranda
            </Link>
            <span className="mx-2">/</span>
            <Link href="/layanan" className="hover:text-white">
              Layanan
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{breadcrumb}</span>
          </nav>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand-300">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-100">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#daftar"
              className="focus-ring rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
            >
              Lihat Layanan
            </a>
            <a
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-xl border border-white/40 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Konsultasi Gratis
            </a>
          </div>
          <span className="sr-only">{imageAlt}</span>
        </div>
      </div>
    </section>
  );
}
