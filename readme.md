# TypeScript Package Template Generator 🚀

![npm version](https://img.shields.io/npm/v/@sargonpiraev/create-npm-package)
![npm downloads](https://img.shields.io/npm/dw/@sargonpiraev/create-npm-package)
![license](https://img.shields.io/github/license/sargonpiraev/create-npm-package)
![pipeline status](https://gitlab.com/sargonpiraev/create-npm-package/badges/main/pipeline.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)

A CLI tool that generates production-ready TypeScript NPM packages with all modern tooling configured in seconds.

## Features

- 🔥 **Complete TypeScript Setup**: Modern configuration with ES modules support
- ⚡ **Lightning Fast**: From idea to coding in 30 seconds
- 🛠️ **Full Toolchain**: ESLint, Prettier, Jest, Husky, and semantic release included
- 🔄 **CI/CD Ready**: GitLab pipeline configured and ready to deploy
- 📦 **NPM Publishing**: Semantic release automation for versioning and publishing
- 🎯 **Consistent Structure**: Same proven patterns across all your packages
- 🔧 **Zero Configuration**: Everything works out of the box

Transform 3 hours of setup into 30 seconds of automation.

## Quick Start

```bash
# Create a new TypeScript package
npx @sargonpiraev/create-npm-package my-awesome-package

# Navigate to your project
cd my-awesome-package

# Install dependencies
npm install

# Start developing
npm run dev

# Build for production
npm run build
```

## What You Get

### Core Technologies

- **TypeScript** with modern ESM configuration
- **ESLint** with latest TypeScript rules
- **Prettier** for consistent code formatting
- **Jest** testing framework with coverage

### Development Workflow

- **Husky** Git hooks for quality control
- **Commitlint** enforcing conventional commits
- **Semantic Release** for automated versioning
- **GitLab CI/CD** pipeline ready to deploy

### Project Structure

```
my-awesome-package/
├── src/
│   └── index.ts          # Your code starts here
├── build/                # Compiled output
├── package.json          # Configured with all scripts
├── tsconfig.json         # Modern TypeScript config
├── eslint.config.ts      # Latest ESLint setup
├── jest.config.ts        # Testing configuration
├── .gitlab-ci.yml        # CI/CD pipeline
├── .husky/               # Git hooks
├── .prettierrc.json      # Code formatting
└── README.md             # Professional documentation
```

## Available Scripts

```bash
# Development
npm run dev          # Watch mode with tsx
npm run build        # Compile TypeScript

# Quality Control
npm run typecheck    # Type checking without output
npm run test         # Run Jest tests with coverage
npm run lint         # ESLint checking
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check formatting

# Maintenance
npm run audit        # Security audit
```

## Requirements

- Node.js >= v18.0.0
- npm >= 8.0.0

## How It Works

The generator follows a proven template approach:

1. **Template Files**: Configuration files are included in the NPM package
2. **Smart Copying**: Files are copied with conflict detection and warnings
3. **Dynamic Generation**: `package.json` is generated with your project name
4. **Immediate Usage**: Everything is ready to use without additional setup

## Real-World Usage

This template has been successfully used to create:

- **habitify-api-client**: TypeScript client for Habitify API
- **habitify-mcp-server**: MCP server for Habitify API

Each package generated saves 2-3 hours of initial setup time and ensures consistent tooling across all projects.

## Roadmap

**Coming Soon** 🚀

- [ ] **Interactive CLI**: Choose between GitHub vs GitLab, different testing frameworks
- [ ] **Multiple Templates**: React library, Node.js server, CLI tool variants
- [ ] **Framework Options**: Built-in support for popular frameworks
- [ ] **Custom Configurations**: Allow template customization and user presets
- [ ] **GitHub Actions**: Alternative to GitLab CI/CD pipeline
- [ ] **Plugin System**: Extensible template system for community contributions

**Completed** ✅

- [x] **TypeScript Foundation**: Complete modern TypeScript setup
- [x] **Quality Tooling**: ESLint, Prettier, Jest, and Git hooks
- [x] **Automation**: Semantic release and CI/CD integration
- [x] **NPM Publishing**: Production-ready package configuration

**Community Requests** 💭

Have an idea for the TypeScript Package Generator? [Open an issue](https://gitlab.com/sargonpiraev/create-npm-package/issues) or contribute to our roadmap!

## Support This Project

Hi! I'm Sargon, a software engineer passionate about developer tools and automation. I create open-source tools to help developers focus on building rather than configuring.

Your support helps me continue developing and maintaining these tools, and motivates me to create new productivity improvements for the developer community! 🚀

[![Support on Boosty](https://img.shields.io/badge/Support-Boosty-orange?logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)](https://boosty.to/sargonpiraev)

## Connect with Author

- 🌐 Visit [sargonpiraev.com](https://sargonpiraev.com)
- 📧 Email: [sargonpiraev@gmail.com](mailto:sargonpiraev@gmail.com)
- 💬 Join [Discord](https://discord.gg/ZsWGxRGj)

## Inspired By

- [create-t3-app](https://create.t3.gg/) - The T3 Stack application generator
- [Peter Mekhaeil's NPX tutorial](https://www.petermekhaeil.com/how-to-build-an-npx-starter-template/) - Template creation guidance
