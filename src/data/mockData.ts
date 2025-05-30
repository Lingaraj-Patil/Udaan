import { User, Course, CycleEntry, Mentor, VocationalProgram, SafeRoute, EmergencyContact, AttendanceRecord } from '../types';

export const mockUser: User = {
  id: 'user123',
  name: 'Priya Sharma',
  email: 'priya.s@example.com',
  profileImage: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  age: 16,
  grade: '10th',
  location: 'Delhi',
  points: 750,
  emergencyContacts: [
    {
      id: 'contact1',
      name: 'Reema Sharma',
      relationship: 'Mother',
      phoneNumber: '9876543210',
      isDefault: true,
    },
    {
      id: 'contact2',
      name: 'Nisha Kumar',
      relationship: 'Teacher',
      phoneNumber: '8765432109',
    }
  ],
  attendance: [
    { date: '2025-04-15', status: 'present', points: 10 },
    { date: '2025-04-14', status: 'present', points: 10 },
    { date: '2025-04-13', status: 'absent', points: 0 },
    { date: '2025-04-12', status: 'present', points: 10 },
    { date: '2025-04-11', status: 'present', points: 10 },
    { date: '2025-04-10', status: 'excused', points: 5 },
    { date: '2025-04-09', status: 'present', points: 10 },
  ]
};

