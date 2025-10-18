import { Button } from "@/components/ui/button";
import logo from "@/assets/corefuel-logo.png";

const Header = () => {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <img 
          src={logo} 
          alt="CoreFuel" 
          className="h-8 md:h-10"
        />
        <Button 
          onClick={scrollToCTA}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-6 py-2 shadow-glow transition-all"
        >
          Join Early Access
        </Button>
      </div>
    </header>
  );
};

export default Header;
