import { Package, Hash, GitBranch, PenTool, Link2, Cpu } from "lucide-react";

const proofComponents = [
  {
    icon: Hash,
    label: "Content Hash",
    description: "SHA-256 fingerprint of the sealed content"
  },
  {
    icon: GitBranch,
    label: "Segmentation Manifest",
    description: "AI-proposed, human-confirmed part boundaries"
  },
  {
    icon: Link2,
    label: "Merkle Proofs",
    description: "Cryptographic links proving subset inclusion"
  },
  {
    icon: PenTool,
    label: "Issuer Signature",
    description: "Publisher or author attestation"
  },
  {
    icon: Package,
    label: "Bitcoin Anchor",
    description: "Immutable timestamp via Bitcoin transaction"
  },
  {
    icon: Cpu,
    label: "Pipeline Hash (Optional)",
    description: "Execution receipt for AI/automation workflows"
  }
];

const Solution = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Explanation */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Package className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">The Solution</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              Proof Packets
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A Proof Packet is a self-contained verification bundle. It holds everything needed 
              to prove authenticity, lineage, and chain-of-custody — without relying on any 
              central authority.
            </p>

            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">1</span>
                </span>
                <p><strong className="text-foreground">AI proposes</strong> — semantic segmentation suggests logical parts (chapters, clips, data subsets).</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">2</span>
                </span>
                <p><strong className="text-foreground">Humans confirm</strong> — the issuer approves or adjusts the manifest.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">3</span>
                </span>
                <p><strong className="text-foreground">Cryptography seals</strong> — Merkle trees link parts to the root; signatures attest; Bitcoin anchors.</p>
              </div>
            </div>
          </div>

          {/* Right: Proof Packet anatomy */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />
            
            <div className="relative p-8 rounded-2xl border border-border/50 bg-background">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                Inside a Proof Packet
              </h3>
              
              <div className="space-y-4">
                {proofComponents.map((component, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/30 hover:border-primary/30 transition-colors duration-300"
                    style={{
                      animation: 'fade-in 0.5s ease-out forwards',
                      animationDelay: `${0.3 + index * 0.08}s`,
                      opacity: 0
                    }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <component.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{component.label}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{component.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
