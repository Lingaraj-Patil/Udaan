import React from 'react';
import { Star, MessageCircle, Video, Calendar, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardBody } from '../ui/Card';
import { Mentor } from '../../types';

interface MentorCardProps {
  mentor: Mentor;
}

export const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  // Calculate rating stars
  const renderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star size={14} className="text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} size={14} className="text-gray-300" />);
      }
    }
    
    return (
      <div className="flex items-center">
        {stars}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };
  
  return (
    <Card hoverable className="h-full flex flex-col">
      <CardBody>
        <div className="flex flex-col items-center text-center mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
            <img 
              src={mentor.profileImage} 
              alt={mentor.name}
              className="w-full h-full object-cover" 
            />
          </div>
          <h3 className="font-heading font-semibold text-lg text-gray-800">{mentor.name}</h3>
          <div className="mt-1 mb-2">
            {renderRatingStars(mentor.rating)}
          </div>
          <div className="flex flex-wrap justify-center gap-1 mb-3">
            {mentor.expertise.map((skill, index) => (
              <span key={index} className="badge-secondary text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {mentor.bio}
        </p>
        
        <div className="bg-gray-50 p-3 rounded-lg mb-4">
          <div className="flex items-center text-sm text-gray-700 mb-1">
            <Calendar size={14} className="mr-2 text-primary-500" />
            <span>Available: {mentor.availability}</span>
          </div>
        </div>
        
        <div className="flex gap-2 mt-auto">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            leftIcon={<MessageCircle size={14} />}
          >
            Message
          </Button>
          <Button 
            variant="primary"
            size="sm"
            className="flex-1"
            leftIcon={<Video size={14} />}
          >
            Schedule Call
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};