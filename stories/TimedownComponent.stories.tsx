import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Timedown } from '../src';

const meta: Meta<typeof Timedown> = {
  title: 'Timedown/Component Examples',
  component: Timedown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicComponent: Story = {
  args: {
    seconds: 60,
    autoStart: false,
  },
  render: (args) => (
    <Timedown {...args}>
      {({ time, start, pause, resume, reset, isRunning, isPaused }) => (
        <div style={{ 
          padding: '40px', 
          fontFamily: 'monospace',
          maxWidth: '600px',
          textAlign: 'center'
        }}>
          <div style={{ 
            fontSize: '72px', 
            fontWeight: 'bold', 
            marginBottom: '40px',
            color: '#000'
          }}>
            {time.formatted}
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '30px',
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
            {!isRunning && (
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
            
            {isPaused && (
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
        </div>
      )}
    </Timedown>
  ),
};

export const MinimalComponent: Story = {
  args: {
    seconds: 60,
    autoStart: true,
  },
  render: (args) => (
    <Timedown {...args}>
      {({ time }) => (
        <div style={{ fontSize: '48px', fontFamily: 'monospace', fontWeight: 'bold' }}>
          {time.formatted}
        </div>
      )}
    </Timedown>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Minimal component with just time display',
      },
    },
  },
};

export const CustomUI: Story = {
  args: {
    minutes: 5,
    autoStart: false,
  },
  render: (args) => (
    <Timedown {...args}>
      {({ time, start, pause, isRunning, isCompleted }) => (
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '50px',
          borderRadius: '20px',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
          minWidth: '400px'
        }}>
          <h2 style={{ margin: '0 0 30px 0', fontSize: '24px' }}>
            {isCompleted ? '🎉 Time\'s Up!' : '⏰ Timedown Timer'}
          </h2>
          
          <div style={{
            fontSize: '64px',
            fontWeight: 'bold',
            marginBottom: '40px',
            letterSpacing: '4px'
          }}>
            {time.minutes.toString().padStart(2, '0')}:{time.seconds.toString().padStart(2, '0')}
          </div>

          <button
            onClick={isRunning ? pause : start}
            style={{
              padding: '16px 48px',
              fontSize: '18px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              border: '2px solid white',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 'bold',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s'
            }}
          >
            {isRunning ? '⏸ Pause' : '▶ Start'}
          </button>
        </div>
      )}
    </Timedown>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Custom styled component with gradient background',
      },
    },
  },
};

