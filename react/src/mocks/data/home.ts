export interface DashboardStats {
  id: string;
  totalPackages: number;
  totalComponents: number;
  totalUtilities: number;
  registryUrl: string;
  lastPublished: string;
  packages: PackageSummary[];
}

export interface PackageSummary {
  id: string;
  name: string;
  version: string;
  status: 'passing' | 'warning' | 'failing';
}

export const seedDashboardStats: DashboardStats = {
  id: 'dashboard',
  totalPackages: 23,
  totalComponents: 15,
  totalUtilities: 2,
  registryUrl: 'http://localhost:14385',
  lastPublished: '2026-02-16T10:00:00Z',
  packages: [
    { id: 'button', name: '@kev-ui/button', version: '0.0.1', status: 'passing' },
    { id: 'typography', name: '@kev-ui/typography', version: '0.0.1', status: 'passing' },
    { id: 'icons', name: '@kev-ui/icons', version: '0.0.1', status: 'passing' },
    { id: 'form', name: '@kev-ui/form', version: '0.0.1', status: 'passing' },
    { id: 'form-field', name: '@kev-ui/form-field', version: '0.0.1', status: 'passing' },
    { id: 'chip', name: '@kev-ui/chip', version: '0.0.1', status: 'passing' },
    { id: 'drawer', name: '@kev-ui/drawer', version: '0.0.1', status: 'passing' },
    { id: 'list', name: '@kev-ui/list', version: '0.0.1', status: 'passing' },
    { id: 'dropdown-menu', name: '@kev-ui/dropdown-menu', version: '0.0.1', status: 'passing' },
    { id: 'scaffolding', name: '@kev-ui/scaffolding', version: '0.0.1', status: 'passing' },
    { id: 'js-utils', name: '@kev-ui/js-utils', version: '0.0.1', status: 'passing' },
  ],
};
