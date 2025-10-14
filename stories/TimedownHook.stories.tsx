import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useTimedown } from '../src';

// Demo component wrapper
const TimedownDemo = (props: any) => {
  const { time, start, pause, resume, reset, isRunning, isPaused, isCompleted } = useTimedown(props);

  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'monospace',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <div style={{ 
        fontSize: '72px', 
        fontWeight: 'bold', 
        textAlign: 'center',
        marginBottom: '40px',
        color: isCompleted ? '#ef4444' : '#000'
      }}>
        {time.formatted}
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <div>
          <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{time.days}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Days</div>
        </div>
        <div>
          <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{time.hours}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Hours</div>
        </div>
        <div>
          <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{time.minutes}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Minutes</div>
        </div>
        <div>
          <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{time.seconds}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Seconds</div>
        </div>
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '10px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {!isRunning && !isCompleted && (
          <button
            onClick={start}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Start
          </button>
        )}
        
        {isRunning && (
          <button
            onClick={pause}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              backgroundColor: '#f59e0b',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Pause
          </button>
        )}
        
        {isPaused && !isCompleted && (
          <button
            onClick={resume}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Resume
          </button>
        )}
        
        <button
          onClick={() => reset()}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#6b7280',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          Reset
        </button>
      </div>

      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        backgroundColor: '#f3f4f6',
        borderRadius: '8px'
      }}>
        <h3 style={{ marginTop: 0 }}>Status</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div>
            <strong>Running:</strong> {isRunning ? '✅' : '❌'}
          </div>
          <div>
            <strong>Paused:</strong> {isPaused ? '✅' : '❌'}
          </div>
          <div>
            <strong>Completed:</strong> {isCompleted ? '✅' : '❌'}
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof TimedownDemo> = {
  title: 'Timedown/Hook Examples',
  component: TimedownDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTimedown: Story = {
  args: {
    seconds: 60,
    autoStart: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic timedown starting from 60 seconds',
      },
    },
  },
};

export const AutoStart: Story = {
  args: {
    seconds: 30,
    autoStart: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Timedown that starts automatically',
      },
    },
  },
};

export const WithMinutes: Story = {
  args: {
    minutes: 5,
    autoStart: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Timedown with minutes prop (5 minutes)',
      },
    },
  },
};

export const WithDuration: Story = {
  args: {
    duration: {
      hours: 1,
      minutes: 30,
      seconds: 45,
    },
    autoStart: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Timedown initialized with duration object (1 hour, 30 minutes, 45 seconds)',
      },
    },
  },
};

export const DifferentFormat: Story = {
  args: {
    duration: {
      days: 2,
      hours: 5,
      minutes: 30,
    },
    format: 'DD:HH:MM:SS',
    autoStart: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Timedown with DD:HH:MM:SS format',
      },
    },
  },
};

export const MinutesSeconds: Story = {
  args: {
    minutes: 5,
    format: 'MM:SS',
    autoStart: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple MM:SS format timedown (5 minutes)',
      },
    },
  },
};

export const WithCallbacks: Story = {
  args: {
    seconds: 10,
    autoStart: false,
    onComplete: () => {
      alert('Timedown completed!');
    },
    onTick: (time: any) => {
      console.log('Current time:', time);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Timedown with onComplete and onTick callbacks (check console)',
      },
    },
  },
};

export const UntilDate: Story = {
  args: {
    until: new Date(Date.now() + 120000), // 2 minutes from now
    autoStart: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Timedown until a specific date (2 minutes from now)',
      },
    },
  },
};

export const CustomFormat: Story = {
  args: {
    seconds: 3665,
    format: 'custom',
    customFormat: (time: any) => {
      return `${time.hours}h ${time.minutes}m ${time.seconds}s`;
    },
    autoStart: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Timedown with custom format function',
      },
    },
  },
};

export const CombinedTimeUnits: Story = {
  args: {
    hours: 1,
    minutes: 30,
    seconds: 45,
    autoStart: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Timedown with combined time unit props',
      },
    },
  },
};

