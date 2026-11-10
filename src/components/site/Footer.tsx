import { Instagram, MapPin, Youtube } from "lucide-react";

import { Logo } from "./Logo";
import { WhatsAppIcon } from "./icons";
import {
  SERVICES,
  STUDIO_ADDRESS_LINES,
  STUDIO_MAPS_URL,
  STUDIO_PHONE_DISPLAY,
  STUDIO_PHONE_TEL,
  STUDIO_WHATSAPP_URL,
} from "./data";

const EXPLORE_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Studio", href: "#studio" },
  { label: "Portfolio", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
          <div>
            <Logo large />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A creative and digital marketing agency in Tiruppur — crafting films, podcasts,
              photography, and campaigns that help brands grow.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/gyrozstudio"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-border p-2.5 text-foreground/80 transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <span
                aria-label="YouTube"
                className="rounded-full border border-border p-2.5 text-foreground/80"
              >
                <Youtube className="h-4 w-4" />
              </span>
              <a
                href={STUDIO_WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="rounded-full border border-border p-2.5 text-foreground/80 transition-colors hover:border-primary/60 hover:text-primary"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.num}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={STUDIO_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="leading-relaxed transition-colors hover:text-primary"
                >
                  {STUDIO_ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </a>
              </li>
              <li>
                <a href={`tel:${STUDIO_PHONE_TEL}`} className="transition-colors hover:text-primary">
                  {STUDIO_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={STUDIO_WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  WhatsApp — {STUDIO_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/gyrozstudio"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Instagram — @gyrozstudio
                </a>
              </li>
              <li>YouTube — Gyroz Studio</li>
            </ul>
          </div>
        </div>

        <p className="mt-16 text-center font-display text-2xl font-bold text-foreground md:text-3xl">
          Gyroz Studio — <span className="text-glow text-primary">Your Digital Growth Partner.</span>
        </p>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground lg:px-8">
          <p>Copyright © 2026 GYROZ STUDIO. All Rights Reserved.</p>
          <p>Tiruppur, Tamil Nadu 641604</p>
        </div>
      </div>
    </footer>
  );
}
