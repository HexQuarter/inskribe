import { useRef } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onJoinWaitlist={scrollToWaitlist} />
      <Stats />
      <Features />
      <WaitlistForm id="waitlist" />
      <Footer />
    </div>
  );
};

export default Index;
