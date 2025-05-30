import React from 'react';
import { Award, Star, Book, Gift, Briefcase, Laptop } from 'lucide-react';
import { mockUser } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';

const Rewards: React.FC = () => {
  const totalPoints = mockUser.points || 0;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3">
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Student Rewards Center
              </h1>
              <p className="text-white/90 mb-6 md:pr-12">
                Redeem your earned points for educational materials and resources to support your learning journey.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block">
                <div className="flex items-center">
                  <Star size={32} className="text-yellow-300 mr-3" />
                  <div>
                    <p className="text-sm text-white/80">Available Points</p>
                    <p className="text-3xl font-bold">{totalPoints}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <Award size={160} className="text-white/20" />
            </div>
          </div>
        </div>

        {/* How to Earn Points */}
        <section className="mb-12">
          <h2 className="font-heading text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <Star size={24} className="text-primary-500 mr-2" />
            How to Earn Points
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-primary-50">
              <CardBody>
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-full mr-3">
                    <Book size={24} className="text-primary-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Academic Excellence</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Course Completion</span>
                    <span className="font-medium text-primary-600">+50 points</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Quiz Score ≥ 90%</span>
                    <span className="font-medium text-primary-600">+20 points</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Assignment Submission</span>
                    <span className="font-medium text-primary-600">+10 points</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="bg-secondary-50">
              <CardBody>
                <div className="flex items-center mb-4">
                  <div className="bg-secondary-100 p-3 rounded-full mr-3">
                    <Briefcase size={24} className="text-secondary-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Attendance & Participation</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Perfect Weekly Attendance</span>
                    <span className="font-medium text-secondary-600">+30 points</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Class Participation</span>
                    <span className="font-medium text-secondary-600">+5 points</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Group Activities</span>
                    <span className="font-medium text-secondary-600">+15 points</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="bg-accent-50">
              <CardBody>
                <div className="flex items-center mb-4">
                  <div className="bg-accent-100 p-3 rounded-full mr-3">
                    <Gift size={24} className="text-accent-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Extra Activities</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Mentorship Session</span>
                    <span className="font-medium text-accent-600">+25 points</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Workshop Attendance</span>
                    <span className="font-medium text-accent-600">+20 points</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Peer Tutoring</span>
                    <span className="font-medium text-accent-600">+30 points</span>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Available Rewards */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <Gift size={24} className="text-primary-500 mr-2" />
            Available Rewards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hoverable className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6373307/pexels-photo-6373307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="School supplies bundle"
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
                  Complete set of notebooks, pens, pencils, and a backpack for your studies.
                </p>
                <Button 
                  variant={totalPoints >= 500 ? 'primary' : 'outline'} 
                  isFullWidth
                  disabled={totalPoints < 500}
                >
                  {totalPoints >= 500 ? 'Redeem Now' : `Need ${500 - totalPoints} more points`}
                </Button>
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
                  1GB of mobile data for accessing online learning resources.
                </p>
                <Button 
                  variant={totalPoints >= 750 ? 'primary' : 'outline'} 
                  isFullWidth
                  disabled={totalPoints < 750}
                >
                  {totalPoints >= 750 ? 'Redeem Now' : `Need ${750 - totalPoints} more points`}
                </Button>
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
                <Button 
                  variant={totalPoints >= 1000 ? 'primary' : 'outline'} 
                  isFullWidth
                  disabled={totalPoints < 1000}
                >
                  {totalPoints >= 1000 ? 'Redeem Now' : `Need ${1000 - totalPoints} more points`}
                </Button>
              </CardBody>
            </Card>

            <Card hoverable className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Science kit"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardBody>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-heading font-semibold text-lg text-gray-800">
                    Science Lab Kit
                  </h3>
                  <span className="badge-primary">600 points</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Basic science experiment kit for hands-on learning at home.
                </p>
                <Button 
                  variant={totalPoints >= 600 ? 'primary' : 'outline'} 
                  isFullWidth
                  disabled={totalPoints < 600}
                >
                  {totalPoints >= 600 ? 'Redeem Now' : `Need ${600 - totalPoints} more points`}
                </Button>
              </CardBody>
            </Card>

            <Card hoverable className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Calculator"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardBody>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-heading font-semibold text-lg text-gray-800">
                    Scientific Calculator
                  </h3>
                  <span className="badge-primary">400 points</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Advanced calculator for mathematics and science subjects.
                </p>
                <Button 
                  variant={totalPoints >= 400 ? 'primary' : 'outline'} 
                  isFullWidth
                  disabled={totalPoints < 400}
                >
                  {totalPoints >= 400 ? 'Redeem Now' : `Need ${400 - totalPoints} more points`}
                </Button>
              </CardBody>
            </Card>

            <Card hoverable className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4778619/pexels-photo-4778619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Study materials"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardBody>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-heading font-semibold text-lg text-gray-800">
                    Study Materials Set
                  </h3>
                  <span className="badge-primary">300 points</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Collection of reference books and study guides for your courses.
                </p>
                <Button 
                  variant={totalPoints >= 300 ? 'primary' : 'outline'} 
                  isFullWidth
                  disabled={totalPoints < 300}
                >
                  {totalPoints >= 300 ? 'Redeem Now' : `Need ${300 - totalPoints} more points`}
                </Button>
              </CardBody>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rewards;