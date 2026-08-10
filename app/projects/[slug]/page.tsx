import { projectData } from '@/lib/data';
import { notFound } from 'next/navigation';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectData.find((item) => item.slug === params.slug);
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20 lg:px-12">
      <article className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-glass">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-200">{project.category}</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">{project.title}</h1>
        <p className="mt-4 text-slate-300">{project.description}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-slate-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Technology Stack</p>
            <p className="mt-3 text-slate-300">{project.techStack}</p>
          </div>
          <div className="rounded-3xl bg-slate-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Difficulty</p>
            <p className="mt-3 text-slate-300">{project.difficulty}</p>
          </div>
        </div>
        <div className="mt-8 rounded-3xl bg-slate-950/80 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Project Features</p>
          <ul className="mt-4 space-y-3 text-slate-300">
            {project.features.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
        </div>
      </article>
    </main>
  );
}
