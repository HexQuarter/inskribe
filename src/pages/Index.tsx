import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Product from "@/components/Product";
import TrustSecurity from "@/components/TrustSecurity";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToDemo = () => {
    // For now, scroll to CTA section. Later can be replaced with a modal or Calendly
    document.getElementById('cta')?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onBookDemo={scrollToDemo} />
      <Problem />
      <Solution />
      <UseCases />
      <HowItWorks />
      <Product />
      <TrustSecurity />
      <Pricing />
      <FAQ />
      <div id="cta">
        <CTA onBookDemo={scrollToDemo} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;