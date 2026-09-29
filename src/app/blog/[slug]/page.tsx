import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/Markdown";
import { CallToAction } from "@/components/Sections";
import { formatDate, getPost, posts, sortedPosts } from "@/lib/posts";
import { whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artikel tidak ditemukan" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = sortedPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="container-page py-14">
        <nav className="text-sm text-brand-500">
          <Link href="/blog" className="hover:text-brand-700">
            Panduan
          </Link>
          <span className="mx-2">/</span>
          <span className="text-brand-700">{post.category}</span>
        </nav>

        <header className="mt-6 max-w-3xl">
          <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-brand-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-600">{post.excerpt}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-brand-400">
            <span>{post.author}</span>
            <span aria-hidden="true">•</span>
            <span>{formatDate(post.date)}</span>
            <span aria-hidden="true">•</span>
            <span>{post.readMinutes} menit baca</span>
          </div>
        </header>

        <hr className="my-10 max-w-3xl border-brand-100" />

        <div className="max-w-3xl">
          <Markdown content={post.content} />
        </div>

        <div className="mt-12 max-w-3xl rounded-2xl border border-brand-100 bg-brand-50 p-6">
          <h2 className="text-base font-semibold text-brand-900">
            Butuh bantuan menerapkan ini pada usaha Anda?
          </h2>
          <p className="mt-2 text-sm text-brand-600">
            Konsultasi awal gratis untuk memetakan kebutuhan legalitas dan perizinan Anda.
          </p>
          <a
            href={whatsappLink(`Halo, saya membaca artikel "${post.title}" dan ingin berkonsultasi.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Konsultasi Gratis
          </a>
        </div>
      </article>

      <section className="container-page pb-14">
        <h2 className="text-2xl font-bold text-brand-900">Artikel lainnya</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="rounded-xl border border-brand-100 bg-white p-5 transition hover:border-brand-300 hover:shadow-md"
            >
              <span className="text-xs text-brand-500">
                {formatDate(item.date)} · {item.readMinutes} menit
              </span>
              <h3 className="mt-2 text-base font-semibold leading-snug text-brand-900">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
