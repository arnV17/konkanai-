"use client";

import { Carousel3D } from "@/components/ui/carousel-3d";

export function Carousel3DDemo() {
  const slideData = [
    {
      title: "Agricultural Activities",
      subtitle: "Engage with local farmers, learn traditional farming methods, and experience organic cultivation techniques that sustain rural livelihoods.",
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=7360&auto=format&fit=crop",
    },
    {
      title: "Jungle Trail",
      subtitle: "Embark on an exhilarating trek through the dense Sahyadri ranges, explore hidden waterfalls, and interact with indigenous tribes living in harmony with nature.",
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3506&auto=format&fit=crop",
    },
    {
      title: "Butterfly Trail",
      subtitle: "Wander through lush butterfly gardens and forest patches where you’ll observe rare and endemic butterfly species and learn about their ecological importance.",
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=6000&auto=format&fit=crop",
    },
    {
      title: "Birdwatching Trail",
      subtitle: "Join expert-led trails to spot migratory and native birds in serene mangroves and forest habitats, ideal for photographers and birding enthusiasts.",
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=6000&auto=format&fit=crop",
    },
    {
      title: "Heritage Home",
      subtitle: "Stay in beautifully preserved traditional Konkan houses, enjoy authentic hospitality, and immerse yourself in regional architecture, cuisine, and customs.",
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=6000&auto=format&fit=crop",
    },
    {
      title: "Mangrove Trail",
      subtitle: "Paddle or walk through peaceful mangrove forests, learn about their role in coastal protection, and witness the incredible biodiversity they support.",
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=3634&auto=format&fit=crop",
    },
    {
      title: "Authentic Malvani Cuisine",
      subtitle: "Participate in hands-on cooking sessions to master age-old Malvani recipes, explore spice gardens, and savor home-cooked meals with coastal flavors.",
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=6000&auto=format&fit=crop",
    },
    {
      title: "Cultural Events",
      subtitle: "Celebrate the region’s rich heritage through lively folk performances, traditional dances, and community festivals that reflect Konkan’s unique spirit.",
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=6000&auto=format&fit=crop",
    },
  ];
  
  
  return (
    <div className="relative overflow-hidden w-full h-full py-20 bg-[#FFF9E5]">

      <Carousel3D slides={slideData} />
    </div>
  );
} 