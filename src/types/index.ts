export type TimeUnit = 'seconds' | 'minutes' | 'hours' | 'days';

export interface Duration {
  seconds?: number;
  minutes?: number;
  hours?: number;
  days?: number;
}

export type TimeFormat = 
  | 'HH:MM:SS'
  | 'MM:SS'
  | 'HH:MM:SS:MS'
  | 'DD:HH:MM:SS'
  | 'custom';

export interface FormattedTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  totalSeconds: number;
  formatted: string;
}

export interface TimeUnits {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  totalSeconds: number;
}

export interface UseTimedownProps {
  // Simple usage - use ONE of these
  seconds?: number;
  minutes?: number;
  hours?: number;
  days?: number;
  
  // Complex duration - for combined time units
  duration?: Duration;
  
  // Timedown until a specific date
  until?: Date;
  
  // Options
  autoStart?: boolean;
  onComplete?: () => void;
  onTick?: (time: FormattedTime) => void;
  format?: TimeFormat;
  customFormat?: (time: TimeUnits) => string;
  interval?: number; // in milliseconds, default 1000
  endTime?: number; // end at specific second, default 0
}

export interface UseTimedownReturn {
  time: FormattedTime;
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: (newTime?: ResetTimeInput) => void;
  isRunning: boolean;
  isPaused: boolean;
  isCompleted: boolean;
}

// For reset function
export type ResetTimeInput = Duration | Date | {
  seconds?: number;
  minutes?: number;
  hours?: number;
  days?: number;
};

