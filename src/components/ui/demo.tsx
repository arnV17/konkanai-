import { Button } from "@/components/ui/button";
import { Facebook, Github, Youtube, Instagram, Home, User, Image, Briefcase, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Cursor } from "@/components/ui/cursor";
import { AnimatePresence, motion } from "framer-motion";
import React from 'react';
import StickyScrollComponent from '@/components/ui/sticky-scroll';
import { Component as Button4 } from '@/components/ui/button-4';

// Social Media Component
function SocialMediaComponent() {
  return (
    <div className="inline-flex flex-wrap gap-2">
      <Button variant="outline" aria-label="Login with Google" size="icon" className="w-12 h-12 bg-orange-500 border-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 transition-all duration-200 hover:scale-105">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </Button>
      <Button variant="outline" aria-label="Login with Facebook" size="icon" className="w-12 h-12 bg-orange-500 border-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 transition-all duration-200 hover:scale-105">
        <Facebook size={16} aria-hidden="true" />
      </Button>
      <Button variant="outline" aria-label="Login with YouTube" size="icon" className="w-12 h-12 bg-orange-500 border-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 transition-all duration-200 hover:scale-105">
        <Youtube size={16} aria-hidden="true" />
      </Button>
      <Button variant="outline" aria-label="Login with Instagram" size="icon" className="w-12 h-12 bg-orange-500 border-orange-500 text-white hover:bg-orange-600 hover:border-orange-600 transition-all duration-200 hover:scale-105">
        <Instagram size={16} aria-hidden="true" />
      </Button>
    </div>
  );
}

// NavBar Demo Component
export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Gallery', url: '/gallery', icon: Image },
    { name: 'Activities', url: '/activities', icon: Briefcase },
    { name: 'Contact', url: '/contact', icon: Mail }
  ]

  return <NavBar items={navItems} />
}

// Cursor Demo Component
export function CursorWithSpring() {
  return (
    <div>
      <div className="p-4">
        <Cursor
          attachToParent
          variants={{
            initial: { height: 0, opacity: 0, scale: 0.3 },
            animate: { height: "auto", opacity: 1, scale: 1 },
            exit: { height: 0, opacity: 0, scale: 0.3 },
          }}
          transition={{
            type: "spring",
            duration: 0.3,
            bounce: 0.1,
          }}
          className="overflow-hidden"
          springConfig={{
            bounce: 0.01,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Forest"
            className="h-40 w-40"
          />
        </Cursor>
        Forest (Unsplash)
      </div>
    </div>
  );
}

// Sticky Scroll Demo Component
function ComponentDemo() {
  return (
    <StickyScrollComponent />
  );
}

export { ComponentDemo as DemoOne };

// Button4 Demo Component
export function Button4Demo() {
  return <Button4 label="Button 4 Demo" />;
}

// Button Variants Demo Components
const Default = () => (
    <Button>Button</Button>
)
const Reverse = () => (
    <Button variant="secondary">Secondary</Button>
)
const NoShadow = () => (
    <Button variant="ghost">Ghost</Button>
)
const Neutral = () => (
    <Button variant="outline">Outline</Button>
)

export {
    Default,
    Reverse,
    NoShadow,
    Neutral,
    SocialMediaComponent as Component
} 