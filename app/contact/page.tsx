import { SectionHeading } from '@/components/section-heading';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="px-6 py-20 lg:px-12">
        <SectionHeading title="Contact Us for Project Guidance" subtitle="Contact" />
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-glass">
            <p className="text-lg leading-8 text-slate-300">
              Share your project requirement, college affiliation, or internship interest and we will respond with a tailored action plan.
            </p>
            <div className="mt-10 space-y-6 text-slate-300">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Email</p>
                <p>support@embeddedxprojects.com</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Phone</p>
                <p>+91 12345 67890</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-brand-200">WhatsApp</p>
                <p>+91 12345 67890</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-glass">
            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="name">
                  Name
                </label>
                <input id="name" type="text" className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-brand-400" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="email">
                  Email
                </label>
                <input id="email" type="email" className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-brand-400" placeholder="Your email" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="message">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-brand-400" placeholder="Tell us about your project needs" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
