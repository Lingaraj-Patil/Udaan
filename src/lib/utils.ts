import { format, addDays, differenceInDays } from 'date-fns';

// Format date to display
export const formatDate = (date: Date | string): string => {
  const dateObject = typeof date === 'string' ? new Date(date) : date;
  return format(dateObject, 'MMM dd, yyyy');
};

// Get short day name
export const getShortDayName = (date: Date | string): string => {
  const dateObject = typeof date === 'string' ? new Date(date) : date;
  return format(dateObject, 'E');
};

// Calculate next period date based on cycle length
export const calculateNextPeriod = (lastPeriodStart: Date, cycleLength: number): Date => {
  return addDays(lastPeriodStart, cycleLength);
};

// Calculate days until next period
export const daysUntilNextPeriod = (lastPeriodStart: Date, cycleLength: number): number => {
  const nextPeriod = calculateNextPeriod(lastPeriodStart, cycleLength);
  const today = new Date();
  return differenceInDays(nextPeriod, today);
};

// Calculate fertile window (typically 12-16 days before next period)
export const calculateFertileWindow = (lastPeriodStart: Date, cycleLength: number): { start: Date, end: Date } => {
  const nextPeriod = calculateNextPeriod(lastPeriodStart, cycleLength);
  const fertileWindowStart = addDays(nextPeriod, -16);
  const fertileWindowEnd = addDays(nextPeriod, -12);
  
  return {
    start: fertileWindowStart,
    end: fertileWindowEnd
  };
};

// Format phone number for display
export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phoneNumber;
};

// Truncate text with ellipsis
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};