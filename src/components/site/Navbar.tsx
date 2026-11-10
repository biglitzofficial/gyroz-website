import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

import { Logo } from "./Logo";
import { WhatsAppIcon } from "./icons";
import { STUDIO_WHATSAPP_URL } from "./data";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Studio", href: "#studio" },
  { label: "Portfolio", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 py-2 shadow-lg shadow-black/30 backdrop-blur-md"
          : "bg-transparent py-2.5",
      )}
    >
      <div className="flex items-center justify-between px-3 lg:px-4">
        <a href="#home" aria-label="Gyroz Studio home" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/gyrozstudio"
            target="_blank"
            rel="noreferrer"
            aria-label="Gyroz Studio on Instagram"
            className="rounded-full border border-border p-2.5 text-foreground/80 transition-colors duration-200 hover:border-primary/60 hover:text-primary"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={STUDIO_WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="rounded-full border border-border p-2.5 text-foreground/80 transition-colors duration-200 hover:border-primary/60 hover:text-primary"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn-primary ml-2 hidden !px-5 !py-2.5 md:inline-flex">
            Let's Talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-full border border-border p-2.5 text-foreground transition-colors hover:border-primary/60 hover:text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-[64px] z-40 flex flex-col bg-background/98 px-8 pb-10 pt-10 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 40}ms` }}
              className={cn(
                "font-display text-3xl font-bold text-foreground transition-all duration-500 hover:text-primary",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto flex items-center gap-3">
          <a
            href="https://www.instagram.com/gyrozstudio"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="rounded-full border border-border p-3 text-foreground/80 hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href={STUDIO_WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            onClick={() => setOpen(false)}
            className="rounded-full border border-border p-3 text-foreground/80 hover:text-primary"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary ml-auto">
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}
