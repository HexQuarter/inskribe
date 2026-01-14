import { FileCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileCheck className="w-4 h-4 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Inskribe
            </span>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Documentation
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              API Reference
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Contact
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Inskribe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
