import { BookOpen, Newspaper, Building2, Users } from "lucide-react";

const useCases = [
  {
    icon: BookOpen,
    title: "Authors & Publishers",
    description: "Register manuscripts, editions, and revisions with verifiable timestamps. Protect your intellectual property from the moment of creation.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Newspaper,
    title: "Journalists & Media",
    description: "Anchor articles and reports on-chain to prove publication time and original content. Combat misinformation with cryptographic proof.",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    icon: Building2,
    title: "Research & Academia",
    description: "Timestamp research papers, datasets, and findings on Bitcoin. Establish priority and protect against plagiarism permanently.",
    gradient: "from-orange-600 to-orange-400",
  },
  {
    icon: Users,
    title: "Creative Networks",
    description: "White-label Inskribe for your community. Offer branded authorship verification to writers, artists, and content creators.",
    gradient: "from-orange-500 to-amber-500",
  },
];

const UseCases = () => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Built For Everyone</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Who <span className="text-gradient">Benefits</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From individual creators to enterprise publishers, Inskribe protects what matters most
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: 'fade-in 0.8s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              {/* Hover glow */}
              <div className="absolute -inset-1 bg-gradient-bitcoin opacity-0 group-hover:opacity-25 blur-xl rounded-2xl transition-all duration-500" />

              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl glass-effect shadow-glass hover:shadow-glow transition-all duration-500 group-hover:-translate-y-1">
                {/* Icon with gradient */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.gradient} mb-5 shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
