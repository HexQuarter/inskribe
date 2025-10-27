import { FileText, Hash, Shield } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Register Your Work",
    description: "Upload your manuscript, article, or creative work. Inskribe generates a cryptographic hash of your content.",
    step: "01",
  },
  {
    icon: Hash,
    title: "Inscribe on Bitcoin",
    description: "Your work's hash is permanently inscribed on the Bitcoin blockchain with a timestamp, creating an immutable record.",
    step: "02",
  },
  {
    icon: Shield,
    title: "Verify & Share Proof",
    description: "Receive a verifiable certificate. Anyone can confirm authenticity by comparing the hash against the blockchain record.",
    step: "03",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-gradient">Inskribe</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three steps to permanent, verifiable authorship on Bitcoin
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  animation: 'fade-in 0.8s ease-out forwards',
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0
                }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-bitcoin opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500" />

                {/* Card */}
                <div className="relative text-center">
                  {/* Step number */}
                  <div className="z-10 absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-bitcoin flex items-center justify-center shadow-glow">
                    <span className="text-2xl font-bold text-background">{step.step}</span>
                  </div>

                  <div className="p-8 rounded-2xl glass-effect shadow-glass hover:shadow-glow transition-all duration-300 group-hover:-translate-y-2">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent mb-6 group-hover:shadow-glow transition-all duration-300">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow connector (mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
