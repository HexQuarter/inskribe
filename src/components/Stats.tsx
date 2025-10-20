import { Users, BookOpen, Shield, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1000+",
    label: "Creators Waiting",
  },
  {
    icon: BookOpen,
    value: "∞",
    label: "Years of Permanence",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Decentralized",
  },
  {
    icon: TrendingUp,
    value: "0%",
    label: "Platform Fees",
  },
];

const Stats = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative text-center"
              style={{
                animation: 'fade-in 0.8s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              {/* Glow on hover */}
              <div className="absolute -inset-1 bg-gradient-bitcoin opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative p-8 rounded-2xl glass-effect shadow-glass hover:shadow-soft transition-all duration-300 group-hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent mb-4 group-hover:shadow-glow transition-all duration-300">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                
                <div className="text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
