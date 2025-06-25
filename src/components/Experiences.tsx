
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    title: "Coastal Adventures",
    description: "Beach clean-ups, turtle watching, and fishing with local communities along the pristine Konkan coastline.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=7360&auto=format&fit=crop",
    highlights: ["Turtle Conservation", "Sustainable Fishing", "Beach Restoration"]
  },
  {
    title: "Mountain Escapes",
    description: "Trek through the Sahyadri mountains, discover hidden waterfalls, and visit authentic tribal villages.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3506&auto=format&fit=crop",
    highlights: ["Sahyadri Trekking", "Waterfall Photography", "Tribal Heritage"]
  },
  {
    title: "Cultural Immersion",
    description: "Learn traditional cooking, master local handicrafts, and experience authentic folk performances.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=6000&auto=format&fit=crop",
    highlights: ["Cooking Classes", "Handicraft Workshops", "Folk Performances"]
  },
  {
    title: "Wildlife Conservation",
    description: "Participate in bird watching expeditions, forest conservation projects, and nature photography tours.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=3634&auto=format&fit=crop",
    highlights: ["Bird Watching", "Forest Conservation", "Wildlife Photography"]
  }
];

const Experiences = () => {
  return (
    <section className="py-20 bg-beige-500">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-500 mb-6">
            Authentic Experiences
          </h2>
          <p className="text-xl text-forest-500/80 max-w-3xl mx-auto leading-relaxed">
            Discover the true essence of Maharashtra through sustainable adventures that benefit both nature and local communities
          </p>
          <div className="w-24 h-1 bg-sunset-500 mx-auto mt-6 rounded-full" />
        </div>
        
        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {experiences.map((experience, index) => (
            <Card key={index} className="group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-500/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-forest-500/80 mb-4 leading-relaxed">
                  {experience.description}
                </p>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {experience.highlights.map((highlight, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-ocean-500/10 text-ocean-500 text-sm font-medium rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-forest-500 hover:bg-forest-600 text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Explore {experience.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-sunset-500 hover:bg-sunset-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            View All Experiences
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
