import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Camera, TreePine, Bird, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { NavBarDemo } from "@/components/ui/demo";
import WildlifeBackground from "@/components/WildlifeBackground";

const wildlifeExperiences = [
  {
    title: "Bird Watching Safari",
    description: "Discover over 200 species of birds in the pristine forests of Sahyadri mountains. Expert guides help you spot rare and migratory birds.",
    icon: Bird,
    duration: "4-6 hours",
    difficulty: "Easy",
    highlights: ["Rare Bird Species", "Expert Guides", "Photography Tips", "Conservation Education"]
  },
  {
    title: "Forest Conservation Trek",
    description: "Walk through ancient forests while learning about local flora and fauna. Participate in tree planting and habitat restoration activities.",
    icon: TreePine,
    duration: "6-8 hours",
    difficulty: "Moderate",
    highlights: ["Native Trees", "Wildlife Tracking", "Conservation Work", "Local Knowledge"]
  },
  {
    title: "Wildlife Photography Tour",
    description: "Capture stunning wildlife moments with professional photography guidance. Learn techniques for ethical wildlife photography.",
    icon: Camera,
    duration: "8-10 hours",
    difficulty: "Moderate",
    highlights: ["Professional Guidance", "Ethical Practices", "Equipment Tips", "Best Locations"]
  },
  {
    title: "Eco-Trail Adventure",
    description: "Explore diverse ecosystems from coastal mangroves to mountain forests. Learn about the interconnected web of life in the region.",
    icon: Leaf,
    duration: "5-7 hours",
    difficulty: "Easy-Moderate",
    highlights: ["Ecosystem Diversity", "Local Guides", "Interactive Learning", "Sustainable Practices"]
  }
];

const wildlifeSpecies = [
  {
    name: "Indian Hornbill",
    habitat: "Forest Canopy",
    status: "Near Threatened",
    bestTime: "Monsoon Season"
  },
  {
    name: "Malabar Giant Squirrel",
    habitat: "Dense Forests",
    status: "Vulnerable",
    bestTime: "Early Morning"
  },
  {
    name: "King Cobra",
    habitat: "Forest Floor",
    status: "Protected",
    bestTime: "Monsoon Season"
  },
  {
    name: "Indian Pitta",
    habitat: "Forest Undergrowth",
    status: "Least Concern",
    bestTime: "Winter Migration"
  }
];

const Wildlife = () => {
  return (
    <WildlifeBackground>
      <NavBarDemo />

      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-cream-500 hover:text-sunset-500 transition-colors mb-8 relative z-20">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-16 relative z-20">
          <h1 className="text-4xl md:text-6xl font-bold text-cream-500 mb-6">
            Wildlife Adventures
          </h1>
          <p className="text-xl text-cream-500/90 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the rich biodiversity of Maharashtra's Konkan region. 
            Experience wildlife conservation firsthand while supporting local communities.
          </p>
          <div className="w-24 h-1 bg-sunset-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Wildlife Experiences Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 relative z-20">
          {wildlifeExperiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <Card key={index} className="bg-forest-500/20 backdrop-blur-md border border-cream-500/20 hover:bg-forest-500/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-sunset-500/20 rounded-full mr-4">
                      <IconComponent className="w-8 h-8 text-sunset-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-cream-500">{experience.title}</h3>
                      <div className="flex gap-4 text-sm text-cream-500/70">
                        <span>{experience.duration}</span>
                        <span>•</span>
                        <span>{experience.difficulty}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-cream-500/80 mb-6 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {experience.highlights.map((highlight, idx) => (
                      <div key={idx} className="text-sm text-cream-500/70 bg-cream-500/10 px-3 py-1 rounded-full text-center">
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Wildlife Species Section */}
        <div className="mb-16 relative z-20">
          <h2 className="text-3xl font-bold text-center text-cream-500 mb-12">
            Meet Our Wildlife
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wildlifeSpecies.map((species, index) => (
              <Card key={index} className="bg-ocean-500/20 backdrop-blur-md border border-cream-500/20 text-center">
                <CardContent className="p-6">
                  <div className="h-32 bg-gradient-to-br from-sunset-500/20 to-golden-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-cream-500/60 text-lg">{species.name}</span>
                  </div>
                  <h3 className="text-xl font-bold text-sunset-500 mb-2">{species.name}</h3>
                  <div className="space-y-2 text-sm text-cream-500/80">
                    <p><strong>Habitat:</strong> {species.habitat}</p>
                    <p><strong>Status:</strong> {species.status}</p>
                    <p><strong>Best Time:</strong> {species.bestTime}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conservation Impact */}
        <div className="bg-forest-500/20 backdrop-blur-md rounded-2xl p-8 mb-16 relative z-20 border border-cream-500/20">
          <h2 className="text-3xl font-bold text-center text-cream-500 mb-8">
            Conservation Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sunset-500 mb-2">15+</div>
              <div className="text-cream-500 font-semibold mb-2">Protected Species</div>
              <p className="text-cream-500/70 text-sm">Actively monitored and protected through our programs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sunset-500 mb-2">500+</div>
              <div className="text-cream-500 font-semibold mb-2">Hectares Restored</div>
              <p className="text-cream-500/70 text-sm">Forest habitat restored and protected</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sunset-500 mb-2">25+</div>
              <div className="text-cream-500 font-semibold mb-2">Local Guides</div>
              <p className="text-cream-500/70 text-sm">Community members trained as wildlife experts</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center relative z-20">
          <h2 className="text-3xl font-bold text-cream-500 mb-6">
            Ready for Your Wildlife Adventure?
          </h2>
          <p className="text-xl text-cream-500/80 mb-8 max-w-2xl mx-auto">
            Book your sustainable wildlife experience and contribute to conservation efforts while creating unforgettable memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-sunset-500 hover:bg-sunset-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Book Wildlife Tour
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-cream-500 text-cream-500 hover:bg-cream-500 hover:text-forest-500 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Learn About Conservation
            </Button>
          </div>
        </div>
      </div>
    </WildlifeBackground>
  );
};

export default Wildlife; 