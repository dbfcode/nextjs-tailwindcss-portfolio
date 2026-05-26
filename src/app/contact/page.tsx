import type { Metadata } from "next";
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile, site } from "@/lib/portfolio";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contato | Java Spring Boot Developer · Recife, Brasil",
  description: `Contato com ${profile.name} — Desenvolvedor Full Stack, Java, Spring Boot, APIs REST e microsserviços. ${profile.location}.`,
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
      label: "Portfólio (Vercel)",
      href: profile.portfolio ?? site.url,
    },
    { icon: Github, label: "github.com/dbfcode", href: profile.github },
  ];

  return (
    <div className="py-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Entre em <span className="gradient-text">contato</span>
        </h1>
        <p className="mt-4 text-muted">
          Disponível para oportunidades como{" "}
          <strong className="font-medium text-foreground">
            Java Spring Boot Developer
          </strong>
          , backend, APIs REST, microsserviços, full stack e mobile web — Remoto
          ou híbrido.
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
