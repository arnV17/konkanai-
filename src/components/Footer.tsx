
import { Button } from "@/components/ui/button";
import { Facebook, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest-500 text-cream-500 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-3xl font-bold text-sunset-500 mb-4">Konkanai</h3>
            <p className="text-cream-500/80 mb-4 leading-relaxed">
              Sustainable ecotourism experiences in Maharashtra's beautiful Konkan region, preserving nature and empowering communities.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="w-12 h-12 bg-sunset-500 border-sunset-500 text-white hover:bg-sunset-600 hover:border-sunset-600 transition-all duration-200 hover:scale-105">
                <Facebook size={18} aria-hidden="true" />
              </Button>
              <Button variant="outline" size="icon" className="w-12 h-12 bg-sunset-500 border-sunset-500 text-white hover:bg-sunset-600 hover:border-sunset-600 transition-all duration-200 hover:scale-105">
                <Instagram size={18} aria-hidden="true" />
              </Button>
              <Button variant="outline" size="icon" className="w-12 h-12 bg-sunset-500 border-sunset-500 text-white hover:bg-sunset-600 hover:border-sunset-600 transition-all duration-200 hover:scale-105">
                <Youtube size={18} aria-hidden="true" />
              </Button>
            </div>
          </div>
          
          {/* Experiences */}
          <div>
            <h4 className="text-lg font-semibold text-sunset-500 mb-4">Experiences</h4>
            <ul className="space-y-2 text-cream-500/80">
              <li><a href="#" className="hover:text-sunset-500 transition-colors">Coastal Adventures</a></li>
              <li><a href="#" className="hover:text-sunset-500 transition-colors">Mountain Escapes</a></li>
              <li><a href="#" className="hover:text-sunset-500 transition-colors">Cultural Immersion</a></li>
              <li><a href="#" className="hover:text-sunset-500 transition-colors">Wildlife Conservation</a></li>
              <li><a href="#" className="hover:text-sunset-500 transition-colors">Photography Tours</a></li>
            </ul>
          </div>
          
          {/* Sustainability */}
          <div>
            <h4 className="text-lg font-semibold text-sunset-500 mb-4">Sustainability</h4>
            <ul className="space-y-2 text-cream-500/80">
              <li><a href="#" className="hover:text-sunset-500 transition-colors">Our Impact</a></li>
              <li><a href="#" className="hover:text-sunset-500 transition-colors">Conservation Projects</a></li>
              <li><a href="#" className="hover:text-sunset-500 transition-colors">Community Programs</a></li>
              <li><a href="#" className="hover:text-sunset-500 transition-colors">Carbon Neutral Travel</a></li>
              <li><a href="#" className="hover:text-sunset-500 transition-colors">Certifications</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-sunset-500 mb-4">Support</h4>
            <ul className="space-y-2 text-cream-500/80">
              <li><a href="#" className="hover:text-sunset-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-sunset-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-sunset-500 transition-colors">Booking Policy</a></li>
              <li><a href="#" className="hover:text-sunset-500 transition-colors">Travel Guidelines</a></li>
              <li><a href="#" className="hover:text-sunset-500 transition-colors">Safety Protocols</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-cream-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-500/60 text-sm mb-4 md:mb-0">
            © 2024 Konkanai Ecotourism. All rights reserved. Made with 💚 for Maharashtra.
          </p>
          <div className="flex space-x-6 text-sm text-cream-500/60">
            <a href="#" className="hover:text-sunset-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sunset-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-sunset-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
