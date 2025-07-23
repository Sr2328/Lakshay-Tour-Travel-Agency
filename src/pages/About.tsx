import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Bus, MapPin, Award, Shield, Clock, Navigation, Headphones, DollarSign, Settings, Building2, Factory, Heart, GraduationCap, CaseSensitive as University, ShoppingCart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Bus, number: '50+', label: 'Fleet Vehicles' },
    { icon: MapPin, number: '20+', label: 'States Covered' },
    { icon: Award, number: '10+', label: 'Years Experience' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'All our vehicles undergo regular maintenance and safety checks. Our drivers are trained professionals with clean driving records.'
    },
    {
      icon: Clock,
      title: 'Punctuality',
      description: 'We understand the value of time. Our commitment to punctuality ensures you never miss important meetings or events.'
    },
    {
      icon: Navigation,
      title: 'GPS Tracking',
      description: 'Real-time vehicle tracking for enhanced security and transparency. Monitor your journey progress anytime, anywhere.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you with bookings, queries, and emergency situations.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Transparent pricing with no hidden charges. Get the best value for your money without compromising on quality.'
    },
    {
      icon: Settings,
      title: 'Customized Solutions',
      description: 'Tailored transport solutions to meet your specific requirements, whether for daily commuting or special events.'
    }
  ];

  const clients = [
    { icon: Building2, name: 'Tech Solutions Ltd.' },
    { icon: Factory, name: 'Global Corp' },
    { icon: Heart, name: 'Healthcare Plus' },
    { icon: GraduationCap, name: 'Education Institute' },
    { icon: University, name: 'Financial Services' },
    { icon: ShoppingCart, name: 'Retail Chain' }
  ];

  const gallery = [
    {
      image: 'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg',
      title: 'Luxury Coaches'
    },
    {
      image: 'https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg',
      title: 'Premium Buses'
    },
    {
      image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg',
      title: 'SUVs & MPVs'
    },
    {
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      title: 'Sedans'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Driven by Trust & Comfort
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your reliable partner in professional transport services
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our Story
                </h2>
                <p className="text-xl text-gray-600">
                  Building trust through exceptional service
                </p>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the transport industry, Lakshay Tour & Travel has been serving businesses and individuals across India with unmatched dedication and professionalism. What started as a small fleet operation has grown into a trusted name in the transport sector.
                </p>
                <p>
                  Our journey began with a simple belief: every passenger deserves safe, comfortable, and reliable transportation. Over the years, we have built strong relationships with corporate clients, organizations, and individual travelers by consistently delivering on our promises.
                </p>
                <p>
                  Today, we take pride in our modern fleet, experienced drivers, and commitment to excellence that has made us the preferred choice for transport services across multiple states in India.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg"
                  alt="Our Story"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What makes us the preferred choice for transport services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-600">
              Serving diverse industries across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <client.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <span className="text-sm font-medium text-gray-700">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Fleet Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Modern and well-maintained vehicles for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-semibold text-lg">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience the Lakshay Difference
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us for their transport needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;