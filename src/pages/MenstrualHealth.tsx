import React from 'react';
import { Calendar, Book, Heart, Info } from 'lucide-react';
import { mockCycleEntries, mockUser } from '../data/mockData';
import { MenstrualTracker } from '../components/health/MenstrualTracker';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardBody } from '../components/ui/Card';

const MenstrualHealth: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-secondary-600 to-secondary-800 text-white rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3">
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Menstrual Health & Tracking
              </h1>
              <p className="text-white/90 mb-6 md:pr-12">
                Track your menstrual cycle, learn about your body, and access resources to support your health and wellbeing.
              </p>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <Calendar size={160} className="text-white/20" />
            </div>
          </div>
        </div>
        
        {/* Menstrual Tracker */}
        <section className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <Calendar size={24} className="text-secondary-500 mr-2" />
            Cycle Tracker
          </h2>
          <MenstrualTracker cycles={mockCycleEntries} />
        </section>
        
        {/* Educational Content */}
        <section className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <Book size={24} className="text-secondary-500 mr-2" />
            Learn About Menstrual Health
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hoverable className="overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5699921/pexels-photo-5699921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Understanding Your Cycle"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardBody>
                <h3 className="font-heading font-semibold text-lg mb-2 text-gray-800">
                  Understanding Your Cycle
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn about the different phases of the menstrual cycle and what happens in your body.
                </p>
                <Button variant="secondary" size="sm" isFullWidth>Read Article</Button>
              </CardBody>
            </Card>
            
            <Card hoverable className="overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5699459/pexels-photo-5699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Menstrual Hygiene"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardBody>
                <h3 className="font-heading font-semibold text-lg mb-2 text-gray-800">
                  Menstrual Hygiene
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Practical tips and best practices for maintaining good hygiene during your period.
                </p>
                <Button variant="secondary" size="sm" isFullWidth>Read Article</Button>
              </CardBody>
            </Card>
            
            <Card hoverable className="overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4047077/pexels-photo-4047077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Managing Period Pain"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardBody>
                <h3 className="font-heading font-semibold text-lg mb-2 text-gray-800">
                  Managing Period Pain
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Techniques and remedies to help manage and reduce menstrual discomfort and pain.
                </p>
                <Button variant="secondary" size="sm" isFullWidth>Read Article</Button>
              </CardBody>
            </Card>
          </div>
        </section>
        
        {/* Resources */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <Heart size={24} className="text-secondary-500 mr-2" />
            Health Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="bg-secondary-50">
                <h3 className="font-heading text-xl font-semibold text-gray-800 flex items-center">
                  <Info size={20} className="text-secondary-500 mr-2" />
                  Find Support
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 mb-4">
                  Access to healthcare professionals, support groups, and resources for your menstrual health needs.
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-1">Health Helpline</h4>
                    <p className="text-sm text-gray-600 mb-2">24/7 confidential health advice and support</p>
                    <p className="text-sm font-medium text-primary-600">+91-800-123-4567</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-1">School Health Center</h4>
                    <p className="text-sm text-gray-600 mb-2">Visit your school nurse for menstrual supplies and advice</p>
                    <p className="text-sm font-medium text-primary-600">Available weekdays 9am-4pm</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-1">Community Support Group</h4>
                    <p className="text-sm text-gray-600 mb-2">Join our monthly meetups to discuss health topics</p>
                    <p className="text-sm font-medium text-primary-600">First Saturday every month</p>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card>
              <CardHeader className="bg-secondary-50">
                <h3 className="font-heading text-xl font-semibold text-gray-800 flex items-center">
                  <Book size={20} className="text-secondary-500 mr-2" />
                  Free Resources
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 mb-4">
                  Download these free resources to learn more about menstrual health and self-care.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Book size={16} className="text-primary-500 mr-2" />
                      <p className="text-sm font-medium text-gray-800">Menstrual Health Guide</p>
                    </div>
                    <Button variant="outline" size="sm">Download PDF</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Book size={16} className="text-primary-500 mr-2" />
                      <p className="text-sm font-medium text-gray-800">Myth-busting Facts Sheet</p>
                    </div>
                    <Button variant="outline" size="sm">Download PDF</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Book size={16} className="text-primary-500 mr-2" />
                      <p className="text-sm font-medium text-gray-800">Self-care Calendar</p>
                    </div>
                    <Button variant="outline" size="sm">Download PDF</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenstrualHealth;