import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  BookOpen,
  Heart,
  Users,
  Shield,
  Briefcase,
  BarChart,
  Calendar,
  Award,
  ChevronDown
} from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/education', label: 'Education', icon: BookOpen },
    { path: '/health', label: 'Health', icon: Heart },
    { path: '/mentorship', label: 'Mentorship', icon: Users },
    { path: '/safety', label: 'Safety', icon: Shield },
    { path: '/vocational', label: 'Vocational', icon: Briefcase },
    { path: '/analytics', label: 'Analytics', icon: BarChart },
    { path: '/attendance', label: 'Attendance', icon: Calendar },
    { path: '/rewards', label: 'Rewards', icon: Award }
  ];
  
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <BookOpen size={24} className="text-primary-600" />
              <span className="ml-2 text-3xl font-bold text-gray-900 font-heading">Udaan</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  isActive(path)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={16} className="mr-1.5" />
                {label}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`block pl-3 pr-4 py-2 text-base font-medium ${
                  isActive(path)
                    ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-500'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50 border-l-4 border-transparent'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  <Icon size={18} className="mr-2" />
                  {label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};