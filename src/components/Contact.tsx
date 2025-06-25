
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-ocean-500 to-forest-500 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your
            <span className="block text-sunset-500">Eco-Adventure Today</span>
          </h2>
          <p className="text-xl text-cream-500/90 max-w-3xl mx-auto leading-relaxed">
            Join us in exploring Maharashtra's natural wonders while making a positive impact on local communities and the environment
          </p>
          <div className="w-24 h-1 bg-sunset-500 mx-auto mt-6 rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-sunset-500 mb-6">Plan Your Journey</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cream-500 text-sm font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-cream-500/50 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-cream-500 text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-cream-500/50 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-cream-500 text-sm font-medium mb-2">Preferred Experience</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent">
                    <option value="">Choose an experience</option>
                    <option value="coastal">Coastal Adventures</option>
                    <option value="mountain">Mountain Escapes</option>
                    <option value="cultural">Cultural Immersion</option>
                    <option value="wildlife">Wildlife Conservation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-cream-500 text-sm font-medium mb-2">Travel Dates</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-cream-500/50 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
                    placeholder="Flexible / Specific dates"
                  />
                </div>
                
                <div>
                  <label className="block text-cream-500 text-sm font-medium mb-2">Group Size</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-cream-500/50 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
                    placeholder="Number of travelers"
                  />
                </div>
                
                <div>
                  <label className="block text-cream-500 text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-cream-500/50 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your interests and any special requirements..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-sunset-500 hover:bg-sunset-600 text-white py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-sunset-500 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sunset-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cream-500">Visit Our Office</h4>
                    <p className="text-cream-500/80">Konkan Tourism Hub, Ratnagiri, Maharashtra 415612</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sunset-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cream-500">Call Us</h4>
                    <p className="text-cream-500/80">+91 9876543210</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-sunset-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cream-500">Email Us</h4>
                    <p className="text-cream-500/80">hello@konkanai.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Facts */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-sunset-500 mb-4">Why Choose Konkanai?</h4>
              <ul className="space-y-3 text-cream-500/90">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-sunset-500 rounded-full"></span>
                  <span>Small groups (max 8 travelers)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-sunset-500 rounded-full"></span>
                  <span>Carbon-neutral experiences</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-sunset-500 rounded-full"></span>
                  <span>75% profits to local communities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-sunset-500 rounded-full"></span>
                  <span>Expert local guides</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-sunset-500 rounded-full"></span>
                  <span>Zero waste commitment</span>
                </li>
              </ul>
            </div>
            
            {/* Newsletter Signup */}
            <div className="bg-sunset-500/20 backdrop-blur-md border border-sunset-500/30 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-sunset-500 mb-4">Conservation Updates</h4>
              <p className="text-cream-500/90 mb-4">Join our community and get monthly updates on our conservation projects and new sustainable experiences.</p>
              <div className="flex space-x-3">
                <input 
                  type="email" 
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-cream-500/50 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:border-transparent"
                  placeholder="Your email"
                />
                <Button className="bg-sunset-500 hover:bg-sunset-600 text-white px-6 py-3 rounded-lg font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
