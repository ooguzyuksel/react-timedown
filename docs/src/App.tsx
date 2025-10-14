import React, { useState } from 'react';
import { useTimedown } from 'react-timedown';

const DemoTimedown = ({ 
  title, 
  ...props
}: any) => {
  const { time, start, pause, resume, reset, isRunning, isPaused } = useTimedown(props);

  return (
    <div className="demo-card">
      <h3>{title}</h3>
      <div className="timedown-display">{time.formatted}</div>
      <div className="timedown-units">
        <div className="timedown-unit">
          <div className="timedown-unit-value">{time.days}</div>
          <div className="timedown-unit-label">Days</div>
        </div>
        <div className="timedown-unit">
          <div className="timedown-unit-value">{time.hours}</div>
          <div className="timedown-unit-label">Hours</div>
        </div>
        <div className="timedown-unit">
          <div className="timedown-unit-value">{time.minutes}</div>
          <div className="timedown-unit-label">Minutes</div>
        </div>
        <div className="timedown-unit">
          <div className="timedown-unit-value">{time.seconds}</div>
          <div className="timedown-unit-label">Seconds</div>
        </div>
      </div>
      <div className="demo-controls">
        {!isRunning && (
          <button className="demo-btn demo-btn-start" onClick={start}>
            Start
          </button>
        )}
        {isRunning && (
          <button className="demo-btn demo-btn-pause" onClick={pause}>
            Pause
          </button>
        )}
        {isPaused && (
          <button className="demo-btn demo-btn-resume" onClick={resume}>
            Resume
          </button>
        )}
        <button className="demo-btn demo-btn-reset" onClick={() => reset()}>
          Reset
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">⏰ React Timedown</div>
            <nav className="nav">
              <a href="#features">Features</a>
              <a href="#demo">Demo</a>
              <a href="#usage">Usage</a>
              <a href="https://github.com/ooguzyuksel/react-timedown" target="_blank">
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>React Timedown</h1>
          <p>A flexible, headless timedown timer hook and component for React applications</p>
          <div className="buttons">
            <a href="#usage" className="btn btn-primary">
              Get Started
            </a>
            <a href="https://github.com/ooguzyuksel/react-timedown" className="btn btn-secondary">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features">
        <div className="container">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Headless Design</h3>
              <p>Complete control over your UI. We provide the logic, you provide the design.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Flexible Input</h3>
              <p>Accept seconds, minutes, hours, days, or even Date objects as input.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Custom Formatting</h3>
              <p>Multiple built-in formats or create your own custom formatter.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Full Control</h3>
              <p>Start, pause, resume, and reset with simple method calls.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h3>TypeScript Ready</h3>
              <p>Written in TypeScript with full type definitions included.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🪶</div>
              <h3>Lightweight</h3>
              <p>Zero dependencies (except React). Tiny bundle size.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="demo">
        <div className="container">
          <h2>Live Demo</h2>
          <div className="demo-grid">
            <DemoTimedown
              title="Basic Timedown (60s)"
              seconds={60}
              format="HH:MM:SS"
            />
            <DemoTimedown
              title="Duration Object (1h 30m)"
              duration={{ hours: 1, minutes: 30 }}
              format="HH:MM:SS"
            />
            <DemoTimedown
              title="Days Format"
              duration={{ days: 2, hours: 5, minutes: 30 }}
              format="DD:HH:MM:SS"
            />
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section id="usage" className="code-section">
        <div className="container">
          <h2>Usage</h2>

          <div className="code-block">
            <h3>Installation</h3>
            <pre>
              <code>{`npm install react-timedown
# or
yarn add react-timedown`}</code>
            </pre>
          </div>

          <div className="code-block">
            <h3>Basic Usage</h3>
            <pre>
              <code>{`import { useTimedown } from 'react-timedown';

function MyTimedown() {
  const { time, start, pause, reset, isRunning } = useTimedown({
    seconds: 60, // Clear: 60 seconds!
  });

  return (
    <div>
      <div>{time.formatted}</div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`}</code>
            </pre>
          </div>

          <div className="code-block">
            <h3>Simple Props</h3>
            <pre>
              <code>{`// Just use seconds, minutes, or hours!
const { time } = useTimedown({ seconds: 60 });
const { time } = useTimedown({ minutes: 5 });
const { time } = useTimedown({ hours: 2 });

// Or combine them
const { time } = useTimedown({
  hours: 1,
  minutes: 30,
  seconds: 45
});`}</code>
            </pre>
          </div>

          <div className="code-block">
            <h3>With Duration Object</h3>
            <pre>
              <code>{`const { time } = useTimedown({
  duration: {
    hours: 1,
    minutes: 30,
    seconds: 45
  },
  autoStart: true,
});`}</code>
            </pre>
          </div>

          <div className="code-block">
            <h3>With Callbacks</h3>
            <pre>
              <code>{`const { time } = useTimedown({
  seconds: 60,
  onComplete: () => {
    console.log('Timedown completed!');
  },
  onTick: (time) => {
    console.log('Current time:', time);
  },
});`}</code>
            </pre>
          </div>

          <div className="code-block">
            <h3>Custom Format</h3>
            <pre>
              <code>{`const { time } = useTimedown({
  seconds: 3665,
  format: 'custom',
  customFormat: (time) => {
    return \`\${time.hours}h \${time.minutes}m \${time.seconds}s\`;
  },
});`}</code>
            </pre>
          </div>

          <div className="code-block">
            <h3>Timedown Until Date</h3>
            <pre>
              <code>{`const newYear = new Date('2026-01-01T00:00:00');

const { time } = useTimedown({
  until: newYear,
  autoStart: true,
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            Made with ❤️ | <a href="https://github.com/ooguzyuksel/react-timedown">GitHub</a> | MIT License
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

