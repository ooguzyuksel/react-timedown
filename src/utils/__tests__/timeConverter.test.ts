import { 
  getInitialTimeFromProps,
  convertDurationToSeconds, 
  convertSecondsToUnits,
  convertResetInputToSeconds
} from '../timeConverter';

describe('timeConverter', () => {
  describe('getInitialTimeFromProps', () => {
    it('should handle seconds prop', () => {
      expect(getInitialTimeFromProps({ seconds: 60 })).toBe(60);
    });

    it('should handle minutes prop', () => {
      expect(getInitialTimeFromProps({ minutes: 2 })).toBe(120);
    });

    it('should handle hours prop', () => {
      expect(getInitialTimeFromProps({ hours: 1 })).toBe(3600);
    });

    it('should handle days prop', () => {
      expect(getInitialTimeFromProps({ days: 1 })).toBe(86400);
    });

    it('should combine multiple unit props', () => {
      expect(getInitialTimeFromProps({ 
        hours: 1, 
        minutes: 30, 
        seconds: 45 
      })).toBe(5445);
    });

    it('should handle duration object', () => {
      expect(getInitialTimeFromProps({ 
        duration: {
          days: 1,
          hours: 2,
          minutes: 30,
          seconds: 45,
        }
      })).toBe(95445); // 86400 + 7200 + 1800 + 45
    });

    it('should handle until (Date)', () => {
      const futureDate = new Date(Date.now() + 5000);
      const seconds = getInitialTimeFromProps({ until: futureDate });
      expect(seconds).toBeGreaterThanOrEqual(4);
      expect(seconds).toBeLessThanOrEqual(5);
    });

    it('should return 0 for past dates', () => {
      const pastDate = new Date(Date.now() - 5000);
      expect(getInitialTimeFromProps({ until: pastDate })).toBe(0);
    });

    it('should prioritize until over duration', () => {
      const futureDate = new Date(Date.now() + 5000);
      const result = getInitialTimeFromProps({ 
        until: futureDate,
        duration: { seconds: 100 }
      });
      expect(result).toBeLessThan(10);
    });

    it('should prioritize duration over individual props', () => {
      expect(getInitialTimeFromProps({ 
        duration: { seconds: 100 },
        seconds: 50
      })).toBe(100);
    });

    it('should return 0 when no time is provided', () => {
      expect(getInitialTimeFromProps({})).toBe(0);
    });
  });

  describe('convertDurationToSeconds', () => {
    it('should convert duration to seconds', () => {
      expect(convertDurationToSeconds({ seconds: 30 })).toBe(30);
      expect(convertDurationToSeconds({ minutes: 2 })).toBe(120);
      expect(convertDurationToSeconds({ hours: 1 })).toBe(3600);
      expect(convertDurationToSeconds({ days: 1 })).toBe(86400);
    });

    it('should handle combined duration', () => {
      expect(
        convertDurationToSeconds({
          days: 1,
          hours: 2,
          minutes: 30,
          seconds: 45,
        })
      ).toBe(95445);
    });

    it('should handle empty duration', () => {
      expect(convertDurationToSeconds({})).toBe(0);
    });
  });

  describe('convertResetInputToSeconds', () => {
    it('should convert duration object', () => {
      expect(convertResetInputToSeconds({ seconds: 60 })).toBe(60);
    });

    it('should convert Date object', () => {
      const futureDate = new Date(Date.now() + 5000);
      const seconds = convertResetInputToSeconds(futureDate);
      expect(seconds).toBeGreaterThanOrEqual(4);
      expect(seconds).toBeLessThanOrEqual(5);
    });
  });

  describe('convertSecondsToUnits', () => {
    it('should convert seconds to time units', () => {
      const result = convertSecondsToUnits(3665);
      expect(result.hours).toBe(1);
      expect(result.minutes).toBe(1);
      expect(result.seconds).toBe(5);
      expect(result.totalSeconds).toBe(3665);
    });

    it('should handle days', () => {
      const result = convertSecondsToUnits(90061); // 1 day, 1 hour, 1 minute, 1 second
      expect(result.days).toBe(1);
      expect(result.hours).toBe(1);
      expect(result.minutes).toBe(1);
      expect(result.seconds).toBe(1);
    });

    it('should handle zero', () => {
      const result = convertSecondsToUnits(0);
      expect(result.days).toBe(0);
      expect(result.hours).toBe(0);
      expect(result.minutes).toBe(0);
      expect(result.seconds).toBe(0);
    });
  });
});

