import React, { useState } from 'react';
import { AlertTriangle, Phone, MapPin, Send, Users } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardHeader, CardBody, CardFooter } from '../ui/Card';
import { EmergencyContact } from '../../types';
import { formatPhoneNumber } from '../../lib/utils';

interface EmergencyAlertProps {
  emergencyContacts?: EmergencyContact[];
}

export const EmergencyAlert: React.FC<EmergencyAlertProps> = ({ 
  emergencyContacts = [] 
}) => {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const [message, setMessage] = useState("I need help. This is an emergency.");
  const [location, setLocation] = useState<{latitude: number, longitude: number} | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const toggleContactSelection = (contactId: string) => {
    if (selectedContacts.includes(contactId)) {
      setSelectedContacts(selectedContacts.filter(id => id !== contactId));
    } else {
      setSelectedContacts([...selectedContacts, contactId]);
    }
  };
  
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          setIsLoading(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLoading(false);
          // In real app, handle error and show user friendly message
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  
  const handleSendAlert = () => {
    setIsLoading(true);
    
    // Simulate sending an alert
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      
      // Reset after showing success message
      setTimeout(() => {
        setShowEmergencyModal(false);
        setSuccess(false);
        setSelectedContacts([]);
        setMessage("I need help. This is an emergency.");
        setLocation(null);
      }, 3000);
    }, 1500);
  };
  
  return (
    <div>
      <Card className="border-l-4 bg-gradient-to-r from-error-50 to-white border-error-500">
        <CardHeader className="pb-2">
          <div className="flex items-start">
            <div className="p-2 mr-3 rounded-full bg-error-100">
              <AlertTriangle size={24} className="text-error-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 font-heading">Emergency Alert System</h3>
              <p className="text-sm text-gray-600">
                Send your location to trusted contacts in case of emergency
              </p>
            </div>
          </div>
        </CardHeader>
        <CardBody className="pt-3">
          <p className="mb-4 text-gray-700">
            Your safety is our priority. In case of an emergency, use this system to quickly
            alert your trusted contacts with your location and a message.
          </p>
          <Button 
            variant="primary" 
            className="bg-error-600 hover:bg-error-700"
            leftIcon={<AlertTriangle size={16} />}
            onClick={() => setShowEmergencyModal(true)}
          >
            Send Emergency Alert
          </Button>
        </CardBody>
      </Card>
      
      {/* Emergency Modal */}
      {showEmergencyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-5 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center text-xl font-semibold font-heading text-error-700">
                  <AlertTriangle size={20} className="mr-2" /> 
                  Emergency Alert
                </h3>
                <button 
                  onClick={() => setShowEmergencyModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
            </div>
            
            <div className="p-5">
              {success ? (
                <div className="py-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-success-100">
                    <Send size={32} className="text-success-600" />
                  </div>
                  <h4 className="mb-2 text-lg font-medium text-gray-800 font-heading">Alert Sent Successfully</h4>
                  <p className="text-gray-600">Your emergency contacts have been notified.</p>
                </div>
              ) : (
                <>
                  <div className="mb-5">
                    <h4 className="flex items-center mb-2 font-medium text-gray-800">
                      <Users size={18} className="mr-2 text-gray-600" />
                      Select Contacts to Alert
                    </h4>
                    <div className="p-2 space-y-2 overflow-y-auto border rounded-lg max-h-40">
                      {emergencyContacts.length > 0 ? (
                        emergencyContacts.map(contact => (
                          <div 
                            key={contact.id} 
                            className={`flex items-center p-2 rounded-lg cursor-pointer ${
                              selectedContacts.includes(contact.id) 
                                ? 'bg-primary-50 border border-primary-200' 
                                : 'bg-white border border-gray-200 hover:bg-gray-50'
                            }`}
                            onClick={() => toggleContactSelection(contact.id)}
                          >
                            <div className={`w-4 h-4 rounded-full border ${
                              selectedContacts.includes(contact.id) 
                                ? 'border-primary-500 bg-primary-500' 
                                : 'border-gray-300'
                            } flex items-center justify-center mr-2`}>
                              {selectedContacts.includes(contact.id) && (
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              )}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-800">{contact.name}</p>
                              <p className="text-xs text-gray-600">
                                {contact.relationship} • {formatPhoneNumber(contact.phoneNumber)}
                              </p>
                            </div>
                            {contact.isDefault && (
                              <span className="ml-2 badge-primary">Default</span>
                            )}
                          </div>
                        ))
                      ) : (
                        <p className="p-2 text-sm text-gray-500">No emergency contacts saved. Please add contacts in your profile settings.</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-5">
                    <h4 className="flex items-center mb-2 font-medium text-gray-800">
                      <MapPin size={18} className="mr-2 text-gray-600" />
                      Your Location
                    </h4>
                    <div className="p-3 text-sm bg-gray-100 rounded-lg">
                      {location ? (
                        <div>
                          <p className="text-gray-800">
                            Latitude: {location.latitude.toFixed(6)}
                            <br />
                            Longitude: {location.longitude.toFixed(6)}
                          </p>
                          <div 
                            className="flex items-center justify-center h-40 mt-2 overflow-hidden bg-gray-300 rounded-lg"
                          >
                            <div className="p-4 text-center text-gray-600">
                              <MapPin size={24} className="mx-auto mb-2" />
                              Location captured
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Button
                          variant="outline"
                          isFullWidth
                          leftIcon={<MapPin size={16} />}
                          onClick={handleGetLocation}
                          isLoading={isLoading}
                        >
                          Get Current Location
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-5">
                    <h4 className="flex items-center mb-2 font-medium text-gray-800">
                      <Send size={18} className="mr-2 text-gray-600" />
                      Message
                    </h4>
                    <textarea
                      className="form-input"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Add a message to send with your location"
                    ></textarea>
                  </div>
                  
                  <Button
                    variant="primary"
                    isFullWidth
                    className="bg-error-600 hover:bg-error-700"
                    leftIcon={<Phone size={16} />}
                    onClick={handleSendAlert}
                    disabled={selectedContacts.length === 0 || !location}
                    isLoading={isLoading}
                  >
                    Send Emergency Alert
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
