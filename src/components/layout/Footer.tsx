import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <Link to="/" className="text-3xl font-bold text-primary-600 font-heading">Udaan</Link>
            </div>
            <p className="mb-4 text-gray-600">
              Empowering girls through education, safety, and community support.
            </p>
            <div className="flex mb-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold text-gray-900 font-heading">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/education" className="text-gray-600 hover:text-primary-600">Education</Link></li>
              <li><Link to="/health" className="text-gray-600 hover:text-primary-600">Menstrual Health</Link></li>
              <li><Link to="/mentorship" className="text-gray-600 hover:text-primary-600">Mentorship</Link></li>
              <li><Link to="/safety" className="text-gray-600 hover:text-primary-600">Safety Features</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold text-gray-900 font-heading">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary-600">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600">Success Stories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600">Support</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold text-gray-900 font-heading">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">contact@udaan.org</li>
              <li className="text-gray-600">+91-123-456-7890</li>
              <li className="text-gray-600">123 Education St, Delhi, India</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 text-center border-t border-gray-200">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Udaan. All rights reserved. Made with 
            <Heart size={14} className="inline-block mx-1 text-primary-500" /> for a brighter future.
          </p>
          <div className="mt-4 space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-primary-600">Terms</a>
            <span>·</span>
            <a href="#" className="hover:text-primary-600">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-primary-600">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};