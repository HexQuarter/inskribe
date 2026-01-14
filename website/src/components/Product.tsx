import { Code, Cloud, Terminal, Building2, CheckCircle } from "lucide-react";

const products = [
  {
    icon: Cloud,
    title: "SaaS Dashboard",
    description: "Web interface for teams. Upload, segment, seal, and manage Proof Packets without writing code.",
    features: ["Team workspaces", "Batch operations", "Verification portal"]
  },
  {
    icon: Code,
    title: "REST API",
    description: "Programmatic access to all Inskribe capabilities. Integrate provenance into your existing workflows.",
    features: ["OpenAPI spec", "Webhooks", "Rate limits by tier"]
  },
  {
    icon: Terminal,
    title: "CLI & SDK",
    description: "Command-line tool and language SDKs for developers. TypeScript, Python, Go available.",
    features: ["TypeScript SDK", "Python SDK", "Go SDK"]
  },
  {
    icon: Building2,
    title: "White-Label Tenant",
    description: "Deploy Inskribe under your brand. Custom domain, theming, and isolated data tenancy.",
    features: ["Custom branding", "Isolated tenancy", "SLA & priority support"]
  }
];

const Product = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Flexible Integration
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SaaS for quick starts. API for automation. White-label for enterprises.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
              style={{
                animation: 'fade-in 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <product.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="text-lg font-bold mb-2 text-foreground">
                {product.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {product.description}
              </p>

              <ul className="space-y-1.5">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
