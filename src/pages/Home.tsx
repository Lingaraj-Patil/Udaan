import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturedCourses } from '../components/home/FeaturedCourses';
import { Stats } from '../components/home/Stats';
import { mockCourses } from '../data/mockData';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCourses courses={mockCourses} />
      <Stats />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-medium">Our mission</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Empowering Through Education
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're dedicated to breaking barriers and creating opportunities for girls through education,
              health resources, mentorship, and safety tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-card">
              <img 
                src="https://images.pexels.com/photos/8197527/pexels-photo-8197527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Educational opportunities" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-heading font-semibold text-xl mb-2 text-gray-800">
                Educational Access
              </h3>
              <p className="text-gray-600 mb-4">
                Providing quality educational content in STEM, languages, and essential life skills
                to empower girls with knowledge and opportunities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-card">
              <img 
                src="https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Health resources" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-heading font-semibold text-xl mb-2 text-gray-800">
                Health & Wellbeing
              </h3>
              <p className="text-gray-600 mb-4">
                Supporting girls' health education with menstrual tracking, hygiene resources,
                and accessible information for better wellbeing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-card">
              <img 
                src="https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Safety features" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-heading font-semibold text-xl mb-2 text-gray-800">
                Safety & Security
              </h3>
              <p className="text-gray-600 mb-4">
                Equipping girls with tools like emergency alerts and safe route mapping 
                to enhance personal security and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;