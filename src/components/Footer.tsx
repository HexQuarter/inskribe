import { Bitcoin } from "lucide-react";

import Logo from "../assets/hexquarter_logo_transparent2.png"

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl glass-effect shadow-soft flex items-center justify-center">
              <Bitcoin className="w-6 h-6 text-primary" />
            </div>
            <span className="text-3xl font-bold text-gradient">
              Inskribe
            </span>
          </div>
          
          {/* Links - placeholder for future navigation */}
          {/* <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Docs
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Discord
            </a>
          </div> */}
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Inskribe - <br />by <a href="https://hexquarter.com" target="_blank" rel="noopener noreferrer"><img src={Logo} className="h-[15px] inline"/></a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
