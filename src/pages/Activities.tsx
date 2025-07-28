// src/pages/Activities.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Image as GalleryIcon, Briefcase, Mail } from "lucide-react";

// Activities list
const activities = [
  {
    title: "Explore Untouched Beaches",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Forts & Heritage Sites",
    image: "https://images.unsplash.com/photo-1603015449628-19f299b32cc9?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Ancient Temple Tours",
    image: "https://images.unsplash.com/photo-1616051033545-fd0d3fdcb451?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Agricultural Activities",
    image: "https://images.unsplash.com/photo-1616331526486-6f0877ec4b7d?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Heritage Home Walk",
    image: "https://images.unsplash.com/photo-1631624214718-c4d791d305f6?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Cultural Activities",
    image: "https://images.unsplash.com/photo-1604151709798-86b042a3718a?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Bird Watching",
    image: "https://images.unsplash.com/photo-1516569422863-af1c1c9f50d2?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Butterfly Trail (40+ species)",
    image: "https://images.unsplash.com/photo-1506224774227-231b4fa01770?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Jungle Trails",
    image: "https://images.unsplash.com/photo-1559599101-730fae5b1577?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "River Trails",
    image: "https://images.unsplash.com/photo-1579033461380-1ffcf47267a5?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Kayaking in Backwaters",
    image: "https://images.unsplash.com/photo-1514474959185-dab031c4fd38?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Mangrove Backwater Safari",
    image: "https://images.unsplash.com/photo-1572347074865-2e574d4b8b9d?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Watersports",
    image: "https://images.unsplash.com/photo-1533115078665-b7df8e52c4d8?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Bonfire with Camping",
    image: "https://images.unsplash.com/photo-1581338834647-b89c84f4b10f?q=80&w=1920&auto=format&fit=crop"
  },
  {
    title: "Delicious Malvani Food",
    image: "https://images.unsplash.com/photo-1633606093640-798a43e20700?q=80&w=1920&auto=format&fit=crop"
  }
];
const navItems = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'About', url: '/about', icon: User },
  { name: 'Gallery', url: '/gallery', icon: GalleryIcon },
  { name: 'Activities', url: '/activities', icon: Briefcase },
  { name: 'Contact', url: '/contact', icon: Mail }
];

// Activity showcase
function ActivityShowcase({ title, image }: { title: string; image: string }) {
  const [showImage, setShowImage] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Clamp image position to stay within viewport
  const imageWidth = 600*1.25;
  const imageHeight = 300*1.25;
  const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(val, max));
  const left = clamp(mousePos.x + 30, 0, window.innerWidth - imageWidth - 30);
  const top = clamp(mousePos.y - imageHeight / 2, 0, window.innerHeight - imageHeight);

  return (
    <div
      className="relative flex flex-row items-center justify-start gap-0 w-full max-w-5xl mx-auto my-16 px-4 cursor-pointer"
      onMouseEnter={() => setShowImage(true)}
      onMouseLeave={() => setShowImage(false)}
      onMouseMove={e => {
        setMousePos({ x: e.clientX, y: e.clientY });
      }}
    >
      {/* Title aligned left, bold, slightly smaller */}
      <div
        className="text-left font-extrabold text-4xl md:text-5xl text-cream-500 w-full md:w-2/3 select-none"
        style={{ lineHeight: 1.1 }}
      >
        {title}
      </div>
      {/* Popup image follows the cursor, absolutely positioned relative to main container */}
      {showImage && (
        <img
          src={image}
          alt={title}
          className="fixed object-cover rounded-2xl shadow-2xl transition-all duration-300 z-50 pointer-events-none"
          style={{
            width: imageWidth,
            height: imageHeight,
            left,
            top,
          }}
        />
      )}
    </div>
  );
}

// Main Activities page
const Activities = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-blue-800 flex flex-col items-center min-h-[100vh] h-auto pb-[100vh]">
      {/* Back to Home link aligned with NavBar */}
      <div className="w-full px-4">
        <div className="container mx-auto">
          <Link
            to="/"
            className="flex items-center text-cream-100  text-xl hover:underline mt-6"
          >
            <span className="mr-2">←</span> Back to Home
          </Link>
        </div>
      </div>
      {/* Tubelight NavBar at the top */}
      <NavBar items={navItems} />
      
      <div className="flex flex-col gap-8 items-center w-full mt-32">
        {activities.map((activity) => (
          <ActivityShowcase key={activity.title} title={activity.title} image={activity.image} />
        ))}
      </div>
    </div>
  );
};

export default Activities;
