import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, ExternalLink } from "lucide-react";

interface HeroProps {
  onBookDemo: () => void;
}

const Hero = ({ onBookDemo }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Bitcoin-Native Provenance</span>
          </div>
          
          {/* Main heading */}
          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-foreground">Authorship Sealed in Bitcoin</span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-xl sm:text-2xl text-primary font-medium mb-6 animate-fade-in"
            style={{ animationDelay: '0.25s' }}
          >
            Prove creation, lineage, and custody — forever.
          </p>
          
          {/* Description */}
          <p 
            className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Inskribe creates tamper-evident Proof Packets for books, editions, manuscripts, 
            media, and digital assets. Verify provenance and authorship with cryptographic 
            certainty — anchored to the Bitcoin blockchain.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <Button 
              onClick={onBookDemo}
              size="lg"
              className="group text-base px-8 py-6 bg-primary hover:bg-primary-dark transition-all duration-300"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              Read the Spec
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div 
            className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Bitcoin-anchored timestamps
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Offline verification
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              No custody of content
            </span>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-overlay pointer-events-none" />
    </section>
  );
};

export default Hero;
