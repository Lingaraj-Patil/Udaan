import React, { useState } from 'react';
import { Book, Search, Filter, Bookmark } from 'lucide-react';
import { mockCourses } from '../data/mockData';
import { Course } from '../types';
import { CourseCard } from '../components/education/CourseCard';
import { Button } from '../components/ui/Button';

const Education: React.FC = () => {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(mockCourses);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    filterCourses(e.target.value, selectedCategory, selectedLevel);
  };
  
  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    filterCourses(searchQuery, category === selectedCategory ? null : category, selectedLevel);
  };
  
  const handleLevelFilter = (level: string | null) => {
    setSelectedLevel(level === selectedLevel ? null : level);
    filterCourses(searchQuery, selectedCategory, level === selectedLevel ? null : level);
  };
  
  const filterCourses = (query: string, category: string | null, level: string | null) => {
    let results = mockCourses;
    
    if (query) {
      const lowercaseQuery = query.toLowerCase();
      results = results.filter(course => 
        course.title.toLowerCase().includes(lowercaseQuery) ||
        course.description.toLowerCase().includes(lowercaseQuery)
      );
    }
    
    if (category) {
      results = results.filter(course => course.category === category);
    }
    
    if (level) {
      results = results.filter(course => course.level === level);
    }
    
    setFilteredCourses(results);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3">
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Educational Resources
              </h1>
              <p className="text-white/90 mb-6 md:pr-12">
                Explore our comprehensive library of courses in STEM, languages, life skills, and vocational training to help you achieve your goals.
              </p>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for courses..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <Book size={160} className="text-white/20" />
            </div>
          </div>
        </div>
        
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex items-center flex-wrap gap-4">
            <div className="flex items-center text-gray-700 mr-2">
              <Filter size={18} className="mr-2" />
              <span className="font-medium">Filter by:</span>
            </div>
            
            <div className="space-x-2">
              <Button
                variant={selectedCategory === 'stem' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => handleCategoryFilter('stem')}
                className={selectedCategory === 'stem' ? '' : 'border-gray-300 text-gray-700'}
              >
                STEM
              </Button>
              <Button
                variant={selectedCategory === 'language' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => handleCategoryFilter('language')}
                className={selectedCategory === 'language' ? '' : 'border-gray-300 text-gray-700'}
              >
                Languages
              </Button>
              <Button
                variant={selectedCategory === 'lifeskills' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => handleCategoryFilter('lifeskills')}
                className={selectedCategory === 'lifeskills' ? '' : 'border-gray-300 text-gray-700'}
              >
                Life Skills
              </Button>
              <Button
                variant={selectedCategory === 'vocational' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => handleCategoryFilter('vocational')}
                className={selectedCategory === 'vocational' ? '' : 'border-gray-300 text-gray-700'}
              >
                Vocational
              </Button>
            </div>
            
            <div className="space-x-2">
              <Button
                variant={selectedLevel === 'beginner' ? 'secondary' : 'outline'}
                size="sm"
                onClick={() => handleLevelFilter('beginner')}
                className={selectedLevel === 'beginner' ? '' : 'border-gray-300 text-gray-700'}
              >
                Beginner
              </Button>
              <Button
                variant={selectedLevel === 'intermediate' ? 'secondary' : 'outline'}
                size="sm"
                onClick={() => handleLevelFilter('intermediate')}
                className={selectedLevel === 'intermediate' ? '' : 'border-gray-300 text-gray-700'}
              >
                Intermediate
              </Button>
              <Button
                variant={selectedLevel === 'advanced' ? 'secondary' : 'outline'}
                size="sm"
                onClick={() => handleLevelFilter('advanced')}
                className={selectedLevel === 'advanced' ? '' : 'border-gray-300 text-gray-700'}
              >
                Advanced
              </Button>
            </div>
          </div>
        </div>
        
        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <Bookmark size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="font-heading font-semibold text-xl text-gray-800 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
                setSelectedLevel(null);
                setFilteredCourses(mockCourses);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;