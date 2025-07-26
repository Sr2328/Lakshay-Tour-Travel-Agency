import React from 'react';
import { X, Check, Phone } from 'lucide-react';

interface Vehicle {
  name: string;
  image: string;
  features: string[];
  pricing: {
    local: number;
    outstation: number;
    corporate: string;
    stateTour: number;
  };
}

interface PricingModalProps {
  vehicle: Vehicle;
  onClose: () => void;
}

const PricingModal = ({ vehicle, onClose }: PricingModalProps) => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{vehicle.name}</h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-6 w-6 text-gray-500" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full rounded-xl"
          />
          <div className="mt-6 space-y-3">
            <h4 className="font-semibold text-gray-900">Included Services:</h4>
            {vehicle.features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Pricing Details:</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Local</span>
                <span className="font-semibold">₹{vehicle.pricing.local}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Outstation</span>
                <span className="font-semibold">₹{vehicle.pricing.outstation}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Corporate</span>
                <span className="font-semibold">{vehicle.pricing.corporate}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">State Tour</span>
                <span className="font-semibold">₹{vehicle.pricing.stateTour}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Additional Conditions:</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Minimum 4 hours booking required</li>
              <li>• Night charges applicable after 10 PM</li>
              <li>• Toll & state taxes extra</li>
              <li>• Driver allowance for outstation</li>
            </ul>
          </div>

          <a
            href="tel:+919876543210"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingModal;