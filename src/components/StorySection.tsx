const StorySection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 animate-fade-in">
          We're in development — and you can shape it.
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in">
          We're working with chefs and nutritionists to build the ultimate performance meal experience. Join the community to get early access, updates, and taste-test invites.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left">
          <div className="bg-background border border-border rounded-lg p-6 animate-scale-in">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
              Shape the Menu
            </h3>
            <p className="font-body text-muted-foreground">
              Vote on flavors, proteins, and meal types as we develop our first product line.
            </p>
          </div>
          
          <div className="bg-background border border-border rounded-lg p-6 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
              Exclusive Pricing
            </h3>
            <p className="font-body text-muted-foreground">
              Early access members get special launch pricing and first dibs on new releases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
