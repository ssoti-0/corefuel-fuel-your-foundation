import logo from "@/assets/corefuel-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <img 
            src={logo} 
            alt="CoreFuel" 
            className="h-10"
          />
          <p className="font-body text-muted-foreground text-center max-w-md">
            Premium high-protein frozen meals built for people who live with purpose.
          </p>
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} CoreFuel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
