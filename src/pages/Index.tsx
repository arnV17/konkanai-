
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Sustainability from "@/components/Sustainability";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Experiences />
      <Sustainability />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
