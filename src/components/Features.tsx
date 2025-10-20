import { Shield, Lock, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Permanence",
    description: "Your work is inscribed on Bitcoin's immutable blockchain, ensuring it lasts forever without central control or censorship."
  },
  {
    icon: Lock,
    title: "Transparency",
    description: "Every authorship claim and edition is verifiable on-chain. Provenance tracking that anyone can audit, anytime."
  },
  {
    icon: Award,
    title: "Ownership",
    description: "True digital ownership through Ordinals. You control your work, your rights, and your creative legacy."
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Why Inskribe?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built on Bitcoin's foundation, designed for creators who demand authenticity and permanence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center animate-fade-in p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-6 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