export const SimpleProgressBar: Story = {
  args: {
    seconds: 30,
    autoStart: false,
  },
  render: (args) => (
    <Timedown {...args}>
      {({ time, start, pause, reset, isRunning }) => {
        const progress = (time.totalSeconds / 30) * 100;
        
        return (
          <div style={{
            padding: '30px',
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            minWidth: '400px'
          }}>
            <div style={{
              fontSize: '48px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '20px',
              fontFamily: 'monospace'
            }}>
              {time.formatted}
            </div>

            <div style={{
              height: '20px',
              backgroundColor: '#e9ecef',
              borderRadius: '10px',
              overflow: 'hidden',
              marginBottom: '20px'
            }}>
              <div style={{
                height: '100%',
                width: `${progress}%`,
                backgroundColor: progress > 50 ? '#10b981' : progress > 20 ? '#f59e0b' : '#ef4444',
                transition: 'all 0.3s ease'
              }} />
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button
                onClick={isRunning ? pause : start}
                style={{
                  padding: '10px 20px',
                  fontSize: '14px',
                  backgroundColor: isRunning ? '#f59e0b' : '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                {isRunning ? 'Pause' : 'Start'}
              </button>
              <button
                onClick={() => reset()}
                style={{
                  padding: '10px 20px',
                  fontSize: '14px',
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
          </div>
        );
      }}
    </Timedown>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Simple component with color-coded progress bar visualization',
      },
    },
  },
};

export const CircularTimedown: Story = {
  args: {
    seconds: 60,
    autoStart: false,
  },
  render: (args) => (
    <Timedown {...args}>
      {({ time, start, pause, isRunning }) => {
        const progress = (time.totalSeconds / 60) * 100;
        const strokeDasharray = 2 * Math.PI * 90;
        const strokeDashoffset = strokeDasharray - (strokeDasharray * progress) / 100;
        
        return (
          <div style={{
            padding: '40px',
            textAlign: 'center'
          }}>
            <svg width="200" height="200" style={{ transform: 'rotate(-90deg)' }}>
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#e9ecef"
                strokeWidth="12"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="12"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.3s ease' }}
              />
              <text
                x="100"
                y="110"
                textAnchor="middle"
                fontSize="48"
                fontWeight="bold"
                fill="#000"
                style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}
              >
                {time.seconds}
              </text>
            </svg>

            <div style={{ marginTop: '30px' }}>
              <button
                onClick={isRunning ? pause : start}
                style={{
                  padding: '12px 32px',
                  fontSize: '16px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                {isRunning ? 'Pause' : 'Start'}
              </button>
            </div>
          </div>
        );
      }}
    </Timedown>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Circular timedown with SVG progress indicator',
      },
    },
  },
};

export const WithCallbacks: Story = {
  args: {
    seconds: 10,
    autoStart: false,
  },
  render: (args) => {
    const [logs, setLogs] = React.useState<string[]>([]);
    const [isComplete, setIsComplete] = React.useState(false);
    
    const handleTick = (time: any) => {
      setLogs(prev => [...prev, `⏱️  Tick: ${time.formatted} (${time.totalSeconds}s remaining)`].slice(-5));
    };
    
    const handleComplete = () => {
      setIsComplete(true);
      setLogs(prev => [...prev, '🎉 Timedown completed!']);
    };
    
    return (
      <Timedown 
        {...args}
        onTick={handleTick}
        onComplete={handleComplete}
      >
        {({ time, start, pause, resume, reset, isRunning, isPaused }) => (
          <div style={{ 
            padding: '40px', 
            fontFamily: 'system-ui',
            maxWidth: '600px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '16px',
            color: 'white'
          }}>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '20px' }}>
              Callback Demo
            </h3>
            
            <div style={{ 
              fontSize: '64px', 
              fontWeight: 'bold', 
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              {time.formatted}
            </div>
            
            {isComplete && (
              <div style={{
                padding: '16px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                marginBottom: '20px',
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: 'bold'
              }}>
                🎉 Completed!
              </div>
            )}

            <div style={{ 
              display: 'flex', 
              gap: '10px',
              justifyContent: 'center',
              marginBottom: '20px',
              flexWrap: 'wrap'
            }}>
              {!isRunning && !isPaused && (
                <button
                  onClick={start}
                  style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: '#667eea',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  ▶️ Start
                </button>
              )}
              {isRunning && (
                <button
                  onClick={pause}
                  style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: '#667eea',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  ⏸️ Pause
                </button>
              )}
              {isPaused && (
                <button
                  onClick={resume}
                  style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: '#667eea',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  ▶️ Resume
                </button>
              )}
              <button
                onClick={() => {
                  reset();
                  setLogs([]);
                  setIsComplete(false);
                }}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#667eea',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                🔄 Reset
              </button>
            </div>

            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '16px',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '14px',
              height: '150px',
              overflowY: 'auto'
            }}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Event Log:</div>
              {logs.length === 0 && (
                <div style={{ opacity: 0.6 }}>Click "Start" to see events...</div>
              )}
              {logs.map((log, i) => (
                <div key={i} style={{ marginBottom: '4px' }}>{log}</div>
              ))}
            </div>
          </div>
        )}
      </Timedown>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing onTick and onComplete callbacks in action',
      },
    },
  },
};

