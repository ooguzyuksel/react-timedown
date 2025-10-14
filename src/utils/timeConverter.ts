import { Duration, UseTimedownProps, ResetTimeInput } from '../types';

export const MILLISECONDS_IN_SECOND = 1000;
export const SECONDS_IN_MINUTE = 60;
export const SECONDS_IN_HOUR = 3600;
export const SECONDS_IN_DAY = 86400;

/**
 * Extracts initial time from props
 */
export const getInitialTimeFromProps = (props: UseTimedownProps): number => {
  const { seconds, minutes, hours, days, duration, until } = props;

  // Priority 1: until (Date)
  if (until) {
    const now = new Date();
    const diffInMs = until.getTime() - now.getTime();
    return Math.max(0, Math.floor(diffInMs / MILLISECONDS_IN_SECOND));
  }

  // Priority 2: duration object
  if (duration) {
    return convertDurationToSeconds(duration);
  }

  // Priority 3: individual time units (if multiple are set, they are combined)
  if (seconds !== undefined || minutes !== undefined || hours !== undefined || days !== undefined) {
    return Math.max(
      0,
      Math.floor(
        (seconds || 0) +
        (minutes || 0) * SECONDS_IN_MINUTE +
        (hours || 0) * SECONDS_IN_HOUR +
        (days || 0) * SECONDS_IN_DAY
      )
    );
  }

  // Default: 0 seconds
  return 0;
};

/**
 * Converts duration object to seconds
 */
export const convertDurationToSeconds = (duration: Duration): number => {
  const { seconds = 0, minutes = 0, hours = 0, days = 0 } = duration;
  
  return Math.max(
    0,
    Math.floor(
      seconds +
      minutes * SECONDS_IN_MINUTE +
      hours * SECONDS_IN_HOUR +
      days * SECONDS_IN_DAY
    )
  );
};

/**
 * Converts reset input to seconds
 */
export const convertResetInputToSeconds = (input: ResetTimeInput): number => {
  // If it's a Date object
  if (input instanceof Date) {
    const now = new Date();
    const diffInMs = input.getTime() - now.getTime();
    return Math.max(0, Math.floor(diffInMs / MILLISECONDS_IN_SECOND));
  }

  // If it's a duration object
  return convertDurationToSeconds(input);
};

/**
 * Converts seconds to time units
 */
export const convertSecondsToUnits = (totalSeconds: number) => {
  const absSeconds = Math.abs(totalSeconds);
  
  const days = Math.floor(absSeconds / SECONDS_IN_DAY);
  const hours = Math.floor((absSeconds % SECONDS_IN_DAY) / SECONDS_IN_HOUR);
  const minutes = Math.floor((absSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
  const seconds = Math.floor(absSeconds % SECONDS_IN_MINUTE);
  const milliseconds = Math.floor((absSeconds % 1) * MILLISECONDS_IN_SECOND);

  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    totalSeconds: Math.floor(totalSeconds),
  };
};

