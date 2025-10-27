import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle2, Sparkles } from "lucide-react";

interface WaitlistFormProps {
  id?: string;
}

const WaitlistForm = ({ id }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    const res = await fetch(' https://z0o2wxacwc.execute-api.us-east-1.amazonaws.com/default/inskribe_subscribe_waiting_list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email
      })
    });
    if (res.status !== 200) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your email. Please try again later.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Placeholder for form submission
    setTimeout(() => {
      toast({
        title: "🎉 Welcome to the waitlist!",
        description: "We'll notify you when Inskribe launches.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id={id} className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center">
          {/* Icon */}
          <div className="relative inline-flex items-center justify-center mb-8">
            <div className="absolute inset-0 bg-gradient-bitcoin opacity-30 blur-2xl rounded-full animate-pulse-slow" />
            <div className="relative w-24 h-24 rounded-3xl glass-effect shadow-glow flex items-center justify-center">
              <Mail className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          {/* Heading */}
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
            Join the <span className="text-gradient animate-gradient">Waitlist</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Be among the first to experience permanent authorship on Bitcoin. 
            Get early access, exclusive updates, and beta invitations.
          </p>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto mb-12">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-bitcoin opacity-20 blur-lg rounded-2xl" />
            
            <div className="relative flex flex-col sm:flex-row gap-4 p-2 rounded-2xl glass-effect shadow-glass">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 px-6 text-base bg-background/50 border-primary/20 focus:border-primary/40 rounded-xl"
                disabled={isSubmitting}
                required
              />
              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="h-14 px-8 bg-gradient-bitcoin animate-gradient shadow-glow hover:shadow-xl transition-all duration-500 hover:scale-105"
              >
                {isSubmitting ? (
                  "Joining..."
                ) : (
                  <>
                    Get Early Access
                    <Sparkles className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </div>
          </form>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Early access guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
