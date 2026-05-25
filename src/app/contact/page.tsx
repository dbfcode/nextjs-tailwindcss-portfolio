import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/portfolio";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contato",
};

const contacts = [
  { icon: MapPin, label: profile.location },
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  {
    icon: Phone,
    label: profile.phone,
    href: `https://wa.me/5581983603171`,
  },
];

export default function ContactPage() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Entre em <span className="gradient-text">contato</span>
        </h1>
        <p className="mt-4 text-muted">
          Disponível para oportunidades, freelas e conversas sobre tecnologia.
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
        <Button href={profile.github} variant="secondary" external>
          GitHub
        </Button>
        <Button href={profile.linkedin} variant="secondary" external>
          LinkedIn
        </Button>
      </div>
    </div>
  );
}
