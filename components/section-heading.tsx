export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-base uppercase tracking-[0.3em] text-brand-200">{subtitle ?? 'Section'}</p>
      <h2 className="mt-4 text-4xl font-semibold text-white">{title}</h2>
    </div>
  );
}
