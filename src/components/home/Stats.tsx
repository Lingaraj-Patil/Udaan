import React from 'react';
import { Users, Award, BookOpen, Heart } from 'lucide-react';

export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            EmpowerHer is making a difference in the lives of young women across the country.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">5,000+</h3>
            <p className="text-gray-600 font-medium">Girls Empowered</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 text-secondary-600 mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">200+</h3>
            <p className="text-gray-600 font-medium">Courses Completed</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 text-accent-600 mb-4">
              <BookOpen size={32} />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">50+</h3>
            <p className="text-gray-600 font-medium">Dedicated Mentors</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-100 text-success-600 mb-4">
              <Heart size={32} />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">85%</h3>
            <p className="text-gray-600 font-medium">Improved Health Awareness</p>
          </div>
        </div>
      </div>
    </section>
  );
};