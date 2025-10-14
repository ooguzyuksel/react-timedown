import { formatTime } from '../timeFormatter';
import { TimeUnits } from '../../types';

const createMockTime = (overrides?: Partial<TimeUnits>): TimeUnits => ({
  days: 0,
  hours: 1,
  minutes: 30,
  seconds: 45,
  milliseconds: 0,
  totalSeconds: 5445,
  ...overrides,
});

describe('timeFormatter', () => {
  describe('formatTime', () => {
    it('should format time as MM:SS', () => {
      const time = createMockTime({ minutes: 5, seconds: 30 });
      expect(formatTime(time, 'MM:SS')).toBe('05:30');
    });

    it('should format time as HH:MM:SS', () => {
      const time = createMockTime();
      expect(formatTime(time, 'HH:MM:SS')).toBe('01:30:45');
    });

    it('should format time as DD:HH:MM:SS', () => {
      const time = createMockTime({ days: 2 });
      expect(formatTime(time, 'DD:HH:MM:SS')).toBe('02:01:30:45');
    });

    it('should format time as HH:MM:SS:MS', () => {
      const time = createMockTime({ milliseconds: 123 });
      expect(formatTime(time, 'HH:MM:SS:MS')).toBe('01:30:45:123');
    });

    it('should use custom formatter', () => {
      const time = createMockTime();
      const customFormatter = (t: TimeUnits) => `${t.hours}h ${t.minutes}m`;
      expect(formatTime(time, 'custom', customFormatter)).toBe('1h 30m');
    });

    it('should pad single digits with zero', () => {
      const time = createMockTime({ hours: 0, minutes: 5, seconds: 3 });
      expect(formatTime(time, 'HH:MM:SS')).toBe('00:05:03');
    });
  });
});

