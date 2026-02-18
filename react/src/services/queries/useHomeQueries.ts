import { queryOptions, useQuery } from '@tanstack/react-query';
import type { DashboardStats } from '../../mocks/data/home';

export const homeQueries = {
  all: () => ['home'] as const,
  dashboard: () =>
    queryOptions({
      queryKey: [...homeQueries.all(), 'dashboard'] as const,
      queryFn: async (): Promise<DashboardStats> => {
        const res = await fetch('/api/dashboard');
        if (!res.ok) throw new Error('Failed to fetch dashboard');
        return res.json();
      },
    }),
};

export function useDashboard() {
  return useQuery(homeQueries.dashboard());
}
