import { Code, Cloud, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const Solutions = () => {
  const protocolFeatures = [
    "RESTful API for programmatic inscriptions",
    "CLI tool for batch operations",
    "Open-source SDK"
  ];

  const saasFeatures = [
    "Custom branded dashboard",
    "White-label verification portal",
    "Set your own fees and revenue model",
    "Managed infrastructure",
    "Priority support & SLA",
  ];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Choose Your Path</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Build With <span className="text-gradient">Protocol</span> or Scale With <span className="text-gradient">SaaS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a developer wanting full control or a business seeking turnkey solutions, Inskribe adapts to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Protocol Solution */}
          <div 
            className="group relative"
            style={{
              animation: 'fade-in 0.8s ease-out forwards',
              animationDelay: '0.2s',
              opacity: 0
            }}
          >
            <div className="absolute -inset-1 bg-gradient-bitcoin opacity-0 group-hover:opacity-30 blur-2xl rounded-3xl transition-all duration-500" />
            
            <div className="relative h-full p-8 rounded-3xl glass-effect shadow-glass hover:shadow-glow transition-all duration-500 group-hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent mb-6 group-hover:shadow-glow transition-all duration-300">
                <Code className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-3">Protocol & API</h3>
              <p className="text-muted-foreground mb-6">
                For developers and technical teams who want to integrate Inskribe directly into their infrastructure.
              </p>

              <ul className="space-y-3 mb-8">
                {protocolFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* <Button variant="outline" className="w-full group/btn">
                <span>Explore API Docs</span>
                <Code className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button> */}
            </div>
          </div>

          {/* SaaS Solution */}
          <div 
            className="group relative"
            style={{
              animation: 'fade-in 0.8s ease-out forwards',
              animationDelay: '0.4s',
              opacity: 0
            }}
          >
            <div className="absolute -inset-1 bg-gradient-bitcoin opacity-0 group-hover:opacity-30 blur-2xl rounded-3xl transition-all duration-500" />
            
            <div className="relative h-full p-8 rounded-3xl glass-effect shadow-glass hover:shadow-glow transition-all duration-500 group-hover:-translate-y-2 border-2 border-primary/20">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm">
                <span className="text-xs font-bold text-primary">Recommanded</span>
              </div>

              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-bitcoin mb-6 group-hover:shadow-glow transition-all duration-300">
                <Cloud className="w-8 h-8 text-background" />
              </div>

              <h3 className="text-2xl font-bold mb-3">White-Label SaaS</h3>
              <p className="text-muted-foreground mb-6">
                For businesses ready to offer branded authorship verification to their users with zero infrastructure hassle.
              </p>

              <ul className="space-y-3 mb-8">
                {saasFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* <Button className="w-full group/btn shadow-glow">
                <span>Request Demo</span>
                <Cloud className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
