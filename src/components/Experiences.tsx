import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ParallaxContext } from "./WildlifeBackground";

const experiences = [
  {
    title: "Agricultural Activities",
    description: "Engage with local farmers, learn traditional farming methods, and experience organic cultivation techniques that sustain rural livelihoods.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=7360&auto=format&fit=crop",
    highlights: ["Turtle Conservation", "Sustainable Fishing", "Beach Restoration"]
  },
  {
    title: "Jungle Trail",
    description: "Embark on an exhilarating trek through the dense Sahyadri ranges, explore hidden waterfalls, and interact with indigenous tribes living in harmony with nature.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3506&auto=format&fit=crop",
    highlights: ["Sahyadri Trekking", "Waterfall Photography", "Tribal Heritage"]
  },
  {
    title: "Butterfly Trail",
    description: "Wander through lush butterfly gardens and forest patches where you’ll observe rare and endemic butterfly species and learn about their ecological importance.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=6000&auto=format&fit=crop",
    highlights: ["Butterfly Watching", "Nature Interpretation", "Eco-learning Walks"]
  },
  {
    title: "Birdwatching Trail",
    description: "Join expert-led trails to spot migratory and native birds in serene mangroves and forest habitats, ideal for photographers and birding enthusiasts.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=6000&auto=format&fit=crop",
    highlights: ["Wetland Birds", "Migratory Species", "Guided Walks"]
  },
  {
    title: "Heritage Home",
    description: "Stay in beautifully preserved traditional Konkan houses, enjoy authentic hospitality, and immerse yourself in regional architecture, cuisine, and customs.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=6000&auto=format&fit=crop",
    highlights: ["Konkan Architecture", "Local Cuisine", "Village Lifestyle"]
  },
  {
    title: "Mangrove Trail",
    description: "Paddle or walk through peaceful mangrove forests, learn about their role in coastal protection, and witness the incredible biodiversity they support.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=3634&auto=format&fit=crop",
    highlights: ["Mangrove Ecology", "Bird Watching", "Wildlife Photography"]
  },
  {
    title: "Authentic Malvani Cuisine",
    description: "Participate in hands-on cooking sessions to master age-old Malvani recipes, explore spice gardens, and savor home-cooked meals with coastal flavors.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=6000&auto=format&fit=crop",
    highlights: ["Cooking Classes", "Spice Tours", "Seafood Tastings"]
  },
  {
    title: "Cultural Events",
    description: "Celebrate the region’s rich heritage through lively folk performances, traditional dances, and community festivals that reflect Konkan’s unique spirit.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=6000&auto=format&fit=crop",
    highlights: ["Folk Music", "Dance Performances", "Seasonal Festivals"]
  },
];



const Experiences = () => {
  const { scrollY } = useContext(ParallaxContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ type: 'tween', duration: 0.5, ease: 'easeOut' }}
      className="py-20 bg-beige-500"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-forest-500 mb-6"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            Authentic Experiences
          </motion.h2>
          <motion.p
            className="text-xl text-forest-500/80 max-w-3xl mx-auto leading-relaxed"
            style={{ transform: `translateY(${scrollY * 0.12}px)` }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.08 }}
          >
            Discover the true essence of Maharashtra through sustainable adventures that benefit both nature and local communities
          </motion.p>
          <div className="w-24 h-1 bg-sunset-500 mx-auto mt-6 rounded-full" />
        </div>
        
        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {experiences.map((experience, index) => (
            <Card key={index} className="group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.1 }}
              >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  loading="lazy"
                  decoding="async"
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
                  {experience.title === "Wildlife Conservation" ? (
                    <Link to="/wildlife">Explore {experience.title}</Link>
                  ) : (
                    `Explore ${experience.title}`
                  )}
                </Button>
              </CardContent>
              </motion.div>
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
    </motion.section>
  );
};

export default Experiences;
