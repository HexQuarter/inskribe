import { Button } from "@/components/ui/button";

interface HeroProps {
  onJoinWaitlist: () => void;
}

const Hero = ({ onJoinWaitlist }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent))_0%,transparent_50%)] opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/20 bg-accent/50 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary">Coming Soon</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Authorship, inscribed
            <br />
            <span className="bg-gradient-bitcoin bg-clip-text text-transparent">
              forever on Bitcoin
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            A decentralized platform that uses Bitcoin inscriptions to give creators permanent, 
            verifiable proofs of authorship and edition lineage for their works.
          </p>
          
          <Button 
            onClick={onJoinWaitlist}
            size="lg"
            className="text-lg px-8 py-6 shadow-glow hover:shadow-soft transition-all duration-300 hover:scale-105"
          >
            Join the Waitlist
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default Hero;
