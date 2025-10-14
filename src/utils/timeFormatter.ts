import { TimeFormat, TimeUnits } from '../types';

/**
 * Pads a number with leading zeros
 */
const padZero = (num: number, length: number = 2): string => {
  return num.toString().padStart(length, '0');
};

/**
 * Formats time based on the specified format
 */
export const formatTime = (
  time: TimeUnits,
  format: TimeFormat = 'HH:MM:SS',
  customFormatter?: (time: TimeUnits) => string
): string => {
  if (format === 'custom' && customFormatter) {
    return customFormatter(time);
  }

  switch (format) {
    case 'MM:SS':
      return `${padZero(time.minutes)}:${padZero(time.seconds)}`;
    
    case 'HH:MM:SS':
      return `${padZero(time.hours)}:${padZero(time.minutes)}:${padZero(time.seconds)}`;
    
    case 'HH:MM:SS:MS':
      return `${padZero(time.hours)}:${padZero(time.minutes)}:${padZero(time.seconds)}:${padZero(time.milliseconds, 3)}`;
    
    case 'DD:HH:MM:SS':
      return `${padZero(time.days)}:${padZero(time.hours)}:${padZero(time.minutes)}:${padZero(time.seconds)}`;
    
    default:
      return `${padZero(time.hours)}:${padZero(time.minutes)}:${padZero(time.seconds)}`;
  }
};