export const mockCourses: Course[] = [
  {
    id: 'course1',
    title: 'Introduction to Coding',
    category: 'stem',
    description: 'Learn the basics of programming with this beginner-friendly course. No prior experience needed!',
    level: 'beginner',
    duration: '8 weeks',
    imageUrl: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    lessons: [
      {
        id: 'lesson1',
        courseId: 'course1',
        title: 'What is Programming?',
        content: 'Introduction to programming concepts and terminology.',
        duration: '45 minutes',
        hasQuiz: true,
        hasVideo: true,
        videoUrl: 'https://example.com/videos/intro-to-programming'
      },
      {
        id: 'lesson2',
        courseId: 'course1',
        title: 'Variables and Data Types',
        content: 'Understanding how to store and manipulate different types of data.',
        duration: '60 minutes',
        hasQuiz: true,
        hasVideo: true,
        videoUrl: 'https://example.com/videos/variables'
      }
    ]
  },
  {
    id: 'course2',
    title: 'English Communication Skills',
    category: 'language',
    description: 'Improve your English speaking and writing skills for academic and professional settings.',
    level: 'intermediate',
    duration: '12 weeks',
    imageUrl: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'course3',
    title: 'Financial Literacy',
    category: 'lifeskills',
    description: 'Learn essential money management skills including budgeting, saving, and basic investment concepts.',
    level: 'beginner',
    duration: '6 weeks',
    imageUrl: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'course4',
    title: 'Algebra Fundamentals',
    category: 'stem',
    description: 'Master algebraic concepts and problem-solving techniques that form the foundation of higher mathematics.',
    level: 'intermediate',
    duration: '10 weeks',
    imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'course5',
    title: 'Public Speaking',
    category: 'lifeskills',
    description: 'Build confidence and learn techniques to deliver powerful presentations and speeches.',
    level: 'beginner',
    duration: '4 weeks',
    imageUrl: 'https://images.pexels.com/photos/6298391/pexels-photo-6298391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'course6',
    title: 'Digital Marketing Basics',
    category: 'vocational',
    description: 'Learn the fundamentals of online marketing including social media, content creation, and analytics.',
    level: 'beginner',
    duration: '8 weeks',
    imageUrl: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const mockCycleEntries: CycleEntry[] = [
  {
    id: 'cycle1',
    userId: 'user123',
    startDate: '2025-03-10',
    endDate: '2025-03-16',
    symptoms: ['cramps', 'fatigue'],
    notes: 'Moderate flow'
  },
  {
    id: 'cycle2',
    userId: 'user123',
    startDate: '2025-04-07',
    endDate: '2025-04-13',
    symptoms: ['cramps', 'headache', 'bloating'],
    notes: 'Heavy flow first two days'
  }
];

export const mockMentors: Mentor[] = [
  {
    id: 'mentor1',
    name: 'Dr. Lakshmi Iyer',
    profileImage: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    expertise: ['Computer Science', 'Artificial Intelligence', 'STEM Education'],
    bio: 'Dr. Iyer has 15+ years of experience in computer science research and education. She is passionate about encouraging more girls to pursue STEM careers.',
    availability: 'Tuesdays and Thursdays, 4-6 PM',
    rating: 4.9
  },
  {
    id: 'mentor2',
    name: 'Mishra',
    profileImage: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    expertise: ['Career Counseling', 'Leadership', 'Public Speaking'],
    bio: 'Mishra is a leadership coach and former corporate executive who now dedicates his time to mentoring young women to develop professional skills.',
    availability: 'Mondays and Wednesdays, 5-7 PM',
    rating: 4.7
  },
  {
    id: 'mentor3',
    name: 'Maya Patel',
    profileImage: 'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    expertise: ['English Literature', 'Creative Writing', 'Communication Skills'],
    bio: 'Maya is an award-winning author and English professor who loves helping students improve their language and communication skills.',
    availability: 'Fridays, 3-6 PM',
    rating: 4.8
  }
];

export const mockVocationalPrograms: VocationalProgram[] = [
  {
    id: 'voc1',
    title: 'Web Development Fundamentals',
    field: 'Technology',
    description: 'Learn HTML, CSS, and basic JavaScript to build responsive websites. This course includes hands-on projects to build your portfolio.',
    duration: '12 weeks',
    certificationType: 'Digital Certificate',
    prerequisites: ['Basic computer skills'],
    imageUrl: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'voc2',
    title: 'Digital Marketing Specialist',
    field: 'Marketing',
    description: 'Master social media marketing, SEO, content creation, and analytics to help businesses grow their online presence.',
    duration: '8 weeks',
    certificationType: 'Industry-Recognized Certificate',
    imageUrl: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'voc3',
    title: 'Entrepreneurship Fundamentals',
    field: 'Business',
    description: 'Learn how to start and manage your own small business, from idea generation to business planning and financial management.',
    duration: '10 weeks',
    certificationType: 'Course Completion Certificate',
    imageUrl: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const mockSafeRoutes: SafeRoute[] = [
  {
    id: 'route1',
    name: 'School to Community Center',
    startLocation: {
      latitude: 28.6139,
      longitude: 77.2090,
      address: 'Delhi Public School, Mathura Road'
    },
    endLocation: {
      latitude: 28.6209,
      longitude: 77.2177,
      address: 'Community Center, Lajpat Nagar'
    },
    safetyRating: 4.5,
    verifiedBy: 'Local Police',
    landmarks: ['Main Market', 'Hospital', 'Police Station']
  },
  {
    id: 'route2',
    name: 'Home to Library',
    startLocation: {
      latitude: 28.6129,
      longitude: 77.2295,
      address: 'Residential Complex, East of Kailash'
    },
    endLocation: {
      latitude: 28.6354,
      longitude: 77.2250,
      address: 'Public Library, Greater Kailash'
    },
    safetyRating: 4.2,
    landmarks: ['Market', 'Park', 'Bus Stop']
  }
];

export const mockAnalyticsData = {
  attendance: [
    { month: 'Jan', rate: 92 },
    { month: 'Feb', rate: 88 },
    { month: 'Mar', rate: 94 },
    { month: 'Apr', rate: 96 },
    { month: 'May', rate: 91 },
    { month: 'Jun', rate: 87 }
  ],
  courseCompletion: [
    { course: 'STEM', completed: 78, total: 100 },
    { course: 'Languages', completed: 65, total: 100 },
    { course: 'Life Skills', completed: 82, total: 100 },
    { course: 'Vocational', completed: 54, total: 100 }
  ],
  userEngagement: [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 3.1 },
    { day: 'Wed', hours: 2.8 },
    { day: 'Thu', hours: 3.4 },
    { day: 'Fri', hours: 2.9 },
    { day: 'Sat', hours: 1.5 },
    { day: 'Sun', hours: 1.0 }
  ]
};