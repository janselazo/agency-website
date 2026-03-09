import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent/10 text-accent border border-accent/50 hover:bg-accent/20 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] glow-blue",
  secondary:
    "bg-accent-violet/10 text-accent-violet border border-accent-violet/30 hover:bg-accent-violet/20 hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]",
  ghost:
    "bg-transparent text-text-secondary border border-transparent hover:text-accent hover:border-border",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded font-mono font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer";
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
