import { NavBarDemo } from "@/components/ui/demo"
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Sustainability from "@/components/Sustainability";
import Testimonials from "@/components/Testimonials";
import { Carousel3DDemo } from "@/components/ui/carousel-3d-demo";
import { VideoExpansion } from "@/components/ui/scroll-expansion-demo";

import Footer from "@/components/Footer";
import { ParallaxContext } from "@/components/WildlifeBackground";
import { useContext } from "react";
import Contact from "./Contact"

const Index = () => {
  useContext(ParallaxContext); // Just to ensure context is available if needed
  return (
    <div className="min-h-screen">
      <NavBarDemo />
      <div>
        <VideoExpansion />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Carousel3DDemo />
      </div>
      <div>
        <Sustainability />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
