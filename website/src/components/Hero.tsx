import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { HashLink } from 'react-router-hash-link';


interface HeroProps {
  onJoinWaitlist: () => void;
}

const Hero = ({ onJoinWaitlist }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/10 rounded-lg rotate-12 animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-primary/10 rounded-lg -rotate-12 animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full glass-effect shadow-glass animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Launching Soon on Bitcoin</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground">Authorship,</span>
            <br />
            <span className="text-foreground">inscribed </span>
            <span className="text-gradient animate-gradient">forever</span>
            <br />
            <span className="text-foreground">on Bitcoin</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Permanent, verifiable proofs of authorship for creators. Built on Bitcoin's immutable blockchain 
            with Ordinals provenance for books, manuscripts, and creative works.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={onJoinWaitlist}
              size="lg"
              className="group text-lg px-8 py-7 shadow-glow hover:shadow-xl transition-all duration-500 hover:scale-105 bg-gradient-bitcoin animate-gradient"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="text-lg px-8 py-7 glass-effect hover:shadow-soft transition-all duration-300 border-primary/20 hover:border-primary/40"
              asChild
            >
              <HashLink to="#learn-more">Learn More</HashLink>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Bitcoin Native</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span>Decentralized</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '1s' }} />
              <span>Immutable</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-overlay pointer-events-none" />
    </section>
  );
};

export default Hero;
