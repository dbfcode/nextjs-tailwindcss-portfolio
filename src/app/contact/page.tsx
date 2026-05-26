import type { Metadata } from "next";
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { GITHUB_USERNAME, profile, site } from "@/lib/portfolio";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contato | Especialista Java · Backend Spring Boot · Recife",
  description: `Contato com ${profile.name} — Engenheiro de Software, Especialista Java, Backend Spring Boot, APIs REST e microsserviços. ${profile.location}.`,
  keywords: site.keywords,
};

export default function ContactPage() {
  const whatsapp = profile.phoneWhatsApp
    ? `https://wa.me/${profile.phoneWhatsApp}`
    : undefined;

  const contacts = [
    { icon: MapPin, label: profile.location },
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: whatsapp },
    {
      icon: Linkedin,
      label: "linkedin.com/in/diegodbf",
      href: profile.linkedin,
    },
    {
      icon: Globe,
      label: "Portfólio",
      href: profile.portfolio ?? site.url,
    },
    {
      icon: Github,
      label: `github.com/${GITHUB_USERNAME}`,
      href: profile.github,
    },
  ];

  return (
    <div className="py-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Entre em <span className="gradient-text">contato</span>
        </h1>
        <p className="mt-4 text-muted">
          Oportunidades como{" "}
          <strong className="font-medium text-foreground">
            Especialista Java
          </strong>
          ,{" "}
          <strong className="font-medium text-foreground">
            Desenvolvedor Backend Spring Boot
          </strong>
          , APIs REST, microsserviços e engenharia full stack mobile/web.
        </p>
      </div>

      <ul className="mx-auto mt-14 max-w-lg space-y-6">
        {contacts.map((item) => {
          const Icon = item.icon;
          const content = (
            <span className="flex items-center gap-4 text-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl glass text-cyan-400">
                <Icon size={22} />
              </span>
              {item.label}
            </span>
          );

          return (
            <li key={item.label}>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block rounded-xl p-2 transition-colors hover:bg-white/5"
                >
                  {content}
                </a>
              ) : (
                <div className="p-2">{content}</div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-14 flex flex-wrap justify-center gap-4">
        <Button href={`mailto:${profile.email}`}>Enviar e-mail</Button>
        {whatsapp && (
          <Button href={whatsapp} variant="secondary" external>
            WhatsApp
          </Button>
        )}
        <Button href={profile.linkedin} variant="secondary" external>
          LinkedIn
        </Button>
      </div>
    </div>
  );
}
