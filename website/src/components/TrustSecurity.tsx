import { Key, Eye, Database, Lock, Server, ShieldCheck } from "lucide-react";

const trustPoints = [
  {
    icon: Key,
    title: "Your Keys, Your Signatures",
    description: "Bring your own signing keys or use our managed HSM. We never have access to your private keys."
  },
  {
    icon: Eye,
    title: "No Custody of Content",
    description: "Only hashes are processed and stored. Your files never leave your infrastructure unless you choose."
  },
  {
    icon: Database,
    title: "On-Chain vs Off-Chain",
    description: "Bitcoin stores only the Merkle root hash. Content and metadata remain private in your chosen storage."
  },
  {
    icon: Lock,
    title: "Signing Policies",
    description: "Multi-sig, threshold approvals, or single-signer. Configure workflows to match your compliance needs."
  },
  {
    icon: Server,
    title: "Self-Hosted Option",
    description: "Run the Inskribe stack in your own environment. Full control, same capabilities."
  },
  {
    icon: ShieldCheck,
    title: "Privacy by Design",
    description: "Zero-knowledge proofs for subset verification. Prove inclusion without revealing the full dataset."
  }
];

const TrustSecurity = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Trust & Security
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for enterprises that demand control, privacy, and auditability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border/50 bg-background/50"
              style={{
                animation: 'fade-in 0.6s ease-out forwards',
                animationDelay: `${index * 0.08}s`,
                opacity: 0
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSecurity;
