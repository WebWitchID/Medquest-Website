import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { PhoneCarousel } from "@/components/PhoneCarousel";
import { Features } from "@/components/Features";
import { Gamification } from "@/components/Gamification";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PhoneCarousel />
      <Features />
      <Gamification />
      <Footer />
    </div>
  );
};

export default Index;
