import { Database, Shield, Scale } from "lucide-react";

const useCases = [
  {
    icon: Database,
    title: "AI Dataset Provenance",
    subtitle: "Audit exports & version lineage",
    description: "Prove what data was included or excluded in training sets. Track version lineage across dataset iterations. Export audit bundles for compliance reviews.",
    bullets: [
      "Inclusion/exclusion proofs for licensing disputes",
      "Version lineage with derived-from links",
      "Audit exports for regulatory compliance"
    ]
  },
  {
    icon: Shield,
    title: "Media Authenticity",
    subtitle: "Origin badges & chain-of-custody",
    description: "Attach verifiable origin badges to official content. Track chain-of-custody from creation through distribution. Combat deepfakes with cryptographic provenance.",
    bullets: [
      "Official origin verification for media outlets",
      "Chain-of-custody for syndicated content",
      "Tamper-evident seals for archives"
    ]
  },
  {
    icon: Scale,
    title: "Legal-Grade Evidence",
    subtitle: "Court-ready proof bundles",
    description: "Create verification bundles designed for legal scrutiny. Independently verifiable by any party — no reliance on Inskribe infrastructure. Offline verification for air-gapped environments.",
    bullets: [
      "Self-contained evidence packages",
      "Third-party verifiable without our servers",
      "Designed for legal-grade verification"
    ]
  }
];

const UseCases = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Built for Real Workflows
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From AI pipelines to publishing houses to legal discovery — Proof Packets 
            integrate where authenticity matters.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
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