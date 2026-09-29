import type { Metadata } from "next";
import { PostCard } from "@/components/Cards";
import { CallToAction } from "@/components/Sections";
import { sortedPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Panduan Legalitas & Perizinan Usaha",
  description:
    "Artikel dan panduan praktis seputar pendirian PT, perizinan usaha, KBLI, OSS, merek, dan kepatuhan perusahaan di Indonesia.",
};

export default function BlogPage() {
  const [featured, ...rest] = sortedPosts;

  return (
    <>
      <section className="bg-gradient-soft border-b border-brand-100">
        <div className="container-page py-14 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
            Panduan
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Belajar dulu, memutuskan kemudian
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-600">
            Kumpulan artikel untuk membantu Anda memahami legalitas dan perizinan usaha
            sebelum mengambil keputusan.
          </p>
        </div>
      </section>

      <div className="container-page py-14 sm:py-16">
        {featured && (
          <div className="mb-12">
            <PostCard post={featured} />
          </div>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      <CallToAction title="Ada pertanyaan setelah membaca?" />
    </>
  );
}