export const OnTickExample: Story = {
  args: {
    seconds: 15,
    autoStart: false,
  },
  render: (args) => {
    const [tickCount, setTickCount] = React.useState(0);
    const [lastTickTime, setLastTickTime] = React.useState('--:--:--');
    
    const handleTick = (time: any) => {
      setTickCount(prev => prev + 1);
      setLastTickTime(time.formatted);
    };
    
    return (
      <Timedown {...args} onTick={handleTick}>
        {({ time, start, pause, reset, isRunning }) => (
          <div style={{ 
            padding: '40px', 
            fontFamily: 'system-ui',
            maxWidth: '500px',
            background: '#f8fafc',
            borderRadius: '12px',
            border: '2px solid #e2e8f0'
          }}>
            <h3 style={{ margin: '0 0 20px 0', color: '#1e293b' }}>
              onTick Callback Demo
            </h3>
            
            <div style={{ 
              fontSize: '48px', 
              fontWeight: 'bold', 
              marginBottom: '30px',
              textAlign: 'center',
              color: '#0ea5e9'
            }}>
              {time.formatted}
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: '20px'
            }}>
              <div style={{
                padding: '16px',
                background: 'white',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#0ea5e9' }}>
                  {tickCount}
                </div>
                <div style={{ fontSize: '14px', color: '#64748b' }}>
                  Total Ticks
                </div>
              </div>
              <div style={{
                padding: '16px',
                background: 'white',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#0ea5e9' }}>
                  {lastTickTime}
                </div>
                <div style={{ fontSize: '14px', color: '#64748b' }}>
                  Last Tick
                </div>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '10px',
              justifyContent: 'center'
            }}>
              <button
                onClick={isRunning ? pause : start}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  backgroundColor: isRunning ? '#f59e0b' : '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                {isRunning ? '⏸️ Pause' : '▶️ Start'}
              </button>
              <button
                onClick={() => {
                  reset();
                  setTickCount(0);
                  setLastTickTime('--:--:--');
                }}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  backgroundColor: '#6366f1',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                🔄 Reset
              </button>
            </div>
          </div>
        )}
      </Timedown>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates onTick callback being called every second',
      },
    },
  },
};

export const OnCompleteExample: Story = {
  args: {
    seconds: 5,
    autoStart: false,
  },
  render: (args) => {
    const [completionCount, setCompletionCount] = React.useState(0);
    const [showConfetti, setShowConfetti] = React.useState(false);
    
    const handleComplete = () => {
      setCompletionCount(prev => prev + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    };
    
    return (
      <Timedown {...args} onComplete={handleComplete}>
        {({ time, start, reset, isRunning, isCompleted }) => (
          <div style={{ 
            padding: '40px', 
            fontFamily: 'system-ui',
            maxWidth: '400px',
            background: isCompleted ? '#10b981' : '#1e293b',
            borderRadius: '12px',
            color: 'white',
            transition: 'background 0.3s',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {showConfetti && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '100px',
                animation: 'bounce 1s ease-in-out',
                pointerEvents: 'none'
              }}>
                🎉
              </div>
            )}
            
            <h3 style={{ margin: '0 0 20px 0' }}>
              onComplete Callback Demo
            </h3>
            
            <div style={{ 
              fontSize: '72px', 
              fontWeight: 'bold', 
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              {time.seconds}
            </div>

            {isCompleted && (
              <div style={{
                padding: '16px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                marginBottom: '20px',
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: 'bold'
              }}>
                ✅ Completed!
              </div>
            )}

            <div style={{
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '4px' }}>
                Completion Count
              </div>
              <div style={{ fontSize: '36px', fontWeight: 'bold' }}>
                {completionCount}
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '10px',
              justifyContent: 'center'
            }}>
              <button
                onClick={start}
                disabled={isRunning}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  backgroundColor: isRunning ? '#64748b' : 'white',
                  color: isRunning ? 'white' : '#1e293b',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: isRunning ? 'not-allowed' : 'pointer',
                  fontWeight: '600',
                  opacity: isRunning ? 0.5 : 1
                }}
              >
                ▶️ Start
              </button>
              <button
                onClick={() => {
                  reset();
                  setShowConfetti(false);
                }}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  backgroundColor: 'white',
                  color: '#1e293b',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                🔄 Reset
              </button>
            </div>

            <div style={{
              marginTop: '20px',
              padding: '12px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '6px',
              fontSize: '12px',
              textAlign: 'center',
              opacity: 0.8
            }}>
              💡 Watch the background change and confetti appear when complete!
            </div>
          </div>
        )}
      </Timedown>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates onComplete callback being called when timedown finishes',
      },
    },
  },
};

