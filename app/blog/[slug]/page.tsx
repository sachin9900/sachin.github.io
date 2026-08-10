import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20 lg:px-12">
      <article className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-glass">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Blog</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">{post.title}</h1>
        <p className="mt-4 text-slate-400">Published {post.publishedAt}</p>
        <div className="prose prose-invert mt-10 max-w-none text-slate-200">
          <p>{post.summary}</p>
          <p>Explore expert guidance on embedded and IoT project ideas, architecture, and deployment strategies.</p>
          <h2>Why this matters</h2>
          <p>This article helps students and HODs discover real-world project concepts that align with modern engineering trends.</p>
        </div>
      </article>
    </main>
  );
}
