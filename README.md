# ModernJS, Module Federation with SSR Stream

This repository demonstrates a Module Federation setup with Server-Side Rendering (SSR) in stream mode using Modern.js framework by ByteDance. The project uses RSPack as the bundler for both applications.

## Nginx Configuration (Production Setup)

The project includes an Nginx configuration that serves as a reverse proxy to handle CORS issues in production. This is necessary because Module Federation requires cross-origin requests between the host and remote applications.

### Docker/Podman Setup

You can run the Nginx proxy using either Docker or Podman:

#### Docker

```bash
docker run -p 8080:80 -e HOST_ADDR=host.docker.internal react-proxy
```

#### Podman

```bash
podman run -p 8080:80 -e HOST_ADDR=host.containers.internal react-proxy
```

After starting the proxy, you can access:

- Host application: `http://localhost:8080`
- Remote application: `http://localhost:8080/remote/`

### Important Notes

- **DO NOT** run the Nginx proxy when using `yarn dev` in development mode
- The Nginx configuration is specifically for production use to handle CORS issues
- The proxy routes:
  - Host application: `http://localhost:3000`
  - Remote application: `http://localhost:3001/remote/`
- In development mode, the remote application is accessed directly at `http://localhost:3001/remote/`
- In production mode, the remote application is accessed through the proxy at `http://localhost:8080/remote/`

## Overview

The project consists of two applications:

- **Host**: The main application that consumes the remote module (runs on port 3000)
- **Remote**: The application that exposes components/modules to be consumed by the host (runs on port 3001 with baseUrl `/remote`)

Both applications are configured with:

- SSR Stream mode
- RSPack bundler
- React 18.3.1 as a shared dependency
- Module Federation for component sharing

## Current Issue

There is currently a hydration mismatch between server and client rendering when running in certain environments:

**Problem Description:**
When both applications are run in development mode (`yarn dev`), the SSR works correctly. However, when building and serving the remote while running the host in development mode, hydration errors occur and the application falls back to client-side rendering only.

The error is:

```
Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client.
```

## Setup and Commands

### Remote Application

#### Development Mode

```bash
yarn dev
```

Access at: `http://localhost:3001/remote/`

#### Production Mode

```bash
yarn build && yarn serve
```

Access at: `http://localhost:8080/remote/` (through Nginx proxy)

### Host Application

#### Development Mode

```bash
yarn dev
```

Access at: `http://localhost:3000`

#### Combined Command (Development + Serve)

```bash
yarn dev && yarn serve
```

## Expected Behavior

The expected behavior is for the remote modules to load server-side when consumed by the host, maintaining SSR functionality regardless of whether the remote is running in development or production mode.

## Actual Behavior

Content is only being rendered on the client side when the remote is built and served, which is not the expected behavior for SSR Stream mode.
