import { AlertTriangle, Bot, FileQuestion, Scale, Database } from "lucide-react";

const problems = [
  {
    icon: Bot,
    title: "AI-Generated Content Floods the Market",
    description: "Deepfakes, synthetic media, and AI-written text are indistinguishable from human work. Origin claims are unverifiable."
  },
  {
    icon: FileQuestion,
    title: "Provenance Gaps in Datasets",
    description: "Training data lacks audit trails. Disputes over inclusion, licensing, and version lineage have no resolution mechanism."
  },
  {
    icon: Scale,
    title: "Legal Proof Is Fragile",
    description: "Timestamps from internal logs, cloud metadata, or notary services are easily contested. Courts need independently verifiable evidence."
  },
  {
    icon: Database,
    title: "Pipeline Approvals Vanish",
    description: "Human-in-the-loop confirmations, model outputs, and execution receipts disappear into ephemeral logs."
  }
];

const Problem = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-destructive/30 bg-destructive/10 mb-6">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">The Problem</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Trust Collapses in the AI Era
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            When anyone can generate anything, authenticity becomes the scarcest resource. 
            Existing systems weren't built for this level of ambiguity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-border transition-all duration-300"
              style={{
                animation: 'fade-in 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <problem.icon className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
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

export default Problem;
