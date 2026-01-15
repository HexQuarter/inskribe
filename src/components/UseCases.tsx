import { BookOpen, Image, Archive, Music } from "lucide-react";

const useCases = [
  {
    icon: BookOpen,
    title: "Publishing & Manuscripts",
    subtitle: "Editions, revisions & authorship",
    description: "Seal manuscripts, track edition lineage, and prove authorship for books, articles, and written works. Each version links cryptographically to its parent.",
    bullets: [
      "Manuscript registration with Bitcoin timestamps",
      "Edition lineage with derived-from proofs",
      "Chapter-level verification for excerpts"
    ]
  },
  {
    icon: Image,
    title: "Photography & Media",
    subtitle: "Origin badges & provenance",
    description: "Attach verifiable origin proofs to photographs, videos, and digital art. Prove you captured or created the original — not a copy.",
    bullets: [
      "Tamper-evident origin seals",
      "Chain-of-custody for distribution",
      "Subset proofs for cropped works"
    ]
  },
  {
    icon: Music,
    title: "Music & Audio",
    subtitle: "Compositions, masters & remixes",
    description: "Register original compositions, master recordings, and derivative works. Track remix lineage and prove creation dates.",
    bullets: [
      "Master registration with Bitcoin anchors",
      "Version history for remixes and edits",
      "Collaboration attestations"
    ]
  },
  {
    icon: Archive,
    title: "Archives & Records",
    subtitle: "Preservation & authenticity",
    description: "Seal archival records, datasets, and institutional documents. Prove content hasn't been altered since a specific point in time.",
    bullets: [
      "Long-term preservation proofs",
      "Institutional attestation chains",
      "Offline verification for air-gapped systems"
    ]
  }
];

const UseCases = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Built for Creators & Institutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From authors to archives — Proof Packets protect authorship 
            wherever provenance matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
              style={{
                animation: 'fade-in 0.6s ease-out forwards',
                animationDelay: `${index * 0.15}s`,
                opacity: 0
              }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <useCase.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-1 text-foreground">
                {useCase.title}
              </h3>
              <p className="text-sm text-primary font-medium mb-4">
                {useCase.subtitle}
              </p>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {useCase.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2">
                {useCase.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
