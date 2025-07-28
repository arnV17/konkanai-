import { NavBarDemo } from "@/components/ui/demo"
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Sustainability from "@/components/Sustainability";
import Testimonials from "@/components/Testimonials";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ParallaxContext } from "@/components/WildlifeBackground";
import { useContext } from "react";
import Contact from "./Contact"
import Explore from "./Explore";

const sectionAnim = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { type: 'tween', duration: 0.4, ease: 'easeOut', delay: delay * 0.4 } as const
});

const Index = () => {
  useContext(ParallaxContext); // Just to ensure context is available if needed
  return (
    <div className="min-h-screen">
      <NavBarDemo />
      <motion.div {...sectionAnim(0)}>
        <Hero />
      </motion.div>
      <motion.div {...sectionAnim(0.000005)}>
        <Experiences />
      </motion.div>
      <motion.div {...sectionAnim(0.1)}>
        <Sustainability />
      </motion.div>
      <motion.div {...sectionAnim(0.15)}>
        <Testimonials />
      </motion.div>
      <motion.div {...sectionAnim(0.2)}>
        <Contact />
      </motion.div>
      <motion.div {...sectionAnim(0.25)}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
