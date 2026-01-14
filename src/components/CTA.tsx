import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

interface CTAProps {
  onBookDemo: () => void;
}

const CTA = ({ onBookDemo }: CTAProps) => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="relative p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              Ready to Build Trust Infrastructure?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Schedule a demo to see how Proof Packets work for your use case. 
              Or join our waitlist for early API access.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Join Waitlist
                <Mail className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;