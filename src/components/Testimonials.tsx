
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    text: "The turtle conservation program was life-changing. Seeing baby turtles return to the sea while knowing our visit directly funded their protection was magical.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
    experience: "Coastal Conservation"
  },
  {
    name: "Rajesh Patel",
    location: "Pune, Maharashtra", 
    text: "Staying with a local family in the Sahyadri mountains opened our eyes to sustainable living. The community's warmth and wisdom was incredible.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
    experience: "Mountain Homestay"
  },
  {
    name: "Sarah Johnson",
    location: "London, UK",
    text: "As a wildlife photographer, this was the most ethical tour I've experienced. Every shot contributed to conservation efforts and community development.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
    experience: "Wildlife Photography"
  }
];

const communityTestimonials = [
  {
    name: "Ashok Kamble",
    role: "Local Guide, Ratnagiri",
    text: "Konkanai has transformed our village. My family now has steady income, and we're proud to share our culture while protecting our environment."
  },
  {
    name: "Sunita Jadhav", 
    role: "Artisan, Sindhudurg",
    text: "Teaching visitors traditional crafts has revived our dying art forms. Young people in our community are interested in learning again."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-cream-500">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-500 mb-6">
            Stories of Impact
          </h2>
          <p className="text-xl text-forest-500/80 max-w-3xl mx-auto leading-relaxed">
            Hear from travelers and local communities about the transformative power of responsible tourism
          </p>
          <div className="w-24 h-1 bg-sunset-500 mx-auto mt-6 rounded-full" />
        </div>
        
        {/* Traveler Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-forest-500 text-center mb-12">Traveler Experiences</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-forest-500 text-lg">{testimonial.name}</h4>
                      <p className="text-forest-500/60 text-sm">{testimonial.location}</p>
                      <span className="inline-block mt-1 px-3 py-1 bg-ocean-500/10 text-ocean-500 text-xs font-medium rounded-full">
                        {testimonial.experience}
                      </span>
                    </div>
                  </div>
                  <p className="text-forest-500/80 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Community Testimonials */}
        <div className="bg-forest-500 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">Community Voices</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {communityTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-ocean-500/20 backdrop-blur-sm p-8 rounded-2xl border border-cream-500/20">
                <p className="text-cream-500/90 leading-relaxed italic mb-6">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-cream-500/20 pt-4">
                  <h4 className="font-bold text-sunset-500 text-lg">{testimonial.name}</h4>
                  <p className="text-cream-500/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
