# React Starter

This is a starter setup for a React project running with Webpack and Babel.

## 🧐 What's inside?

- React 16
- Webpack 4
- Babel 7
- Hot Module Replacement
- Development and production builds
- Common and environment specific Webpack configuration
- Environment variables
- Source maps
- Polyfills for browser support (promises and symbols)
- ESLint (airbnb with hooks support)
- Prettier

## 🚀 Quick start

1. Download the project and cd into it:

   ```bash
   git clone git@github.com:junagao/react-starter.git
   cd react-starter
   ```

2. Setup environment variables:

   ```bash
   touch .env.development && touch .env.production
   ```

   .env.development: `NODE_ENV=development`

   .env.production: `NODE_ENV=production`

3. Install dependencies and run the application:

   ```bash
   yarn
   yarn dev
   ```

4. Open your browser and navigate to:

   http://localhost:8080/
