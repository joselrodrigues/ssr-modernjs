# ModernJS, Module Federation with SSR Stream

This repository demonstrates a Module Federation setup with Server-Side Rendering (SSR) in stream mode using Modern.js framework by ByteDance.

## Overview

The project consists of two applications that work together using Module Federation:

- **Host** (Port 3000): The main application that consumes remote modules
- **Remote** (Port 3052): The application that exposes components/modules to be consumed by the host

Module Federation allows these applications to share code at runtime, enabling a micro-frontend architecture where multiple independently deployed applications can work together seamlessly.

## Prerequisites

- Node.js >= 16.18.1
- Yarn package manager

## Installation

Install dependencies for both applications:

```bash
# Install dependencies for host
cd host && yarn install

# Install dependencies for remote
cd ../remote && yarn install
```

## Development

Run both applications in development mode:

```bash
# From host directory
cd host && yarn dev

# From remote directory (in another terminal)
cd remote && yarn dev
```

## Deployment

### Deploy Both Applications Simultaneously

Use the Makefile to deploy both host and remote applications at the same time:

```bash
make deploy
```

This will:
1. Build and deploy the **remote** application (running on port 3052)
2. Build and deploy the **host** application (running on port 3000)
3. Both processes run in parallel for faster deployment

### Deploy Individual Applications

Deploy only the host:

```bash
make deploy-host
```

Deploy only the remote:

```bash
make deploy-remote
```

### Manual Deployment

You can also deploy each application manually:

```bash
# Deploy remote
cd remote && yarn deploy

# Deploy host
cd host && yarn deploy
```

## Build

Build the applications for production:

```bash
yarn run build
```

## Project Structure

```
.
├── host/          # Main application (consumer)
├── remote/        # Remote module provider
├── Makefile       # Deployment automation
└── README.md      # This file
```
