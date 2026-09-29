"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { categoryAnchor, serviceCategories, services } from "@/lib/services";
import { navLinks, site, whatsappLink } from "@/lib/site";

const serviceDesc: Record<string, string> = {
  Legalitas: "Pendirian PT, CV, merek, dan dokumen perusahaan",
  Perizinan: "NIB & OSS, IDAK/IPAK, izin edar alkes, CDAKB",
  "Website, Domain & Email": "Website corporate, domain, dan email perusahaan",
};

/** Satu keluarga ikon outline, menggantikan emoji pada menu kategori. */
function CategoryIcon({ category, className = "" }: { category: string; className?: string }) {
  const paths: Record<string, ReactNode> = {
    Legalitas: (
      <>
        <path d="M12 3 4 6.5v5c0 4.3 3 8.2 8 9.5 5-1.3 8-5.2 8-9.5v-5L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    Perizinan: (
      <>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6M9 17h4" />
      </>
    ),
    "Website, Domain & Email": (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[category] ?? paths.Perizinan}
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const servicesToggleRef = useRef<HTMLButtonElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const onHome = pathname === "/";
  const solid = !onHome || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Kunci scroll + sembunyikan tombol WhatsApp mengambang selama drawer terbuka.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("menu-open");
    drawerRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onBreakpoint = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", onBreakpoint);
    return () => desktop.removeEventListener("change", onBreakpoint);
  }, []);

  // Tutup drawer saat pindah halaman.
  useEffect(() => {
    queueMicrotask(() => {
      setOpen(false);
      setServicesOpen(false);
    });
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) setServicesOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        servicesToggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onBreakpoint = () => setServicesOpen(false);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [servicesOpen]);

  // Escape menutup drawer dan mengembalikan fokus ke tombol menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === "Tab") {
        const targets = drawerRef.current?.querySelectorAll<HTMLElement>("a[href], button");
        if (!targets?.length) return;
        const first = targets[0];
        const last = targets[targets.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkTone = (active: boolean) =>
    `focus-ring inline-flex items-center rounded-lg px-4 py-2.5 text-sm font-medium whitespace-nowrap transition ${
      active
        ? "bg-brand-50 text-brand-700"
        : solid
          ? "text-brand-700 hover:bg-brand-50 hover:text-brand-800"
          : "text-white hover:bg-white/15"
    }`;

  return (
    <header className="sticky top-0 z-50">
      {/*
        Lapisan latar sengaja dipisah dari <header>. `backdrop-filter` membuat
        containing block untuk descendant `position: fixed`, sehingga drawer
        mobile yang berada di dalam header akan terjebak setinggi header saja.
      */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-colors duration-300 ${
          solid
            ? "bg-white shadow-[0_1px_3px_0_rgb(0_0_0/0.06)] backdrop-blur"
            : "bg-gradient-to-b from-brand-900/70 via-brand-900/25 to-transparent"
        }`}
      />

      <div
        className={`container-page relative flex items-center justify-between gap-3 transition-all ${
          scrolled ? "h-16 sm:h-20" : "h-20 sm:h-24"
        }`}
      >
        <Link
          href="/"
          aria-label={`${site.name} - beranda`}
          className="focus-ring flex shrink-0 items-center gap-2.5 rounded-lg sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <span
            className={`relative block shrink-0 transition-all duration-300 motion-reduce:transition-none ${
              scrolled ? "h-10 w-10 sm:h-12 sm:w-12" : "h-12 w-12 sm:h-14 sm:w-14"
            }`}
          >
            <Image
              src="/logo-white.png"
              alt=""
              fill
              sizes="56px"
              priority
              className={`object-contain drop-shadow-md transition-opacity duration-300 motion-reduce:transition-none ${solid ? "opacity-0" : "opacity-100"}`}
            />
            <Image
              src="/logo.png"
              alt=""
              fill
              sizes="56px"
              priority
              className={`object-contain transition-opacity duration-300 motion-reduce:transition-none ${solid ? "opacity-100" : "opacity-0"}`}
            />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span
              className={`truncate text-sm font-bold tracking-tight sm:text-lg ${
                solid ? "text-brand-900" : "text-white"
              }`}
            >
              {site.legalName}
            </span>
            {/* Subtitle disembunyikan di layar sempit agar header tidak melebar */}
            <span
              className={`mt-0.5 hidden truncate text-[11px] font-medium uppercase tracking-[0.16em] sm:block ${
                solid ? "text-brand-500" : "text-brand-100"
              }`}
            >
              {site.subtitle}
            </span>
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-3 xl:flex 2xl:gap-5">
          {navLinks.map((link) => link.href === "/layanan" ? (
            <div
              key={link.href}
              ref={servicesRef}
              className="relative"
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false);
              }}
            >
              <button
                ref={servicesToggleRef}
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="services-dropdown"
                onClick={() => setServicesOpen((value) => !value)}
                className={`${linkTone(isActive(link.href))} gap-1.5`}
              >
                Layanan
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}>
                  <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                id="services-dropdown"
                hidden={!servicesOpen}
                className="absolute left-0 top-full z-50 mt-3 w-96 rounded-2xl border border-brand-100 bg-white p-2 text-brand-900 shadow-xl"
              >
                {serviceCategories.map((category) => (
                  <Link
                    key={category}
                    href={`/layanan/${categoryAnchor(category)}`}
                    onClick={() => setServicesOpen(false)}
                    className="focus-ring flex items-start gap-3 rounded-xl p-3 transition hover:bg-brand-50"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                      <CategoryIcon category={category} className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{category}</span>
                      <span className="mt-1 block text-xs leading-relaxed text-brand-600">{serviceDesc[category]}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={linkTone(isActive(link.href))}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <a
            href={whatsappLink("Halo, saya ingin konsultasi mengenai legalitas usaha.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient focus-ring ml-1 rounded-lg px-5 py-2.5 text-sm font-semibold whitespace-nowrap"
          >
            Konsultasi Gratis
          </a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className={`focus-ring relative z-10 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-lg transition xl:hidden ${
            solid
              ? "border border-brand-200 text-brand-700"
              : "border border-white/40 text-white"
          }`}
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Portal menjaga panel terpisah dari stacking/containing block navbar. */}
      {open && createPortal(<div
        ref={drawerRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        className="fixed inset-0 z-[100] flex h-dvh flex-col bg-white xl:hidden"
      >
        <nav aria-label="Navigasi mobile" className="container-page min-h-0 flex-1 overflow-y-auto overscroll-contain py-4">
          <div className="flex items-center gap-3 border-b border-brand-100 pb-4">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
              aria-label="Tutup menu"
              className="focus-ring grid h-9 w-9 place-items-center rounded-full border border-brand-200 text-brand-700"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M19 12H5m6-7-7 7 7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span className="text-lg font-semibold text-brand-900">Layanan</span>
          </div>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
            Legalitas &amp; perizinan usaha
          </p>
          <div className="mt-3 space-y-3">
            {serviceCategories.map((category) => {
              const items = services.filter((s) => s.category === category);
              return (
                <Link
                  key={category}
                  href={`/layanan/${categoryAnchor(category)}`}
                  onClick={() => setOpen(false)}
                  className="flex items-start gap-3.5 rounded-xl border border-brand-100 p-3.5 transition active:bg-brand-50"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                    <CategoryIcon category={category} className="h-6 w-6" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-brand-900">{category}</span>
                    <span className="mt-0.5 text-xs leading-snug text-brand-500">
                      {serviceDesc[category]}
                    </span>
                    <span className="mt-1 text-[11px] font-medium text-brand-500">
                      {items.length} layanan tersedia
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
            Menu
          </p>
          <div className="mt-1 flex flex-col">
            {navLinks
              .filter((link) => link.href !== "/layanan")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`flex items-center justify-between border-b border-brand-50 py-3.5 text-sm font-medium ${
                    isActive(link.href) ? "text-brand-700" : "text-brand-600"
                  }`}
                >
                  {link.label}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="m9 6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}
          </div>
        </nav>

        <div className="shrink-0 space-y-2 border-t border-brand-100 bg-white px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3">
          <a
            href={whatsappLink("Halo, saya ingin konsultasi mengenai legalitas usaha.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient focus-ring block rounded-xl px-4 py-3.5 text-center text-sm font-semibold"
          >
            Konsultasi Gratis via WhatsApp
          </a>
          <p className="text-center text-[11px] text-brand-500">
            {site.hours} · {site.phone}
          </p>
        </div>
      </div>, document.body)}
    </header>
  );
}
