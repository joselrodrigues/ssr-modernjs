# ModernJS, Module Federation with SSR Stream

This repository demonstrates a Module Federation setup with Server-Side Rendering (SSR) in stream mode using Modern.js framework by ByteDance.

## Overview

The project consists of two applications:
- **Host**: The main application that consumes the remote module
- **Remote**: The application that exposes components/modules to be consumed by the host

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

#### Production Mode
```bash
IS_LOCAL=true yarn build && yarn serve
```

### Host Application

#### Development Mode
```bash
yarn dev
```

#### Combined Command (Development + Serve)
```bash
yarn dev && yarn serve
```

## Expected Behavior

The expected behavior is for the remote modules to load server-side when consumed by the host, maintaining SSR functionality regardless of whether the remote is running in development or production mode.

## Actual Behavior

Content is only being rendered on the client side when the remote is built and served, which is not the expected behavior for SSR Stream mode.
