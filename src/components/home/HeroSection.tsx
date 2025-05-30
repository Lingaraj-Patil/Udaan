import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Heart, Shield, Users } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <div className="text-white bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-24">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h1 className="mb-6 text-4xl font-bold leading-tight font-heading sm:text-5xl md:text-6xl">
              Empower Through <span className="text-accent-300">Education</span> and <span className="text-secondary-300">Support</span>
            </h1>
            <p className="max-w-xl mb-8 text-lg md:text-xl text-white/90">
              A comprehensive platform designed to support girls' education and wellbeing through personalized learning, health resources, and safety tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                variant="accent"
                className="bg-accent-500 hover:bg-accent-600"
                rightIcon={<ArrowRight size={20} />}
              >
                <Link to="/education">Start Learning</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/mentorship" className="text-orange-500">Find a Mentor</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <img 
              src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Empowered young women"
              className="object-cover h-auto max-w-full rounded-lg shadow-2xl"
              style={{ maxHeight: '450px' }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20">
            <div className="flex items-center justify-center w-12 h-12 p-3 mb-4 rounded-full bg-accent-500">
              <BookOpen size={24} />
            </div>
            <h3 className="mb-2 text-xl font-semibold font-heading">Education</h3>
            <p className="text-white/80">Access quality education in STEM, languages, and life skills.</p>
          </div>
          
          <div className="p-6 transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20">
            <div className="flex items-center justify-center w-12 h-12 p-3 mb-4 rounded-full bg-secondary-500">
              <Heart size={24} />
            </div>
            <h3 className="mb-2 text-xl font-semibold font-heading">Health</h3>
            <p className="text-white/80">Track your menstrual cycle and learn about reproductive health.</p>
          </div>
          
          <div className="p-6 transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20">
            <div className="flex items-center justify-center w-12 h-12 p-3 mb-4 rounded-full bg-primary-400">
              <Shield size={24} />
            </div>
            <h3 className="mb-2 text-xl font-semibold font-heading">Safety</h3>
            <p className="text-white/80">Stay safe with emergency alerts and safe route mapping tools.</p>
          </div>
          
          <div className="p-6 transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20">
            <div className="flex items-center justify-center w-12 h-12 p-3 mb-4 rounded-full bg-accent-400">
              <Users size={24} />
            </div>
            <h3 className="mb-2 text-xl font-semibold font-heading">Mentorship</h3>
            <p className="text-white/80">Connect with mentors who can guide you on your educational journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
};