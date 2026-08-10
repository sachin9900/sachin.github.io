import { SectionHeading } from '@/components/section-heading';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="px-6 py-20 lg:px-12">
        <SectionHeading title="About EmbeddedX Projects" subtitle="About Us" />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-glass">
            <p className="text-lg leading-8 text-slate-300">
              EmbeddedX Projects is a lead-generation platform for students and colleges seeking industry-oriented final year projects in Embedded Systems, IoT, Wireless Communication, and AIoT.
            </p>
            <p className="text-lg leading-8 text-slate-300">
              We help engineering students build project portfolios, guide colleges in partnership programs, and provide end-to-end support including hardware, firmware, cloud integration and documentation.
            </p>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-glass">
            <h3 className="text-2xl font-semibold text-white">What sets us apart</h3>
            <ul className="space-y-4 text-slate-300">
              <li>Industry-ready project development with college evaluation support.</li>
              <li>Real-time IoT dashboards, wireless communication and smart sensor integration.</li>
              <li>Structured mentorship, resume-building, and placement-focused project outcomes.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
