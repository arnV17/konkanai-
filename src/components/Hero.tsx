
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ocean-500 to-forest-500">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=3648&auto=format&fit=crop')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-500/80 to-ocean-500/80" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-sunset-500 rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-golden-500 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-sunset-500 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-cream-500 mb-2 tracking-wide">
            Konkanai
          </h1>
          <div className="w-24 h-1 bg-sunset-500 mx-auto rounded-full" />
        </div>
        
        {/* Main Headline */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Discover Maharashtra's
          <span className="block text-sunset-500">Hidden Gems Responsibly</span>
        </h2>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-cream-500 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Authentic ecotourism experiences that preserve nature and empower local communities in the beautiful Konkan region
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-sunset-500 hover:bg-sunset-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Plan Your Sustainable Journey
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-cream-500 text-cream-500 hover:bg-cream-500 hover:text-forest-500 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
          >
            Learn Our Impact
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-cream-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
