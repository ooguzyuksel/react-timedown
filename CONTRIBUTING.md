# Contributing to React Timedown

Thank you for your interest in contributing to React Timedown! We welcome contributions from everyone.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/ooguzyuksel/react-timedown.git`
3. Install dependencies: `yarn install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Development Workflow

### Available Commands

```bash
# Install dependencies
yarn install

# Run tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:ci

# Build the library
yarn build

# Run Storybook
yarn storybook
# Opens at http://localhost:6006

# Build Storybook
yarn build-storybook

# Run documentation site
yarn docs:dev
# Opens at http://localhost:5173

# Build documentation site
yarn docs:build
```

### Git Hooks (Husky)

This project uses Husky to ensure code quality before commits and pushes:

#### Pre-commit Hook
- Runs lint-staged on staged files
- Ensures code style consistency

#### Pre-push Hook
- Runs all tests (`yarn test`)
- Builds the project (`yarn build`) which includes type checking
- Ensures nothing is broken before pushing

#### Skipping Hooks

In rare cases where you need to skip hooks (not recommended):

```bash
# Skip pre-commit hook
git commit --no-verify

# Skip pre-push hook
git push --no-verify
```

**Note:** CI will still run all checks on your PR, so skipping hooks locally may result in CI failures.

## Code Style

- We use TypeScript for type safety
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation when necessary

## Commit Message Format

We follow a simple commit message format:

```
type: description

Examples:
feat: add new time format option
fix: resolve pause/resume issue
docs: update README examples
test: add tests for time converter
refactor: simplify timedown logic
```

Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `test`: Adding or updating tests
- `refactor`: Code refactoring
- `chore`: Maintenance tasks

## Pull Request Process

1. **Make your changes**
   - Write clear, concise code
   - Add tests for new features or bug fixes
   - Ensure all existing tests still pass

2. **Update documentation** (if applicable)
   - Update README.md for API changes
   - Update CHANGELOG.md with your changes
   - Add Storybook examples for new features

3. **Test your changes**
   ```bash
   yarn test
   yarn build
   ```

4. **Commit your changes**
   - Follow the commit message format (see below)
   - Husky will run pre-commit checks automatically

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
   - Husky will run pre-push checks (tests + build)

6. **Create Pull Request**
   - Provide a clear description of changes
   - Reference any related issues
   - Ensure CI checks pass

**Note:** All PRs must pass CI checks including tests, type checking, and build verification.

## Reporting Issues

When reporting issues, please include:

- A clear description of the problem
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Browser/environment information
- Code examples if applicable

## Feature Requests

We love new ideas! When suggesting a feature:

- Explain the use case
- Describe the proposed solution
- Consider alternative solutions
- Be open to discussion

## Questions?

Feel free to open an issue for any questions or discussions.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

