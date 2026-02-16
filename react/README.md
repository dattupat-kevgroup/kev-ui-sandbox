# KEV-UI Sandbox

A development sandbox for testing `@kev-ui` component library integration. This project simulates how a real consumer application installs, configures, and uses KEV-UI packages.

## Prerequisites

- **Node.js** (v20+) and **pnpm** installed
- For Verdaccio mode: Verdaccio running on `http://localhost:14385`

## Installation

### Option A: From npm Registry (Production)

When `@kev-ui` packages are published to npm, remove (or comment out) the `.npmrc` override and install normally:

```bash
# .npmrc — remove or comment out this line:
# @kev-ui:registry=http://localhost:14385

pnpm install
```

### Option B: From Verdaccio (Development)

Verdaccio is a lightweight local npm registry used during development to test packages before publishing to npm. It lets you `pnpm publish` locally and `pnpm install` exactly as a real consumer would — without pushing to npm.

**1. Start Verdaccio** (from any terminal):

```bash
verdaccio --listen 14385
```

**2. Ensure `.npmrc` points to Verdaccio:**

```
@kev-ui:registry=http://localhost:14385
```

**3. Register a Verdaccio user** (first time only, or after resetting storage):

```bash
curl -X PUT -H "Content-Type: application/json" \
  -d '{"name":"test","password":"test123"}' \
  http://localhost:14385/-/user/org.couchdb.user:test
```

Copy the `token` from the response and set it:

```bash
npm set //localhost:14385/:_authToken "<token-from-response>"
```

**4. Build and publish from KEV-UI monorepo:**

```bash
# From the KEV-UI monorepo root
pnpm build
pnpm -r publish --registry http://localhost:14385 --no-git-checks
```

> **Important:** Always use `pnpm -r publish`, never `npm publish`. pnpm resolves `workspace:*` dependencies to actual version numbers — npm does not, which causes broken installs.

**5. Install in this sandbox:**

```bash
pnpm install
```

**Switching back to npm:** When packages are available on npm, simply remove the `@kev-ui:registry` line from `.npmrc` and run `pnpm install` again. No other changes needed.

### Starting Fresh (Full Reset)

If packages are broken or you need a clean slate:

```bash
# 1. Stop Verdaccio

# 2. Wipe Verdaccio storage and credentials
rm -rf ~/.config/verdaccio/storage
rm -f ~/.config/verdaccio/htpasswd

# 3. Wipe sandbox node_modules and lockfile
rm -rf node_modules pnpm-lock.yaml

# 4. Start Verdaccio again
verdaccio --listen 14385

# 5. Re-register user (step 3 above)

# 6. Build and publish from KEV-UI monorepo (step 4 above)

# 7. Install
pnpm install
```

## Running

```bash
# Development server (http://localhost:14390)
pnpm dev

# Production build
pnpm build

# Tests
pnpm test

# Tests in watch mode
pnpm test:watch
```

## i18n / Translations

KEV-UI uses [i18next](https://www.i18next.com/) for translations. Supported locales: `en-CA`, `en-US`, `fr-CA`.

### Setup (src/i18n.ts)

```typescript
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { registerFormUtilitiesTranslations } from '@kev-ui/form-utilities/locales';
import { registerFormValidationTranslations } from '@kev-ui/form-validation/locales';

i18next.use(initReactI18next).init({
  lng: 'en-CA',
  fallbackLng: 'en-CA',
  supportedLngs: ['en-CA', 'en-US', 'fr-CA'],
  interpolation: { escapeValue: false },
  resources: {},
});

// Only utility packages need manual registration.
// Component packages auto-register on first render.
registerFormUtilitiesTranslations(i18next);
registerFormValidationTranslations(i18next);

export default i18next;
```

### How It Works

- **Component packages** (chip, drawer, dropdown-menu, form-field, scaffolding, table) **auto-register** their translations the first time a component renders. No manual setup needed.
- **Utility packages** (form-utilities, form-validation) have no React components, so they must be registered manually in your `i18n.ts` as shown above.
- **Other packages** (avatar, backdrop, badge, button, date-picker, form, list, modal, popover, typography) have locale files available but their components don't use translations internally. Register them manually only if you need their translation keys in your own code.

### Overriding Translations

To replace specific translation keys with your own text, use `addResourceBundle` with `overwrite=true`:

```typescript
// In your i18n.ts — BEFORE or AFTER component renders, both work.
i18next.addResourceBundle('en-CA', '@kev-ui/chip', {
  chip: { removeLabel: 'My Custom Remove {{label}}' }
}, true, true); // deep=true, overwrite=true
```

- `deep=true` — merges at all nesting levels (only the keys you specify are replaced)
- `overwrite=true` — your values take priority over the defaults

**How to find available keys:** Look at the JSON files in each package's `locales/` folder (e.g., `@kev-ui/chip/locales/en-CA/chip.json`).

**Interpolation:** Use `{{variable}}` syntax in your overrides. The component passes the same variables as the original translation. For example, the chip `removeLabel` key receives `{{label}}` — the chip's text content.

## CSS Setup

Import KEV-UI styles in `src/index.css`:

```css
@import '@kev-ui/design-system/styles.css';

@source "../node_modules/@kev-ui/button/dist";
@source "../node_modules/@kev-ui/typography/dist";
/* Add @source for each component package you use */
```

`@kev-ui/design-system/styles.css` includes Google Fonts (Asap + Inter), Tailwind CSS, and all design tokens. No separate font imports needed.

## Project Structure

```
src/
├── components/
│   └── Layout.tsx              # Sidebar layout with navigation
├── pages/
│   ├── Home.tsx                # Landing page
│   ├── button/                 # Button demos
│   ├── chip/                   # Chip demos (incl. deletable)
│   ├── drawer/                 # Drawer demos
│   ├── dropdown-menu/          # DropdownMenu demos
│   ├── form/                   # Form, TextField, Combobox, Validation demos
│   ├── icons/                  # Icons demo
│   ├── js-utils/               # JS utility demos
│   ├── list/                   # List demos
│   └── typography/             # Typography demos
├── App.tsx                     # Router setup
├── routes.tsx                  # Route definitions
├── i18n.ts                     # i18n configuration
└── main.tsx                    # Entry point
```

## Adding New Examples

1. Create page file at `src/pages/{package-name}/index.tsx`
2. Add route to `src/routes.tsx`
3. Add `<Route>` to `src/App.tsx`
4. Optionally add tests at `src/pages/{package-name}/__tests__/index.test.tsx`

## Common Issues

### Package not found (404)

Verdaccio is not running or the package hasn't been published. Check:
1. Verdaccio is running: `http://localhost:14385`
2. Package is published: browse Verdaccio web UI
3. `.npmrc` has `@kev-ui:registry=http://localhost:14385`

### Cannot find module '@kev-ui/...'

1. Delete `node_modules` and `pnpm-lock.yaml`
2. Run `pnpm install`
3. Restart your IDE's TypeScript server

### Translations showing raw keys

If you see keys like `chip.removeLabel` instead of text:
1. Ensure `i18n.ts` is imported before any component renders (it's imported in `main.tsx`)
2. For utility packages, verify manual `registerXxxTranslations()` calls exist in `i18n.ts`
3. Check the browser console for i18next warnings

**Last Updated:** February 16, 2026
