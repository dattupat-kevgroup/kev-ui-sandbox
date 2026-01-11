'use client';

import { AppLink } from '@kev-ui/app-link';

const routes = [
  { path: '/js-utils/generateId', label: 'generateId', package: 'js-utils' },
  { path: '/js-utils/isNil', label: 'isNil', package: 'js-utils' },
  { path: '/button/basic', label: 'Button Basic', package: 'button' },
  { path: '/typography/basic', label: 'Typography Basic', package: 'typography' },
  { path: '/form-field/basic', label: 'TextField Basic', package: 'form-field' },
];

const packages = [
  { name: 'js-utils', label: 'JS Utils' },
  { name: 'button', label: 'Button' },
  { name: 'typography', label: 'Typography' },
  { name: 'design-system', label: 'Design System' },
  { name: 'form-field', label: 'Form Field' },
];

export function Sidebar() {
  return (
    <aside className="w-64 p-4 overflow-y-auto bg-blue-800 text-white min-h-screen">
      <h2 className="text-xl font-bold mb-4">
        <AppLink href="/" className="text-white hover:text-blue-200">
          KEV-UI Sandbox (Next.js)
        </AppLink>
      </h2>
      <nav>
        {packages.map((pkg) => (
          <div key={pkg.name} className="mb-4">
            <h3 className="font-semibold mb-2 text-blue-200">{pkg.label}</h3>
            <ul className="space-y-1 ml-2">
              {routes
                .filter((r) => r.package === pkg.name)
                .map((route) => (
                  <li key={route.path}>
                    <AppLink
                      href={route.path}
                      className="block px-2 py-1 rounded text-sm text-white hover:bg-blue-700"
                    >
                      {route.label}
                    </AppLink>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
