import { SectionHeading } from '@/components/section-heading';

export default function CollegePartnershipPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="px-6 py-20 lg:px-12">
        <SectionHeading title="College Partnership Programs" subtitle="College Partnership" />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-glass">
            <p className="text-lg leading-8 text-slate-300">
              We collaborate with engineering colleges to provide industry-oriented project programs, workshops, technical seminars, internships, and mentorship for final-year students.
            </p>
            <ul className="mt-8 space-y-4 text-slate-300">
              <li>Project Exhibitions</li>
              <li>Guest Lectures</li>
              <li>Hackathons</li>
              <li>Faculty Development Programs</li>
              <li>Industry Mentoring</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-glass">
            <h3 className="text-2xl font-semibold text-white">Why partner with us?</h3>
            <p className="mt-4 text-slate-300">
              Our programs are designed to help colleges build stronger industry connections, upskill students, and deliver project outcomes that meet modern engineering expectations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
