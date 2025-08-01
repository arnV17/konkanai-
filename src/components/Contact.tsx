
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-cream-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-forest-600 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to explore the beautiful Konkan region? Contact us to plan your sustainable adventure or learn more about our eco-tourism experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-forest-600">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" className="border-gray-300 focus:border-sunset-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" className="border-gray-300 focus:border-sunset-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" className="border-gray-300 focus:border-sunset-500" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 98765 43210" className="border-gray-300 focus:border-sunset-500" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                <Input id="subject" placeholder="What's this about?" className="border-gray-300 focus:border-sunset-500" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your travel plans, questions, or any special requirements..."
                  className="min-h-[120px] border-gray-300 focus:border-sunset-500 resize-none"
                />
              </div>
              
              <Button className="w-full bg-sunset-500 hover:bg-sunset-600 text-white font-semibold py-3">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information & Social Media */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-forest-600">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-sunset-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-sunset-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">hello@konkanai.com</p>
                    <p className="text-gray-600">bookings@konkanai.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-sunset-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-sunset-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 87654 32109</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-sunset-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-sunset-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Office</h4>
                    <p className="text-gray-600">Konkanai Ecotourism</p>
                    <p className="text-gray-600">Maharashtra, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-forest-600">Follow Us</CardTitle>
                <p className="text-gray-600">Stay updated with our latest adventures and eco-tourism initiatives</p>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-14 h-14 bg-sunset-500 border-sunset-500 text-white hover:bg-sunset-600 hover:border-sunset-600 transition-all duration-200 hover:scale-105"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook size={24} aria-hidden="true" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-14 h-14 bg-sunset-500 border-sunset-500 text-white hover:bg-sunset-600 hover:border-sunset-600 transition-all duration-200 hover:scale-105"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram size={24} aria-hidden="true" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="w-14 h-14 bg-sunset-500 border-sunset-500 text-white hover:bg-sunset-600 hover:border-sunset-600 transition-all duration-200 hover:scale-105"
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <Youtube size={24} aria-hidden="true" />
                  </Button>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-sunset-50 to-cream-50 rounded-lg border border-sunset-100">
                  <h5 className="font-semibold text-forest-600 mb-2">📸 Share Your Adventure</h5>
                  <p className="text-sm text-gray-600">
                    Tag us @konkanai on social media to share your sustainable travel experiences!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
