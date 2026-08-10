import Link from 'next/link';
import { ArrowRight, CheckCircle2, MessagesSquare, Phone, Rocket, ShieldCheck } from 'lucide-react';

const stats = [
  { label: 'Projects Delivered', value: '100+' },
  { label: 'Partner Colleges', value: '25+' },
  { label: 'Students Guided', value: '500+' },
  { label: 'Technologies Covered', value: '10+' }
];

const expertise = [
  {
    title: 'Embedded Systems',
    items: ['STM32', 'ESP32', 'ARM Cortex', 'AVR', 'PIC']
  },
  {
    title: 'IoT Solutions',
    items: ['MQTT', 'Azure IoT', 'AWS IoT', 'Cloud Dashboards']
  },
  {
    title: 'Wireless Communication',
    items: ['LoRa', 'Zigbee', 'BLE', 'Wi-Fi']
  },
  {
    title: 'Industry 4.0',
    items: ['Edge AI', 'Smart Manufacturing', 'Predictive Maintenance']
  }
];

const projectCategories = [
  {
    title: 'Smart Agriculture Monitoring',
    category: 'IoT Projects',
    features: ['Soil Moisture Monitoring', 'Cloud Data Visualization', 'Mobile Alerts']
  },
  {
    title: 'Smart Energy Meter',
    category: 'IoT Projects',
    features: ['Real-Time Power Monitoring', 'Consumption Reports', 'IoT Dashboard']
  },
  {
    title: 'Smart Vehicle Tracking',
    category: 'Embedded Projects',
    features: ['GPS', 'GSM', 'ESP32']
  },
  {
    title: 'Digital Health Monitoring Device',
    category: 'Embedded Projects',
    features: ['Heart Rate Sensor', 'Temperature Monitoring', 'Wireless Alerts']
  }
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Final Year Student',
    quote:
      'The embedded project mentorship helped me build a professional portfolio and secure placement interviews.'
  },
  {
    name: 'Dr. R. N. Rao',
    role: 'HOD, Electronics',
    quote:
      'The college partnership program delivered high-quality projects and technical workshops for our students.'
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_40%),linear-gradient(180deg,#020617_0%,#0b1120_100%)] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div className="space-y-8">
              <p className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-2 text-sm text-brand-100">
                <ShieldCheck className="h-4 w-4" />
                Trusted by colleges and student innovators
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Industry-Oriented Final Year Projects in Embedded Systems, IoT & Wireless Technologies
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Transform your academic project into a real-world innovation with expert mentoring, hardware design, software implementation, documentation support, and deployment guidance.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="#projects" className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400">
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-brand-400 hover:text-brand-200">
                  Book Consultation
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl">
              <div className="space-y-6">
                <div className="rounded-3xl bg-slate-950/90 p-6 ring-1 ring-white/10">
                  <div className="mb-4 flex items-center justify-between text-slate-300">
                    <span className="text-sm uppercase tracking-[0.24em] text-brand-200">Live Consultation</span>
                    <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs text-brand-100">Open</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-white">Ask About Your Next Embedded Project</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">Get fast feedback on project ideas, mentoring options, and college-ready solutions.</p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 p-3 text-sm text-slate-200">
                      <MessagesSquare className="h-5 w-5 text-brand-300" />
                      <span>WhatsApp support available</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-slate-900/90 p-3 text-sm text-slate-200">
                      <Phone className="h-5 w-5 text-brand-300" />
                      <span>Schedule a free consultation call</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/90 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center">
                <p className="text-4xl font-semibold text-white">{item.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12 text-center">
            <p className="text-base uppercase tracking-[0.3em] text-brand-200">Expertise</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Technology Expertise for Embedded & IoT Solutions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {expertise.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-glass">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <ul className="mt-5 space-y-3 text-slate-300">
                  {item.items.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-brand-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-slate-950/90">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12 text-center">
            <p className="text-base uppercase tracking-[0.3em] text-brand-200">Project Categories</p>
            <h2 className="mt-4 text-4xl font-semibold text-white">Student Projects That Bridge Academia and Industry</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {projectCategories.map((project) => (
              <div key={project.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-glass">
                <div className="flex items-center justify-between text-sm text-brand-200">
                  <span>{project.category}</span>
                  <span className="rounded-full bg-brand-500/10 px-3 py-1">Featured</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>
                <ul className="mt-5 space-y-3 text-slate-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-brand-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/projects" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-200 hover:text-white">
                  View More Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-base uppercase tracking-[0.3em] text-brand-200">Testimonials</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Trusted by Students and Colleges</h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Our portfolio and partnerships help engineering students build credible projects and help colleges deliver industry-ready training.
              </p>
            </div>
            <div className="grid gap-6">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-glass">
                  <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
                  <div className="mt-6 text-sm text-slate-400">
                    <p className="font-semibold text-white">{item.name}</p>
                    <p>{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900/90 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.9fr] lg:items-center">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-10 shadow-glass">
              <p className="text-base uppercase tracking-[0.3em] text-brand-200">Lead Capture</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Schedule a Free Project Discussion</h2>
              <p className="mt-4 text-slate-300">
                Share your college, branch, and project interests to receive a tailored recommendation and next step proposal.
              </p>
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <p className="flex items-center gap-3">
                  <Rocket className="h-5 w-5 text-brand-300" />
                  Personalized project guidance for final year submissions
                </p>
                <p className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-300" />
                  College partnership support, workshops, and evaluation assistance
                </p>
                <p className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-300" />
                  Download the catalog and receive a curated project list
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-10 shadow-glass">
              <form className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="name">
                    Name
                  </label>
                  <input id="name" type="text" className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="college">
                    College
                  </label>
                  <input id="college" type="text" className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400" placeholder="College name" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="branch">
                      Branch
                    </label>
                    <input id="branch" type="text" className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400" placeholder="E.g. ECE, CSE" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="phone">
                      Phone
                    </label>
                    <input id="phone" type="tel" className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400" placeholder="Mobile number" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="email">
                    Email
                  </label>
                  <input id="email" type="email" className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-400" placeholder="Email address" />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400">
                  Schedule Free Project Discussion
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <a href="https://wa.me/911234567890" className="fixed bottom-5 right-5 inline-flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-sm font-semibold text-white shadow-glass transition hover:bg-green-400">
        <span>Chat with Project Expert</span>
      </a>
    </main>
  );
}
