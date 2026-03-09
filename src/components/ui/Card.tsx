interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "blue" | "green" | "none";
}

export default function Card({
  children,
  className = "",
  hover = true,
  glow = "none",
}: CardProps) {
  const glowClass =
    glow === "blue"
      ? "glow-blue"
      : glow === "green"
        ? "glow-green"
        : "";

  return (
    <div
      className={`scifi-card rounded-lg border border-border bg-surface/80 p-6 backdrop-blur-sm ${
        hover
          ? "transition-all duration-300 hover:border-accent/30 hover:bg-surface-light/80"
          : ""
      } ${glowClass} ${className}`}
    >
      {children}
    </div>
  );
}
