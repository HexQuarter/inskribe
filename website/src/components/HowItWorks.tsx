import { Upload, Sparkles, Lock, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Ingest",
    description: "Upload content or connect your pipeline. Documents, datasets, media files, or structured data."
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Segment",
    description: "AI-assisted segmentation proposes logical parts. Human confirmation locks the manifest."
  },
  {
    icon: Lock,
    step: "03",
    title: "Seal",
    description: "Merkle roots computed. Lineage links established. Issuer signs. Bitcoin anchors the timestamp."
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Verify",
    description: "Web verifier or offline tool. Anyone can validate without our infrastructure."
  }
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four steps from raw content to independently verifiable proof.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center"
                style={{
                  animation: 'fade-in 0.6s ease-out forwards',
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0
                }}
              >
                {/* Step number */}
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border/50 flex items-center justify-center relative z-10">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-background text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
