import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      
      {/* Orange accent glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 tracking-tight">
          Fuel your foundation.
        </h1>
        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
          High-protein meals built for real performance — launching soon.
        </p>
        <Button 
          onClick={scrollToCTA}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-10 py-6 text-lg shadow-glow hover:shadow-glow hover:scale-105 transition-all group"
        >
          Join Early Access
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
