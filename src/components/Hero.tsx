import { useContext } from "react";
import { Component as Button4 } from "@/components/ui/button-4";
import { ArrowDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import WildlifeBackground, { ParallaxContext } from "./WildlifeBackground";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { scrollY } = useContext(ParallaxContext);
  const navigate = useNavigate();

  return (
    <>
    <WildlifeBackground>
      {/* Fixed Konkanai Logo - disappears after scrolling */}
      <Link
        to="/"
        className={`fixed top-6 left-6 z-50 text-2xl font-bold text-cream-500 hover:text-sunset-500 transition-all duration-300 animate-fade-in ${
          scrollY > 500 ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{ animationDelay: '0.2s' }}
      >
        Konkanai
      </Link>
      {/* Navigation Bar */}
      <nav className="relative z-20 w-full px-4 py-6">
        <div className="container mx-auto flex items-center">
          {/* Logo removed from here */}
        </div>
      </nav>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-sunset-500 rounded-full animate-float opacity-60" />
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-golden-500 rounded-full animate-float opacity-40"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-2 h-2 bg-sunset-500 rounded-full animate-float opacity-50"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Hero Content */}
        <div className="relative z-[9999] pointer-events-auto flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        {/* Headline */}
        <h2
          className="mt-28 text-4xl md:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in"
          style={{ 
            transform: `translateY(${scrollY * 0.12}px)`,
            animationDelay: '0.3s'
          }}
        >
          Experience Authentic<br />
          <span className="text-sunset-500">Malvani Culture Amidst Nature</span>
        </h2>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl font-semibold text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed drop-shadow-md mt-6 animate-fade-in"
          style={{ 
            transform: `translateY(${scrollY * 0.18}px)`,
            animationDelay: '0.7s'
          }}
        >
          Discover the Konkan coast through immersive journeys that honor tradition, uplift local lives,
          and protect the wild beauty of our homeland.
        </p>

          {/* Contact Us and Explore Buttons */}
          <div className="mt-8 relative w-full flex justify-center z-[9999] pointer-events-auto gap-4">
            <div onClick={() => navigate('/gallery')} className="cursor-pointer">
              <Button4 label="Explore" color="green" />
            </div>
            <div onClick={() => navigate('/contact')} className="cursor-pointer">
              <Button4 label="Contact" color="red" />
        </div>
        </div>
      </div>
    </WildlifeBackground>
    </>
  );
};

export default Hero;
