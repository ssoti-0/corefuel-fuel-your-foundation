import { Flame, Clock, Target } from "lucide-react";

const PromiseSection = () => {
  const features = [
    {
      icon: Flame,
      title: "High Protein",
      description: "40g+ per meal",
      detail: "Premium protein sources for muscle recovery and sustained energy"
    },
    {
      icon: Clock,
      title: "Fast Prep",
      description: "Ready in 6 minutes",
      detail: "From freezer to table in minutes, not hours"
    },
    {
      icon: Target,
      title: "Balanced Nutrition",
      description: "Optimized macros",
      detail: "Performance-grade nutrition designed by experts"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-center text-foreground mb-16">
          Real food. Built strong.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-heading font-semibold text-primary text-lg mb-4">
                {feature.description}
              </p>
              <p className="font-body text-muted-foreground">
                {feature.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
