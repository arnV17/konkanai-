import { Home, User, Image, Briefcase, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Cursor } from "@/components/ui/cursor";
import { AnimatePresence, motion } from "framer-motion";
import React from 'react';
import Component from '@/components/ui/sticky-scroll';
import { Component as Button4 } from '@/components/ui/button-4';
import { Button } from "@/components/ui/button"

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

function ComponentDemo() {
  return (
    <Component />
  );
}

export { ComponentDemo as DemoOne };

export function Button4Demo() {
  return <Button4 />;
}

const Default = () => (
    <Button>Button</Button>
)
const Reverse = () => (
    <Button variant="reverse">Reverse</Button>
)
const NoShadow = () => (
    <Button variant="noShadow">No Shadow</Button>
)
const Neutral = () => (
    <Button variant="neutral">Neutral</Button>
)

export {
    Default,
    Reverse,
    NoShadow,
    Neutral
} 