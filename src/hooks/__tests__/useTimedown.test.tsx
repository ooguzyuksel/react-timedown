import { renderHook, act, waitFor } from '@testing-library/react';
import { useTimedown } from '../useTimedown';

describe('useTimedown', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should initialize with correct time using seconds prop', () => {
    const { result } = renderHook(() =>
      useTimedown({ seconds: 60 })
    );

    expect(result.current.time.totalSeconds).toBe(60);
    expect(result.current.isRunning).toBe(false);
    expect(result.current.isPaused).toBe(false);
    expect(result.current.isCompleted).toBe(false);
  });

  it('should initialize with minutes prop', () => {
    const { result } = renderHook(() =>
      useTimedown({ minutes: 2 })
    );

    expect(result.current.time.totalSeconds).toBe(120);
  });

  it('should initialize with hours prop', () => {
    const { result } = renderHook(() =>
      useTimedown({ hours: 1 })
    );

    expect(result.current.time.totalSeconds).toBe(3600);
  });

  it('should initialize with duration object', () => {
    const { result } = renderHook(() =>
      useTimedown({ 
        duration: { 
          minutes: 2, 
          seconds: 30 
        } 
      })
    );

    expect(result.current.time.totalSeconds).toBe(150);
  });

  it('should start timedown when start is called', () => {
    const { result } = renderHook(() =>
      useTimedown({ seconds: 60 })
    );

    act(() => {
      result.current.start();
    });

    expect(result.current.isRunning).toBe(true);
  });

  it('should auto-start when autoStart is true', () => {
    const { result } = renderHook(() =>
      useTimedown({ seconds: 60, autoStart: true })
    );

    expect(result.current.isRunning).toBe(true);
  });

  it('should count down correctly', () => {
    const { result } = renderHook(() =>
      useTimedown({ seconds: 10, autoStart: true })
    );

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(result.current.time.totalSeconds).toBe(7);
  });

  it('should pause timedown', () => {
    const { result } = renderHook(() =>
      useTimedown({ seconds: 60, autoStart: true })
    );

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    act(() => {
      result.current.pause();
    });

    const timeAfterPause = result.current.time.totalSeconds;

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(result.current.time.totalSeconds).toBe(timeAfterPause);
    expect(result.current.isPaused).toBe(true);
    expect(result.current.isRunning).toBe(false);
  });

  it('should resume timedown', () => {
    const { result } = renderHook(() =>
      useTimedown({ seconds: 60, autoStart: true })
    );

    act(() => {
      result.current.pause();
    });

    act(() => {
      result.current.resume();
    });

    expect(result.current.isRunning).toBe(true);
    expect(result.current.isPaused).toBe(false);
  });

  it('should reset timedown', () => {
    const { result } = renderHook(() =>
      useTimedown({ seconds: 60, autoStart: true })
    );

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    act(() => {
      result.current.reset();
    });

    expect(result.current.time.totalSeconds).toBe(60);
    expect(result.current.isRunning).toBe(false);
    expect(result.current.isCompleted).toBe(false);
  });

  it('should reset with new time', () => {
    const { result } = renderHook(() =>
      useTimedown({ seconds: 60 })
    );

    act(() => {
      result.current.reset({ seconds: 30 });
    });

    expect(result.current.time.totalSeconds).toBe(30);
  });

  it('should call onComplete when timedown finishes', () => {
    const onComplete = jest.fn();
    const { result } = renderHook(() =>
      useTimedown({ 
        seconds: 3, 
        autoStart: true,
        onComplete 
      })
    );

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(result.current.isCompleted).toBe(true);
    expect(result.current.isRunning).toBe(false);
  });

  it('should call onTick on each tick', () => {
    const onTick = jest.fn();
    renderHook(() =>
      useTimedown({ 
        seconds: 10, 
        autoStart: true,
        onTick 
      })
    );

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(onTick).toHaveBeenCalledTimes(3);
  });

  it('should format time correctly', () => {
    const { result } = renderHook(() =>
      useTimedown({ 
        seconds: 3665, // 1h 1m 5s
        format: 'HH:MM:SS'
      })
    );

    expect(result.current.time.formatted).toBe('01:01:05');
  });

  it('should use custom format', () => {
    const { result } = renderHook(() =>
      useTimedown({ 
        seconds: 3665,
        format: 'custom',
        customFormat: (time) => `${time.hours}h ${time.minutes}m`
      })
    );

    expect(result.current.time.formatted).toBe('1h 1m');
  });

  it('should stop at endTime', () => {
    const onComplete = jest.fn();
    const { result } = renderHook(() =>
      useTimedown({ 
        seconds: 10,
        autoStart: true,
        endTime: 5,
        onComplete
      })
    );

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(result.current.time.totalSeconds).toBe(5);
    expect(result.current.isCompleted).toBe(true);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('should combine multiple time unit props', () => {
    const { result } = renderHook(() =>
      useTimedown({ 
        hours: 1,
        minutes: 30,
        seconds: 45
      })
    );

    expect(result.current.time.totalSeconds).toBe(5445);
  });
});