export const ProgressBar: Story = {
  args: {
    seconds: 30,
    autoStart: false,
  },
  render: (args) => (
    <Timedown {...args}>
      {({ time, start, pause, resume, reset, isRunning, isPaused }) => {
        const progress = ((args.seconds! - time.totalSeconds) / args.seconds!) * 100;
        
        return (
          <div style={{ 
            padding: '40px', 
            fontFamily: 'system-ui',
            maxWidth: '500px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ margin: '0 0 20px 0', color: '#1e293b' }}>
              Progress Bar Example
            </h3>
            
            <div style={{ 
              fontSize: '48px', 
              fontWeight: 'bold', 
              marginBottom: '30px',
              textAlign: 'center',
              color: '#6366f1'
            }}>
              {time.formatted}
            </div>

            <div style={{
              width: '100%',
              height: '16px',
              backgroundColor: '#e5e7eb',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '30px',
              position: 'relative'
            }}>
              <div style={{
                width: `${progress}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)',
                transition: 'width 0.3s ease',
                borderRadius: '8px'
              }} />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '10px',
                fontWeight: 'bold',
                color: progress > 50 ? 'white' : '#1e293b'
              }}>
                {Math.round(progress)}%
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '10px',
              justifyContent: 'center'
            }}>
              {!isRunning && !isPaused && (
                <button
                  onClick={start}
                  style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    backgroundColor: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  ▶️ Start
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
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  ⏸️ Pause
                </button>
              )}
              {isPaused && (
                <button
                  onClick={resume}
                  style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    backgroundColor: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  ▶️ Resume
                </button>
              )}
              <button
                onClick={() => reset()}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  backgroundColor: '#6366f1',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                🔄 Reset
              </button>
            </div>
          </div>
        );
      }}
    </Timedown>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Linear progress bar that fills as the timedown progresses',
      },
    },
  },
};

export const DifferentFormats: Story = {
  args: {
    duration: { hours: 1, minutes: 30, seconds: 45 },
    autoStart: false,
  },
  render: (args) => (
    <div style={{ 
      display: 'grid',
      gap: '20px',
      padding: '20px',
      fontFamily: 'system-ui'
    }}>
      <Timedown {...args} format="HH:MM:SS">
        {({ time, start }) => (
          <div style={{ 
            padding: '20px', 
            background: '#fef3c7',
            borderRadius: '8px',
            border: '2px solid #fbbf24'
          }}>
            <div style={{ fontSize: '14px', color: '#92400e', marginBottom: '8px' }}>
              Format: HH:MM:SS
            </div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#92400e' }}>
              {time.formatted}
            </div>
          </div>
        )}
      </Timedown>

      <Timedown {...args} format="MM:SS">
        {({ time }) => (
          <div style={{ 
            padding: '20px', 
            background: '#dbeafe',
            borderRadius: '8px',
            border: '2px solid #3b82f6'
          }}>
            <div style={{ fontSize: '14px', color: '#1e40af', marginBottom: '8px' }}>
              Format: MM:SS (Total minutes)
            </div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e40af' }}>
              {time.formatted}
            </div>
          </div>
        )}
      </Timedown>

      <Timedown {...args} format="DD:HH:MM:SS">
        {({ time }) => (
          <div style={{ 
            padding: '20px', 
            background: '#dcfce7',
            borderRadius: '8px',
            border: '2px solid #10b981'
          }}>
            <div style={{ fontSize: '14px', color: '#065f46', marginBottom: '8px' }}>
              Format: DD:HH:MM:SS
            </div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#065f46' }}>
              {time.formatted}
            </div>
          </div>
        )}
      </Timedown>

      <Timedown 
        {...args}
        format="custom"
        customFormat={(time) => `${time.hours}h ${time.minutes}m ${time.seconds}s`}
      >
        {({ time }) => (
          <div style={{ 
            padding: '20px', 
            background: '#fae8ff',
            borderRadius: '8px',
            border: '2px solid #a855f7'
          }}>
            <div style={{ fontSize: '14px', color: '#6b21a8', marginBottom: '8px' }}>
              Custom Format
            </div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#6b21a8' }}>
              {time.formatted}
            </div>
          </div>
        )}
      </Timedown>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different time format options for displaying the timedown',
      },
    },
  },
};

export const ResetWithDifferentTimes: Story = {
  args: {
    seconds: 30,
    autoStart: false,
  },
  render: (args) => (
    <Timedown {...args}>
      {({ time, start, pause, reset, isRunning }) => (
        <div style={{ 
          padding: '40px', 
          fontFamily: 'system-ui',
          maxWidth: '500px',
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          borderRadius: '16px',
          color: 'white'
        }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '20px' }}>
            Reset with Different Times
          </h3>
          
          <div style={{ 
            fontSize: '64px', 
            fontWeight: 'bold', 
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            {time.formatted}
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '20px'
          }}>
            <button
              onClick={isRunning ? pause : start}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#f5576c',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              {isRunning ? '⏸️ Pause' : '▶️ Start'}
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '10px'
          }}>
            <button
              onClick={() => reset({ seconds: 10 })}
              style={{
                padding: '12px 16px',
                fontSize: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Reset to 10s
            </button>
            <button
              onClick={() => reset({ seconds: 30 })}
              style={{
                padding: '12px 16px',
                fontSize: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Reset to 30s
            </button>
            <button
              onClick={() => reset({ minutes: 1 })}
              style={{
                padding: '12px 16px',
                fontSize: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Reset to 1min
            </button>
            <button
              onClick={() => reset({ minutes: 5 })}
              style={{
                padding: '12px 16px',
                fontSize: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Reset to 5min
            </button>
          </div>

          <div style={{
            marginTop: '20px',
            padding: '12px',
            background: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '6px',
            fontSize: '12px',
            textAlign: 'center',
            opacity: 0.9
          }}>
            💡 Click any button to reset with different times
          </div>
        </div>
      )}
    </Timedown>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates resetting the timedown with different time values',
      },
    },
  },
};

export const UntilSpecificDate: Story = {
  args: {
    until: new Date(Date.now() + 120000), // 2 minutes from now
    autoStart: true,
  },
  render: (args) => (
    <Timedown {...args}>
      {({ time, pause, resume, isRunning }) => (
        <div style={{ 
          padding: '40px', 
          fontFamily: 'system-ui',
          maxWidth: '500px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>
            Countdown Until Date
          </h3>
          <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '30px' }}>
            {new Date(Date.now() + 120000).toLocaleTimeString()}
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px',
            marginBottom: '30px'
          }}>
            <div style={{
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold' }}>
                {time.days}
              </div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>
                DAYS
              </div>
            </div>
            <div style={{
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold' }}>
                {time.hours}
              </div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>
                HOURS
              </div>
            </div>
            <div style={{
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold' }}>
                {time.minutes}
              </div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>
                MIN
              </div>
            </div>
            <div style={{
              padding: '16px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold' }}>
                {time.seconds}
              </div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>
                SEC
              </div>
            </div>
          </div>

          <button
            onClick={isRunning ? pause : resume}
            style={{
              padding: '12px 32px',
              fontSize: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: '#667eea',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            {isRunning ? '⏸️ Pause' : '▶️ Resume'}
          </button>
        </div>
      )}
    </Timedown>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Countdown until a specific date and time using the `until` prop',
      },
    },
  },
};

export const AutoStartExample: Story = {
  args: {
    seconds: 15,
    autoStart: true,
  },
  render: (args) => (
    <Timedown {...args}>
      {({ time, pause, resume, reset, isRunning }) => (
        <div style={{ 
          padding: '40px', 
          fontFamily: 'system-ui',
          maxWidth: '400px',
          background: '#0f172a',
          borderRadius: '16px',
          color: 'white',
          textAlign: 'center',
          border: '2px solid #1e293b'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: '#10b981',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            AUTO-START ENABLED
          </div>
          
          <div style={{ 
            fontSize: '72px', 
            fontWeight: 'bold', 
            marginBottom: '30px',
            color: '#10b981'
          }}>
            {time.seconds}
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '10px',
            justifyContent: 'center'
          }}>
            <button
              onClick={isRunning ? pause : resume}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                backgroundColor: isRunning ? '#f59e0b' : '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              {isRunning ? '⏸️ Pause' : '▶️ Resume'}
            </button>
            <button
              onClick={() => reset()}
              style={{
                padding: '12px 24px',
                fontSize: '16px',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              🔄 Reset
            </button>
          </div>

          <div style={{
            marginTop: '20px',
            padding: '12px',
            background: 'rgba(16, 185, 129, 0.1)',
            borderRadius: '6px',
            fontSize: '12px',
            opacity: 0.8
          }}>
            💡 Started automatically when component mounted
          </div>
        </div>
      )}
    </Timedown>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Timedown that starts automatically when mounted with autoStart=true',
      },
    },
  },
};

