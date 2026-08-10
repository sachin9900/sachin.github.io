import { SectionHeading } from '@/components/section-heading';

export default function InternshipsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="px-6 py-20 lg:px-12">
        <SectionHeading title="Internship Programs" subtitle="Internships" />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-glass">
            <h3 className="text-2xl font-semibold text-white">Embedded Internship</h3>
            <p className="mt-4 text-slate-300">Duration: 1-3 Months</p>
            <p className="mt-4 text-slate-300">Technologies: C Programming, Microcontrollers, RTOS, Device Drivers</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-glass">
            <h3 className="text-2xl font-semibold text-white">IoT Internship</h3>
            <p className="mt-4 text-slate-300">Technologies: ESP32, MQTT, Node-RED, Azure IoT</p>
          </div>
        </div>
      </section>
    </main>
  );
}
