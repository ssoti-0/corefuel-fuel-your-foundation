import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const CTASection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter both your name and email.",
        variant: "destructive",
      });
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Welcome to CoreFuel! 🔥",
        description: "You're on the list. We'll be in touch soon with exclusive updates.",
      });
      setName("");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="cta-section" className="py-24 md:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Orange accent glow */}
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-2xl text-center relative z-10">
        <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-in">
          Be part of the CoreFuel launch.
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-12 animate-fade-in">
          Get exclusive updates and early access to our first drop.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4 animate-scale-in">
          <Input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-card border-border text-foreground placeholder:text-muted-foreground font-body h-12 text-lg"
          />
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-card border-border text-foreground placeholder:text-muted-foreground font-body h-12 text-lg"
          />
          <Button 
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-10 py-6 text-lg shadow-glow hover:shadow-glow transition-all"
          >
            <Mail className="mr-2 h-5 w-5" />
            {isSubmitting ? "Joining..." : "Join Early Access"}
          </Button>
        </form>
        
        <p className="font-body text-sm text-muted-foreground mt-6">
          No spam. Just premium updates and early access offers.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
