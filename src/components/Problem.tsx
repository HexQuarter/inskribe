import { AlertTriangle, Copy, Clock, FileQuestion, Unlink } from "lucide-react";

const problems = [
  {
    icon: Copy,
    title: "Plagiarism & Attribution Disputes",
    description: "Proving you wrote something first is nearly impossible. Screenshots, emails, and timestamps are easily fabricated or disputed."
  },
  {
    icon: Clock,
    title: "Editions Lose Their Lineage",
    description: "Books, manuscripts, and media go through countless revisions. Without verifiable history, derivative works and editions become untraceable."
  },
  {
    icon: FileQuestion,
    title: "Provenance Gaps in Digital Assets",
    description: "Digital content lacks inherent proof of origin. Metadata is editable, cloud timestamps are controlled by providers, and internal logs are easily contested."
  },
  {
    icon: Unlink,
    title: "Chain-of-Custody Breaks",
    description: "When content changes hands — publishers, distributors, archives — custody records are scattered across systems with no unified proof."
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
            Digital Authorship Has No Proof
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            In a world of instant copying and easy manipulation, proving you created something 
            — and when — requires more than your word.
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
