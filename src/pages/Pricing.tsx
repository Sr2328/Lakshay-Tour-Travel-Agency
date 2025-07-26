import React, { useState } from 'react';
import { MapPin, Check, ArrowRight, Phone } from 'lucide-react';

const Pricing = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<typeof vehicles[0] | null>(null);

  const vehicles = [
    {
      id: 1,
      name: 'Mini Traveller Bus',
      image: 'https://i.postimg.cc/XYbJF7NS/force-traveller-26.jpg',
      capacity: '12-17 Seater',
      pricing: {
        local: '18/km',
        outstation: '16/km',
        corporate: 'Custom',
        stateTour: '15/km'
      },
      features: [
        'Air Conditioned',
        'Professional Driver',
        'Toll Included',
        'GPS Tracking',
        'Clean Interior'
      ]
    },
    {
      id: 2,
      name: 'Force Traveller',
      image: 'https://i.postimg.cc/856QtMwy/force-traveller-mono-bus-1000x1000.webp',
      capacity: '26-32 Seater',
      pricing: {
        local: '22/km',
        outstation: '20/km',
        corporate: 'Custom',
        stateTour: '18/km'
      },
      features: [
        'Air Conditioned',
        'Professional Driver',
        'Toll Included',
        'GPS Tracking',
        'Premium Interior'
      ]
    },
    // Add other vehicles similarly
  ];

  const locations = [
    {
      name: 'Delhi NCR',
      icon: MapPin,
      color: 'bg-blue-500'
    },
    {
      name: 'Haryana',
      icon: MapPin,
      color: 'bg-green-500'
    },
    // Add other locations
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Choose Your Ride – <span className="text-blue-400">Transparent Pricing Plans</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select from our fleet and explore pricing based on your travel needs
          </p>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {vehicle.capacity}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{vehicle.name}</h3>
                  <div className="space-y-2 mb-6">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedVehicle(vehicle)}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    View Pricing <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal content */}
          </div>
        </div>
      )}

      {/* Locations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Serve Across States & Cities
            </h2>
            <p className="text-lg text-gray-600">
              Covering major destinations across North India
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className={`${location.color} w-16 h-16 rounded-full mx-auto flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  <location.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{location.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;