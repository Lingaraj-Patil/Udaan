import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Award } from 'lucide-react';
import { Course } from '../../types';
import { Card, CardBody } from '../ui/Card';
import { Button } from '../ui/Button';

interface CourseCardProps {
  course: Course;
  compact?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, compact = false }) => {
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'stem':
        return 'bg-primary-100 text-primary-700';
      case 'language':
        return 'bg-blue-100 text-blue-700';
      case 'lifeskills':
        return 'bg-green-100 text-green-700';
      case 'vocational':
        return 'bg-accent-100 text-accent-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  
  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'stem':
        return 'STEM';
      case 'language':
        return 'Language';
      case 'lifeskills':
        return 'Life Skills';
      case 'vocational':
        return 'Vocational';
      default:
        return category;
    }
  };
  
  const getLevelColor = (level: string) => {
    switch(level) {
      case 'beginner':
        return 'bg-success-100 text-success-700';
      case 'intermediate':
        return 'bg-warning-100 text-yellow-800';
      case 'advanced':
        return 'bg-error-100 text-error-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  
  if (compact) {
    return (
      <Card hoverable className="flex h-32 overflow-hidden">
        <div className="w-1/3 h-full overflow-hidden">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/3 p-3">
          <div className="flex items-center justify-between mb-1">
            <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColor(course.category)}`}>
              {getCategoryLabel(course.category)}
            </span>
            <span className="text-xs text-gray-500 flex items-center">
              <Clock size={10} className="mr-1" />
              {course.duration}
            </span>
          </div>
          <h3 className="font-medium text-sm text-gray-800 mb-1 line-clamp-2">{course.title}</h3>
          <Link 
            to={`/education/${course.id}`}
            className="text-xs text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
          >
            <span>View Course</span>
          </Link>
        </div>
      </Card>
    );
  }
  
  return (
    <Card hoverable className="overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardBody className="flex flex-col flex-grow">
        <div className="mb-3 flex items-center justify-between">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(course.category)}`}>
            {getCategoryLabel(course.category)}
          </span>
          <span className="text-xs text-gray-500 flex items-center">
            <Clock size={12} className="mr-1" />
            {course.duration}
          </span>
        </div>
        
        <h3 className="font-heading font-semibold text-lg mb-2 text-gray-800">
          {course.title}
        </h3>
        
        <p className="text-gray-600 mb-4 text-sm flex-grow">
          {course.description}
        </p>
        
        <div className="flex items-center mb-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
            <Award size={12} className="mr-1" />
            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
          </span>
        </div>
        
        <Button 
          variant="outline"
          isFullWidth
          leftIcon={<BookOpen size={16} />}
        >
          <Link to={`/education/${course.id}`}>
            View Course
          </Link>
        </Button>
      </CardBody>
    </Card>
  );
};