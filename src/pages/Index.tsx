import { useRef } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const Index = () => {
  const waitlistRef = useRef<HTMLElement>(null);

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Hero onJoinWaitlist={scrollToWaitlist} />
      <Features />
      <WaitlistForm id="waitlist" />
      <Footer />
    </div>
  );
};

export default Index;
