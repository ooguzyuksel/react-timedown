# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-14

### Added
- Initial release of react-timedown
- Core `useTimedown` hook with full functionality
- Headless `Timedown` component with render props pattern
- Multiple ways to define initial time:
  - Simple props: `seconds`, `minutes`, `hours`, `days`
  - Duration object: `duration={{ hours: 1, minutes: 30 }}`
  - Specific date: `until={new Date()}`
- Built-in time formats (HH:MM:SS, MM:SS, DD:HH:MM:SS, HH:MM:SS:MS)
- Custom format function support
- Control methods (start, pause, resume, reset)
- Callback support (onComplete, onTick)
- TypeScript type definitions
- Comprehensive test suite
- Storybook examples
- Documentation website
- README with detailed usage examples
