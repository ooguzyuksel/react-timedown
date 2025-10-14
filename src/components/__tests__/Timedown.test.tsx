import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Timedown } from '../Timedown';

describe('Timedown Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should render with children function', () => {
    render(
      <Timedown seconds={60}>
        {({ time }) => <div data-testid="timedown">{time.formatted}</div>}
      </Timedown>
    );

    expect(screen.getByTestId('timedown')).toBeInTheDocument();
  });

  it('should provide timedown state to children', () => {
    render(
      <Timedown seconds={60}>
        {({ time, isRunning, isPaused, isCompleted }) => (
          <div>
            <div data-testid="time">{time.totalSeconds}</div>
            <div data-testid="running">{isRunning ? 'yes' : 'no'}</div>
            <div data-testid="paused">{isPaused ? 'yes' : 'no'}</div>
            <div data-testid="completed">{isCompleted ? 'yes' : 'no'}</div>
          </div>
        )}
      </Timedown>
    );

    expect(screen.getByTestId('time')).toHaveTextContent('60');
    expect(screen.getByTestId('running')).toHaveTextContent('no');
    expect(screen.getByTestId('paused')).toHaveTextContent('no');
    expect(screen.getByTestId('completed')).toHaveTextContent('no');
  });

  it('should provide control methods to children', () => {
    render(
      <Timedown seconds={60}>
        {({ time, start, pause, reset }) => (
          <div>
            <div data-testid="time">{time.totalSeconds}</div>
            <button onClick={start} data-testid="start">Start</button>
            <button onClick={pause} data-testid="pause">Pause</button>
            <button onClick={() => reset()} data-testid="reset">Reset</button>
          </div>
        )}
      </Timedown>
    );

    expect(screen.getByTestId('start')).toBeInTheDocument();
    expect(screen.getByTestId('pause')).toBeInTheDocument();
    expect(screen.getByTestId('reset')).toBeInTheDocument();
  });

  it('should count down when started', () => {
    render(
      <Timedown seconds={10} autoStart={true}>
        {({ time }) => <div data-testid="time">{time.totalSeconds}</div>}
      </Timedown>
    );

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByTestId('time')).toHaveTextContent('7');
  });

  it('should handle callbacks', () => {
    const onComplete = jest.fn();
    const onTick = jest.fn();

    render(
      <Timedown 
        seconds={5} 
        autoStart={true}
        onComplete={onComplete}
        onTick={onTick}
      >
        {({ time }) => <div data-testid="time">{time.totalSeconds}</div>}
      </Timedown>
    );

    // Advance by 3 seconds (will call onTick 3 times: at 4s, 3s, 2s remaining)
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(onTick).toHaveBeenCalledTimes(3);
    expect(onComplete).not.toHaveBeenCalled();

    // Advance to completion (will call onTick 1 more time at 1s, then complete at 0s)
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(onTick).toHaveBeenCalledTimes(4);
  });

  it('should support custom format', () => {
    render(
      <Timedown 
        seconds={3665}
        format="custom"
        customFormat={(time) => `${time.hours}h ${time.minutes}m`}
      >
        {({ time }) => <div data-testid="formatted">{time.formatted}</div>}
      </Timedown>
    );

    expect(screen.getByTestId('formatted')).toHaveTextContent('1h 1m');
  });

  it('should work with duration prop', () => {
    render(
      <Timedown duration={{ minutes: 2, seconds: 30 }}>
        {({ time }) => <div data-testid="time">{time.totalSeconds}</div>}
      </Timedown>
    );

    expect(screen.getByTestId('time')).toHaveTextContent('150');
  });
});

