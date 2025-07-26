import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Bus, 
  MapPin, 
  Calendar,
  Car,
  Check,
  Phone
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Staff Pickup & Drop',
      description: 'Reliable daily transportation services for your employees with scheduled pickup and drop-off routes. Our professional drivers ensure punctual and safe commuting for your workforce.',
      image: 'https://i.postimg.cc/xdV4nhPP/Car-image.jpg',
      features: [
        'Scheduled daily routes',
        'GPS tracking available',
        'Professional drivers',
        'Flexible timing options'
      ]
    },
    {
      icon: Bus,
      title: 'Corporate Bus Rentals',
      description: 'Premium fleet rentals for corporate events, conferences, team outings, and business meetings. Choose from our range of comfortable and well-maintained vehicles.',
      image: 'https://i.postimg.cc/MKkPygCJ/b2b-mobile-banner-new.webp',
      features: [
        'Luxury coaches available',
        'AC and non-AC options',
        'Event coordination support',
        'Competitive pricing'
      ]
    },
    {
      icon: MapPin,
      title: 'Long-distance State Tours',
      description: 'Interstate business and leisure travel bookings to any destination across India. Comfortable long-distance journeys with experienced drivers and well-planned routes.',
      image: 'https://i.postimg.cc/hGqc6Czk/Toyota-Innova-Crysta-Front-Three-Quarter-7.jpg',
      features: [
        'All-India coverage',
        'Route planning assistance',
        'Overnight journey support',
        'Tourist guide services'
      ]
    },
    {
      icon: Calendar,
      title: 'Event Transfers / Airport Transfers',
      description: 'Specialized transportation for weddings, conferences, airport pickups, and special events. Punctual and professional service to make your occasions memorable.',
      image: 'https://i.postimg.cc/5yRThPWx/airport-pickup.jpg',
      features: [
        'Wedding transportation',
        'Airport pickup/drop',
        'Conference shuttles',
        '24/7 availability'
      ]
    },
    {
      icon: Car,
      title: 'Private Car Rentals',
      description: 'Personal vehicle rentals for individual and family travel needs. Choose from sedans, SUVs, and luxury cars for city rides, outstation trips, and personal use.',
      image: 'https://i.postimg.cc/DysKVT0H/rental-cars.jpg',
      features: [
        'Hourly and daily rentals',
        'Self-drive options',
        'Multiple vehicle categories',
        'Chauffeur services'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-float" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <span className="text-blue-200 font-semibold text-lg tracking-wider uppercase">Professional Transport</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight text-shadow-xl">
              Our Transport Services
          </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up animate-delay-200">
              Comprehensive solutions for all your travel needs with premium comfort and reliability
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="text-blue-600 font-semibold text-lg tracking-wider uppercase">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 mt-2">
              Premium <span className="text-gradient">Transport Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From daily staff commutes to luxury interstate travel, we provide comprehensive transport solutions
            </p>
          </div>
          
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-16 animate-fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                {/* Image */}
                <div className="lg:w-1/2 animate-scale-in animate-delay-200">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 lg:h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        ✨ Premium Service
                      </span>
                    </div>
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <service.icon className="h-8 w-8 text-white animate-pulse-slow" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-8 animate-fade-in-up animate-delay-300">
                  <div className="flex items-center space-x-6">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-10 w-10 text-blue-600 animate-pulse-slow" />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 text-xl leading-relaxed font-medium">
                    {service.description}
                  </p>

                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center space-x-4 animate-fade-in-left animate-delay-${(featureIndex + 1) * 100}`}>
                        <div className="bg-green-100 p-1 rounded-full">
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                        </div>
                        <span className="text-gray-800 font-medium text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                  <Link
                    to="/contact"
                      className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg group"
                  >
                      💼 Get Quote
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 text-shadow-lg">
              Ready to Book Your Next Journey?
          </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Contact us today for personalized transport solutions tailored to your needs
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-delay-300">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center group"
            >
              🚀 Get Started
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
            <a
              href="tel:+919876543210"
              className="bg-white hover:bg-gray-100 text-blue-600 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center group"
            >
              <Phone className="mr-3 h-6 w-6 group-hover:animate-pulse-slow" />
              📞 Call Now
            </a>
          </div>
          
          <div className="mt-12 animate-fade-in-up animate-delay-500">
            <p className="text-blue-200 text-sm font-medium">
              🔒 Secure booking • ⚡ Instant confirmation • 🎯 24/7 support
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;