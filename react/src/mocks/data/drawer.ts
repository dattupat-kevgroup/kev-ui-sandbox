export interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  type: 'info' | 'warning' | 'error' | 'success';
}

export const seedNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Update Available',
    message: 'KEV-UI v0.2.0 has been released with new components.',
    read: false,
    createdAt: '2026-02-16T09:00:00Z',
    type: 'info',
  },
  {
    id: '2',
    title: 'Build Succeeded',
    message: 'All 23 packages built successfully.',
    read: false,
    createdAt: '2026-02-16T08:45:00Z',
    type: 'success',
  },
  {
    id: '3',
    title: 'Deprecation Warning',
    message: 'The `isLoading` prop will be removed in v1.0. Use `isPending` instead.',
    read: false,
    createdAt: '2026-02-15T16:00:00Z',
    type: 'warning',
  },
  {
    id: '4',
    title: 'Test Failure',
    message: 'Scaffolding snapshot tests need updating after header refactor.',
    read: true,
    createdAt: '2026-02-14T11:30:00Z',
    type: 'error',
  },
  {
    id: '5',
    title: 'Welcome',
    message: 'Welcome to the KEV-UI Sandbox! Explore components using the sidebar.',
    read: true,
    createdAt: '2026-02-10T09:00:00Z',
    type: 'info',
  },
];
