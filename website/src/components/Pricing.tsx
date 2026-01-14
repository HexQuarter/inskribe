import { Check, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const tiers = [
  {
    name: "Developer",
    price: "Free",
    description: "For experimentation and small projects",
    features: [
      "100 Proof Packets / month",
      "REST API access",
      "Community support",
      "7-day anchor batching"
    ],
    cta: "Start Free",
    highlighted: false
  },
  {
    name: "Team",
    price: "$299",
    period: "/month",
    description: "For production workloads",
    features: [
      "10,000 Proof Packets / month",
      "API + SDK access",
      "Team workspaces",
      "Daily anchor batching",
      "Email support"
    ],
    cta: "Start Trial",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For scale and compliance",
    features: [
      "Unlimited Proof Packets",
      "White-label tenant",
      "Self-hosted option",
      "Real-time anchoring",
      "Dedicated support + SLA",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Simple Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free. Scale as you grow. Enterprise for custom needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                tier.highlighted 
                  ? 'border-primary bg-card/50 shadow-lg shadow-primary/10' 
                  : 'border-border/50 bg-card/30 hover:border-border'
              }`}
              style={{
                animation: 'fade-in 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-background text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold mb-2 text-foreground">
                {tier.name}
              </h3>
              
              <div className="mb-4">
                <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
              </div>
              
              <p className="text-sm text-muted-foreground mb-6">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${tier.highlighted ? 'bg-primary hover:bg-primary-dark' : ''}`}
                variant={tier.highlighted ? 'default' : 'outline'}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Sponsored anchoring note */}
        <div className="mt-12 text-center p-6 rounded-xl border border-border/50 bg-card/30">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Sponsored Anchoring:</strong> Running a pilot or non-profit project? 
            Contact us about sponsored Bitcoin anchoring for qualifying use cases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
