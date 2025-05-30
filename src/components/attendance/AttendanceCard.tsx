import React from 'react';
import { Calendar, CheckCircle, XCircle, AlertCircle, Award } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { AttendanceRecord } from '../../types';
import { formatDate } from '../../lib/utils';

interface AttendanceCardProps {
  attendance: AttendanceRecord[];
  points: number;
}

export const AttendanceCard: React.FC<AttendanceCardProps> = ({ attendance, points }) => {
  // Calculate attendance rate
  const totalDays = attendance.length;
  const presentDays = attendance.filter(a => a.status === 'present').length;
  const attendanceRate = totalDays > 0 ? (presentDays / totalDays) * 100 : 0;
  
  // Get color for attendance rate
  const getAttendanceRateColor = (rate: number) => {
    if (rate >= 90) return 'text-success-600';
    if (rate >= 75) return 'text-warning-600';
    return 'text-error-600';
  };
  
  // Get status icon
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'present':
        return <CheckCircle size={16} className="text-success-500" />;
      case 'absent':
        return <XCircle size={16} className="text-error-500" />;
      case 'excused':
        return <AlertCircle size={16} className="text-warning-500" />;
      default:
        return null;
    }
  };
  
  // Calculate points earned this week
  const pointsThisWeek = attendance
    .slice(0, 7)
    .reduce((total, record) => total + (record.points || 0), 0);
  
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-primary-100 p-2 rounded-full mr-3">
              <Calendar size={20} className="text-primary-600" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-gray-800">Attendance & Rewards</h3>
          </div>
          <div className={`text-lg font-bold ${getAttendanceRateColor(attendanceRate)}`}>
            {attendanceRate.toFixed(0)}%
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-800 mb-3">Recent Attendance</h4>
            <div className="space-y-2 max-h-72 overflow-y-auto pr-2">
              {attendance.map((record, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg border border-gray-100">
                  <div className="flex items-center">
                    {getStatusIcon(record.status)}
                    <span className="ml-2 text-sm text-gray-800">{formatDate(record.date)}</span>
                  </div>
                  <span className="text-sm text-gray-600 flex items-center">
                    {record.points || 0} pts
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-800 mb-3">Your Rewards</h4>
            <div className="bg-primary-50 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-gray-700">Total Points</span>
                <span className="text-xl font-bold text-primary-700">{points}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">This Week</span>
                <span className="text-lg font-semibold text-primary-600">+{pointsThisWeek} pts</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-gray-800 mb-2">Available Rewards</h4>
              <div className="p-3 border border-gray-200 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <Award size={18} className="text-yellow-500 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">School Supplies Bundle</p>
                    <p className="text-xs text-gray-500">Notebooks, pens, backpack</p>
                  </div>
                </div>
                <div className="badge-primary">500 pts</div>
              </div>
              
              <div className="p-3 border border-gray-200 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <Award size={18} className="text-yellow-500 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Mobile Data Package</p>
                    <p className="text-xs text-gray-500">1GB data for online learning</p>
                  </div>
                </div>
                <div className="badge-primary">750 pts</div>
              </div>
              
              <div className="p-3 border border-gray-200 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <Award size={18} className="text-yellow-500 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Scholarship Opportunity</p>
                    <p className="text-xs text-gray-500">Application fee waiver</p>
                  </div>
                </div>
                <div className="badge-primary">1000 pts</div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};