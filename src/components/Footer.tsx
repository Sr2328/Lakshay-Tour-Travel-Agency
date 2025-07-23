import React from 'react';
import { Link } from 'react-router-dom';
import { Car, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-xl shadow-lg">
                <Car className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight">Lakshay Tour & Travel</span>
            </div>
            <p className="text-gray-400 leading-relaxed font-medium">
              Your trusted partner for comfortable and reliable transport services across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Facebook className="h-6 w-6 hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Twitter className="h-6 w-6 hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Instagram className="h-6 w-6 hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Linkedin className="h-6 w-6 hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium hover:translate-x-1 transform inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium hover:translate-x-1 transform inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium hover:translate-x-1 transform inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium hover:translate-x-1 transform inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium hover:translate-x-1 transform inline-block">
                  Staff Transport
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium hover:translate-x-1 transform inline-block">
                  Corporate Travel
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium hover:translate-x-1 transform inline-block">
                  Interstate Tours
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium hover:translate-x-1 transform inline-block">
                  Airport Transfers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 font-medium">
                  123 Business District, New Delhi, India 110001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-blue-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@lakshaytours.com" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                  info@lakshaytours.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-medium">
            &copy; 2024 Lakshay Tour & Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;