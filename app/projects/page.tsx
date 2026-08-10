import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { projectData } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="px-6 py-20 lg:px-12">
        <SectionHeading title="Featured Project Categories" subtitle="Projects" />
        <div className="grid gap-6 lg:grid-cols-2">
          {projectData.map((project) => (
            <div key={project.slug} className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-glass">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-200">{project.category}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-slate-300">{project.description}</p>
              <p className="mt-4 text-sm text-slate-400">Tech Stack: {project.techStack}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.features.map((feature) => (
                  <span key={feature} className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">
                    {feature}
                  </span>
                ))}
              </div>
              <Link href={`/projects/${project.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-200 hover:text-white">
                View Project Details <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
