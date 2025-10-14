import React, { useState, useEffect } from 'react';
import { useTimedown } from 'react-timedown';

// GitHub Icon Component
const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// NPM Icon Component
const NpmIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z"/>
  </svg>
);

// Moon Icon
const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

// Sun Icon
const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

// Copy Icon
const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

// Check Icon
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// Arrow Up Icon
const ArrowUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

// Copy Button Component
const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button className="copy-btn" onClick={handleCopy} title="Copy code">
      {copied ? <CheckIcon /> : <CopyIcon />}
      <span>{copied ? 'Copied!' : 'Copy'}</span>
    </button>
  );
};

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
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const installCode = `npm install @ooguzyuksel/react-timedown
# or
yarn add @ooguzyuksel/react-timedown`;

  const basicUsageCode = `import { useTimedown } from 'react-timedown';

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
}`;

  const simplePropsCode = `// Just use seconds, minutes, or hours!
const { time } = useTimedown({ seconds: 60 });
const { time } = useTimedown({ minutes: 5 });
const { time } = useTimedown({ hours: 2 });

// Or combine them
const { time } = useTimedown({
  hours: 1,
  minutes: 30,
  seconds: 45
});`;

  const durationCode = `const { time } = useTimedown({
  duration: {
    hours: 1,
    minutes: 30,
    seconds: 45
  },
  autoStart: true,
});`;

  const callbacksCode = `const { time } = useTimedown({
  seconds: 60,
  onComplete: () => {
    console.log('Timedown completed!');
  },
  onTick: (time) => {
    console.log('Current time:', time);
  },
});`;

  const customFormatCode = `const { time } = useTimedown({
  seconds: 3665,
  format: 'custom',
  customFormat: (time) => {
    return \`\${time.hours}h \${time.minutes}m \${time.seconds}s\`;
  },
});`;

  const untilDateCode = `const newYear = new Date('2026-01-01T00:00:00');

const { time } = useTimedown({
  until: newYear,
  autoStart: true,
});`;

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
              <a href="https://www.npmjs.com/package/@ooguzyuksel/react-timedown" target="_blank" rel="noopener noreferrer" className="nav-icon" title="NPM Package">
                <NpmIcon />
              </a>
              <a href="https://github.com/ooguzyuksel/react-timedown" target="_blank" rel="noopener noreferrer" className="nav-icon" title="GitHub Repository">
                <GitHubIcon />
              </a>
              <button onClick={toggleTheme} className="theme-toggle" title="Toggle theme">
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="badges">
            <a href="https://www.npmjs.com/package/@ooguzyuksel/react-timedown" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/npm/v/@ooguzyuksel/react-timedown.svg" alt="npm version" />
            </a>
            <a href="https://www.npmjs.com/package/@ooguzyuksel/react-timedown" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/npm/dm/@ooguzyuksel/react-timedown.svg" alt="npm downloads" />
            </a>
            <a href="https://github.com/ooguzyuksel/react-timedown/actions" target="_blank" rel="noopener noreferrer">
              <img src="https://github.com/ooguzyuksel/react-timedown/actions/workflows/ci.yml/badge.svg" alt="CI" />
            </a>
            <a href="https://github.com/ooguzyuksel/react-timedown" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/github/stars/ooguzyuksel/react-timedown?style=social" alt="GitHub stars" />
            </a>
          </div>
          <h1>React Timedown</h1>
          <p>A flexible, headless countdown timer hook and component for React applications</p>
          <div className="buttons">
            <a href="#usage" className="btn btn-primary">
              Get Started
            </a>
            <a href="https://ooguzyuksel.github.io/react-timedown" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              📚 View Storybook
            </a>
            <a href="https://github.com/ooguzyuksel/react-timedown" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <GitHubIcon /> View on GitHub
            </a>
          </div>
          <p className="hero-note">
            ✨ Check out <a href="https://ooguzyuksel.github.io/react-timedown" target="_blank" rel="noopener noreferrer">interactive examples</a> in Storybook
          </p>
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
          <p className="section-subtitle">
            Try these live examples, or explore <a href="https://ooguzyuksel.github.io/react-timedown" target="_blank" rel="noopener noreferrer">11+ interactive examples in Storybook →</a>
          </p>
          <div className="demo-grid">
            <DemoTimedown
              title="Basic Countdown (60s)"
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
            <div className="code-header">
              <h3>Installation</h3>
              <CopyButton code={installCode} />
            </div>
            <pre>
              <code>{installCode}</code>
            </pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <h3>Basic Usage</h3>
              <CopyButton code={basicUsageCode} />
            </div>
            <pre>
              <code>{basicUsageCode}</code>
            </pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <h3>Simple Props</h3>
              <CopyButton code={simplePropsCode} />
            </div>
            <pre>
              <code>{simplePropsCode}</code>
            </pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <h3>With Duration Object</h3>
              <CopyButton code={durationCode} />
            </div>
            <pre>
              <code>{durationCode}</code>
            </pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <h3>With Callbacks</h3>
              <CopyButton code={callbacksCode} />
            </div>
            <pre>
              <code>{callbacksCode}</code>
            </pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <h3>Custom Format</h3>
              <CopyButton code={customFormatCode} />
            </div>
            <pre>
              <code>{customFormatCode}</code>
            </pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <h3>Countdown Until Date</h3>
              <CopyButton code={untilDateCode} />
            </div>
            <pre>
              <code>{untilDateCode}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            Made with ❤️ by <a href="https://github.com/ooguzyuksel" target="_blank" rel="noopener noreferrer">@ooguzyuksel</a>
          </p>
          <p>
            <a href="https://github.com/ooguzyuksel/react-timedown">GitHub</a> • <a href="https://www.npmjs.com/package/@ooguzyuksel/react-timedown">NPM</a> • <a href="https://github.com/ooguzyuksel/react-timedown/blob/master/LICENSE">MIT License</a>
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop} title="Scroll to top">
          <ArrowUpIcon />
        </button>
      )}
    </div>
  );
}

export default App;
