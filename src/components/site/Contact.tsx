import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Instagram, MapPin, Phone, Youtube } from "lucide-react";

import { submitEnquiry } from "@/lib/enquiry.functions";
import { enquirySchema, SERVICE_OPTIONS, type EnquiryInput } from "@/lib/enquiry";
import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./icons";
import {
  CONTACT_BG_IMAGE,
  STUDIO_ADDRESS_LINES,
  STUDIO_MAPS_URL,
  STUDIO_PHONE_DISPLAY,
  STUDIO_PHONE_TEL,
  STUDIO_WHATSAPP_URL,
} from "./data";

type FieldErrors = Partial<Record<keyof EnquiryInput, string>>;

const EMPTY: EnquiryInput = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  service: "Ad Film Production",
  details: "",
};

export function Contact() {
  const submitFn = useServerFn(submitEnquiry);
  const [form, setForm] = useState<EnquiryInput>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  function set<K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = enquirySchema.safeParse(form);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      const mapped: FieldErrors = {};
      for (const key of Object.keys(flat) as (keyof EnquiryInput)[]) {
        const message = flat[key]?.[0];
        if (message) mapped[key] = message;
      }
      setErrors(mapped);
      return;
    }
    setStatus("sending");
    const res = await submitFn({ data: parsed.data });
    if (res.ok) {
      setStatus("sent");
      setForm(EMPTY);
    } else {
      setStatus("error");
      setServerMessage(res.message);
    }
  }

  const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground";

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <img
        src={CONTACT_BG_IMAGE}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Start a Project
            </span>
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Have an Idea? Let's Make It Happen.
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground md:text-lg">
            Whether you're building a brand, planning a campaign, producing content, or looking for
            a professional studio, we'd love to hear from you.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Location</p>
                <a
                  href={STUDIO_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary"
                >
                  {STUDIO_ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Phone</p>
                <a
                  href={`tel:${STUDIO_PHONE_TEL}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {STUDIO_PHONE_DISPLAY}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <Instagram className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Instagram</p>
                <a
                  href="https://www.instagram.com/gyrozstudio"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  @gyrozstudio
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <Youtube className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">YouTube</p>
                <p className="text-sm text-muted-foreground">Gyroz Studio</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <WhatsAppIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                <a
                  href={STUDIO_WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {STUDIO_PHONE_DISPLAY}
                </a>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-sm md:p-8">
            {status === "sent" ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                  Enquiry Sent
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Thank you for reaching out. We've received your enquiry and will get back to you
                  shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-outline mt-8"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className={labelClass}>
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      className="field"
                      value={form.fullName}
                      onChange={(e) => set("fullName", e.target.value)}
                      maxLength={100}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company / Brand
                    </label>
                    <input
                      id="company"
                      className="field"
                      value={form.company ?? ""}
                      onChange={(e) => set("company", e.target.value)}
                      maxLength={120}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="field"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      maxLength={255}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="field"
                      value={form.phone ?? ""}
                      onChange={(e) => set("phone", e.target.value)}
                      maxLength={20}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>
                    Service Required *
                  </label>
                  <select
                    id="service"
                    className="field"
                    value={form.service}
                    onChange={(e) => set("service", e.target.value as EnquiryInput["service"])}
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="details" className={labelClass}>
                    Project Details *
                  </label>
                  <textarea
                    id="details"
                    rows={5}
                    className="field resize-none"
                    value={form.details}
                    onChange={(e) => set("details", e.target.value)}
                    maxLength={2000}
                    placeholder="Tell us about your brand, your goals, and what you have in mind."
                  />
                  {errors.details && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.details}</p>
                  )}
                </div>

                {status === "error" && (
                  <p className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
                    {serverMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={cn("btn-primary w-full", status === "sending" && "opacity-60")}
                >
                  {status === "sending" ? "Sending…" : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
