import React from 'react';
import { Briefcase, Award, BookOpen, Search, Filter, Layers } from 'lucide-react';
import { mockVocationalPrograms } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';

const Vocational: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-accent-600 to-accent-800 text-white rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3">
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Vocational Training
              </h1>
              <p className="text-white/90 mb-6 md:pr-12">
                Develop practical skills for employment and entrepreneurship through our vocational training programs.
              </p>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for skills, courses, or career paths..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <Briefcase size={160} className="text-white/20" />
            </div>
          </div>
        </div>
        
        {/* Program Categories */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <button className="p-4 bg-white rounded-xl shadow-sm flex items-center hover:bg-accent-50 hover:shadow-md transition-all duration-200">
              <div className="bg-accent-100 p-3 rounded-full mr-3">
                <Briefcase size={24} className="text-accent-600" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-gray-800">Technology</h3>
                <p className="text-xs text-gray-500">Coding, design, IT</p>
              </div>
            </button>
            
            <button className="p-4 bg-white rounded-xl shadow-sm flex items-center hover:bg-accent-50 hover:shadow-md transition-all duration-200">
              <div className="bg-accent-100 p-3 rounded-full mr-3">
                <Layers size={24} className="text-accent-600" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-gray-800">Business</h3>
                <p className="text-xs text-gray-500">Entrepreneurship, marketing</p>
              </div>
            </button>
            
            <button className="p-4 bg-white rounded-xl shadow-sm flex items-center hover:bg-accent-50 hover:shadow-md transition-all duration-200">
              <div className="bg-accent-100 p-3 rounded-full mr-3">
                <BookOpen size={24} className="text-accent-600" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-gray-800">Creative Arts</h3>
                <p className="text-xs text-gray-500">Design, writing, media</p>
              </div>
            </button>
            
            <button className="p-4 bg-white rounded-xl shadow-sm flex items-center hover:bg-accent-50 hover:shadow-md transition-all duration-200">
              <div className="bg-accent-100 p-3 rounded-full mr-3">
                <Award size={24} className="text-accent-600" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-gray-800">Healthcare</h3>
                <p className="text-xs text-gray-500">First aid, caregiving</p>
              </div>
            </button>
          </div>
        </section>
        
        {/* Featured Programs */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-heading text-2xl font-semibold text-gray-800 flex items-center">
              <Award size={24} className="text-accent-500 mr-2" />
              Featured Programs
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-gray-700 mr-2 hidden md:inline-block">Filter by:</span>
              <Button
                variant="outline"
                size="sm"
                leftIcon={<Filter size={14} />}
                className="border-gray-300 text-gray-700"
              >
                All Fields
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 text-gray-700 hidden md:flex"
              >
                Duration
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 text-gray-700 hidden md:flex"
              >
                Certificate Type
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {mockVocationalPrograms.map(program => (
              <Card key={program.id} hoverable className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={program.imageUrl}
                    alt={program.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardBody>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-700">
                      {program.field}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Award size={12} className="mr-1" />
                      {program.certificationType}
                    </span>
                  </div>
                  
                  <h3 className="font-heading font-semibold text-lg mb-2 text-gray-800">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {program.description}
                  </p>
                  
                  <div className="flex items-center mb-4">
                    <span className="text-xs text-gray-500 mr-4">
                      Duration: {program.duration}
                    </span>
                    {program.prerequisites && program.prerequisites.length > 0 && (
                      <span className="text-xs text-gray-500">
                        Prerequisites: {program.prerequisites.join(', ')}
                      </span>
                    )}
                  </div>
                  
                  <Button 
                    variant="accent"
                    isFullWidth
                    leftIcon={<BookOpen size={16} />}
                  >
                    Learn More
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Success Stories */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-800 mb-8 flex items-center">
            <Award size={24} className="text-accent-500 mr-2" />
            Success Stories
          </h2>
          
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-6 md:p-8 md:col-span-2 flex flex-col justify-center">
                <span className="text-accent-600 font-medium mb-2">Student Success</span>
                <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
                  "The web development program changed my life."
                </h3>
                <p className="text-gray-600 mb-6 italic">
                  "Before joining EmpowerHer, I had limited access to technology education. The web development program taught me valuable skills that helped me secure an internship at a tech company. Now I'm building websites and helping support my family."
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src="https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Sneha" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Sneha Patel</h4>
                    <p className="text-sm text-gray-600">Web Development Graduate</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block bg-gray-100 h-full">
                <img 
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Success story" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardBody className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <img 
                      src="https://images.pexels.com/photos/6238299/pexels-photo-6238299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Student studying" 
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">
                    From Student to Entrepreneur
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Our entrepreneurship program has helped over 200 young women start their own small businesses, from handicrafts to digital services.
                  </p>
                  <Button variant="outline">Read More</Button>
                </div>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <img 
                      src="https://images.pexels.com/photos/4050326/pexels-photo-4050326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Digital marketing class" 
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">
                    Digital Skills for All
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Our digital skills program helps bridge the gender gap in technology, with 85% of graduates securing related employment.
                  </p>
                  <Button variant="outline">Read More</Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vocational;