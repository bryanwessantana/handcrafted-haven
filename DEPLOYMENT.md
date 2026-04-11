# Deployment Guide - Handcrafted Haven

## Overview

This document provides comprehensive instructions for deploying the Handcrafted Haven marketplace. The project uses a modern stack with automated CI/CD pipelines for continuous deployment.

---

## Prerequisites

Before deploying, ensure you have:

- **Node.js**: v22.x or higher
- **pnpm**: v10.x or higher
- **Git**: For version control
- **GitHub Account**: For repository and Actions
- **Environment Variables**: Configured for your deployment environment

---

## Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/bryanwessantana/handcrafted-haven.git
cd handcrafted-haven
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
# Database
DATABASE_URL=mysql://user:password@localhost:3306/handcrafted_haven

# OAuth
VITE_APP_ID=your_app_id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im

# JWT
JWT_SECRET=your_jwt_secret_key

# Owner Info
OWNER_OPEN_ID=your_owner_id
OWNER_NAME=Your Name

# Analytics
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your_website_id

# Forge API
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=your_api_key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
VITE_FRONTEND_FORGE_API_KEY=your_frontend_key
```

### 4. Run Development Server

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

---

## Building for Production

### 1. Build the Project

```bash
pnpm build
```

This command:
- Builds the React frontend with Vite
- Bundles the Express server with esbuild
- Optimizes assets for production
- Generates source maps for debugging

### 2. Verify the Build

```bash
pnpm check
```

This runs TypeScript type checking to ensure no compilation errors.

### 3. Run Tests

```bash
pnpm test
```

Runs all Vitest unit tests to verify functionality.

---

## Deployment Options

### Option 1: Manus Platform (Recommended)

The project is optimized for deployment on Manus platform:

1. **Create a Checkpoint**: Save the current state
   ```bash
   # Via Manus CLI or UI
   ```

2. **Click Publish**: Use the Management UI to publish
   - Navigate to Dashboard
   - Click "Publish" button
   - Confirm deployment

3. **Access Your Site**: Visit the auto-generated URL
   - Format: `https://handcrafted-haven.manus.space`

### Option 2: Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:22-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@10

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile --prod

# Copy source code
COPY . .

# Build application
RUN pnpm build

# Expose port
EXPOSE 3000

# Start application
CMD ["pnpm", "start"]
```

Build and run:

```bash
docker build -t handcrafted-haven .
docker run -p 3000:3000 -e DATABASE_URL=... handcrafted-haven
```

### Option 3: Traditional Server Deployment

#### On Ubuntu/Debian:

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm
npm install -g pnpm

# Clone and setup
git clone https://github.com/bryanwessantana/handcrafted-haven.git
cd handcrafted-haven
pnpm install

# Build
pnpm build

# Setup systemd service
sudo tee /etc/systemd/system/handcrafted-haven.service > /dev/null <<EOF
[Unit]
Description=Handcrafted Haven
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/home/www-data/handcrafted-haven
Environment="NODE_ENV=production"
Environment="DATABASE_URL=mysql://..."
ExecStart=/usr/bin/pnpm start
Restart=always

[Install]
WantedBy=multi-user.target
EOF

# Enable and start service
sudo systemctl enable handcrafted-haven
sudo systemctl start handcrafted-haven
```

---

## GitHub Actions CI/CD Pipeline

The project includes automated GitHub Actions workflows:

### Workflow Files

- `.github/workflows/deploy.yml` - Main deployment pipeline

### Workflow Steps

1. **Checkout**: Clone the repository
2. **Setup**: Install Node.js and dependencies
3. **Lint**: Run ESLint checks
4. **Type Check**: Run TypeScript compiler
5. **Tests**: Run Vitest suite
6. **Build**: Create production build
7. **Deploy**: Deploy to production (main branch only)

### Triggering Deployments

**Automatic Deployment** (main branch):
```bash
git push origin main
```

**Manual Deployment** (via GitHub UI):
1. Go to Actions tab
2. Select "Build and Deploy" workflow
3. Click "Run workflow"
4. Select branch and click "Run"

---

## Database Migrations

### Generate Migration

```bash
pnpm drizzle-kit generate
```

This creates migration SQL files in `drizzle/` directory.

### Apply Migration

```bash
pnpm drizzle-kit migrate
```

Or manually execute the SQL:

```bash
mysql -u user -p database_name < drizzle/0001_migration.sql
```

---

## Environment Variables for Production

| Variable | Purpose | Example |
|----------|---------|---------|
| `DATABASE_URL` | MySQL connection string | `mysql://user:pass@host:3306/db` |
| `NODE_ENV` | Environment mode | `production` |
| `JWT_SECRET` | Session signing key | `your-secret-key-here` |
| `VITE_APP_ID` | OAuth app ID | `app-id-from-manus` |
| `OWNER_OPEN_ID` | Owner identifier | `owner-id` |

---

## Monitoring and Logs

### Application Logs

```bash
# View recent logs
journalctl -u handcrafted-haven -n 50 -f

# Or check PM2 logs
pm2 logs handcrafted-haven
```

### Health Check

```bash
curl https://handcrafted-haven.manus.space/health
```

### Performance Monitoring

- Use Manus Dashboard for analytics
- Monitor database query performance
- Track API response times

---

## Rollback Procedures

### Rollback via Manus UI

1. Go to Dashboard → Version History
2. Select previous checkpoint
3. Click "Rollback"
4. Confirm action

### Rollback via Git

```bash
# View commit history
git log --oneline -10

# Revert to specific commit
git revert <commit-hash>
git push origin main
```

---

## Security Considerations

1. **Environment Variables**: Never commit `.env` files
2. **Database**: Use strong passwords and restrict access
3. **HTTPS**: Always use HTTPS in production
4. **CORS**: Configure appropriate CORS policies
5. **Rate Limiting**: Implement rate limiting on APIs
6. **Input Validation**: Validate all user inputs
7. **SQL Injection**: Use parameterized queries (Drizzle ORM)

---

## Performance Optimization

### Frontend Optimization

- Code splitting via Vite
- Image optimization
- CSS minification
- JavaScript bundling

### Backend Optimization

- Database indexing
- Query optimization
- Caching strategies
- Connection pooling

### Deployment Optimization

- Enable gzip compression
- Use CDN for static assets
- Implement caching headers
- Monitor bundle size

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules .pnpm-store dist
pnpm install
pnpm build
```

### Database Connection Error

```bash
# Verify connection string
echo $DATABASE_URL

# Test connection
mysql -u user -p -h host -e "SELECT 1"
```

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### TypeScript Errors

```bash
# Run type check
pnpm check

# Fix errors
pnpm format
```

---

## Support and Resources

- **Documentation**: See README.md
- **Issues**: GitHub Issues
- **Accessibility**: See ACCESSIBILITY_AUDIT.md
- **Contributing**: See CONTRIBUTING.md (if available)

---

## Deployment Checklist

Before deploying to production:

- [ ] All tests passing (`pnpm test`)
- [ ] No TypeScript errors (`pnpm check`)
- [ ] Build successful (`pnpm build`)
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] SSL certificate valid
- [ ] Backup created
- [ ] Monitoring configured
- [ ] Team notified

---

**Last Updated**: April 2026
**Maintainer**: Manus AI Agent
**Status**: Production Ready ✅
