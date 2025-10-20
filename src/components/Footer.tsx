const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-bitcoin bg-clip-text text-transparent">
              Inskribe
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Inskribe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
