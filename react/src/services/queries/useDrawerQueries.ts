import { queryOptions, useQuery } from '@tanstack/react-query';
import type { Notification } from '../../mocks/data/drawer';

export const drawerQueries = {
  all: () => ['notifications'] as const,
  list: () =>
    queryOptions({
      queryKey: [...drawerQueries.all(), 'list'] as const,
      queryFn: async (): Promise<Notification[]> => {
        const res = await fetch('/api/notifications');
        if (!res.ok) throw new Error('Failed to fetch notifications');
        return res.json();
      },
    }),
};

export function useNotifications() {
  return useQuery(drawerQueries.list());
}
