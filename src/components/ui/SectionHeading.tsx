interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment} mb-16`}>
      {label && (
        <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span className="inline-block h-px w-6 bg-accent/50" />
          {label}
          <span className="inline-block h-px w-6 bg-accent/50" />
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-text-secondary">{description}</p>
      )}
    </div>
  );
}
