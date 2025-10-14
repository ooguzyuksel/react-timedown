import { useEffect, useRef, useState, useCallback } from 'react';
import {
  UseTimedownProps,
  UseTimedownReturn,
  FormattedTime,
  ResetTimeInput,
} from '../types';
import { 
  getInitialTimeFromProps, 
  convertSecondsToUnits,
  convertResetInputToSeconds 
} from '../utils/timeConverter';
import { formatTime } from '../utils/timeFormatter';
import { DEFAULTS } from '../constants';

export const useTimedown = (props: UseTimedownProps): UseTimedownReturn => {
  const {
    autoStart = DEFAULTS.AUTO_START,
    onComplete,
    onTick,
    format = DEFAULTS.FORMAT,
    customFormat,
    interval = DEFAULTS.INTERVAL,
    endTime = DEFAULTS.END_TIME,
  } = props;

  const initialTimeSeconds = getInitialTimeFromProps(props);
  const [timeLeft, setTimeLeft] = useState<number>(initialTimeSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(autoStart);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const onCompleteRef = useRef(onComplete);
  const onTickRef = useRef(onTick);

  // Update refs when callbacks change
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    onTickRef.current = onTick;
  }, [onTick]);

  // Format the current time
  const getFormattedTime = useCallback(
    (seconds: number): FormattedTime => {
      const units = convertSecondsToUnits(seconds);
      const formatted = formatTime(units, format, customFormat);

      return {
        ...units,
        formatted,
      };
    },
    [format, customFormat]
  );

  // Start the timedown
  const start = useCallback(() => {
    if (timeLeft <= endTime) {
      return;
    }
    setIsRunning(true);
    setIsPaused(false);
  }, [timeLeft, endTime]);

  // Pause the timedown
  const pause = useCallback(() => {
    setIsRunning(false);
    setIsPaused(true);
  }, []);

  // Resume the timedown
  const resume = useCallback(() => {
    if (timeLeft <= endTime || isCompleted) {
      return;
    }
    setIsRunning(true);
    setIsPaused(false);
  }, [timeLeft, endTime, isCompleted]);

  // Reset the timedown
  const reset = useCallback((newTime?: ResetTimeInput) => {
    const resetTime = newTime !== undefined 
      ? convertResetInputToSeconds(newTime) 
      : initialTimeSeconds;
    setTimeLeft(resetTime);
    setIsRunning(false);
    setIsPaused(false);
    setIsCompleted(false);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [initialTimeSeconds]);

  // Main timedown effect
  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - (interval / 1000);

        // Check if timedown is complete
        if (newTime <= endTime) {
          setIsRunning(false);
          setIsCompleted(true);

          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }

          // Call onComplete callback
          if (onCompleteRef.current) {
            onCompleteRef.current();
          }

          return endTime;
        }

        // Call onTick callback
        if (onTickRef.current) {
          const formattedTime = convertSecondsToUnits(newTime);
          const formatted = formatTime(formattedTime, format, customFormat);
          onTickRef.current({ ...formattedTime, formatted });
        }

        return newTime;
      });
    }, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, interval, endTime, format, customFormat]);

  return {
    time: getFormattedTime(timeLeft),
    start,
    pause,
    resume,
    reset,
    isRunning,
    isPaused,
    isCompleted,
  };
};

