import React from 'react';
import { Shield, Phone, MapPin, AlertTriangle } from 'lucide-react';
import { mockSafeRoutes, mockUser } from '../data/mockData';
import { EmergencyAlert } from '../components/safety/EmergencyAlert';
import { SafeRoutes } from '../components/safety/SafeRoutes';
import { Card, CardHeader, CardBody } from '../components/ui/Card';

const Safety: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-error-600 to-error-800 text-white rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3">
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Personal Safety Tools
              </h1>
              <p className="text-white/90 mb-6 md:pr-12">
                Access tools designed to keep you safe, including emergency alerts and safe route planning.
              </p>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <Shield size={160} className="text-white/20" />
            </div>
          </div>
        </div>
        
        {/* Emergency Alert System */}
        <section className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <AlertTriangle size={24} className="text-error-500 mr-2" />
            Emergency Tools
          </h2>
          <EmergencyAlert emergencyContacts={mockUser.emergencyContacts} />
        </section>
        
        {/* Safe Route Mapping */}
        <section className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <MapPin size={24} className="text-error-500 mr-2" />
            Safe Routes
          </h2>
          <SafeRoutes routes={mockSafeRoutes} />
        </section>
        
        {/* Safety Tips */}
        <section className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <Shield size={24} className="text-error-500 mr-2" />
            Safety Resources & Tips
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="bg-primary-50">
                <h3 className="font-heading text-lg font-semibold text-gray-800">
                  Personal Safety
                </h3>
              </CardHeader>
              <CardBody>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Always inform someone trusted about your whereabouts</li>
                  <li>Avoid walking alone in isolated areas, especially at night</li>
                  <li>Keep your phone charged and easily accessible</li>
                  <li>Trust your instincts if something feels wrong</li>
                  <li>Be aware of your surroundings and minimize distractions</li>
                </ul>
              </CardBody>
            </Card>
            
            <Card>
              <CardHeader className="bg-secondary-50">
                <h3 className="font-heading text-lg font-semibold text-gray-800">
                  Online Safety
                </h3>
              </CardHeader>
              <CardBody>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Use strong, unique passwords for your accounts</li>
                  <li>Be cautious about sharing personal information online</li>
                  <li>Adjust privacy settings on social media platforms</li>
                  <li>Be wary of online harassment and know how to report it</li>
                  <li>Think twice before meeting someone you met online</li>
                </ul>
              </CardBody>
            </Card>
            
            <Card>
              <CardHeader className="bg-accent-50">
                <h3 className="font-heading text-lg font-semibold text-gray-800">
                  Emergency Contacts
                </h3>
              </CardHeader>
              <CardBody>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg flex items-center">
                    <Phone size={18} className="text-error-600 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Police Emergency</p>
                      <p className="text-lg font-bold text-error-600">100</p>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg flex items-center">
                    <Phone size={18} className="text-error-600 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Women's Helpline</p>
                      <p className="text-lg font-bold text-error-600">1091</p>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg flex items-center">
                    <Phone size={18} className="text-error-600 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Ambulance</p>
                      <p className="text-lg font-bold text-error-600">102</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>
        
        {/* Community Safety */}
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <Shield size={24} className="text-error-500 mr-2" />
            Community Safety
          </h2>
          
          <Card className="bg-white shadow-card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:p-8">
                <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">
                  Stronger Together
                </h3>
                <p className="text-gray-600 mb-6">
                  Join our community safety initiatives to create safer environments for all girls. By working together,
                  we can identify safety concerns, share resources, and implement solutions in our communities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary-100 p-2 rounded-full mr-3">
                      <MapPin size={18} className="text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Safe Zone Mapping</h4>
                      <p className="text-sm text-gray-600">Help identify and mark safe zones in your community</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-secondary-100 p-2 rounded-full mr-3">
                      <Phone size={18} className="text-secondary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Safety Workshops</h4>
                      <p className="text-sm text-gray-600">Participate in regular safety training and awareness sessions</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-accent-100 p-2 rounded-full mr-3">
                      <Shield size={18} className="text-accent-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Community Watch</h4>
                      <p className="text-sm text-gray-600">Join the network of volunteers helping to keep communities safe</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block bg-gray-100">
                <img 
                  src="https://images.pexels.com/photos/6192337/pexels-photo-6192337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Community safety" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Safety;