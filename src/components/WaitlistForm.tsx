import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

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

    setIsSubmitting(true);

    // Placeholder for form submission
    // In production, integrate with your email service (Formspree, ConvertKit, etc.)
    setTimeout(() => {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when Inskribe launches.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id={id} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-8 shadow-glow">
            <Mail className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Join the Waitlist
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Be among the first to experience permanent authorship on Bitcoin. 
            Get early access and exclusive updates.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-6 text-base"
              disabled={isSubmitting}
              required
            />
            <Button 
              type="submit" 
              size="lg"
              disabled={isSubmitting}
              className="h-12 px-8 shadow-soft hover:shadow-glow transition-all duration-300"
            >
              {isSubmitting ? "Joining..." : "Get Notified"}
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-6">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
