# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability, please send an email to the maintainer at [GitHub Security Advisories](https://github.com/ooguzyuksel/react-timedown/security/advisories/new).

**Please do not report security vulnerabilities through public GitHub issues.**

## Security Best Practices

### For Contributors

1. **Never commit sensitive data**:
   - API keys, tokens, or passwords
   - Personal access tokens
   - Private keys or certificates

2. **Check before committing**:
   ```bash
   git status
   git diff --cached
   ```

3. **Use environment variables**:
   - Store secrets in `.env` files (already in .gitignore)
   - Use GitHub Secrets for CI/CD

### For Users

1. **NPM Token Management**:
   - Use **Automation tokens** for CI/CD (not Classic tokens)
   - Rotate tokens regularly
   - Use minimum required permissions

2. **GitHub Secrets**:
   - Store `NPM_TOKEN` in repository secrets
   - Never expose tokens in logs or outputs

## Protected Files

The following files are protected and should NEVER contain secrets:

- `.npmrc` - Only contains registry URLs
- `RELEASE.md` - Only contains instructions
- All workflow files - Use `${{ secrets.* }}` only

## Ignored Files (Sensitive Data)

These files are automatically ignored by git:

```
.env*
node_modules/
*.log
coverage/
```

## Security Updates

This project follows semantic versioning. Security patches are released as:
- **Critical**: Patch version (1.0.X)
- **Important**: Minor version (1.X.0)

Subscribe to [GitHub Security Advisories](https://github.com/ooguzyuksel/react-timedown/security/advisories) for updates.

