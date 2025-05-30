export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  age?: number;
  grade?: string;
  location?: string;
  emergencyContacts?: EmergencyContact[];
  attendance?: AttendanceRecord[];
  points?: number;
}

export interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phoneNumber: string;
  isDefault?: boolean;
}

export interface AttendanceRecord {
  date: string;
  status: 'present' | 'absent' | 'excused';
  points?: number;
}

export interface Course {
  id: string;
  title: string;
  category: 'stem' | 'language' | 'lifeskills' | 'vocational';
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  imageUrl: string;
  lessons?: Lesson[];
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  content: string;
  duration: string;
  hasQuiz: boolean;
  hasVideo: boolean;
  videoUrl?: string;
}

export interface CycleEntry {
  id: string;
  userId: string;
  startDate: string;
  endDate?: string;
  symptoms?: string[];
  notes?: string;
}

export interface Mentor {
  id: string;
  name: string;
  profileImage: string;
  expertise: string[];
  bio: string;
  availability: string;
  rating: number;
}

export interface VocationalProgram {
  id: string;
  title: string;
  field: string;
  description: string;
  duration: string;
  certificationType: string;
  prerequisites?: string[];
  imageUrl: string;
}

export interface SafeRoute {
  id: string;
  name: string;
  startLocation: GeoPoint;
  endLocation: GeoPoint;
  safetyRating: number;
  verifiedBy?: string;
  landmarks?: string[];
}

export interface GeoPoint {
  latitude: number;
  longitude: number;
  address?: string;
}