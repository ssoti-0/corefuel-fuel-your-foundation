import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import PromiseSection from "@/components/PromiseSection";
import StorySection from "@/components/StorySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <PromiseSection />
      <StorySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
