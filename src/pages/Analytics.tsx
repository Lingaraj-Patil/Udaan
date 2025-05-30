import React from 'react';
import { 
  BarChart as BarChartIcon, 
  PieChart as PieChartIcon, 
  TrendingUp,
  Users,
  BookOpen,
  Calendar,
  Award
} from 'lucide-react';
import { mockAnalyticsData } from '../data/mockData';
import { AnalyticsCard } from '../components/analytics/AnalyticsCard';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

const Analytics: React.FC = () => {
  // Colors for charts
  const COLORS = ['#9C27B0', '#009688', '#FF5722', '#3F51B5'];
  
  // Process data for pie chart
  const pieData = mockAnalyticsData.courseCompletion.map(item => ({
    name: item.course,
    value: item.completed,
    total: item.total
  }));
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3">
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Data Analytics Dashboard
              </h1>
              <p className="text-white/90 mb-6 md:pr-12">
                Track your progress, engagement, and achievements through data-driven insights.
              </p>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <BarChartIcon size={160} className="text-white/20" />
            </div>
          </div>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
            <div className="bg-primary-100 p-3 rounded-full mr-4">
              <BookOpen size={24} className="text-primary-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Course Completion</p>
              <p className="text-2xl font-bold text-gray-800">78<span className="text-sm font-normal text-gray-500">%</span></p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
            <div className="bg-secondary-100 p-3 rounded-full mr-4">
              <Calendar size={24} className="text-secondary-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Attendance Rate</p>
              <p className="text-2xl font-bold text-gray-800">92<span className="text-sm font-normal text-gray-500">%</span></p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
            <div className="bg-accent-100 p-3 rounded-full mr-4">
              <TrendingUp size={24} className="text-accent-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Weekly Engagement</p>
              <p className="text-2xl font-bold text-gray-800">2.5<span className="text-sm font-normal text-gray-500">h avg.</span></p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
            <div className="bg-success-100 p-3 rounded-full mr-4">
              <Award size={24} className="text-success-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Reward Points</p>
              <p className="text-2xl font-bold text-gray-800">750</p>
            </div>
          </div>
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Attendance Trend */}
          <AnalyticsCard 
            title="Attendance Rate Trends" 
            icon={<Calendar size={20} className="text-primary-600" />}
          >
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={mockAnalyticsData.attendance}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Attendance Rate']}
                    contentStyle={{ borderRadius: '8px' }}
                  />
                  <Bar dataKey="rate" fill="#9C27B0" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </AnalyticsCard>
          
          {/* Course Completion */}
          <AnalyticsCard 
            title="Course Completion by Subject" 
            icon={<PieChartIcon size={20} className="text-primary-600" />}
          >
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value, name, props) => [`${value}/${props.payload.total}`, name]}
                    contentStyle={{ borderRadius: '8px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </AnalyticsCard>
        </div>
        
        {/* Engagement and Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Weekly Engagement */}
          <AnalyticsCard 
            title="Weekly Engagement" 
            icon={<TrendingUp size={20} className="text-primary-600" />}
            className="lg:col-span-2"
          >
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={mockAnalyticsData.userEngagement}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip contentStyle={{ borderRadius: '8px' }} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="hours" 
                    stroke="#9C27B0" 
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </AnalyticsCard>
          
          {/* Achievements */}
          <AnalyticsCard 
            title="Your Achievements" 
            icon={<Award size={20} className="text-primary-600" />}
          >
            <div className="space-y-4 h-72 overflow-y-auto pr-2">
              <div className="bg-primary-50 rounded-lg p-3 flex items-start">
                <div className="bg-primary-100 p-2 rounded-full mr-3">
                  <BookOpen size={16} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">Completed First Course</h4>
                  <p className="text-xs text-gray-600">Introduction to Coding</p>
                  <div className="mt-1">
                    <span className="badge-primary">+50 points</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary-50 rounded-lg p-3 flex items-start">
                <div className="bg-secondary-100 p-2 rounded-full mr-3">
                  <Calendar size={16} className="text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">Perfect Attendance</h4>
                  <p className="text-xs text-gray-600">Month of March</p>
                  <div className="mt-1">
                    <span className="badge-secondary">+100 points</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-accent-50 rounded-lg p-3 flex items-start">
                <div className="bg-accent-100 p-2 rounded-full mr-3">
                  <Users size={16} className="text-accent-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">Mentorship Connection</h4>
                  <p className="text-xs text-gray-600">Connected with first mentor</p>
                  <div className="mt-1">
                    <span className="badge-accent">+75 points</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-success-50 rounded-lg p-3 flex items-start">
                <div className="bg-success-100 p-2 rounded-full mr-3">
                  <Award size={16} className="text-success-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">Quiz Champion</h4>
                  <p className="text-xs text-gray-600">Scored 90%+ on 5 quizzes</p>
                  <div className="mt-1">
                    <span className="badge-success">+150 points</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-3 flex items-start">
                <div className="bg-gray-200 p-2 rounded-full mr-3">
                  <BookOpen size={16} className="text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">Language Learner</h4>
                  <p className="text-xs text-gray-600">Completed English module</p>
                  <div className="mt-1">
                    <span className="badge">+60 points</span>
                  </div>
                </div>
              </div>
            </div>
          </AnalyticsCard>
        </div>
      </div>
    </div>
  );
};

export default Analytics;