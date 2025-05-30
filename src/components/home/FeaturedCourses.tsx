import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Award, BookOpen } from 'lucide-react';
import { Course } from '../../types';
import { Card, CardBody } from '../ui/Card';

interface FeaturedCoursesProps {
  courses: Course[];
}

export const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ courses }) => {
  const featuredCourses = courses.slice(0, 3);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Learning Opportunities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our most popular courses designed to help you develop valuable skills and knowledge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <Card key={course.id} hoverable className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardBody>
                <div className="mb-3 flex items-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    course.category === 'stem' ? 'bg-purple-100 text-primary-700' :
                    course.category === 'language' ? 'bg-blue-100 text-blue-700' :
                    course.category === 'lifeskills' ? 'bg-green-100 text-green-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {course.category === 'stem' ? 'STEM' :
                     course.category === 'language' ? 'Language' :
                     course.category === 'lifeskills' ? 'Life Skills' :
                     'Vocational'}
                  </span>
                  <span className="ml-2 text-xs text-gray-500 flex items-center">
                    <Clock size={12} className="mr-1" />
                    {course.duration}
                  </span>
                </div>
                
                <h3 className="font-heading font-semibold text-xl mb-2 text-gray-800">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {course.description}
                </p>
                
                <div className="flex items-center mb-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    course.level === 'beginner' ? 'bg-green-100 text-green-800' :
                    course.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    <Award size={12} className="mr-1" />
                    {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                  </span>
                </div>
                
                <Link 
                  to={`/education/${course.id}`} 
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                >
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/education"
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 text-lg"
          >
            <BookOpen size={20} className="mr-2" />
            <span>View all courses</span>
            <ArrowRight size={20} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};