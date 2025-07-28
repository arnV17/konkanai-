import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { NavBarDemo } from "@/components/ui/demo";
import { useState } from "react";
import { toast } from "sonner";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email notification using EmailJS or similar service
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          type: 'inquiry'
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-500 to-forest-500">
      <NavBarDemo />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-cream-500 hover:text-sunset-500 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-cream-500 mb-4">
            Contact Us
          </h1>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-forest-500/20 backdrop-blur-md rounded-lg p-8 border border-cream-500/20">
            <h2 className="text-2xl font-semibold text-cream-500 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-cream-500 mb-2 font-medium">First Name</label>
                  <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="bg-forest-500/30 border-cream-500/30 text-cream-500 placeholder-cream-500/50"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-cream-500 mb-2 font-medium">Last Name</label>
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="bg-forest-500/30 border-cream-500/30 text-cream-500 placeholder-cream-500/50"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-cream-500 mb-2 font-medium">Email</label>
                <Input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-forest-500/30 border-cream-500/30 text-cream-500 placeholder-cream-500/50"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-cream-500 mb-2 font-medium">Subject</label>
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-forest-500/30 border-cream-500/30 text-cream-500 placeholder-cream-500/50"
                  placeholder="What can we help you with?"
                />
              </div>
              <div>
                <label className="block text-cream-500 mb-2 font-medium">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-forest-500/30 border-cream-500/30 text-cream-500 placeholder-cream-500/50 min-h-[120px]"
                  placeholder="Tell us about your sustainable tourism needs..."
                />
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                size="lg" 
                className="w-full bg-sunset-500 hover:bg-sunset-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Live Google Map - Full width on large screens */}
            <div className="bg-forest-500/20 backdrop-blur-md rounded-lg p-8 border border-cream-500/20 w-full lg:w-auto mb-4">
              <h2 className="text-2xl font-semibold text-cream-500 mb-6">Our Location</h2>
              <div className="w-full h-48 lg:h-64 rounded-lg overflow-hidden border border-cream-500/20">
                <iframe
                  src="https://www.google.com/maps?q=16.15804887954,73.742916584015&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '100%', minWidth: '100%' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Konkanai Villa Location"
                ></iframe>
              </div>
            </div>
            <div className="bg-forest-500/20 backdrop-blur-md rounded-lg p-8 border border-cream-500/20">
              <h2 className="text-2xl font-semibold text-cream-500 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-sunset-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-cream-500 mb-1">Email</h3>
                    <p className="text-cream-500/80">info@konkanai.com</p>
                    <p className="text-cream-500/80">bookings@konkanai.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-sunset-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-cream-500 mb-1">Phone</h3>
                    <p className="text-cream-500/80">+91 98765 43210</p>
                    <p className="text-cream-500/80">+91 98765 43211</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-sunset-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-cream-500 mb-1">Address</h3>
                    <p className="text-cream-500/80">Konkan Eco Tourism Center</p>
                    <p className="text-cream-500/80">Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 