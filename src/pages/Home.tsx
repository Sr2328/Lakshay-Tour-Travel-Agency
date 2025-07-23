import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Bus, 
  MapPin, 
  Calendar,
  Car,
  Shield,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle
} from 'lucide-react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: Building2,
      title: 'Staff Transport',
      description: 'Reliable daily pickup and drop services for your employees with punctual and comfortable rides.'
    },
    {
      icon: Bus,
      title: 'Corporate Travel',
      description: 'Premium fleet rentals for corporate events, meetings, and business travel requirements.'
    },
    {
      icon: MapPin,
      title: 'All-India Tours',
      description: 'Interstate travel bookings for business and leisure trips to any destination across India.'
    }
  ];

  const fleet = [
    {
      name: 'Force Traveller',
      description: '12-17 seater for group travel',
      image: 'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg'
    },
    {
      name: 'Volvo Bus',
      description: 'Luxury coach for long distance',
      image: 'https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg'
    },
    {
      name: 'Dzire',
      description: 'Compact sedan for city rides',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg'
    },
    {
      name: 'Ertiga',
      description: '7-seater for family travel',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg'
    },
    {
      name: 'Innova',
      description: 'Premium MPV for comfort',
      image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg'
    }
  ];

  const testimonials = [
    {
      quote: "Lakshay Tour & Travel has been our go-to partner for employee transportation. Their punctuality and professional service have made our daily operations seamless.",
      author: "Rajesh Kumar",
      position: "HR Manager, Tech Solutions Ltd.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      quote: "Excellent service for our corporate events. The fleet is well-maintained and drivers are courteous. Highly recommend for any business travel needs.",
      author: "Priya Sharma",
      position: "Event Manager, Global Corp",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      quote: "Our interstate business trips are always comfortable with Lakshay. Professional drivers, clean vehicles, and competitive pricing make them our preferred choice.",
      author: "Amit Patel",
      position: "Business Owner, Mumbai",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg)'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-shadow-xl animate-fade-in-up">
            Comfortable Travel Solutions for Every Journey
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-100 font-medium leading-relaxed animate-fade-in-up animate-delay-200 max-w-3xl mx-auto">
            Professional transport services for corporate clients, organizations, and leisure travelers across India
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-delay-400">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              🚌 Book Your Journey
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-none"
            >
              💬 Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-fade-in-up">
              <span className="text-blue-600 font-semibold text-lg tracking-wider uppercase">What We Offer</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 mt-2 text-gradient">
                Premium Transport Solutions
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              From daily staff commutes to luxury interstate travel, we provide comprehensive transport solutions tailored to your unique requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-xl hover-lift hover-glow transition-all duration-500 group animate-scale-in animate-delay-${(index + 1) * 100}`}
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-10 w-10 text-blue-600 group-hover:animate-pulse-slow" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to="/services"
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 inline-flex items-center"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Gallery */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="animate-fade-in-up">
              <span className="text-blue-600 font-semibold text-lg tracking-wider uppercase">Our Fleet</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 mt-2">
                Modern Vehicles for <span className="text-gradient">Every Journey</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Experience comfort and reliability with our diverse fleet of well-maintained, modern vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {fleet.map((vehicle, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden hover-lift group transition-all duration-500 animate-slide-in-bottom animate-delay-${(index + 1) * 100}`}
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden relative">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-sm bg-blue-600 px-3 py-1 rounded-full">
                      Available Now
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors duration-300">
                    {vehicle.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {vehicle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-float" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="animate-fade-in-up">
              <span className="text-blue-200 font-semibold text-lg tracking-wider uppercase">Client Stories</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 mt-2 text-shadow-lg">
                What Our Clients Say
              </h2>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Trusted by businesses and individuals across India for exceptional service and reliability
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="glass rounded-3xl shadow-2xl p-8 md:p-12 animate-scale-in">
              <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
                <div className="flex-shrink-0 animate-fade-in-left">
                  <div className="relative">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].author}
                      className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-left animate-fade-in-right">
                  <div className="flex items-center justify-center md:justify-start mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current animate-pulse-slow" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-white mb-6 italic leading-relaxed font-medium">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div>
                    <h4 className="font-bold text-white text-xl mb-1">
                      {testimonials[currentTestimonial].author}
                    </h4>
                    <p className="text-blue-200 font-medium">
                      {testimonials[currentTestimonial].position}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-white scale-125 shadow-lg' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 text-shadow-lg">
              Ready to Experience the <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Lakshay Difference?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Join thousands of satisfied customers who trust us for their transportation needs. Your journey starts with just one click.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-delay-300">
            <a
              href="https://wa.me/919876543210"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center group"
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-pulse-slow" />
              💬 WhatsApp Now
            </a>
            <a
              href="tel:+919876543210"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center group"
            >
              <Phone className="mr-3 h-6 w-6 group-hover:animate-pulse-slow" />
              📞 Call Now
            </a>
          </div>
          
          <div className="mt-12 animate-fade-in-up animate-delay-500">
            <p className="text-gray-400 text-sm">
              🔒 Secure booking • ⚡ Instant confirmation • 🎯 24/7 support
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;