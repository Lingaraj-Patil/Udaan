import React, { useState } from 'react';
import { Calendar, Heart, Info, Droplet } from 'lucide-react';
import { format, addDays, parseISO, isWithinInterval, isSameDay } from 'date-fns';
import { CycleEntry } from '../../types';
import { Button } from '../ui/Button';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { calculateNextPeriod, daysUntilNextPeriod, calculateFertileWindow } from '../../lib/utils';

interface MenstrualTrackerProps {
  cycles?: CycleEntry[];
}

export const MenstrualTracker: React.FC<MenstrualTrackerProps> = ({ cycles = [] }) => {
  const [lastPeriodDate, setLastPeriodDate] = useState<string>(
    cycles.length > 0 ? cycles[cycles.length - 1].startDate : ''
  );
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [periodLength, setPeriodLength] = useState<number>(5);
  
  // Calculate predicted dates
  const lastPeriodStart = lastPeriodDate ? parseISO(lastPeriodDate) : new Date();
  const nextPeriod = calculateNextPeriod(lastPeriodStart, cycleLength);
  const daysUntil = daysUntilNextPeriod(lastPeriodStart, cycleLength);
  const fertileWindow = calculateFertileWindow(lastPeriodStart, cycleLength);
  
  // Generate calendar days for visualization
  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = -15; i <= 15; i++) {
      const date = addDays(today, i);
      
      // Determine if this date falls within period or fertile window
      const isPeriod = cycles.some(cycle => {
        if (!cycle.endDate) return false;
        return isWithinInterval(date, { 
          start: parseISO(cycle.startDate), 
          end: parseISO(cycle.endDate) 
        });
      });

      // Check if this is the predicted next period
      const isPredictedPeriod = isWithinInterval(date, {
        start: nextPeriod,
        end: addDays(nextPeriod, periodLength - 1)
      });

      // Check if this is the predicted fertile window
      const isPredictedFertile = isWithinInterval(date, {
        start: fertileWindow.start,
        end: fertileWindow.end
      });
      
      // Check if this is today
      const isToday = isSameDay(date, today);
      
      days.push({
        date,
        isPeriod,
        isPredictedPeriod,
        isPredictedFertile,
        isToday
      });
    }
    
    return days;
  };
  
  const calendarDays = generateCalendarDays();
  
  // Determine current cycle phase
  const getCurrentPhase = (): string => {
    const today = new Date();
    
    // Check if currently on period
    if (cycles.some(cycle => {
      if (!cycle.endDate) return false;
      return isWithinInterval(today, { 
        start: parseISO(cycle.startDate), 
        end: parseISO(cycle.endDate)
      });
    })) {
      return 'Menstrual';
    }
    
    // Check if in predicted period
    if (isWithinInterval(today, {
      start: nextPeriod,
      end: addDays(nextPeriod, periodLength - 1)
    })) {
      return 'Menstrual (Predicted)';
    }
    
    // Check if in fertile window
    if (isWithinInterval(today, {
      start: fertileWindow.start,
      end: fertileWindow.end
    })) {
      return 'Fertile Window';
    }
    
    // Otherwise in luteal or follicular phase
    if (daysUntil < cycleLength / 2) {
      return 'Luteal';
    } else {
      return 'Follicular';
    }
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <h3 className="font-heading text-xl font-semibold text-gray-800">Track Your Cycle</h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Period Start Date</label>
                  <input
                    type="date"
                    value={lastPeriodDate}
                    onChange={(e) => setLastPeriodDate(e.target.value)}
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Average Cycle Length (days)
                  </label>
                  <div className="flex items-center">
                    <button
                      onClick={() => setCycleLength(Math.max(21, cycleLength - 1))}
                      className="px-3 py-2 bg-gray-100 rounded-l-lg hover:bg-gray-200"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="21"
                      max="45"
                      value={cycleLength}
                      onChange={(e) => setCycleLength(parseInt(e.target.value) || 28)}
                      className="w-16 text-center py-2 border-y border-gray-300"
                    />
                    <button
                      onClick={() => setCycleLength(Math.min(45, cycleLength + 1))}
                      className="px-3 py-2 bg-gray-100 rounded-r-lg hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Period Length (days)
                  </label>
                  <div className="flex items-center">
                    <button
                      onClick={() => setPeriodLength(Math.max(2, periodLength - 1))}
                      className="px-3 py-2 bg-gray-100 rounded-l-lg hover:bg-gray-200"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="2"
                      max="10"
                      value={periodLength}
                      onChange={(e) => setPeriodLength(parseInt(e.target.value) || 5)}
                      className="w-16 text-center py-2 border-y border-gray-300"
                    />
                    <button
                      onClick={() => setPeriodLength(Math.min(10, periodLength + 1))}
                      className="px-3 py-2 bg-gray-100 rounded-r-lg hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <Button 
                  variant="primary" 
                  isFullWidth 
                  className="mt-4"
                  leftIcon={<Calendar size={16} />}
                >
                  Update Cycle
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <h3 className="font-heading text-xl font-semibold text-gray-800">Cycle Insights</h3>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Calendar size={18} className="text-primary-500 mr-2" />
                    <h4 className="font-medium text-gray-800">Next Period</h4>
                  </div>
                  <p className="text-primary-700 font-bold text-lg">{format(nextPeriod, 'MMM d, yyyy')}</p>
                  <p className="text-sm text-gray-600">In {daysUntil} days</p>
                </div>
                
                <div className="bg-accent-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Heart size={18} className="text-accent-500 mr-2" />
                    <h4 className="font-medium text-gray-800">Study-Friendly Focus Days</h4>
                  </div>
                  <p className="text-accent-700 font-bold text-lg">{format(fertileWindow.start, 'MMM d')} - {format(fertileWindow.end, 'MMM d')}</p>
                  <p className="text-sm text-gray-600">Plan for light academic activities or breaks during these days if you experience hormonal fluctuations affecting focus or energy.</p>
                </div>
                
                <div className="bg-secondary-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Droplet size={18} className="text-secondary-500 mr-2" />
                    <h4 className="font-medium text-gray-800">Current Phase</h4>
                  </div>
                  <p className="text-secondary-700 font-bold text-lg">{getCurrentPhase()}</p>
                  <p className="text-sm text-gray-600">Energy levels may be lower; focus on reviewing notes and lighter study topics. Prioritize rest if needed.</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-3">Calendar View</h4>
                <div className="flex overflow-x-auto pb-4 gap-1">
                  {calendarDays.map((day, index) => (
                    <div 
                      key={index}
                      className={`flex-shrink-0 w-12 h-16 rounded-lg flex flex-col items-center justify-center relative ${
                        day.isToday ? 'border-2 border-primary-500' : 'border border-gray-200'
                      } ${
                        day.isPeriod ? 'bg-red-100' :
                        day.isPredictedPeriod ? 'bg-red-50' :
                        day.isPredictedFertile ? 'bg-accent-50' :
                        'bg-white'
                      }`}
                    >
                      <span className="text-xs text-gray-500">{format(day.date, 'E')}</span>
                      <span className={`text-sm font-medium ${
                        day.isToday ? 'text-primary-600' : 'text-gray-800'
                      }`}>
                        {format(day.date, 'd')}
                      </span>
                      {day.isPeriod && <span className="absolute bottom-1 w-2 h-2 rounded-full bg-red-500"></span>}
                      {day.isPredictedPeriod && <span className="absolute bottom-1 w-2 h-2 rounded-full bg-red-300"></span>}
                      {day.isPredictedFertile && <span className="absolute bottom-1 w-2 h-2 rounded-full bg-accent-400"></span>}
                    </div>
                  ))}
                </div>
                <div className="flex items-center text-xs text-gray-600 mt-2 space-x-4">
                  <span className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-red-300 rounded-full mr-1"></span>
                    Predicted Period
                  </span>
                  <span className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-accent-400 rounded-full mr-1"></span>
                    Fertile Window
                  </span>
                  <span className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-1"></span>
                    Actual Period
                  </span>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-primary-50 rounded-lg flex items-start">
                <Info size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-primary-800 mb-1">Your cycle insights</h4>
                  <p className="text-sm text-gray-700">
                    Based on your inputs, your average cycle length is {cycleLength} days with 
                    a period length of {periodLength} days. Track your symptoms and moods for
                    more personalized insights.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
