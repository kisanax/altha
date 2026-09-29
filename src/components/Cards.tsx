import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/posts";
import type { Service } from "@/lib/services";
import { whatsappLink } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/layanan/${service.slug}`}
      className="group flex flex-col rounded-xl border border-brand-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg"
    >
      <span className="text-3xl" aria-hidden="true">
        {service.icon}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-brand-900">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-600">
        {service.short}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-brand-50 pt-4">
        <span className="text-sm font-semibold text-brand-700">
          Mulai {service.priceFrom}
        </span>
        <span className="text-sm font-medium text-brand-500 transition group-hover:text-brand-700">
          Detail &rarr;
        </span>
      </div>
    </Link>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-xl border border-brand-100 bg-white p-6 transition hover:border-brand-300 hover:shadow-lg"
    >
      <div className="flex items-center gap-3 text-xs text-brand-500">
        <span className="rounded-full bg-brand-50 px-2.5 py-1 font-medium text-brand-600">
          {post.category}
        </span>
        <span>{post.readMinutes} menit baca</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-snug text-brand-900 transition group-hover:text-brand-700">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-600">{post.excerpt}</p>
      <p className="mt-4 border-t border-brand-50 pt-4 text-xs text-brand-400">
        {formatDate(post.date)}
      </p>
    </Link>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Halo, saya ingin konsultasi mengenai legalitas usaha.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami via WhatsApp"
      className="floating-wa fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-105"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.25 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
