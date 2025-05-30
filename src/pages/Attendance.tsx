import React from 'react';
import { Calendar, Star, Award, Users, BookOpen } from 'lucide-react';
import { mockUser } from '../data/mockData';
import { AttendanceCard } from '../components/attendance/AttendanceCard';
import { Card, CardHeader, CardBody } from '../components/ui/Card';

const Attendance: React.FC = () => {
  // Calculate total rewards redeemable
  const totalPoints = mockUser.points || 0;
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-secondary-600 to-secondary-800 text-white rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3">
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Attendance & Incentives
              </h1>
              <p className="text-white/90 mb-6 md:pr-12">
                Track your attendance, earn points, and redeem rewards to stay motivated on your learning journey.
              </p>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <Calendar size={160} className="text-white/20" />
            </div>
          </div>
        </div>
        
        {/* Attendance and Points Summary */}
        <section className="mb-12">
          <AttendanceCard 
            attendance={mockUser.attendance || []}
            points={totalPoints}
          />
        </section>
        
        {/* Incentive System */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <Star size={24} className="text-secondary-500 mr-2" />
            Incentive System
          </h2>
          
          <Card>
            <CardHeader>
              <h3 className="font-heading text-xl font-semibold text-gray-800">How to Earn Points</h3>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-secondary-50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="bg-secondary-100 p-2 rounded-full mr-3">
                      <Calendar size={18} className="text-secondary-600" />
                    </div>
                    <h4 className="font-medium text-gray-800">Attendance</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Present</span>
                      <span className="text-sm font-medium text-secondary-700">10 points/day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Excused Absence</span>
                      <span className="text-sm font-medium text-secondary-700">5 points/day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Perfect Week</span>
                      <span className="text-sm font-medium text-secondary-700">+20 bonus points</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Perfect Month</span>
                      <span className="text-sm font-medium text-secondary-700">+100 bonus points</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary-100 p-2 rounded-full mr-3">
                      <BookOpen size={18} className="text-primary-600" />
                    </div>
                    <h4 className="font-medium text-gray-800">Learning</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Course Completion</span>
                      <span className="text-sm font-medium text-primary-700">50 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Quiz Score ≥ 80%</span>
                      <span className="text-sm font-medium text-primary-700">20 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Assignment Submission</span>
                      <span className="text-sm font-medium text-primary-700">15 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Peer Teaching</span>
                      <span className="text-sm font-medium text-primary-700">30 points</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-accent-50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="bg-accent-100 p-2 rounded-full mr-3">
                      <Users size={18} className="text-accent-600" />
                    </div>
                    <h4 className="font-medium text-gray-800">Engagement</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Mentor Session</span>
                      <span className="text-sm font-medium text-accent-700">25 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Community Event</span>
                      <span className="text-sm font-medium text-accent-700">20 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Discussion Participation</span>
                      <span className="text-sm font-medium text-accent-700">10 points</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Feedback Submission</span>
                      <span className="text-sm font-medium text-accent-700">15 points</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>
        
        {/* Rewards Showcase */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <Award size={24} className="text-secondary-500 mr-2" />
            Rewards Showcase
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card hoverable className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6373307/pexels-photo-6373307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="School supplies"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardBody>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-heading font-semibold text-lg text-gray-800">
                    School Supplies Bundle
                  </h3>
                  <span className="badge-primary">500 points</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  A complete set of notebooks, pens, pencils, and a backpack to support your studies.
                </p>
                <button className={`btn ${totalPoints >= 500 ? 'btn-primary' : 'btn-outline'} w-full`} disabled={totalPoints < 500}>
                  {totalPoints >= 500 ? 'Redeem Reward' : `Need ${500 - totalPoints} more points`}
                </button>
              </CardBody>
            </Card>
            
            <Card hoverable className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5383410/pexels-photo-5383410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Mobile data package"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardBody>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-heading font-semibold text-lg text-gray-800">
                    Mobile Data Package
                  </h3>
                  <span className="badge-primary">750 points</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  1GB of mobile data to help you access online learning resources and stay connected.
                </p>
                <button className={`btn ${totalPoints >= 750 ? 'btn-primary' : 'btn-outline'} w-full`} disabled={totalPoints < 750}>
                  {totalPoints >= 750 ? 'Redeem Reward' : `Need ${750 - totalPoints} more points`}
                </button>
              </CardBody>
            </Card>
            
            <Card hoverable className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4489773/pexels-photo-4489773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Scholarship opportunity"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardBody>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-heading font-semibold text-lg text-gray-800">
                    Scholarship Application
                  </h3>
                  <span className="badge-primary">1000 points</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Application fee waiver and priority consideration for scholarships.
                </p>
                <button className={`btn ${totalPoints >= 1000 ? 'btn-primary' : 'btn-outline'} w-full`} disabled={totalPoints < 1000}>
                  {totalPoints >= 1000 ? 'Redeem Reward' : `Need ${1000 - totalPoints} more points`}
                </button>
              </CardBody>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Attendance;