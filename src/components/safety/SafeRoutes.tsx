import React, { useState } from 'react';
import { Map, Navigation, Star, Shield, MapPin, Home, School } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { SafeRoute } from '../../types';
import { calculateSafetyScore } from '../../lib/utils';

interface SafeRoutesProps {
  routes?: SafeRoute[];
}

export const SafeRoutes: React.FC<SafeRoutesProps> = ({ routes = [] }) => {
  const [selectedRoute, setSelectedRoute] = useState<SafeRoute | null>(null);
  
  const renderSafetyRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star size={16} className="text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} size={16} className="text-gray-300" />);
      }
    }
    
    return (
      <div className="flex items-center">
        {stars}
        <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="pb-3 bg-secondary-50">
              <div className="flex items-center">
                <div className="bg-secondary-100 p-2 rounded-full mr-2">
                  <Navigation size={20} className="text-secondary-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-800">Safe Routes</h3>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600 mb-4">
                Select from verified safe routes or create your own to ensure a secure journey.
              </p>
              
              <div className="space-y-3 mb-4">
                {routes.map(route => (
                  <div 
                    key={route.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      selectedRoute?.id === route.id 
                        ? 'border-secondary-500 bg-secondary-50'
                        : 'border-gray-200 hover:border-secondary-200 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedRoute(route)}
                  >
                    <h4 className="font-medium text-gray-800 mb-1">{route.name}</h4>
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <Shield size={12} className="mr-1" />
                      Safety Rating: {renderSafetyRating(route.safetyRating)}
                    </div>
                    <div className="flex items-start text-sm">
                      <div className="flex flex-col items-center mr-2">
                        <Home size={14} className="text-primary-500" />
                        <div className="w-0.5 h-5 bg-gray-200 my-0.5"></div>
                        <School size={14} className="text-secondary-500" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs mb-1">{route.startLocation.address}</p>
                        <p className="text-gray-700 text-xs">{route.endLocation.address}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="secondary" 
                leftIcon={<Map size={16} />}
                isFullWidth
              >
                Create New Safe Route
              </Button>
            </CardBody>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <h3 className="font-heading text-xl font-semibold text-gray-800">
                {selectedRoute ? selectedRoute.name : 'Route Map'}
              </h3>
            </CardHeader>
            <CardBody>
              {selectedRoute ? (
                <div>
                  {/* Map Placeholder - In a real app, this would be a Google Maps integration */}
                  <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                    <div className="text-center text-gray-500">
                      <Map size={48} className="mx-auto mb-2 opacity-50" />
                      <p>Google Maps would render here in the full implementation</p>
                      
                      {/* Mocked route visualization */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-4/5 h-3/5">
                          <div className="absolute top-1/4 left-1/5">
                            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                              <MapPin size={20} className="text-primary-600" />
                            </div>
                            <p className="text-xs mt-1 font-medium">{selectedRoute.startLocation.address?.split(',')[0]}</p>
                          </div>
                          
                          <div className="absolute bottom-1/4 right-1/5">
                            <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center">
                              <MapPin size={20} className="text-secondary-600" />
                            </div>
                            <p className="text-xs mt-1 font-medium">{selectedRoute.endLocation.address?.split(',')[0]}</p>
                          </div>
                          
                          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <path 
                              d="M100,100 C150,150 250,150 300,200" 
                              stroke="#9c27b0" 
                              strokeWidth="3" 
                              fill="none" 
                              strokeDasharray="5,5"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Safety Information</h4>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-600">Safety Score:</span>
                        <div className="flex items-center">
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                selectedRoute.safetyRating > 4 ? 'bg-success-500' :
                                selectedRoute.safetyRating > 3 ? 'bg-secondary-500' :
                                selectedRoute.safetyRating > 2 ? 'bg-warning-500' : 'bg-error-500'
                              }`}
                              style={{ width: `${(selectedRoute.safetyRating/5)*100}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm font-medium">{selectedRoute.safetyRating}/5</span>
                        </div>
                      </div>
                      
                      {selectedRoute.verifiedBy && (
                        <div className="flex items-center text-xs text-gray-600 mb-1">
                          <Shield size={12} className="mr-1 text-success-500" />
                          Verified by: {selectedRoute.verifiedBy}
                        </div>
                      )}
                      
                      {selectedRoute.landmarks && selectedRoute.landmarks.length > 0 && (
                        <div className="mt-2">
                          <span className="text-xs text-gray-600">Safe Landmarks:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {selectedRoute.landmarks.map((landmark, index) => (
                              <span key={index} className="badge-primary">{landmark}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Route Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex">
                          <span className="text-gray-600 w-24">Start:</span>
                          <span className="text-gray-800">{selectedRoute.startLocation.address}</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-600 w-24">Destination:</span>
                          <span className="text-gray-800">{selectedRoute.endLocation.address}</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-600 w-24">Distance:</span>
                          <span className="text-gray-800">2.3 km (approx.)</span>
                        </div>
                        <div className="flex">
                          <span className="text-gray-600 w-24">Walking Time:</span>
                          <span className="text-gray-800">28 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      variant="secondary"
                      isFullWidth
                      leftIcon={<Navigation size={16} />}
                    >
                      Navigate
                    </Button>
                    <Button
                      variant="outline"
                      isFullWidth
                      leftIcon={<Shield size={16} />}
                    >
                      Share Route
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center text-center p-6">
                  <div>
                    <Map size={48} className="mx-auto mb-3 text-gray-400" />
                    <h4 className="text-lg font-medium text-gray-700 mb-2">No Route Selected</h4>
                    <p className="text-gray-600 mb-4">
                      Select a safe route from the list or create a new one to view the map.
                    </p>
                    <Button variant="secondary" leftIcon={<Map size={16} />}>
                      Create New Route
                    </Button>
                  </div>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};