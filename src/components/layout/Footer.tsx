"use client";

import Link from "next/link";
import NewsletterSignup from "@/components/ui/NewsletterSignup";

export default function Footer() {
  return (
    <footer className="relative border-t border-accent/10 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="group flex items-center gap-1">
              <span className="font-mono text-lg font-bold tracking-tight text-text-primary">
                Janse Lazo
              </span>
              <span className="font-mono text-lg font-bold text-accent animate-pulse-glow">
                _
              </span>
            </Link>
            <p className="mt-3 max-w-xs font-mono text-xs leading-relaxed text-text-secondary">
              {"> "}AI Growth & Development for B2B & B2C SaaS startups.
              <br />
              {"> "}Building ventures. Advising clients.
            </p>
          </div>

          <div>
            <h4 className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-4 bg-accent/30" />
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Agency", href: "/agency" },
                { label: "Studio", href: "/studio" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Methodology", href: "/methodology" },
                { label: "Services", href: "/services" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs text-text-secondary transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-4 bg-accent/30" />
              Newsletter
            </h4>
            <NewsletterSignup compact />
            <h4 className="mb-4 mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-4 bg-accent/30" />
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@janselazo.com"
                className="font-mono text-xs text-text-secondary transition-colors hover:text-accent"
              >
                hello@janselazo.com
              </a>
              <a
                href="https://x.com/janselazo"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-text-secondary transition-colors hover:text-accent"
              >
                X / Twitter
              </a>
              <a
                href="https://github.com/janselazo"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-text-secondary transition-colors hover:text-accent"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/janselazo"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-text-secondary transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-accent/10 pt-8">
          <p className="text-center font-mono text-[10px] tracking-widest text-text-secondary/50">
            &copy; {new Date().getFullYear()} Janse Lazo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
