# KEV-UI Sandbox

This project tests the integration of all `@kev-ui` packages installed from a local Verdaccio registry.

## Prerequisites

1. **Verdaccio running** on `http://localhost:14385`
2. **All @kev-ui packages published** to Verdaccio
3. **Node.js** and **pnpm** installed

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Run Development Server

```bash
pnpm dev
```

The app will run on `http://localhost:14390`

### 3. Run Tests

```bash
# Run all tests
pnpm test

# Watch mode
pnpm test:watch
```

## Project Structure

```
src/
├── components/
│   └── Layout.tsx          # Main layout with sidebar and header
├── pages/
│   ├── Home.tsx            # Landing page
│   ├── js-utils/
│   │   ├── generateId/
│   │   │   ├── index.tsx   # Example page
│   │   │   └── __tests__/
│   │   │       └── index.test.tsx
│   │   └── isNil/
│   │       ├── index.tsx
│   │       └── __tests__/
│   ├── button/
│   │   └── basic/
│   │       ├── index.tsx
│   │       └── __tests__/
│   └── typography/
│       └── basic/
│           ├── index.tsx
│           └── __tests__/
├── App.tsx                 # Main app with routing
├── routes.tsx              # Route configuration
└── i18n.ts                # i18n setup
```

## Adding New Examples

### Step 1: Create Folder Structure

For a new component or function example:

```bash
mkdir -p src/pages/{package-name}/{example-name}/__tests__
```

Example:
```bash
mkdir -p src/pages/form-utilities/createOption/__tests__
```

### Step 2: Create Example Page

Create `src/pages/{package-name}/{example-name}/index.tsx`:

```tsx
export default function ExamplePage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Example Title</h1>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Import Methods</h2>
        {/* Show different import methods */}
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Examples</h2>
        {/* Show working examples */}
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">✓ Integration Status</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Package installed from Verdaccio</li>
          <li>Imports work correctly</li>
          <li>TypeScript types available</li>
        </ul>
      </div>
    </div>
  );
}
```

### Step 3: Create Tests

Create `src/pages/{package-name}/{example-name}/__tests__/index.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ExamplePage from '../index';

describe('Example Integration', () => {
  it('renders the page', () => {
    render(
      <BrowserRouter>
        <ExamplePage />
      </BrowserRouter>
    );
    expect(screen.getByText('Example Title')).toBeInTheDocument();
  });

  // Add more tests for the actual functionality
});
```

### Step 4: Add Route

Update `src/routes.tsx`:

```tsx
export const routes = [
  // ... existing routes
  { path: '/package-name/example-name', label: 'Example Label', package: 'package-name' },
];
```

### Step 5: Add to App Router

Update `src/App.tsx`:

```tsx
import ExamplePage from './pages/package-name/example-name';

// In the Routes:
<Route path="/package-name/example-name" element={<ExamplePage />} />
```

## Import Method Testing

Each example should demonstrate at least 2-3 import methods:

### 1. Subpath Import (Tree-shaking)
```tsx
import { generateId } from '@kev-ui/js-utils/generateId';
```

### 2. Named Import
```tsx
import { generateId } from '@kev-ui/js-utils';
```

### 3. Namespace Import
```tsx
import * as JsUtils from '@kev-ui/js-utils';
const id = JsUtils.generateId();
```

## Testing Guidelines

### What to Test

1. **Page renders** - Basic render test
2. **Import methods work** - Test actual imports from the package
3. **TypeScript types** - Verify types are available (implicit through TypeScript compilation)
4. **Functionality** - Test core functionality works as expected

### Example Test Pattern

```tsx
describe('Package Integration', () => {
  // Test 1: Page renders
  it('renders the page', () => {
    render(<BrowserRouter><Page /></BrowserRouter>);
    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  // Test 2: Import works
  it('imports function correctly', () => {
    const result = importedFunction();
    expect(result).toBeDefined();
  });

  // Test 3: Functionality
  it('executes correctly', () => {
    const result = importedFunction('test');
    expect(result).toBe('expected');
  });
});
```

## Verdaccio Setup

### Publishing Packages to Verdaccio

From the KEV-UI monorepo:

```bash
# Build all packages
pnpm build

# Publish to Verdaccio
cd packages/design-system && pnpm publish --registry http://localhost:14385 --no-git-checks
cd packages/js-utils && pnpm publish --registry http://localhost:14385 --no-git-checks
# ... repeat for all packages
```

### Installing from Verdaccio

This project has `.npmrc` configured to use Verdaccio for `@kev-ui` scope:

```
@kev-ui:registry=http://localhost:14385
```

## Language Switching

Use the language buttons in the header to test i18n functionality:
- EN-US
- EN-CA
- FR-CA

## Common Issues

### Package not found

**Problem**: `404 Not Found - GET http://localhost:14385/@kev-ui/package-name`

**Solution**:
1. Ensure Verdaccio is running
2. Verify package is published: Visit `http://localhost:14385` in browser
3. Re-publish the package if needed

### TypeScript errors

**Problem**: Cannot find module '@kev-ui/package-name'

**Solution**:
1. Delete `node_modules` and `pnpm-lock.yaml`
2. Run `pnpm install` again
3. Restart TypeScript server in your IDE

### Build errors

**Problem**: Vite build fails with missing dependencies

**Solution**:
1. Check that all peer dependencies are installed
2. Verify package exports in package.json
3. Check that workspace dependencies resolved correctly

## CSS Setup

The project imports KEV-UI styles in `src/index.css`:

```css
@import '@kev-ui/design-system/fonts.css';
@import "tailwindcss";
@import '@kev-ui/tw-theme/theme.css';

@source "../node_modules/@kev-ui/button/dist";
@source "../node_modules/@kev-ui/typography/dist";
```

**Important:** Fonts must be imported BEFORE tailwindcss due to CSS `@import` rules.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run all tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm lint` - Lint code
- `pnpm preview` - Preview production build

## Documentation

See `docs/` folder for additional documentation on specific topics.
