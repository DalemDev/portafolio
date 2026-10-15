type SectionProps = {
  id: string;
  label: string;
  children: React.ReactNode;
};

export default function Section({ id, label, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-line py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-[11rem_1fr] md:gap-12">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted md:pt-1.5">
          {label}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
