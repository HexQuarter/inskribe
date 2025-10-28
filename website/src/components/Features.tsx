import { Shield, Lock, Award, Hexagon } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Permanence",
    description: "Your work is inscribed on Bitcoin's immutable blockchain, ensuring it lasts forever without central control or censorship.",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Lock,
    title: "Transparency",
    description: "Every authorship claim and edition is verifiable on-chain. Provenance tracking that anyone can audit, anytime.",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: Award,
    title: "Ownership",
    description: "True digital ownership through Ordinals. You control your work, your rights, and your creative legacy.",
    color: "from-yellow-500 to-orange-500"
  }
];

const Features = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" id="learn-more">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-effect">
            <Hexagon className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Core Principles</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
            Why <span className="text-gradient">Inskribe</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built on Bitcoin's foundation, designed for creators who demand authenticity, 
            transparency, and permanent ownership.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ 
                animation: 'fade-in 0.8s ease-out forwards',
                animationDelay: `${index * 0.15}s`,
                opacity: 0
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-bitcoin opacity-0 group-hover:opacity-20 rounded-3xl blur transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative h-full p-10 rounded-3xl glass-effect shadow-glass hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Icon */}
                <div className="relative mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 blur-2xl rounded-full group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl glass-effect shadow-soft group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                    <feature.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
