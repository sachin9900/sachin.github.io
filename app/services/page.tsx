import { SectionHeading } from '@/components/section-heading';
import { services } from '@/lib/data';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="px-6 py-20 lg:px-12">
        <SectionHeading title="Services for Students and Colleges" subtitle="Services" />
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-glass">
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
