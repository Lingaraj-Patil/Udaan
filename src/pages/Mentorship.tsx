import React from 'react';
import { Users, MessageSquare, Calendar, UserPlus, Book } from 'lucide-react';
import { mockMentors } from '../data/mockData';
import { MentorCard } from '../components/mentorship/MentorCard';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardBody } from '../components/ui/Card';

const Mentorship: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3">
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Mentorship & Guidance
              </h1>
              <p className="text-white/90 mb-6 md:pr-12">
                Connect with experienced mentors who can provide guidance, support, and inspiration on your educational journey.
              </p>
              <Button 
                variant="accent"
                size="lg"
                leftIcon={<UserPlus size={20} />}
                className="bg-accent-500 hover:bg-accent-600"
              >
                Request a Mentor
              </Button>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <Users size={160} className="text-white/20" />
            </div>
          </div>
        </div>
        
        {/* Benefits */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl font-semibold text-gray-800 mb-8 flex items-center">
            <Book size={24} className="text-primary-500 mr-2" />
            Benefits of Mentorship
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-card rounded-xl overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Mentorship" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-4">
                  How Mentorship Empowers
                </h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="bg-primary-100 p-2 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      <span className="text-primary-700 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Personalized Guidance</h4>
                      <p className="text-sm text-gray-600">Get advice tailored to your specific needs and goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-primary-100 p-2 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      <span className="text-primary-700 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Expanded Network</h4>
                      <p className="text-sm text-gray-600">Build connections with professionals in your field of interest.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-primary-100 p-2 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      <span className="text-primary-700 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Role Modeling</h4>
                      <p className="text-sm text-gray-600">Learn from someone who has achieved what you aspire to.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-primary-100 p-2 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      <span className="text-primary-700 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Confidence Building</h4>
                      <p className="text-sm text-gray-600">Develop self-assurance with support and encouragement.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader className="bg-secondary-50">
                  <h3 className="font-heading text-xl font-semibold text-gray-800 flex items-center">
                    <MessageSquare size={20} className="text-secondary-500 mr-2" />
                    How It Works
                  </h3>
                </CardHeader>
                <CardBody>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-secondary-100 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                        <span className="font-bold text-secondary-700">1</span>
                      </div>
                      <p className="text-gray-700">Browse our mentor profiles and find someone with the expertise you need.</p>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-secondary-100 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                        <span className="font-bold text-secondary-700">2</span>
                      </div>
                      <p className="text-gray-700">Request a connection and schedule your first meeting.</p>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-secondary-100 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                        <span className="font-bold text-secondary-700">3</span>
                      </div>
                      <p className="text-gray-700">Meet regularly through chat or video calls to discuss your goals and progress.</p>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-secondary-100 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                        <span className="font-bold text-secondary-700">4</span>
                      </div>
                      <p className="text-gray-700">Build a lasting relationship that supports your educational journey.</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              
              <Card>
                <CardHeader className="bg-accent-50">
                  <h3 className="font-heading text-xl font-semibold text-gray-800 flex items-center">
                    <Calendar size={20} className="text-accent-500 mr-2" />
                    Upcoming Events
                  </h3>
                </CardHeader>
                <CardBody>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-gray-800">Career Guidance Workshop</h4>
                        <span className="badge-primary">Apr 28</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Learn about different career paths in STEM fields.</p>
                      <Button variant="outline" size="sm">Register</Button>
                    </div>
                    
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-gray-800">Mentorship Meetup</h4>
                        <span className="badge-primary">May 05</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Speed mentoring session with professionals.</p>
                      <Button variant="outline" size="sm">Register</Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Mentors */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-heading text-2xl font-semibold text-gray-800 flex items-center">
              <Users size={24} className="text-primary-500 mr-2" />
              Our Mentors
            </h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" leftIcon={<UserPlus size={16} />}>
                Become a Mentor
              </Button>
              <Button variant="primary" leftIcon={<MessageSquare size={16} />}>
                Request Matching
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mockMentors.map(mentor => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
          
          <Card className="mt-8 bg-primary-50 border border-primary-100">
            <CardBody className="p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                  <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">
                    Looking for a specific type of mentor?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tell us about your interests, goals, and what you're looking for in a mentor.
                    We'll help match you with someone who can support your unique journey.
                  </p>
                  <Button variant="primary">Request Custom Matching</Button>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Custom mentor matching" 
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Mentorship;