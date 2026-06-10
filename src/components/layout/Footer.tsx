import { Github, Linkedin, Mail } from "lucide-react";
import { profile, site } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    href: profile.linkedin,
    label: "LinkedIn",
    icon: Linkedin,
    className: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:shadow-[#0A66C2]/25",
  },
  {
    href: profile.github,
    label: "GitHub",
    icon: Github,
    className: "hover:text-white hover:border-white/30 hover:shadow-white/10",
  },
  {
    href: `mailto:${profile.email}`,
    label: "E-mail",
    icon: Mail,
    className: "hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-cyan-500/25",
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <nav
        className="fixed bottom-5 left-4 z-50 flex items-center gap-3 sm:left-6"
        aria-label="Redes sociais"
      >
        {socialLinks.map(({ href, label, icon: Icon, className }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-violet-600/20 to-cyan-500/15 text-foreground shadow-lg shadow-violet-500/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-xl",
              className,
            )}
          >
            <Icon size={22} strokeWidth={2} />
          </a>
        ))}
      </nav>

      <footer className="border-t border-white/5 py-12 pb-24 sm:pb-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <p className="text-sm text-muted">
            © {year} {site.author}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted sm:hidden">
            Redes sociais no canto inferior esquerdo
          </p>
        </div>
      </footer>
    </>
  );
}
