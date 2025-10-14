# ⏰ React Timedown

A flexible, headless countdown timer hook and component for React applications. Built with TypeScript and designed for maximum flexibility.

[![npm version](https://img.shields.io/npm/v/react-timedown.svg)](https://www.npmjs.com/package/react-timedown)
[![npm downloads](https://img.shields.io/npm/dm/react-timedown.svg)](https://www.npmjs.com/package/react-timedown)
[![CI](https://github.com/ooguzyuksel/react-timedown/actions/workflows/ci.yml/badge.svg)](https://github.com/ooguzyuksel/react-timedown/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/ooguzyuksel/react-timedown/branch/master/graph/badge.svg)](https://codecov.io/gh/ooguzyuksel/react-timedown)
[![license](https://img.shields.io/npm/l/react-timedown.svg)](https://github.com/ooguzyuksel/react-timedown/blob/master/LICENSE)

## Features

- 🎯 **Headless Design** - Complete control over your UI
- ⚡ **Flexible Input** - Accepts seconds, minutes, hours, days, or Date objects
- 🎨 **Custom Formatting** - Multiple built-in formats or create your own
- 🔄 **Full Control** - Start, pause, resume, and reset functionality
- 📦 **TypeScript Ready** - Written in TypeScript with full type definitions
- 🪶 **Lightweight** - Zero dependencies (except React)
- ✅ **Well Tested** - Comprehensive test coverage

## Installation

```bash
npm install react-timedown
```

or

```bash
yarn add react-timedown
```

## Quick Start

### Using the Hook

```tsx
import { useTimedown } from 'react-timedown';

function MyTimedown() {
  const { time, start, pause, reset, isRunning } = useTimedown({
    seconds: 60, // 60 seconds - CLEAR AND EXPLICIT!
  });

  return (
    <div>
      <div>{time.formatted}</div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

### Using the Component (Render Props)

```tsx
import { Timedown } from 'react-timedown';

function MyTimedown() {
  return (
    <Timedown seconds={60}>
      {({ time, start, pause, reset, isRunning }) => (
        <div>
          <div>{time.formatted}</div>
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={reset}>Reset</button>
        </div>
      )}
    </Timedown>
  );
}
```

## Usage Examples

### Hook Examples

#### Simple Usage - Seconds

```tsx
// Most straightforward - just pass seconds
const { time, start } = useTimedown({
  seconds: 60, // Clear: 60 seconds
  autoStart: false,
});
```

#### Simple Usage - Minutes

```tsx
// Or use minutes prop
const { time, pause } = useTimedown({
  minutes: 5, // Clear: 5 minutes
  autoStart: true,
});
```

#### Simple Usage - Hours

```tsx
// Or hours
const { time } = useTimedown({
  hours: 2, // Clear: 2 hours
  autoStart: true,
});
```

#### Combined Time Units

```tsx
// Combine multiple units - they add up!
const { time } = useTimedown({
  hours: 1,
  minutes: 30,
  seconds: 45,
  autoStart: true,
});
// Total: 5445 seconds
```

#### Using Duration Object

```tsx
// For complex durations, use the duration prop
const { time } = useTimedown({
  duration: {
    days: 2,
    hours: 5,
    minutes: 30,
    seconds: 15,
  },
  autoStart: true,
});
```

#### Countdown Until a Specific Date

```tsx
const newYear = new Date('2026-01-01T00:00:00');

const { time } = useTimedown({
  until: newYear, // Countdown until New Year
  autoStart: true,
});
```

#### With Callbacks

```tsx
const { time } = useTimedown({
  seconds: 60,
  onComplete: () => {
    console.log('Timedown completed!');
    // Show notification, play sound, etc.
  },
  onTick: (time) => {
    console.log('Current time:', time);
    // Update document title, etc.
  },
});
```

#### Custom Format

```tsx
const { time } = useTimedown({
  seconds: 3665, // 1 hour, 1 minute, 5 seconds
  format: 'custom',
  customFormat: (time) => {
    return `${time.hours}h ${time.minutes}m ${time.seconds}s`;
  },
});
```

#### Different Built-in Formats

```tsx
// Format: HH:MM:SS (default)
const timedown1 = useTimedown({ seconds: 3665 });
// Result: 01:01:05

// Format: MM:SS
const timedown2 = useTimedown({ 
  seconds: 3665,
  format: 'MM:SS' 
});
// Result: 61:05

// Format: DD:HH:MM:SS
const timedown3 = useTimedown({ 
  duration: { days: 2, hours: 5, minutes: 30 },
  format: 'DD:HH:MM:SS' 
});
// Result: 02:05:30:00

// Format: HH:MM:SS:MS
const timedown4 = useTimedown({ 
  seconds: 60,
  format: 'HH:MM:SS:MS' 
});
// Result: 00:01:00:000
```

#### Custom End Time

```tsx
const { time } = useTimedown({
  seconds: 60,
  endTime: 10, // Stop at 10 seconds instead of 0
  onComplete: () => {
    console.log('Reached 10 seconds!');
  },
});
```

#### Full Control Example

```tsx
function AdvancedTimedown() {
  const { 
    time, 
    start, 
    pause, 
    resume, 
    reset,
    isRunning,
    isPaused,
    isCompleted
  } = useTimedown({
    minutes: 5,
  });

  return (
    <div>
      <h1>{time.formatted}</h1>
      
      <div>
        <p>Days: {time.days}</p>
        <p>Hours: {time.hours}</p>
        <p>Minutes: {time.minutes}</p>
        <p>Seconds: {time.seconds}</p>
        <p>Total Seconds: {time.totalSeconds}</p>
      </div>

      <div>
        {!isRunning && !isCompleted && (
          <button onClick={start}>Start</button>
        )}
        {isRunning && (
          <button onClick={pause}>Pause</button>
        )}
        {isPaused && (
          <button onClick={resume}>Resume</button>
        )}
        <button onClick={() => reset()}>Reset</button>
        <button onClick={() => reset(600)}>Reset to 10 minutes</button>
      </div>

      <div>
        <p>Status:</p>
        <p>Running: {isRunning ? 'Yes' : 'No'}</p>
        <p>Paused: {isPaused ? 'Yes' : 'No'}</p>
        <p>Completed: {isCompleted ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}
```

### Component Examples (Render Props Pattern)

#### Basic Component Usage

```tsx
<Timedown seconds={60}>
  {({ time, start, pause, isRunning }) => (
    <div>
      <h1>{time.formatted}</h1>
      <button onClick={isRunning ? pause : start}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  )}
</Timedown>
```

#### Custom Styled Component

```tsx
<Timedown minutes={5} autoStart={false}>
  {({ time, start, pause, isRunning }) => (
    <div className="custom-timedown">
      <div className="timer-display">
        {time.minutes}:{time.seconds.toString().padStart(2, '0')}
      </div>
      <button onClick={isRunning ? pause : start}>
        {isRunning ? '⏸ Pause' : '▶ Start'}
      </button>
    </div>
  )}
</Timedown>
```

#### With Progress Bar

```tsx
<Timedown seconds={60}>
  {({ time, start, pause, reset, isRunning }) => {
    const progress = (time.totalSeconds / 60) * 100;
    
    return (
      <div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        <div className="time">{time.formatted}</div>
        <div className="controls">
          <button onClick={isRunning ? pause : start}>
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button onClick={() => reset()}>Reset</button>
        </div>
      </div>
    );
  }}
</Timedown>
```

#### Circular Progress Indicator

```tsx
<Timedown seconds={60}>
  {({ time, start, isRunning }) => {
    const progress = (time.totalSeconds / 60) * 100;
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (progress / 100) * circumference;
    
    return (
      <div style={{ 
        position: 'relative', 
        width: '160px', 
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}>
        <svg width="160" height="160">
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="url(#gradient)"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 80 80)"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
        <div style={{ 
          position: 'absolute', 
          top: '65px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px'
        }}>
          <strong style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937' }}>
            {time.seconds}
          </strong>
          <span style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase' }}>
            seconds
          </span>
        </div>
        <button 
          onClick={start}
          style={{
            padding: '8px 24px',
            borderRadius: '8px',
            border: 'none',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            color: 'white',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {isRunning ? 'Running...' : 'Start'}
        </button>
      </div>
    );
  }}
</Timedown>
```

## API Reference

### `useTimedown(props)` Hook

#### Props

**Time Input (choose ONE approach):**

| Prop | Type | Description |
|------|------|-------------|
| `seconds` | `number` | Simple: countdown from X seconds |
| `minutes` | `number` | Simple: countdown from X minutes |
| `hours` | `number` | Simple: countdown from X hours |
| `days` | `number` | Simple: countdown from X days |
| `duration` | `Duration` | Complex: combined time units |
| `until` | `Date` | Countdown until a specific date/time |

**Note:** You can combine `seconds`, `minutes`, `hours`, and `days` - they will add up!

**Options:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `autoStart` | `boolean` | `false` | Whether to start countdown automatically |
| `format` | `TimeFormat` | `'HH:MM:SS'` | Time format (see formats below) |
| `customFormat` | `(time: FormattedTime) => string` | `undefined` | Custom format function |
| `interval` | `number` | `1000` | Update interval in milliseconds |
| `endTime` | `number` | `0` | End countdown at specific second |
| `onComplete` | `() => void` | `undefined` | Callback when countdown completes |
| `onTick` | `(time: FormattedTime) => void` | `undefined` | Callback on each tick |

#### Return Value

```typescript
{
  time: FormattedTime;      // Current time object
  start: () => void;         // Start the countdown
  pause: () => void;         // Pause the countdown
  resume: () => void;        // Resume the countdown
  reset: (newTime?: ResetTimeInput) => void; // Reset countdown
  isRunning: boolean;        // Whether countdown is running
  isPaused: boolean;         // Whether countdown is paused
  isCompleted: boolean;      // Whether countdown is completed
}
```

### `<Timedown>` Component

The Timedown component uses the render props pattern, providing complete UI control while handling all countdown logic internally.

#### Props

Same as `useTimedown` props plus:

| Prop | Type | Description |
|------|------|-------------|
| `children` | `(timedown: UseTimedownReturn) => ReactNode` | **Required** - Render function that receives countdown state and methods |

#### Example

```tsx
<Timedown seconds={60} autoStart>
  {({ time, start, pause, reset, isRunning, isPaused, isCompleted }) => (
    // Your custom UI here
  )}
</Timedown>
```

### Types

#### `Duration`

```typescript
interface Duration {
  seconds?: number;
  minutes?: number;
  hours?: number;
  days?: number;
}
```

#### `ResetTimeInput`

```typescript
type ResetTimeInput = Duration | Date;
```

#### `TimeFormat`

```typescript
type TimeFormat = 
  | 'HH:MM:SS'      // 01:30:45
  | 'MM:SS'         // 90:45
  | 'HH:MM:SS:MS'   // 01:30:45:123
  | 'DD:HH:MM:SS'   // 02:01:30:45
  | 'custom';       // Use customFormat function
```

#### `FormattedTime`

```typescript
interface FormattedTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  totalSeconds: number;
  formatted: string;
}
```

## Utility Functions

You can also import utility functions for time conversion and formatting:

```tsx
import { convertToSeconds, convertSecondsToUnits, formatTime } from 'react-timedown';

// Convert various inputs to seconds
const seconds1 = convertToSeconds(60); // 60
const seconds2 = convertToSeconds({ minutes: 2, seconds: 30 }); // 150
const seconds3 = convertToSeconds(new Date('2025-12-31')); // seconds until date

// Convert seconds to time units
const units = convertSecondsToUnits(3665);
// { days: 0, hours: 1, minutes: 1, seconds: 5, milliseconds: 0, totalSeconds: 3665 }

// Format time
const formatted = formatTime(units, 'HH:MM:SS');
// "01:01:05"
```

## Examples

Check out the [Storybook examples](https://your-storybook-url.com) for interactive demos.

Run Storybook locally:

```bash
yarn install
yarn storybook
```

## Development

```bash
# Install dependencies
yarn install

# Run tests
yarn test

# Run tests in watch mode
yarn test:watch

# Type checking is done during build
# yarn lint

# Build the library
yarn build

# Run Storybook
yarn storybook

# Run documentation site
yarn docs:dev
```

### Git Hooks (Husky)

This project uses Husky to ensure code quality:

- **Pre-commit**: Runs tests on staged files
- **Pre-push**: Runs all tests and builds the project (which includes type checking)

These hooks run automatically, but you can also skip them if needed:

```bash
# Skip hooks (not recommended)
git commit --no-verify
git push --no-verify
```

## Deployment

This project includes configurations for deploying both documentation and Storybook:

### Storybook (GitHub Pages)

Storybook is automatically deployed to GitHub Pages on every push to main/master:

```bash
# Storybook will be available at:
# https://ooguzyuksel.github.io/react-timedown
```

**Setup:**
1. Go to repository Settings → Pages
2. Source: GitHub Actions
3. Push to main/master branch

### Documentation Site (Netlify)

The docs site is deployed to Netlify:

**Via Dashboard (Recommended):**
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub repository
4. Netlify will auto-detect settings from `netlify.toml`
5. Click "Deploy"

**Via CLI:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

Your site will be live at: `https://react-timedown.netlify.app`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes and ensure tests pass
4. Commit your changes (`git commit -m 'feat: add amazing feature'`)
   - Husky will automatically run pre-commit checks
5. Push to the branch (`git push origin feature/amazing-feature`)
   - Husky will automatically run pre-push checks (type check, tests, build)
6. Open a Pull Request

**Note**: All commits must pass type checking and tests. The CI will also run these checks on your PR.

## License

MIT © React Timedown Contributors

## Support

- 📖 [Documentation](https://github.com/ooguzyuksel/react-timedown#readme)
- 🐛 [Issue Tracker](https://github.com/ooguzyuksel/react-timedown/issues)
- 💬 [Discussions](https://github.com/ooguzyuksel/react-timedown/discussions)

---

Made with ❤️ for the React community

