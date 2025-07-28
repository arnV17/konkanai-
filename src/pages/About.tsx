import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Image, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { NavBarDemo } from "@/components/ui/demo";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-500 to-forest-500">
      <NavBarDemo />

      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-cream-500 hover:text-sunset-500 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-cream-500 mb-6">
            About Konkanai
          </h1>
          <p className="text-xl text-cream-500/80 max-w-3xl mx-auto">
            [Placeholder text about our mission to provide sustainable ecotourism experiences in Maharashtra's beautiful Konkan region]
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-forest-500/20 backdrop-blur-md border border-cream-500/20">
            <div className="h-96 bg-ocean-500/20 flex items-center justify-center">
              <div className="text-center text-cream-500/60">
                <Image size={64} className="mx-auto mb-4" />
                <p className="text-lg">Hero Image Placeholder</p>
                <p className="text-sm">Beautiful landscape of Konkan coastline</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-cream-500 mb-6">Our Story</h2>
            <p className="text-cream-500/80 mb-4">
              [Placeholder text about how Konkanai was founded and our journey in sustainable tourism]
            </p>
            <p className="text-cream-500/80">
              [More placeholder content about our commitment to preserving the natural beauty of Maharashtra while supporting local communities]
            </p>
          </div>
          <div className="bg-forest-500/20 backdrop-blur-md p-8 rounded-2xl border border-cream-500/20">
            <div className="h-48 bg-cream-500/30 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center text-cream-500/60">
                <Image size={48} className="mx-auto mb-2" />
                <p>Image Placeholder</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-cream-500 mb-2">Our Impact</h3>
            <p className="text-cream-500/70 text-sm">
              [Statistics and achievements placeholder]
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-forest-500/20 backdrop-blur-md text-white p-12 rounded-3xl mb-16 border border-cream-500/20">
          <h2 className="text-3xl font-bold text-center mb-12 text-cream-500">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Sustainability', 'Community', 'Conservation'].map((value, index) => (
              <Card key={index} className="bg-ocean-500/20 border-cream-500/20">
                <CardContent className="p-6 text-center">
                  <div className="h-32 bg-cream-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Image size={32} className="text-cream-500/60" />
                  </div>
                  <h3 className="text-xl font-bold text-sunset-500 mb-2">{value}</h3>
                  <p className="text-cream-500/80 text-sm">
                    [Placeholder description of our {value.toLowerCase()} commitment]
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-cream-500 mb-6">Ready to Explore?</h2>
          <Button 
            size="lg"
            className="bg-sunset-500 hover:bg-sunset-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Link to="/activities">Discover Our Experiences</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About; 