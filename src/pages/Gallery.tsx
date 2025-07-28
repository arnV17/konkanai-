import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { NavBarDemo } from "@/components/ui/demo";
import { DemoOne } from "@/components/ui/demo";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-500 to-forest-500">
      <NavBarDemo />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-cream-500 hover:text-sunset-500 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-cream-500 mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-cream-500/80 max-w-2xl mx-auto">
            Explore the breathtaking beauty of Maharashtra's Konkan region through our curated collection of sustainable tourism experiences
          </p>
        </div>

        {/* Sticky Scroll Gallery */}
        <div className="mb-12">
          <DemoOne />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-sunset-500 hover:bg-sunset-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Book Your Experience
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery; 