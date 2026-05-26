import { profile, site } from "@/lib/portfolio";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: [
      "Especialista Java",
      "Java Spring Boot Developer",
      "Backend Developer",
      "Full Stack Engineer",
      "Mobile Full Stack Developer",
    ],
    description: site.description,
    url: site.url,
    image: `${site.url}${profile.avatar}`,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Recife",
      addressRegion: "PE",
      addressCountry: "BR",
    },
    sameAs: [profile.linkedin, profile.github, profile.portfolio].filter(
      Boolean,
    ),
    knowsAbout: site.keywords ?? [],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Centro Universitário Senac",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
