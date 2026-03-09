type BadgeStatus = "live" | "beta" | "building" | "research";

interface BadgeProps {
  status: BadgeStatus;
}

const statusStyles: Record<BadgeStatus, string> = {
  live: "bg-accent-violet/10 text-accent-violet border-accent-violet/30",
  beta: "bg-accent/10 text-accent border-accent/30",
  building: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  research: "bg-blue-400/10 text-blue-400 border-blue-400/30",
};

const statusLabels: Record<BadgeStatus, string> = {
  live: "ONLINE",
  beta: "BETA",
  building: "IN DEV",
  research: "R&D",
};

export default function Badge({ status }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${statusStyles[status]}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full animate-pulse-glow ${
          status === "live"
            ? "bg-accent-violet"
            : status === "beta"
              ? "bg-accent"
              : status === "building"
                ? "bg-amber-400"
                : "bg-blue-400"
        }`}
      />
      {statusLabels[status]}
    </span>
  );
}
